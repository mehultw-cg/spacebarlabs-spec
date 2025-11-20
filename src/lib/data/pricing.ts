import { z } from "zod";

// Define Zod schemas for data validation
const PricingIconSchema = z.enum([
    "Rocket", // Lift Off
    "Zap", // Accelerate
    "Anchor", // Craft your Ship
    "Telescope", // Deep Space
    "Globe", // Maintaining Orbit
]);

const PricingTagSchema = z.enum([
    "popular",
    "starter",
    "enterprise",
    "research",
    "maintenance",
]).array();

const PricingSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    detail: z.string().optional(), // For expanded view or tooltip
    icon: PricingIconSchema,
    tags: PricingTagSchema.optional(),
    price: z.string().optional(), // Optional price string
    features: z.array(z.string()).optional(), // List of features
    cta: z.string().default("Get Quote"), // Call to action text
    colSpan: z.number().optional(), // For Bento Grid layout
});

export type PricingTier = z.infer<typeof PricingSchema>;

export const pricingData: PricingTier[] = [
    {
        id: "craft-your-ship",
        title: "Craft your Ship",
        icon: "Anchor",
        description: "Brainstorming, consulting, UI/UX, frontend prototyping.",
        detail: "Perfect for laying the groundwork. We help you conceptualize, design, and prototype your idea before full-scale development.",
        tags: ["starter"],
        features: ["Brainstorming Sessions", "UI/UX Design", "Frontend Prototyping", "Feasibility Analysis"],
        colSpan: 3,
        cta: "Get Quote",
    },
    {
        id: "deep-space",
        title: "Deep Space",
        icon: "Telescope",
        description: "Research-based long-term projects for novel technology.",
        detail: "For ambitious projects requiring deep technical research and innovation. We partner with you to explore the unknown.",
        tags: ["research"],
        features: ["R&D", "Proof of Concept", "Technical Feasibility", "Innovation Consulting"],
        colSpan: 1,
        cta: "Get Quote",
    },
    {
        id: "lift-off",
        title: "Lift Off",
        icon: "Rocket",
        description: "Startups and early ventures: build and launch your application.",
        detail: "The complete package to get your MVP off the ground. We handle everything from code to deployment.",
        tags: ["popular"],
        features: ["MVP Development", "Full Stack Engineering", "Cloud Deployment", "Launch Support"],
        colSpan: 4,
        cta: "Get Quote",
    },
    {
        id: "accelerate",
        title: "Accelerate",
        icon: "Zap",
        description: "Projects in motion: help you accelerate your plans.",
        detail: "Need to move faster? We augment your existing team or take over specific modules to speed up delivery.",
        tags: ["enterprise"],
        features: ["Team Augmentation", "Performance Optimization", "Feature Acceleration", "Code Audits"],
        colSpan: 2,
        cta: "Get Quote",
    },
    {
        id: "maintaining-orbit",
        title: "Maintaining Orbit",
        icon: "Globe",
        description: "Ongoing support and maintenance to keep you flying smooth.",
        detail: "Reliable support and maintenance to ensure your application remains secure, up-to-date, and performant.",
        tags: ["maintenance"],
        features: ["24/7 Monitoring", "Security Updates", "Bug Fixes", "Performance Tuning"],
        colSpan: 2,
        cta: "Get Quote",
    },
];

// Validate the data
export const validatedPricing = PricingSchema.array().parse(pricingData);
if (process.env.NODE_ENV === "development") {
    console.log("Pricing data validated successfully.");
}
