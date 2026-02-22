import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/data/about';
import ContactTemplate from '@/emails/ContactTemplate';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests

// In-memory store for rate limiting (Note: resets on server restart/re-deploy)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_DURATION;
    
    const timestamps = rateLimitMap.get(ip) || [];
    const validTimestamps = timestamps.filter(t => t > windowStart);
    
    if (validTimestamps.length >= RATE_LIMIT_MAX) {
        return true;
    }
    
    validTimestamps.push(now);
    rateLimitMap.set(ip, validTimestamps);
    return false;
}

export async function POST(request: Request) {
    try {
        // Enforce Strict Cross-Origin Resource Sharing (CORS) check
        // Only allow POST requests originating from our domain in production.
        const origin = request.headers.get('origin');
        const isDevelopment = process.env.NODE_ENV === 'development';
        // Allow localhost for dev, but strictly enforce spacebar-labs.com for prod
        const allowedOrigins = [
            'https://spacebar-labs.com', 
            'https://www.spacebar-labs.com', 
            'http://localhost:3000',
            'http://localhost:3078' // Docker binding
        ];
        
        if (!isDevelopment && origin && !allowedOrigins.includes(origin)) {
            console.warn(`[SECURITY] Blocked Cross-Origin request from: ${origin}`);
            return NextResponse.json(
                { error: 'Unauthorized Origin. Cross-Site Request Forgery (CSRF) protection engaged.' },
                { status: 403 }
            );
        }

        // Advanced Rate Limiting Source IP check
        // We prioritize 'cf-connecting-ip' because standard 'x-forwarded-for' headers 
        // can be trivially spoofed by malicious clients to bypass the rate limiter.
        // Cloudflare explicitly overwrites 'cf-connecting-ip' with the true client IP.
        const ip = request.headers.get('cf-connecting-ip') || 
                   request.headers.get('x-forwarded-for') || 
                   '127.0.0.1';
                   
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        
        // Ensure turnstileToken is present in the request body for security
        const turnstileToken = body.turnstileToken;
        if (!turnstileToken) {
             return NextResponse.json(
                { error: 'Security verification token missing.' },
                { status: 400 }
            );
        }
        
        // Verify Turnstile Token
        const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const verifyResponse = await fetch(verifyEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'}&response=${turnstileToken}`
        });
        
        const verifyData = await verifyResponse.json();
        if (!verifyData.success) {
            return NextResponse.json(
                { error: 'Security verification failed.' },
                { status: 400 }
            );
        }

        // Validate input using Zod schema
        const result = ContactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = result.data;

        // Send React Email using Resend
        // Setup to establish an email thread between Spacebar and the client.
        const data = await resend.emails.send({
            // Note: Until spacebar-labs.com is verified in your Resend Dashboard, 
            // you must 'from' onboarding@resend.dev.
            from: 'Spacebar Labs <requests@spacebar-labs.com>', 
            // Note: In Sandbox mode, this MUST be the email address you signed up to Resend with!
            // Change it below to your actual email for testing until you verify the domain.
            to: ['site-requests@spacebar-labs.com'], 
            // Sandbox prevents sending to arbitrary emails, so we disable the CC for now:
            // cc: [email], // CC the user so they get their copy and can "Reply All" to continue the thread
            replyTo: email,
            subject: `Secure Protocol Initiated: ${subject}`,
            react: ContactTemplate({ name, email, subject, message }),
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal API Send Error:", error);
        return NextResponse.json({ error: error?.message || 'Internal Server Error' }, { status: 500 });
    }
}
