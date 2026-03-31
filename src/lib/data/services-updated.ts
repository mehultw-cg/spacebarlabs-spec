import { Shield, Workflow, Server, Radar, ShieldCheck, Activity } from "lucide-react";
import { z } from "zod";






// Define Zod schemas for data validation
const ServiceSchema = z.object({
  icon: z.custom<React.ElementType>(),
  tags: z.string().array(),
  title: z.string(),
  description: z.string(),
  detail: z.string(),
  bullets: z.string().array(),
  defaultExpanded: z.boolean().optional(),
});

export type ServiceItem = z.infer<typeof ServiceSchema>;

export const servicesData: ServiceItem[] = [
  {
    icon: Shield, // 'shield-plus' -> Shield (lucide fallback/closest)
    tags: ['architecture', 'security', 'core', 'infrastructure', 'policy'],
    title: "Secure Architecture & System Design",
    description: "Designing secure foundations for modern digital systems.",
    detail: "We help organizations build architectures that remain secure, resilient, and adaptable over time.",
    bullets: [
      "Threat modeling and risk assessment",
      "Secure system architecture design",
      "Infrastructure hardening, security, and privacy strategies",
      "Policy and process planning",
      "Protocol and security workflow design"
    ]
  },
  {
    icon: Workflow, // 'workflow' -> Hammer/Wrench (closest metaphor until user specifies exact Lucide name if varied)
    tags: ['devsecops', 'security', 'cloud', 'appsec', 'automation', 'engineering' ],
    title: "DevSecOps & Secure Development",
    description: "Integrating security throughout the software development lifecycle.",
    detail: "We implement practical DevSecOps processes that protect systems without slowing development, ensuring security is built-in, not added as an afterthought.",
    bullets: [
      "CI/CD security pipeline",
      "Automated security testing and scanning",
      "Secure development practices and training",
      "Infrastructure as Code (IaC) security",
      "Secrets management integration"
    ]
  },
  {
    icon: Server,
    tags: ['cloud', 'core', 'infrastructure', 'security', 'migration'],
    title: "Infrastructure Security, Hardening & Migration",
    description: "Securing infrastructure from the ground up.",
    detail: "We strengthen infrastructure to reduce risk exposure and improve long-term stability, while saving costs.",
    bullets: [
      "Infrastructure hardening, optimization and cost management",
      "Hybrid infrastructure planning",
      "Secure, encrypted Cloud-to-VPS/Cloud-to-Cloud/Cloud-to-Hybrid migration strategies (and Vice versa)",
      "Network security architecture and Zero-trust controls.",
      "Cloud security configuration and compliance"
    ],
    defaultExpanded: true
  },
  {
    icon: Radar,
    tags: ['audit', 'security', 'architecture', 'risk', 'policy'],
    title: "Security Assessment & Testing",
    description: "Identifying risks before they become incidents.",
    detail: "We assess systems to uncover vulnerabilities and provide clear remediation guidance.",
    bullets: [
      "Threat modeling and risk assessment",
      "Vulnerability assessment and management",
      "Web and application security testing",
      "Cloud security reviews",
      "Configuration audits",
      "Basic offensive security testing"
    ]
  },
  {
    icon: ShieldCheck,
    tags: ['governance','security', 'compliance', 'risk', 'policy', 'audit'],
    title: "Compliance & Risk Readiness",
    description: "Preparing organizations for regulatory and security expectations.",
    detail: "We help organizations align systems with global data protection and risk management requirements.",
    bullets: [
      "GDPR, DPDP, HIPAA, CCPA readiness guidance",
      "Risk assessment and documentation",
      "Security policy, process and control framework design",
      "Compliance gap analysis",
      "NIST, SOC2, PCI DSS alignment"
    ],
    defaultExpanded: true
  },
  {
    icon: Activity,
    tags: ['advisory', 'strategy', 'security'],
    title: "Ongoing Security Advisory",
    description: "Long-term guidance for evolving systems.",
    detail: "We provide ongoing advisory support to help organizations adapt to changing risks and technology.",
    bullets: [
      "Security strategy and roadmap development",
      "Incident response guidance",
      "Security architecture review and guidance",
      "Compliance and policy updates",
      "Security and privacy best practices"
    ]
  }
];

export const securityNote = {
  title: "Our Commitment to Security",
  content: "At Aurorys Labs, we are committed to secure coding practices. Every application and piece of work we deliver is developed with security at its core, adhering to best practices from renowned frameworks such as NIST, OWASP, and MITRE ATT&CK. We believe in delivering modern, stunning web creations that are secure by default.",
};

// Validate the data
if (process.env.NODE_ENV === "development") {
    try {
        ServiceSchema.array().parse(servicesData);
        console.log("Services updated data validated successfully.");
    } catch (error) {
        console.error("Services updated data validation failed:", error);
    }
}
