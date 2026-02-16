import { Shield, Hammer, Server, Radar, ShieldCheck, Activity } from "lucide-react";

export const servicesData = [
  {
    icon: Shield, // 'shield-plus' -> Shield (lucide fallback/closest)
    tags: ['security', 'core', 'architecture', 'infrastructure', 'policy'],
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
    icon: Hammer, // 'workflow' -> Hammer/Wrench (closest metaphor until user specifies exact Lucide name if varied)
    tags: ['security', 'devsecops', 'cloud', 'appsec', 'automation', 'engineering' ],
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
    ]
  },
  {
    icon: Radar,
    tags: ['security', 'audit', 'architecture', 'risk', 'policy'],
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
    tags: ['security', 'compliance', 'risk', 'governance', 'policy', 'audit'],
    title: "Compliance & Risk Readiness",
    description: "Preparing organizations for regulatory and security expectations..",
    detail: "We help organizations align systems with global data protection and risk management requirements.",
    bullets: [
      "GDPR, DPDP, HIPAA, CCPA readiness guidance",
      "Risk assessment and documentation",
      "Security policy, process and control framework design",
      "Compliance gap analysis",
      "NIST, SOC2, PCI DSS alignment"
    ]
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
