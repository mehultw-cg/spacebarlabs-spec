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
  "business",
  "security",
  "marketing",
  "studio",
  "core",
  "dev",
  "design",
  "cloud",
  "data",
  "ops",
]).array();

const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  detail: z.string().optional(),
  icon: ServiceIconSchema,
  tags: ServiceTagSchema.optional(),
  tagLabel: z.string().optional(),
  defaultExpanded: z.boolean().optional(), // If true, this card is expanded by default in its row
});

export type Service = z.infer<typeof ServiceSchema>;

export const servicesData: Service[] = [
  // Core Services
  {
    id: "brainstorming",
    title: "Brainstorming",
    icon: "Lightbulb",
    description: "Collaborative sessions to generate innovative ideas.",
    detail: "We facilitate structured brainstorming workshops to help you uncover new opportunities, solve complex problems, and define a clear vision for your project.",
    tags: ["business", "core"]
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    icon: "Briefcase",
    description: "Strategic advice to optimize your business operations.",
    detail: "Our experts provide tailored strategies to improve efficiency, drive growth, and navigate market challenges, ensuring your business aligns with its long-term goals.",
    tags: ["business", "core"]
  },
  {
    id: "ui-ux-research",
    title: "UI UX Research",
    icon: "Flask",
    description: "User-centric research to inform design decisions.",
    detail: "We conduct in-depth user research, usability testing, and persona development to create intuitive and engaging digital experiences that resonate with your audience.",
    tags: ["design", "core"],
    defaultExpanded: true
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Code",
    description: "Building responsive and interactive user interfaces.",
    detail: "Using modern frameworks like React and Next.js, we build pixel-perfect, high-performance frontends that work seamlessly across all devices and screen sizes.",
    tags: ["dev", "core"],
    defaultExpanded: true
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description: "Developing robust server-side logic and APIs.",
    detail: "We design and implement scalable backend architectures, secure APIs, and efficient microservices to power your applications and handle high traffic loads.",
    tags: ["dev", "core"]
  },
  {
    id: "database",
    title: "Database Solutions",
    icon: "Database",
    description: "Designing and managing efficient database systems.",
    detail: "From schema design to performance tuning, we ensure your data is organized, secure, and easily accessible using SQL and NoSQL technologies.",
    tags: ["data", "dev"]
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "Wrench",
    description: "Streamlining development and operations workflows.",
    detail: "We implement CI/CD pipelines, infrastructure as code, and automated testing to accelerate delivery and improve the reliability of your software releases.",
    tags: ["ops", "dev"]
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    icon: "Shield",
    description: "Integrating security throughout the DevOps lifecycle.",
    detail: "Security is baked into every step of our process. We automate security checks and compliance validation to protect your application without slowing down development.",
    tags: ["ops", "security"],
    defaultExpanded: true
  },
  {
    id: "sysadmin",
    title: "SysAdmin",
    icon: "Cpu",
    description: "Managing and maintaining IT infrastructure.",
    detail: "Our system administrators ensure your servers and networks are configured correctly, patched regularly, and monitored 24/7 for optimal performance and uptime.",
    tags: ["ops"]
  },
  {
    id: "maintenance",
    title: "Maintenance",
    icon: "Wrench",
    description: "Ongoing support and upkeep of your systems.",
    detail: "We provide proactive maintenance services to prevent issues before they arise, keeping your software up-to-date and running smoothly.",
    tags: ["ops"]
  },
  {
    id: "support",
    title: "Support",
    icon: "Headphones",
    description: "Dedicated technical support and troubleshooting.",
    detail: "Our support team is available to resolve technical issues quickly, minimizing downtime and ensuring your users have a positive experience.",
    tags: ["ops"]
  },

  // Security Services (Coming Soon)
  {
    id: "vuln-assessment",
    title: "Vulnerability Assessment",
    icon: "ShieldX",
    description: "Identifying potential security weaknesses.",
    detail: "We scan your systems for known vulnerabilities and provide actionable reports to help you prioritize and remediate risks.",
    tags: ["security", "coming-soon"],
    tagLabel: "Coming Soon",
    defaultExpanded: true
  },
  {
    id: "compliance",
    title: "Compliance Audits",
    icon: "FileCheck",
    description: "Ensuring adherence to industry standards.",
    detail: "We help you navigate complex regulatory landscapes (GDPR, HIPAA, SOC2) and prepare for compliance audits with confidence.",
    tags: ["security", "coming-soon"],
    tagLabel: "Coming Soon"
  },

  // Cloud Services (Coming Soon)
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    icon: "Cloud",
    description: "Moving your infrastructure to the cloud.",
    detail: "We manage the seamless migration of your applications and data to leading cloud platforms like AWS, Azure, or Google Cloud.",
    tags: ["cloud", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "cloud-native",
    title: "Cloud Native Dev",
    icon: "Globe",
    description: "Building apps designed for the cloud.",
    detail: "We develop applications that leverage the full power of cloud computing, including serverless architectures and containerization.",
    tags: ["cloud", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: "Lock",
    description: "Protecting your cloud assets.",
    detail: "We implement robust security controls and monitoring for your cloud environment to safeguard your data and infrastructure.",
    tags: ["cloud", "security", "coming-soon"],
    tagLabel: "Coming Soon"
  },

  // Studio Services (Coming Soon)
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "PenTool",
    description: "Visual communication and branding.",
    detail: "Our designers create stunning visuals, logos, and marketing materials that capture your brand identity and communicate your message effectively.",
    tags: ["studio", "design", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    icon: "TrendingUp",
    description: "Data-driven marketing plans.",
    detail: "We develop comprehensive marketing strategies to increase brand awareness, generate leads, and drive conversions.",
    tags: ["marketing", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    icon: "Search",
    description: "Improving search engine visibility.",
    detail: "We optimize your website's content and structure to rank higher in search results and attract more organic traffic.",
    tags: ["marketing", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "social-media",
    title: "Social Media Management",
    icon: "Share2",
    description: "Engaging your audience on social platforms.",
    detail: "We manage your social media presence, creating content and engaging with your community to build brand loyalty.",
    tags: ["marketing", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: "FileText",
    description: "High-quality content for your brand.",
    detail: "From blog posts to whitepapers, we produce compelling content that educates your audience and establishes your authority.",
    tags: ["studio", "marketing", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "video-production",
    title: "Video Production",
    icon: "Video",
    description: "Professional video content.",
    detail: "We produce high-quality videos for marketing, training, and corporate communications.",
    tags: ["studio", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "photography",
    title: "Photography",
    icon: "Camera",
    description: "Professional photography services.",
    detail: "We capture high-resolution images for your website, products, and marketing campaigns.",
    tags: ["studio", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "illustration",
    title: "Illustration",
    icon: "Image",
    description: "Custom illustrations and artwork.",
    detail: "Our illustrators create unique, custom artwork to enhance your brand's visual storytelling.",
    tags: ["studio", "design", "coming-soon"],
    tagLabel: "Coming Soon"
  },
  {
    id: "branding",
    title: "Branding",
    icon: "Palette",
    description: "Building a strong brand identity.",
    detail: "We help you define your brand's voice, look, and feel to create a lasting impression on your customers.",
    tags: ["studio", "design", "coming-soon"],
    tagLabel: "Coming Soon"
  },
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
