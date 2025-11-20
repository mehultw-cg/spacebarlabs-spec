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

// Define Zod schemas
export const TechItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    icon: z.any(), // React component
    category: z.string(),
    description: z.string(),
    whyWeUseIt: z.string(),
    features: z.array(z.string()),
    codeSnippet: z.string(),
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
}

function getUser(user: User) {
  return "Hello, " + user.name;
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
                codeSnippet: `const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Node!');
});

server.listen(3000);`,
            },
            {
                id: "python",
                name: "Python",
                icon: IconBrandPython,
                category: "Backend",
                description: "A programming language that lets you work quickly.",
                whyWeUseIt: "Great for data processing, AI/ML integration, and scripting tasks.",
                features: ["Readable Syntax", "Rich Standard Library", "Dynamic Typing", "Multi-Paradigm"],
                codeSnippet: `def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
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
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
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
                codeSnippet: `SELECT * FROM users 
WHERE active = true 
ORDER BY created_at DESC;`,
            },
            {
                id: "mongodb",
                name: "MongoDB",
                icon: IconBrandMongodb,
                category: "Database",
                description: "The application data platform.",
                whyWeUseIt: "Flexible document schema fits well with rapidly evolving data.",
                features: ["Document-Oriented", "Scalability", "High Availability", "Aggregation Framework"],
                codeSnippet: `db.collection('users').find({
  status: "active"
}).sort({ createdAt: -1 })`,
            },
            {
                id: "redis",
                name: "Redis",
                icon: IconDatabase,
                category: "Database",
                description: "In-memory data structure store.",
                whyWeUseIt: "Used for caching and real-time data processing.",
                features: ["In-Memory", "Key-Value Store", "Pub/Sub", "Persistence"],
                codeSnippet: `await redis.set('key', 'value');
const value = await redis.get('key');`,
            },
        ],
    },
    {
        id: "devops-cloud",
        name: "DevOps & Cloud",
        items: [
            {
                id: "aws",
                name: "AWS",
                icon: IconBrandAws,
                category: "DevOps & Cloud",
                description: "Amazon Web Services.",
                whyWeUseIt: "The most comprehensive cloud platform.",
                features: ["Global Infrastructure", "Broad Services", "Security", "Scalability"],
                codeSnippet: `aws s3 cp myfile.txt s3://my-bucket/`,
            },
            {
                id: "docker",
                name: "Docker",
                icon: IconBrandDocker,
                category: "DevOps & Cloud",
                description: "OS-level virtualization to deliver software in packages.",
                whyWeUseIt: "Ensures consistency across different environments.",
                features: ["Containerization", "Isolation", "Portability", "Microservices"],
                codeSnippet: `FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`,
            },
            {
                id: "terraform",
                name: "Terraform",
                icon: IconCloud,
                category: "DevOps & Cloud",
                description: "Infrastructure as Code software tool.",
                whyWeUseIt: "Allows us to define and provision infrastructure using code.",
                features: ["IaC", "Multi-Cloud", "State Management", "Modularity"],
                codeSnippet: `resource "aws_instance" "web" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}`,
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
                codeSnippet: `// Figma Plugin API
figma.createRectangle();`,
            },
            {
                id: "framer",
                name: "Framer Motion",
                icon: IconLayout,
                category: "UI/UX",
                description: "A production-ready motion library for React.",
                whyWeUseIt: "Adds complex animations and gestures to our UI.",
                features: ["Declarative Animations", "Gestures", "Layout Transitions", "SVG Paths"],
                codeSnippet: `<motion.div
  animate={{ x: 100 }}
  transition={{ delay: 1 }}
/>`,
            },
        ],
    },
    {
        id: "security",
        name: "Security",
        items: [
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
];

// Validate the data (runtime check)
// Note: We skip Icon validation in runtime parse as it's a component
if (process.env.NODE_ENV === "development") {
    console.log("Tech Stack data loaded.");
}
