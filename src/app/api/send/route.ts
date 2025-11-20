import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/data/about';

// Initialize Resend with a dummy key if not present in env
// In production, this should be process.env.RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(request: Request) {
    try {
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
