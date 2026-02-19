import { z } from "zod";

// Define Zod schemas for data validation
const WhyUsIconSchema = z.enum([
    "ShieldCheck", // Security First
    "Palette", // Stunning Design
    "Users", // Access to Founders
    "Code2", // Lightning Fast Code
    "Eye", // Continuous Monitoring
    "Layout", // Immersive UI
    "MousePointerClick", // Buttery Smooth UX
    "Lock", // Privacy First
    "Cloud", // Cloud Deployments
    "Settings", // Tailored Services
    "Microscope", // Research Capabilities
    "Heart", // Scientist by passion
    "Layers", // Full Suite Services
    "Placeholder", // For placeholders
]);

const WhyUsTagSchema = z.enum([
    "security",
    "design",
    "partnership",
    "performance",
    "core",
]).array();

const WhyUsSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    detail: z.string().optional(),
    icon: WhyUsIconSchema,
    tags: WhyUsTagSchema.optional(),
    colSpan: z.number().optional(), // For Bento Grid layout
    rowSpan: z.number().optional(), // For Bento Grid layout
});

export type WhyUsItem = z.infer<typeof WhyUsSchema>;

export const whyUsData: WhyUsItem[] = [
    // Row 1
    {
        id: "cloud-deployments",
        title: "Cloud Deployments",
        icon: "Cloud",
        description: "Scalable & Secure",
        colSpan: 1,
        rowSpan: 1,
        tags: ["core"],
    },
    {
        id: "stunning-design",
        title: "Stunning Design",
        icon: "Palette",
        description: "Eye-catching and User-friendly",
        detail: "We believe that great software should not only work well but also look beautiful. Our designs are crafted to leave a lasting impression.",
        colSpan: 3,
        rowSpan: 3,
        tags: ["design"],
    },
    {
        id: "security-first",
        title: "Security First",
        icon: "ShieldCheck",
        description: "Expertly secured by default",
        detail: "We don't treat security as an afterthought. It's woven into the fabric of our code from day one.",
        colSpan: 3,
        rowSpan: 1,
        tags: ["security"],
    },

    // Row 2
    {
        id: "tailored-services",
        title: "Tailored Services",
        icon: "Settings",
        description: "Bespoke solutions for your needs",
        colSpan: 1,
        rowSpan: 1,
        tags: ["core"],
    },
    // Stunning Design continues here (cols 2-4)
    {
        id: "access-to-founders",
        title: "Access to Founders",
        icon: "Users",
        description: "We are your partners, talk to us.",
        detail: "Work directly with the people who care most about your success. No middle management layers, just direct collaboration.",
        colSpan: 2,
        rowSpan: 4,
        tags: ["partnership"],
    },
    {
        id: "research-capabilities",
        title: "Research Capabilities",
        icon: "Microscope",
        description: "Deep tech exploration",
        colSpan: 1,
        rowSpan: 1,
        tags: ["core"],
    },

    // Row 3
    {
        id: "placeholder-1",
        title: "",
        icon: "Placeholder",
        description: "",
        colSpan: 1,
        rowSpan: 2,
    },
    // Stunning Design continues here (cols 2-4)
    // Access to Founders continues here (cols 5-6)
    {
        id: "scientist-passion",
        title: "Scientist by passion, Artists at heart",
        icon: "Heart",
        description: "Engineering meets Art",
        colSpan: 1,
        rowSpan: 1,
        tags: ["core"],
    },

    // Row 4
    // Placeholder 1 continues here (col 1)
    {
        id: "privacy-first",
        title: "Privacy First",
        icon: "Lock",
        description: "Your data. Yours.",
        colSpan: 1,
        rowSpan: 2,
        tags: ["security"],
    },
    {
        id: "continuous-monitoring",
        title: "Continuous Monitoring",
        icon: "Eye",
        description: "Proactive threat prevention.",
        colSpan: 1,
        rowSpan: 1,
        tags: ["security"],
    },
    {
        id: "immersive-ui",
        title: "Immersive UI",
        icon: "Layout",
        description: "Engaging interfaces.",
        colSpan: 1,
        rowSpan: 1,
        tags: ["design"],
    },
    // Access to Founders continues here (cols 5-6)
    {
        id: "full-suite",
        title: "Full Suite Services",
        icon: "Layers",
        description: "End-to-end product lifecycle",
        colSpan: 1,
        rowSpan: 2,
        tags: ["core"],
    },

    // Row 5
    {
        id: "placeholder-2",
        title: "",
        icon: "Placeholder",
        description: "",
        colSpan: 1,
        rowSpan: 1,
    },
    // Privacy First continues here (col 2)
    {
        id: "lightning-fast",
        title: "Lightning Fast Code",
        icon: "Code2",
        description: "Optimized for speed.",
        colSpan: 1,
        rowSpan: 1,
        tags: ["performance"],
    },
    {
        id: "buttery-smooth",
        title: "Buttery Smooth UX",
        icon: "MousePointerClick",
        description: "Fluid, enjoyable interactions.",
        colSpan: 1,
        rowSpan: 1,
        tags: ["design"],
    },
    // Access to Founders continues here (cols 5-6)
    // Full Suite continues here (col 7)
];

// Validate the data
export const validatedWhyUs = WhyUsSchema.array().parse(whyUsData);
if (process.env.NODE_ENV === "development") {
    console.log("Why Us data validated successfully.");
}
