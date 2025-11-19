import { z } from "zod";

// Define Zod schemas for data validation
const ServiceIconSchema = z.enum([
  "Lightbulb", // Brainstorming
  "Briefcase", // Business Consulting
  "Flask", // UI UX Research
  "Code", // Frontend Development
  "Server", // Backend Development
  "Database", // Database Solutions
  "Wrench", // DevOps
  "Shield", // DevSecOps
  "Cpu", // SysAdmin
  "Wrench", // Maintenance (reusing, can change if needed)
  "Headphones", // Support
  "ShieldX", // Vulnerability Assessment
  "FileCheck", // Security Auditing
  "Cloud", // Cloud Security Assessment
  "Globe", // Web Penetration Testing
  "Lock", // Basic Application Security
  "PenTool", // Content Writing
  "TrendingUp", // Marketing Strategy & Execution
  "Search", // SEO Optimization
  "Share2", // Social Media Management
  "FileText", // Copywriting
  "Video", // Content Creation
  "Camera", // Videography
  "Image", // Photography
  "Palette", // Graphic Design
]);

const ServiceTagSchema = z.enum([
  "coming-soon",
  "security",
  "marketing",
  "studio",
]).array(); // Changed to array to allow multiple tags

const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  icon: ServiceIconSchema,
  tags: ServiceTagSchema.optional(), // Changed from 'tag' to 'tags'
  tagLabel: z.string().optional(), // For custom tag text like "Coming Soon" or primary category
});

export type Service = z.infer<typeof ServiceSchema>;

export const servicesData: Service[] = [
  // Core Services
  { id: "brainstorming", title: "Brainstorming", icon: "Lightbulb" },
  { id: "business-consulting", title: "Business Consulting", icon: "Briefcase" },
  { id: "ui-ux-research", title: "UI UX Research", icon: "Flask", description: "User experience and interface research & design." },
  { id: "frontend", title: "Frontend Development", icon: "Code", description: "Building responsive and interactive user interfaces." },
  { id: "backend", title: "Backend Development", icon: "Server", description: "Developing robust server-side logic and APIs." },
  { id: "database", title: "Database Solutions", icon: "Database", description: "Designing and managing efficient database systems." },
  { id: "devops", title: "DevOps", icon: "Wrench", description: "Streamlining development and operations workflows." },
  { id: "devsecops", title: "DevSecOps", icon: "Shield", description: "Integrating security throughout the DevOps lifecycle." },
  { id: "sysadmin", title: "SysAdmin", icon: "Cpu", description: "Managing and maintaining IT infrastructure." },
  { id: "maintenance", title: "Maintenance", icon: "Wrench", description: "Ongoing support and upkeep of your systems." },
  { id: "support", title: "Support", icon: "Headphones", description: "Dedicated technical support and troubleshooting." },

  // Security Services (Coming Soon)
  { id: "vuln-assessment", title: "Vulnerability Assessment", icon: "ShieldX", tags: ["coming-soon", "security"], tagLabel: "Coming Soon" },
  { id: "security-auditing", title: "Security Auditing", icon: "FileCheck", tags: ["coming-soon", "security"], tagLabel: "Coming Soon" },
  { id: "cloud-sec-assessment", title: "Cloud Security Assessment", icon: "Cloud", tags: ["coming-soon", "security"], tagLabel: "Coming Soon" },
  { id: "web-pen-test", title: "Web Penetration Testing", icon: "Globe", tags: ["coming-soon", "security"], tagLabel: "Coming Soon" },
  { id: "basic-app-sec", title: "Basic Application Security", icon: "Lock", tags: ["coming-soon", "security"], tagLabel: "Coming Soon" },

  // Marketing Services (Coming Soon)
  { id: "content-writing", title: "Content Writing", icon: "PenTool", tags: ["coming-soon", "marketing"], tagLabel: "Coming Soon" },
  { id: "marketing-strategy", title: "Marketing Strategy & Execution", icon: "TrendingUp", tags: ["coming-soon", "marketing"], tagLabel: "Coming Soon" },
  { id: "seo-optimization", title: "SEO Optimization", icon: "Search", tags: ["coming-soon", "marketing"], tagLabel: "Coming Soon" },
  { id: "social-media", title: "Social Media Management", icon: "Share2", tags: ["coming-soon", "marketing"], tagLabel: "Coming Soon" },
  { id: "copywriting", title: "Copywriting", icon: "FileText", tags: ["coming-soon", "marketing"], tagLabel: "Coming Soon" },

  // Studio Services (Coming Soon)
  { id: "content-creation", title: "Content Creation", icon: "Video", tags: ["coming-soon", "studio"], tagLabel: "Coming Soon" },
  { id: "videography", title: "Videography", icon: "Camera", tags: ["coming-soon", "studio"], tagLabel: "Coming Soon" },
  { id: "photography", title: "Photography", icon: "Image", tags: ["coming-soon", "studio"], tagLabel: "Coming Soon" },
  { id: "graphic-design", title: "Graphic Design", icon: "Palette", tags: ["coming-soon", "studio"], tagLabel: "Coming Soon" },
];

// Security note content
export const securityNote = {
  title: "Our Commitment to Security",
  content: "At SpaceBar Labs, we are committed to secure coding practices. Every application and piece of work we deliver is developed with security at its core, adhering to best practices from renowned frameworks such as NIST, OWASP, and MITRE ATT&CK. We believe in delivering modern, stunning web creations that are secure by default.",
};

// Validate the data
export const validatedServices = ServiceSchema.array().parse(servicesData);
if (process.env.NODE_ENV === "development") {
  console.log("Services data validated successfully.");
}
