import { z } from "zod";
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandPython,
    IconDatabase,
    IconBrandMongodb,
    IconBrandAws,
    IconBrandDocker,
    IconBrandFigma,
    IconShieldLock,
    IconLock,
    IconServer,
    IconCloud,
    IconCode,
    IconLayout,
    IconTerminal2,
} from "@tabler/icons-react";


// Adding things to the tech stack:

// DevOps & Cloud
// - Jenkins
// - Github Actions
// - Google Cloud
// - Azure
// - Cloudflare
// - Hetzner
// - Contabo
// - VPS
// - Kubernetes
// - Traefik
// - Open Telemetry
// - Grafana
// - Prometheus
// - Ansible

// Security
// - Cloudflare
// - Snyk
// - SonarQube
// - OWASP ZAP
// - Trivy
// - Checkov
// - Hashicorp Vault
// - BurpSuite
// - Powerpipe
// - Steampipe
// - Prowler
// - CrowdSec
// - Falco
// - Wazuh
// - Fail2Ban
// - UFW
// - ModSecurity
// - Certbot
// - OpenVPN (Network Security)
// - WireGuard (Network Security)
// - pfSense (Network Security)
// - OPNsense (Network Security)
// - Tailscale (Network Security)
// - ZeroTier (Network Security)
// - Suricata (Network Security)
// - Kali Linux
// - Linux (DevOps)
// - Debian (DevOps)
// - Fedora (DevOps)
// - Rocky (DevOps)
// - Arch (DevOps)

// Backend
// - Java
// - CERN Root
// - C++
// - C#
// - R
// - Laravel
// - Php
// - Django
// - Clerk
// - NextAuth
// - Stripe
// - RazerPay
// - Plane
// - Sanity

// Database
// - SQL
// - PL/SQL
// - Oracle Database
// - Supabase
// - Prisma
// - Drizzle

// Automation
// - n8n
// - make.com
// - Zapier

// Compliance
// - ISO 27001
// - NIST 800-53
// - GDPR
// - HIPAA
// - PCI DSS
// - SOC 2

// Define Zod schemas
export const TechItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    icon: z.any(), // React component
    category: z.string(),
    description: z.string(),
    whyWeUseIt: z.string(),
    features: z.array(z.string()),
    codeSnippet: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata: z.record(z.string(), z.string()).optional(),
});

export const TechCategorySchema = z.object({
    id: z.string(),
    name: z.string(),
    items: z.array(TechItemSchema),
});

export type TechItem = z.infer<typeof TechItemSchema>;
export type TechCategory = z.infer<typeof TechCategorySchema>;

