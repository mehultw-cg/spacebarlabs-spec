import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/data/about';

// Initialize Resend with a dummy key if not present in env
// In production, this should be process.env.RESEND_API_KEY
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
        // Simple Rate Limiting Source IP check
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Validate input using Zod schema
        const result = ContactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = result.data;

        // Send email using Resend
        // Note: 'onboarding@resend.dev' is the default sender for testing
        const data = await resend.emails.send({
            from: 'SpaceBar Labs Contact <onboarding@resend.dev>',
            to: ['delivered@resend.dev'], // Send to verified email or delivered@resend.dev for testing
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
