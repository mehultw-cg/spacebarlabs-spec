import { z } from "zod";

// Define Zod schemas for data validation
const PricingIconSchema = z.enum([
    "Rocket", // Lift Off / Escape Velocity
    "Zap", // Accelerate
    "Anchor", // Craft your Ship
    "FlaskConical", // Deep Space
    "SatelliteDish", // Maintaining Orbit
    "Wrench", // Craft your Ship
    "Check", //Check Mark
    "ServerCrash",
    "Radar",
    "Activity",
]);

const PricingTagSchema = z.enum([
    "popular",
    "starter",
    "enterprise",
    "research",
    "maintenance",
    "compliance",
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
    favored: z.boolean().optional(), // For special visual treatment (bow tie)
});

export type PricingTier = z.infer<typeof PricingSchema>;

export const pricingData: PricingTier[] = [
    {
        id: "launch-ready",
        title: "Launch Ready",
        icon: "SatelliteDish",
        description: "Understand your current security posture, risks and priorities.",
        detail: "A comprehensive assessment to identify vulnerabilities and define a clear path forward for your security infrastructure.",
        tags: ["starter"],
        features: ["Architecture Review", "Risk Prioritization", "Security Roadmap", "Vulnerability Assessment", "Remediation Guidance"],
        colSpan: 3,
        cta: "Request Assessment",
        favored: false,
    },
    {
        id: "lift-off",
        title: "Lift Off",
        icon: "Zap", // Mapped from spec 'server-crash'
        description: "Start new projects with security integrated from day one.",
        detail: "Build your next venture on a solid foundation with security baked into every layer of your stack.",
        tags: ["popular"],
        features: ["Secure Architecture Design", "Threat Modeling", "Secure Development Guidance", "DevSecOps Pipeline Setup", "Infrastructure Hardening", "Security Review"],
        colSpan: 2,
        cta: "Start Securely",
        favored: false,
    },
    {
        id: "escape-velocity",
        title: "Escape Velocity",
        icon: "Rocket",
        description: "Move to resilient, secure infrastructure with confidence.",
        detail: "Accelerate your growth with a robust, scalable, and secure infrastructure migration and optimization plan.",
        tags: ["enterprise"],
        features: ["Infrastructure Assessment", "Migration Planning", "Cloud-to-VPS Migration", "Infrastructure Hardening", "Risk Mitigation Strategy", "Secure Deployment Configuration", "Cost Assessment & Optimization"],
        colSpan: 5,
        cta: "Plan Your Migration",
        favored: true,
    },
    {
        id: "system-scan",
        title: "System Scan",
        icon: "Radar",
        description: "Prepare systems and processes for global standards.",
        detail: "Ensure your systems meet industry compliance standards and are ready for rigorous audits.",
        tags: ["compliance"],
        features: ["Readiness Gap Analysis", "Policy and Process Development", "Audit Preparation Support", "Compliance Alignment", "Risk Assessment Support", "Security Control Guidance"],
        colSpan: 2,
        cta: "Prepare for Compliance",
        favored: false,
    },
    {
        id: "mission-support",
        title: "Mission Support",
        icon: "Activity",
        description: "Continuous guidance as your systems evolve.",
        detail: "Your long-term partner for ongoing security strategy, incident response, and architectural evolution.",
        tags: ["maintenance"],
        features: ["Security Strategy", "Incident Support Guidance", "Architecture Review", "Compliance Updates", "Security Best Practices"],
        colSpan: 3,
        cta: "Discuss Advisory",
        favored: false,
    },
];

// Validate the data
export const validatedPricing = PricingSchema.array().parse(pricingData);
if (process.env.NODE_ENV === "development") {
    console.log("Pricing updated data validated successfully.");
}