export const techStackData: TechCategory[] = [
    {
        id: "frontend",
        name: "Frontend",
        items: [
            {
                id: "nextjs",
                name: "Next.js",
                icon: IconBrandNextjs,
                category: "Frontend",
                description: "The React Framework for the Web.",
                whyWeUseIt: "It offers server-side rendering, static site generation, and a great developer experience.",
                features: ["Server Components", "File-based Routing", "API Routes", "Image Optimization"],
                codeSnippet: `export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`,
            },
            {
                id: "react",
                name: "React",
                icon: IconBrandReact,
                category: "Frontend",
                description: "A JavaScript library for building user interfaces.",
                whyWeUseIt: "Its component-based architecture allows us to build reusable UI elements.",
                features: ["Virtual DOM", "Hooks", "Component-Based", "One-Way Data Flow"],
                codeSnippet: `const [count, setCount] = useState(0);
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
            },
            {
                id: "tailwind",
                name: "Tailwind CSS",
                icon: IconBrandTailwind,
                category: "Frontend",
                description: "A utility-first CSS framework.",
                whyWeUseIt: "It speeds up styling with utility classes and ensures a consistent design system.",
                features: ["Utility-First", "Responsive Design", "Dark Mode", "Customization"],
                codeSnippet: `<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  Hover me!
</div>`,
            },
            {
                id: "typescript",
                name: "TypeScript",
                icon: IconBrandTypescript,
                category: "Frontend",
                description: "JavaScript with syntax for types.",
                whyWeUseIt: "It adds static typing to JavaScript, catching errors early.",
                features: ["Static Typing", "Interfaces", "Generics", "Tooling Support"],
                codeSnippet: `interface User {
  id: number;
  name: string;
}`,
            },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        items: [
            {
                id: "nodejs",
                name: "Node.js",
                icon: IconBrandNodejs,
                category: "Backend",
                description: "JavaScript runtime built on Chrome's V8 engine.",
                whyWeUseIt: "Allows us to use JavaScript on the server, sharing code between frontend and backend.",
                features: ["Event-Driven", "Non-Blocking I/O", "NPM Ecosystem", "Cross-Platform"],
                codeSnippet: `const server = http.createServer((req, res) => {
  res.end('Hello Node!');
});`,
            },
            {
                id: "python",
                name: "Python",
                icon: IconBrandPython,
                category: "Backend",
                description: "A programming language that lets you work quickly.",
                whyWeUseIt: "Great for data processing, AI/ML integration, and scripting tasks.",
                features: ["Readable Syntax", "Rich Standard Library", "Dynamic Typing", "Multi-Paradigm"],
                codeSnippet: `print("Hello World")`,
            },
            {
                id: "java",
                name: "Java",
                icon: IconCode,
                category: "Backend",
                description: "A high-level, class-based, object-oriented programming language.",
                whyWeUseIt: "Enterprise-grade stability and huge ecosystem.",
                features: ["Platform Independent", "Object-Oriented", "Secure", "Robust"],
                codeSnippet: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
            },
            {
                id: "c-plus-plus",
                name: "C++",
                icon: IconCode,
                category: "Backend",
                description: "General-purpose programming language created as an extension of C.",
                whyWeUseIt: "Used for high-performance applications.",
                features: ["Performance", "Object-Oriented", "Low-level Manipulation", "Standard Library"],
                codeSnippet: `#include <iostream>
int main() {
    std::cout << "Hello World!";
    return 0;
}`,
            },
            {
                id: "c-sharp",
                name: "C#",
                icon: IconCode,
                category: "Backend",
                description: "A modern, object-oriented, and type-safe programming language.",
                whyWeUseIt: "Great for enterprise applications and .NET ecosystem.",
                features: ["Type-Safe", "Garbage Collection", "Scalable", "Rich Library"],
                codeSnippet: `Console.WriteLine("Hello World!");`,
            },
            {
                id: "laravel",
                name: "Laravel",
                icon: IconServer,
                category: "Backend",
                description: "The PHP Framework for Web Artisans.",
                whyWeUseIt: "Elegant syntax and robust features for modern web apps.",
                features: ["MVC", "Eloquent ORM", "Queues", "Routing"],
                codeSnippet: `Route::get('/', function () {
    return view('welcome');
});`,
            },
            {
                id: "django",
                name: "Django",
                icon: IconBrandPython,
                category: "Backend",
                description: "The Web framework for perfectionists with deadlines.",
                whyWeUseIt: "Secure, scalable, and fast development in Python.",
                features: ["Batteries-included", "ORM", "Admin Panel", "Security"],
                codeSnippet: `from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world.")`,
            },
            {
                id: "clerk",
                name: "Clerk",
                icon: IconShieldLock,
                category: "Backend",
                description: "Complete user management and authentication.",
                whyWeUseIt: "Simplifies auth with beautiful pre-built components.",
                features: ["User Management", "Multi-session", "MFA", "Social Logins"],
                codeSnippet: `<SignIn />`,
            },
            {
                id: "nextauth",
                name: "NextAuth",
                icon: IconShieldLock,
                category: "Backend",
                description: "Authentication for Next.js.",
                whyWeUseIt: "Flexible and secure authentication solution for Next.js apps.",
                features: ["OAuth", "Email/Passwordless", "JWT", "Database Sessions"],
                codeSnippet: `export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}`,
            },
            {
                id: "stripe",
                name: "Stripe",
                icon: IconCloud,
                category: "Backend",
                description: "Financial infrastructure platform for the internet.",
                whyWeUseIt: "The standard for accepting payments online.",
                features: ["Payments", "Subscriptions", "Invoicing", "Fraud Prevention"],
                codeSnippet: `const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000,
  currency: 'usd',
});`,
            },
            {
                id: "plane",
                name: "Plane",
                icon: IconLayout,
                category: "Backend",
                description: "Open Source Project Management Tool.",
                whyWeUseIt: "Helps track issues, epics, and product roadmaps.",
                features: ["Issue Tracking", "Cycles", "Modules", "Pages"],
                codeSnippet: `// Manage projects efficiently`,
            },
            {
                id: "sanity",
                name: "Sanity",
                icon: IconDatabase,
                category: "Backend",
                description: "The Composable Content Cloud.",
                whyWeUseIt: "Flexible headless CMS for structured content.",
                features: ["Real-time Collaboration", "Groq", "Structured Content", "Customization"],
                codeSnippet: `*[_type == "movie"]{title, poster}`,
            },
            {
                id: "cern-root",
                name: "CERN Root",
                icon: IconCode,
                category: "Backend",
                description: "A modular scientific software framework.",
                whyWeUseIt: "Used for big data processing, statistical analysis, and visualization.",
                features: ["Data Analysis", "Statistics", "Visualization", "C++ Interpreter"],
                codeSnippet: `TCanvas *c1 = new TCanvas("c1","A Simple Graph Example",200,10,700,500);`,
            },
            {
                id: "r",
                name: "R",
                icon: IconCode,
                category: "Backend",
                description: "A language and environment for statistical computing and graphics.",
                whyWeUseIt: "Powerful for data analysis and statistical modeling.",
                features: ["Statistical Analysis", "Graphics", "Packages", "Data Handling"],
                codeSnippet: `print("Hello World")`,
            },
            {
                id: "php",
                name: "PHP",
                icon: IconCode,
                category: "Backend",
                description: "A popular general-purpose scripting language.",
                whyWeUseIt: "Widely used for web development.",
                features: ["Server-side Scripting", "Database Integration", "Widely Supported", "Open Source"],
                codeSnippet: `<?php echo "Hello World"; ?>`,
            },
            {
                id: "razerpay",
                name: "RazerPay",
                icon: IconCloud,
                category: "Backend",
                description: "Payment gateway solutions.",
                whyWeUseIt: "Facilitates offline-to-online payments.",
                features: ["e-wallet", "Credit Card", "Online Banking", "Secure"],
                codeSnippet: `// Payment integration`,
            },
            {
                id: "serverless",
                name: "Serverless",
                icon: IconServer,
                category: "Backend",
                description: "Cloud-native development model.",
                whyWeUseIt: "Reduces infrastructure management overhead and scales automatically.",
                features: ["Auto-Scaling", "Pay-per-Use", "Event-Triggered", "Reduced Ops"],
                codeSnippet: `export const handler = async (event) => {
  return { statusCode: 200, body: 'Hello!' };
};`,
            },
        ],
    },
    {
        id: "database",
        name: "Database",
        items: [
            {
                id: "postgresql",
                name: "PostgreSQL",
                icon: IconDatabase,
                category: "Database",
                description: "The World's Most Advanced Open Source Relational Database.",
                whyWeUseIt: "Reliable, robust, and feature-rich, perfect for structured data.",
                features: ["ACID Compliance", "JSON Support", "Extensibility", "Concurrency"],
                codeSnippet: `SELECT * FROM users WHERE active = true;`,
            },
            {
                id: "mongodb",
                name: "MongoDB",
                icon: IconBrandMongodb,
                category: "Database",
                description: "The application data platform.",
                whyWeUseIt: "Flexible document schema fits well with rapidly evolving data.",
                features: ["Document-Oriented", "Scalability", "High Availability", "Aggregation Framework"],
                codeSnippet: `db.collection('users').find({ status: "active" })`,
            },
            {
                id: "redis",
                name: "Redis",
                icon: IconDatabase,
                category: "Database",
                description: "In-memory data structure store.",
                whyWeUseIt: "Used for caching and real-time data processing.",
                features: ["In-Memory", "Key-Value Store", "Pub/Sub", "Persistence"],
                codeSnippet: `await redis.set('key', 'value');`,
            },
            {
                id: "sql",
                name: "SQL",
                icon: IconDatabase,
                category: "Database",
                description: "Standard language for storing, manipulating and retrieving data.",
                whyWeUseIt: "Universal standard for relational databases.",
                features: ["Query Language", "Standardized", "Powerful", "Declarative"],
                codeSnippet: `SELECT * FROM table;`,
            },
            {
                id: "pl-sql",
                name: "PL/SQL",
                icon: IconDatabase,
                category: "Database",
                description: "Oracle's procedural extension for SQL.",
                whyWeUseIt: "Enhances SQL with procedural capabilities.",
                features: ["Procedural", "Integrated", "High Performance", "Portable"],
                codeSnippet: `BEGIN
   DBMS_OUTPUT.PUT_LINE('Hello World');
END;`,
            },
            {
                id: "oracle-db",
                name: "Oracle Database",
                icon: IconDatabase,
                category: "Database",
                description: "Multi-model database management system.",
                whyWeUseIt: "Enterprise-grade reliability and scalability.",
                features: ["Reliability", "Scalability", "Security", "Analytics"],
                codeSnippet: `SELECT * FROM dual;`,
            },
            {
                id: "supabase",
                name: "Supabase",
                icon: IconDatabase,
                category: "Database",
                description: "The Open Source Firebase alternative.",
                whyWeUseIt: "Provides a full backend-as-a-service with Postgres.",
                features: ["Database", "Auth", "Storage", "Realtime"],
                codeSnippet: `const { data, error } = await supabase.from('countries').select()`,
            },
            {
                id: "prisma",
                name: "Prisma",
                icon: IconDatabase,
                category: "Database",
                description: "Next-generation Node.js and TypeScript ORM.",
                whyWeUseIt: "Simplifies database access with a type-safe API.",
                features: ["Type-Safe", "Auto-generated Client", "Migrations", "Studio"],
                codeSnippet: `const user = await prisma.user.create({ data: { name: 'Alice' } })`,
            },
            {
                id: "drizzle",
                name: "Drizzle ORM",
                icon: IconDatabase,
                category: "Database",
                description: "TypeScript ORM that lets you sleep at night.",
                whyWeUseIt: "Lightweight, type-safe, and flexible.",
                features: ["Type-Safe", "Lightweight", "SQL-like", "Zero-dependencies"],
                codeSnippet: `const result = await db.select().from(users);`,
            },
        ],
    },
    {
        id: "devops-cloud",
        name: "DevOps & Cloud",
        items: [
            {
                id: "coolify",
                name: "Coolify",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Open-source & self-hostable Heroku / Netlify / Vercel alternative.",
                whyWeUseIt: "Allows us to host applications on our own VPS freely.",
                features: ["Self-Hosted", "Git Integration", "Auto-SSL", "Database Support"],
                codeSnippet: `curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash`,
            },
            {
                id: "dokploy",
                name: "Dokploy",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Open source PaaS to deploy applications.",
                whyWeUseIt: "Lightweight, Docker-native deployment solution.",
                features: ["Docker-Native", "Easy Setup", "Database Management", "Monitoring"],
                codeSnippet: `curl -sSL https://dokploy.com/install.sh | sh`,
            },
            {
                id: "aws",
                name: "AWS",
                icon: IconBrandAws,
                category: "DevOps & Cloud",
                description: "Amazon Web Services.",
                whyWeUseIt: "The most comprehensive cloud platform.",
                features: ["Global Infrastructure", "Broad Services", "Security", "Scalability"],
                metadata: { "Type": "Public Cloud", "Pricing": "Pay-as-you-go" },
            },
            {
                id: "docker",
                name: "Docker",
                icon: IconBrandDocker,
                category: "DevOps & Cloud",
                description: "OS-level virtualization to deliver software in packages.",
                whyWeUseIt: "Ensures consistency across different environments.",
                features: ["Containerization", "Isolation", "Portability", "Microservices"],
                codeSnippet: `docker run hello-world`,
            },
            {
                id: "terraform",
                name: "Terraform",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Infrastructure as Code software tool.",
                whyWeUseIt: "Allows us to define and provision infrastructure using code.",
                features: ["IaC", "Multi-Cloud", "State Management", "Modularity"],
                codeSnippet: `resource "aws_instance" "web" {}`,
            },
            {
                id: "jenkins",
                name: "Jenkins",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "Open source automation server.",
                whyWeUseIt: "Automates parts of software development related to building, testing, and deploying.",
                features: ["CI/CD", "Plugins", "Distributed Builds", "Extensible"],
                codeSnippet: `pipeline { agent any; stages { stage('Build') { steps { sh 'make' } } } }`,
            },
            {
                id: "github-actions",
                name: "GitHub Actions",
                icon: IconCode,
                category: "DevOps & Cloud",
                description: "Automate your workflow from idea to production.",
                whyWeUseIt: "Integrated CI/CD directly within GitHub.",
                features: ["CI/CD", "Workflow Automation", "Marketplace", "Linux/macOS/Windows"],
                codeSnippet: `- name: Check out repository code
  uses: actions/checkout@v3`,
            },
            {
                id: "google-cloud",
                name: "Google Cloud",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Suite of cloud computing services.",
                whyWeUseIt: "Powerful data analytics and machine learning services.",
                features: ["Compute", "Storage", "BigQuery", "AI/ML"],
                metadata: { "Type": "Public Cloud", "Pricing": "Pay-as-you-go" },
            },
            {
                id: "azure",
                name: "Azure",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Cloud computing service created by Microsoft.",
                whyWeUseIt: "Strong enterprise integration and globally distributed data centers.",
                features: ["Hybrid Cloud", "AI", "Integration", "Security"],
                metadata: { "Type": "Public Cloud", "Pricing": "Pay-as-you-go" },
            },
            {
                id: "cloudflare-devops",
                name: "Cloudflare",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Web performance and security company.",
                whyWeUseIt: "Provides CDN, DNS, and DDoS protection.",
                features: ["CDN", "DNS", "DDoS Protection", "Workers"],
            },
            {
                id: "hetzner",
                name: "Hetzner",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "Cloud and dedicated hosting provider.",
                whyWeUseIt: "High-performance hardware at competitive prices.",
                features: ["Dedicated Servers", "Cloud", "Storage", "Reliability"],
                metadata: { "Location": "Germany/Finland", "Type": "Bare Metal/Cloud" },
            },
            {
                id: "contabo",
                name: "Contabo",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "German cloud computing and web hosting company.",
                whyWeUseIt: "Offers VPS and dedicated servers with great price-to-performance ratio.",
                features: ["VPS", "VDS", "Dedicated Servers", "Global Data Centers"],
                metadata: { "Focus": "Price/Performance", "Location": "Global" },
            },
            {
                id: "vps",
                name: "VPS",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "Virtual Private Server.",
                whyWeUseIt: "Provides dedicated resources and full root access.",
                features: ["Root Access", "Isolation", "Customization", "Cost-Effective"],
                codeSnippet: `ssh user@vps-ip`,
            },
            {
                id: "kubernetes",
                name: "Kubernetes",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Open-source system for automating deployment, scaling, and management of containerized applications.",
                whyWeUseIt: "Orchestrates containers at scale.",
                features: ["Orchestration", "Scaling", "Self-healing", "Service Discovery"],
                codeSnippet: `kubectl get pods`,
            },
            {
                id: "traefik",
                name: "Traefik",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Modern HTTP reverse proxy and load balancer.",
                whyWeUseIt: "Automatically discovers services and routes traffic.",
                features: ["Auto Discovery", "Load Balancing", "Let's Encrypt", "Metrics"],
                codeSnippet: `labels:
  - "traefik.enable=true"`,
            },
            {
                id: "opentelemetry",
                name: "OpenTelemetry",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "Collection of tools, APIs, and SDKs.",
                whyWeUseIt: "Standardizes the generation and collection of telemetry data.",
                features: ["Tracing", "Metrics", "Logs", "Standardization"],
                codeSnippet: `// OTel SDK setup`,
            },
            {
                id: "grafana",
                name: "Grafana",
                icon: IconLayout,
                category: "DevOps & Cloud",
                description: "Open source analytics and interactive visualization web application.",
                whyWeUseIt: "Visualizes metrics, logs, and traces from multiple sources.",
                features: ["Dashboards", "Alerting", "Plugins", "Mixed Data Sources"],
                codeSnippet: `// Create dashboard`,
            },
            {
                id: "prometheus",
                name: "Prometheus",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "Open-source systems monitoring and alerting toolkit.",
                whyWeUseIt: "Collects and stores metrics as time series data.",
                features: ["Multi-dimensional Data Model", "PromQL", "Alert Manager", "Pull Model"],
                codeSnippet: `scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']`,
            },
            {
                id: "ansible",
                name: "Ansible",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "Open-source software provisioning, configuration management, and application-deployment tool.",
                whyWeUseIt: "Automates IT infrastructure.",
                features: ["Agentless", "Playbooks", "Idempotency", "Modules"],
                codeSnippet: `- name: Install Nginx
  apt:
    name: nginx
    state: present`,
            },
            {
                id: "sentry",
                name: "Sentry",
                icon: IconShieldLock,
                category: "DevOps & Cloud",
                description: "Application performance monitoring and error tracking.",
                whyWeUseIt: "Helps us see what matters, solve quicker, and learn continuously.",
                features: ["Error Tracking", "Performance Monitoring", "Release Health", "Profiling"],
                codeSnippet: `Sentry.init({ dsn: "..." });`,
            },
            {
                id: "linux",
                name: "Linux",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "Open source operating system kernel.",
                whyWeUseIt: "Foundation for our servers and development environments.",
                features: ["Open Source", "Stability", "Security", "Flexibility"],
                codeSnippet: `uname -a`,
            },
            {
                id: "debian",
                name: "Debian",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "The Universal Operating System.",
                whyWeUseIt: "Stable and secure Linux distribution for servers.",
                features: ["Stability", "APT", "Free Software", "Community"],
                codeSnippet: `apt update && apt install ...`,
            },
            {
                id: "fedora",
                name: "Fedora",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "Innovative Linux distribution.",
                whyWeUseIt: "Upstream for RHEL, providing latest features.",
                features: ["Bleeding Edge", "DNF", "SELinux", "GNOME"],
                codeSnippet: `dnf install ...`,
            },
            {
                id: "rocky",
                name: "Rocky Linux",
                icon: IconServer,
                category: "DevOps & Cloud",
                description: "Downstream, complete binary-compatible successor to CentOS.",
                whyWeUseIt: "Enterprise-grade stability for production servers.",
                features: ["Enterprise", "Stability", "RHEL-compatible", "Long-term Support"],
                codeSnippet: `yum install ...`,
            },
            {
                id: "arch",
                name: "Arch Linux",
                icon: IconTerminal2,
                category: "DevOps & Cloud",
                description: "A lightweight and flexible Linux distribution.",
                whyWeUseIt: "Rolling release model for latest software (dev environments).",
                features: ["Rolling Release", "Pacman", "AUR", "Customization"],
                codeSnippet: `pacman -Syu`,
            },
        ],
    },
    {
        id: "ui-ux",
        name: "UI/UX",
        items: [
            {
                id: "figma",
                name: "Figma",
                icon: IconBrandFigma,
                category: "UI/UX",
                description: "The collaborative interface design tool.",
                whyWeUseIt: "Enables real-time collaboration between designers and developers.",
                features: ["Real-time Collaboration", "Prototyping", "Design Systems", "Plugins"],
                metadata: { "Platform": "Web/Desktop", "Use Case": "Design" },
            },
            {
                id: "framer",
                name: "Framer Motion",
                icon: IconLayout,
                category: "UI/UX",
                description: "A production-ready motion library for React.",
                whyWeUseIt: "Adds complex animations and gestures to our UI.",
                features: ["Declarative Animations", "Gestures", "Layout Transitions", "SVG Paths"],
                codeSnippet: `<motion.div animate={{ x: 100 }} />`,
            },
        ],
    },
    {
        id: "security",
        name: "Security",
        items: [
            {
                id: "cloudflare-sec",
                name: "Cloudflare",
                icon: IconShieldLock,
                category: "Security",
                description: "Security features.",
                whyWeUseIt: "WAF and DDoS protection.",
                features: ["WAF", "Zero Trust", "Access", "Shield"],
                codeSnippet: `// Cloudflare settings`,
            },
            {
                id: "snyk",
                name: "Snyk",
                icon: IconShieldLock,
                category: "Security",
                description: "Developer security platform.",
                whyWeUseIt: "Finds and fixes vulnerabilities in code, dependencies, containers, and IaC.",
                features: ["Vulnerability Scanning", "License Compliance", "Container Security", "IaC Security"],
                codeSnippet: `snyk test`,
            },
            {
                id: "sonarqube",
                name: "SonarQube",
                icon: IconShieldLock,
                category: "Security",
                description: "Code quality and security.",
                whyWeUseIt: "Continuous inspection of code quality.",
                features: ["Code Smells", "Bugs", "Vulnerabilities", "Quality Gates"],
                codeSnippet: `// SonarQube analysis`,
            },
            {
                id: "owasp-zap",
                name: "OWASP ZAP",
                icon: IconShieldLock,
                category: "Security",
                description: "Zed Attack Proxy.",
                whyWeUseIt: "Finds vulnerabilities in web applications.",
                features: ["DAST", "Automated Scanner", "Proxy", "Fuzzing"],
                codeSnippet: `// ZAP scan`,
            },
            {
                id: "trivy",
                name: "Trivy",
                icon: IconShieldLock,
                category: "Security",
                description: "Comprehensive security scanner.",
                whyWeUseIt: "Scans containers, filesystems, and git repositories.",
                features: ["Vulnerability Scanning", "Misconfiguration Scanning", "Secret Scanning", "SBOM"],
                codeSnippet: `trivy image python:3.4-alpine`,
            },
            {
                id: "checkov",
                name: "Checkov",
                icon: IconShieldLock,
                category: "Security",
                description: "Static code analysis for infrastructure-as-code.",
                whyWeUseIt: "Prevents cloud misconfigurations.",
                features: ["IaC Scanning", "Policy as Code", "Compliance", "Integration"],
                codeSnippet: `checkov -d .`,
            },
            {
                id: "hashicorp-vault",
                name: "Hashicorp Vault",
                icon: IconLock,
                category: "Security",
                description: "Manage secrets and protect sensitive data.",
                whyWeUseIt: "Securely stores and strictly controls access to tokens, passwords, certificates, and encryption keys.",
                features: ["Secrets Management", "Encryption as a Service", "Identity-based Access", "Dynamic Secrets"],
                codeSnippet: `vault write secret/hello value=world`,
            },
            {
                id: "burpsuite",
                name: "BurpSuite",
                icon: IconShieldLock,
                category: "Security",
                description: "Web application security testing.",
                whyWeUseIt: "Advanced manual and automated penetration testing.",
                features: ["Proxy", "Scanner", "Intruder", "Repeater"],
                codeSnippet: `// Security testing`,
            },
            {
                id: "powerpipe",
                name: "Powerpipe",
                icon: IconTerminal2,
                category: "Security",
                description: "Dashboards for DevOps, FinOps, GreenOps, and SecOps.",
                whyWeUseIt: "Visualizes cloud configurations and compliance status.",
                features: ["Code-First Dashboards", "Benchmarks", "Relationship Graphs", "Export"],
                codeSnippet: `powerpipe server`,
            },
            {
                id: "steampipe",
                name: "Steampipe",
                icon: IconTerminal2,
                category: "Security",
                description: "The zero-ETL approach to query cloud APIs with SQL.",
                whyWeUseIt: "Query cloud infrastructure as if it were a database.",
                features: ["SQL Interface", "Live Data", "Benchmarks", "Plugins"],
                codeSnippet: `select * from aws_s3_bucket;`,
            },
            {
                id: "prowler",
                name: "Prowler",
                icon: IconShieldLock,
                category: "Security",
                description: "Open Cloud Security Security tool.",
                whyWeUseIt: "Performs security best practices assessments, audits, and hardening.",
                features: ["CIS Benchmarks", "Compliance", "Multi-Cloud", "HTML Reports"],
                codeSnippet: `prowler aws`,
            },
            {
                id: "crowdsec",
                name: "CrowdSec",
                icon: IconShieldLock,
                category: "Security",
                description: "Open-source and collaborative security.",
                whyWeUseIt: "Detects and blocks threats using a community-driven reputation database.",
                features: ["Behavioral Detection", "Collaborative", "Firewall Bouncers", "Threat Intelligence"],
                codeSnippet: `cscli metrics`,
            },
            {
                id: "falco",
                name: "Falco",
                icon: IconShieldLock,
                category: "Security",
                description: "Cloud-native runtime security.",
                whyWeUseIt: "Detects abnormal behavior in applications and containers.",
                features: ["Runtime Security", "Rule-based Engine", "Container Aware", "Threat Detection"],
                codeSnippet: `// Falco rule`,
            },
            {
                id: "wazuh",
                name: "Wazuh",
                icon: IconShieldLock,
                category: "Security",
                description: "Unified XDR and SIEM protection.",
                whyWeUseIt: "Provides endpoint security and compliance monitoring.",
                features: ["Malware Detection", "File Integrity Monitoring", "Log Analysis", "Vulnerability Detector"],
                codeSnippet: `// Agent config`,
            },

            {
                id: "modsecurity",
                name: "ModSecurity",
                icon: IconShieldLock,
                category: "Security",
                description: "Open source web application firewall (WAF).",
                whyWeUseIt: "Protects web applications from attacks.",
                features: ["WAF", "Real-time Monitoring", "Logging", "OWASP Core Rule Set"],
                codeSnippet: `SecRuleEngine On`,
            },
            {
                id: "certbot",
                name: "Certbot",
                icon: IconShieldLock,
                category: "Security",
                description: "Free, automated SSL/TLS certificates.",
                whyWeUseIt: "Enables HTTPS via Let's Encrypt.",
                features: ["Automation", "SSL/TLS", "Free", "Renewal"],
                codeSnippet: `certbot --nginx`,
            },
            {
                id: "openvpn",
                name: "OpenVPN",
                icon: IconLock,
                category: "Security",
                description: "Virtual Private Network system.",
                whyWeUseIt: "Secure remote access and site-to-site connections.",
                features: ["Encryption", "Authentication", "Cross-platform", "Tunneling"],
                codeSnippet: `openvpn --config client.ovpn`,
            },
            {
                id: "wireguard",
                name: "WireGuard",
                icon: IconLock,
                category: "Security",
                description: "Modern, simple, and fast VPN.",
                whyWeUseIt: "High-performance and secure VPN tunnel.",
                features: ["Simple Codebase", "High Performance", "Cryptography", "Cross-Platform"],
                codeSnippet: `wg-quick up wg0`,
            },
            {
                id: "kali",
                name: "Kali Linux",
                icon: IconTerminal2,
                category: "Security",
                description: "Advanced Penetration Testing Linux distribution.",
                whyWeUseIt: "The industry standard for penetration testing and security research.",
                features: ["Penetration Testing", "Security Research", "Forensics", "Reverse Engineering"],
                codeSnippet: `sudo apt install kali-linux-large`,
            },
            {
                id: "oauth",
                name: "OAuth 2.0",
                icon: IconShieldLock,
                category: "Security",
                description: "Industry-standard protocol for authorization.",
                whyWeUseIt: "Securely delegates access to server resources.",
                features: ["Authorization", "Access Tokens", "Scopes", "Secure Delegation"],
                codeSnippet: `GET /authorize?response_type=code&client_id=...`,
            },
            {
                id: "encryption",
                name: "AES-256",
                icon: IconLock,
                category: "Security",
                description: "Advanced Encryption Standard.",
                whyWeUseIt: "Ensures data is encrypted at rest and in transit.",
                features: ["Symmetric Key", "High Security", "Standardized", "Fast"],
                codeSnippet: `const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);`,
            },
        ],
    },
    {
        id: "network-security",
        name: "Network Security",
        items: [
            {
                id: "pfsense",
                name: "pfSense",
                icon: IconShieldLock,
                category: "Network Security",
                description: "Open source firewall and router distribution.",
                whyWeUseIt: "Robust, enterprise-class firewall based on FreeBSD.",
                features: ["Firewall", "VPN", "Router", "Traffic Shaping"],
                codeSnippet: `// Firewall rules`,
            },
            {
                id: "opnsense",
                name: "OPNsense",
                icon: IconShieldLock,
                category: "Network Security",
                description: "Open source, easy-to-use firewall and routing platform.",
                whyWeUseIt: "Modern, secure, and feature-rich firewall alternative.",
                features: ["Firewall", "Two-Factor Auth", "Suricata", "Plugins"],
                codeSnippet: `// IDS/IPS config`,
            },
            {
                id: "suricata",
                name: "Suricata",
                icon: IconShieldLock,
                category: "Network Security",
                description: "High performance Network IDS, IPS and NSM engine.",
                whyWeUseIt: "Deep packet inspection and threat protection.",
                features: ["IDS/IPS", "NSM", "PCAP", "Protocol Detection"],
                codeSnippet: `suricata -c /etc/suricata/suricata.yaml`,
            },
            {
                id: "fail2ban",
                name: "Fail2Ban",
                icon: IconTerminal2,
                category: "Network Security",
                description: "Intrusion prevention software framework.",
                whyWeUseIt: "Protects servers from brute-force attacks.",
                features: ["Log Monitoring", "Ban IPs", "Configurable", "Lightweight"],
                codeSnippet: `systemctl status fail2ban`,
            },
            {
                id: "ufw",
                name: "UFW",
                icon: IconTerminal2,
                category: "Network Security",
                description: "Uncomplicated Firewall.",
                whyWeUseIt: "Simplifies firewall configuration on Linux.",
                features: ["Easy Configuration", "IPTables Wrapper", "Profiles", "Logging"],
                codeSnippet: `ufw allow 22/tcp`,
            },
            {
                id: "openvpn",
                name: "OpenVPN",
                icon: IconLock,
                category: "Network Security",
                description: "Virtual Private Network system.",
                whyWeUseIt: "Secure remote access and site-to-site connections.",
                features: ["Encryption", "Authentication", "Cross-platform", "Tunneling"],
                codeSnippet: `openvpn --config client.ovpn`,
            },
            {
                id: "wireguard",
                name: "WireGuard",
                icon: IconLock,
                category: "Network Security",
                description: "Modern, simple, and fast VPN.",
                whyWeUseIt: "High-performance and secure VPN tunnel.",
                features: ["Simple Codebase", "High Performance", "Cryptography", "Cross-Platform"],
                codeSnippet: `wg-quick up wg0`,
            },
            {
                id: "tailscale",
                name: "Tailscale",
                icon: IconLock,
                category: "Network Security",
                description: "Zero config VPN for building secure networks.",
                whyWeUseIt: "Connects devices securely and easily.",
                features: ["Mesh Network", "SSO", "ACLs", "MagicDNS"],
                codeSnippet: `tailscale up`,
            },
            {
                id: "zerotier",
                name: "ZeroTier",
                icon: IconLock,
                category: "Network Security",
                description: "Global Area Networking.",
                whyWeUseIt: "Connects devices as if they were on the same physical switch.",
                features: ["Virtual Network", "P2P", "Encryption", "Central Management"],
                codeSnippet: `zerotier-cli join <network_id>`,
            },
        ],
    },
    {
        id: "automation",
        name: "Automation",
        items: [
            {
                id: "n8n",
                name: "n8n",
                icon: IconTerminal2,
                category: "Automation",
                description: "Workflow automation tool.",
                whyWeUseIt: "Fair-code workflow automation with customizability.",
                features: ["Workflow Editor", "Integrations", "Self-Hosted", "Webhooks"],
            },
            {
                id: "make-com",
                name: "make.com",
                icon: IconTerminal2,
                category: "Automation",
                description: "Visual platform to build and automate tasks.",
                whyWeUseIt: "Easy to use interface for complex automations.",
                features: ["Visual Editor", "Scenarios", "Templates", "Apps"],
            },
            {
                id: "zapier",
                name: "Zapier",
                icon: IconTerminal2,
                category: "Automation",
                description: "Automation tool that moves info between web apps.",
                whyWeUseIt: "Connects thousands of apps with no code.",
                features: ["Zaps", "Triggers", "Actions", "Multi-step"],
            },
        ],
    },
    {
        id: "compliance",
        name: "Compliance",
        items: [
            {
                id: "iso-27001",
                name: "ISO 27001",
                icon: IconShieldLock,
                category: "Compliance",
                description: "International standard for information security.",
                whyWeUseIt: "Demonstrates commitment to information security management.",
                features: ["ISMS", "Risk Management", "Controls", "Audit"],
                codeSnippet: `// Certification Process`,
            },
            {
                id: "nist-800-53",
                name: "NIST 800-53",
                icon: IconShieldLock,
                category: "Compliance",
                description: "Security and Privacy Controls for Information Systems.",
                whyWeUseIt: "Guideline for federal standards.",
                features: ["Security Controls", "Privacy", "Risk Management", "Framework"],
                codeSnippet: `// Federal Compliance`,
            },
            {
                id: "gdpr",
                name: "GDPR",
                icon: IconShieldLock,
                category: "Compliance",
                description: "General Data Protection Regulation.",
                whyWeUseIt: "Protects data privacy for individuals in the EU.",
                features: ["Data Rights", "Consent", "Privacy by Design", "DPO"],
                codeSnippet: `// Data Privacy`,
            },
            {
                id: "hipaa",
                name: "HIPAA",
                icon: IconShieldLock,
                category: "Compliance",
                description: "Health Insurance Portability and Accountability Act.",
                whyWeUseIt: "Protects sensitive patient health information.",
                features: ["Privacy Rule", "Security Rule", "PHI Protection", "Safeguards"],
                codeSnippet: `// Health Data`,
            },
            {
                id: "pci-dss",
                name: "PCI DSS",
                icon: IconShieldLock,
                category: "Compliance",
                description: "Payment Card Industry Data Security Standard.",
                whyWeUseIt: "Secures credit card transactions.",
                features: ["Secure Network", "Data Protection", "Access Control", "Monitoring"],
                codeSnippet: `// Payment Security`,
            },
            {
                id: "soc-2",
                name: "SOC 2",
                icon: IconShieldLock,
                category: "Compliance",
                description: "Service Organization Control 2.",
                whyWeUseIt: "Manages data based on trust service criteria.",
                features: ["Security", "Availability", "Processing Integrity", "Confidentiality"],
            },
        ],
    },
];

// Validate the data (runtime check)
// Note: We skip Icon validation in runtime parse as it's a component
if (process.env.NODE_ENV === "development") {
    console.log("Tech Stack data loaded.");
}
