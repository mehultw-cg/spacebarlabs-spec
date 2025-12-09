import { z } from "zod";

// Define Zod schemas for data validation
const PricingIconSchema = z.enum([
    "Rocket", // Lift Off
    "Zap", // Accelerate
    "Anchor", // Craft your Ship
    "FlaskConical", // Deep Space
    "SatelliteDish", // Maintaining Orbit
    "Wrench", // Craft your Ship
    "Check", //Check Mark
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
        icon: "Wrench",
        description: " UI/UX Research, brainstorming, consulting, and prototyping. All the ingredients to bring things to life.",
        detail: "Perfect for laying the groundwork. We help you conceptualize, design, and prototype your idea before full-scale development.",
        tags: ["starter"],
        features: ["Brainstorming Sessions", "UI/UX Research", "Interactive Prototyping", "Feasibility Analysis", "Initial Frontend Scaffolding", ""],
        colSpan: 3,
        cta: "Get Quote",
    },
    {
        id: "deep-space",
        title: "Deep Space",
        icon: "FlaskConical",
        description: "Research-based long-term projects to break new grounds and develop novel technology.",
        detail: "For ambitious projects requiring deep technical research and innovation. We partner with you to explore the unknown.",
        tags: ["research"],
        features: ["Exploratoy R&D", "Proof-of-Concept Buillds", "Feasibility Studies", "Innovation Consulting", "Cutting Edge Tech Integration"],
        colSpan: 2,
        cta: "Get Quote",
    },
    {
        id: "lift-off",
        title: "Lift Off",
        icon: "Rocket",
        description: "For Startups and early ventures: build and launch your vision.",
        detail: "The complete package to get your MVP off the ground. We handle everything from code to deployment.",
        tags: ["popular"],
        features: ["MVP Development", "Full Stack Engineering", "Cloud Deployment", "Scalable Infrastructure", "Launch Support"],
        colSpan: 5,
        cta: "Get Quote",
    },
    {
        id: "accelerate",
        title: "Accelerate",
        icon: "Zap",
        description: "For Projects in motion. We help you accelerate your plans and push beyond your limits.",
        detail: "Need to move faster? We augment your existing team or take over specific modules to speed up delivery.",
        tags: ["enterprise"],
        features: ["Team Augmentation", "Performance Optimization", "Feature Acceleration Sprints", "Codebase Refactoring", "Security Audits"],
        colSpan: 3,
        cta: "Get Quote",
    },
    {
        id: "maintaining-orbit",
        title: "Maintaining Orbit",
        icon: "SatelliteDish",
        description: "Ongoing support and maintenance to keep it performing at its peek and stable in the orbit.",
        detail: "Reliable support and maintenance to ensure your application remains secure, up-to-date, and performant.",
        tags: ["maintenance"],
        features: ["24/7 Monitoring & Support", "Security Updates", "Bug Fixes & Patches", "Performance Tuning", "Technical Training"],
        colSpan: 2,
        cta: "Get Quote",
    },
];

// Validate the data
export const validatedPricing = PricingSchema.array().parse(pricingData);
if (process.env.NODE_ENV === "development") {
    console.log("Pricing data validated successfully.");
}
