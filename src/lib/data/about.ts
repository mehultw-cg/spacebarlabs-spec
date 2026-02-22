import { z } from "zod";



export const AboutContentSchema = z.object({
    title: z.string(),
    description: z.array(z.string()), // Changed to array for multiple paragraphs
    valueCards: z.array(z.string()),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;

export const aboutData: AboutContent = {
    title: "About Spacebar Labs",
    description: [
        "Spacebar Labs is a security-focused engineering firm dedicated to building resilient digital infrastructure.",
        "We believe technology should empower individuals and organizations while respecting privacy, ownership, and long-term sustainability.",
        "Our work combines practical engineering discipline with a deep commitment to human-centric system design.",
        "We partner with clients to create secure foundations that can evolve confidently over time."
    ],
    valueCards: [
        "Security-First Engineering",
        "Privacy-Respecting Architecture",
        "Independent Infrastructure Philosophy",
        "Global Standards Alignment"
    ]
};

export const ContactFormSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(100, { message: "Name cannot exceed 100 characters." })
        .regex(/^[a-zA-Z\s\-\.']+$/, { message: "Name contains invalid characters." }),
    email: z.string()
        .email({ message: "Please enter a valid email address." })
        .max(320, { message: "Email is too long." }),
    subject: z.string()
        .min(5, { message: "Subject must be at least 5 characters." })
        .max(200, { message: "Subject cannot exceed 200 characters." }),
    message: z.string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(5000, { message: "Message cannot exceed 5000 characters." }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
