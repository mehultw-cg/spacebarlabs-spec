import { z } from "zod";

export const AboutStatSchema = z.object({
    label: z.string(),
    value: z.string(),
});

export const AboutContentSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    stats: z.array(AboutStatSchema),
    mission: z.string(),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;

export const aboutData: AboutContent = {
    title: "About SpaceBar Labs",
    subtitle: "We are a collective of dreamers, engineers, and artists.",
    description:
        "Founded in 2024, SpaceBar Labs was born from a simple idea: that software shouldn't just function, it should inspire. We bridge the gap between complex engineering and intuitive design, creating digital experiences that feel like magic.",
    mission:
        "Our mission is to empower visionaries to build the future. We provide the technical expertise and creative direction needed to turn ambitious ideas into reality.",
    stats: [
        { label: "Projects Launched", value: "50+" },
        { label: "Happy Clients", value: "100%" },
        { label: "Lines of Code", value: "1M+" },
        { label: "Coffee Consumed", value: "∞" },
    ],
};

export const ContactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
