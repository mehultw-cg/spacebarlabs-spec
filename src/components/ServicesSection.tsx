import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Briefcase,
  FlaskConical,
  Code,
  Server,
  Database,
  Wrench,
  Shield,
  Cpu,
  Headphones,
  ShieldX,
  FileCheck,
  Cloud,
  Globe,
  Lock,
  PenTool,
  TrendingUp,
  Search,
  Share2,
  FileText,
  Video,
  Camera,
  Image,
  Palette,
} from "lucide-react";
import { servicesData, securityNote } from "@/lib/data/services";

// Icon mapping
const iconMap = {
  Lightbulb: Lightbulb, // Brainstorming
  Briefcase: Briefcase, // Business Consulting
  FlaskConical: FlaskConical, // UI UX Research
  Code: Code, // Frontend Development
  Server: Server, // Backend Development
  Database: Database, // Database Solutions
  Wrench: Wrench, // DevOps
  Shield: Shield, // DevSecOps
  Cpu: Cpu, // SysAdmin
  Headphones: Headphones, // Support
  ShieldX: ShieldX,   // Vulnerability Assessment
  FileCheck: FileCheck, // Security Auditing
  Cloud: Cloud, // Cloud Security Assessment
  Globe: Globe, // Web Penetration Testing
  Lock: Lock, // Basic Application Security
  PenTool: PenTool, // Content Writing
  TrendingUp: TrendingUp,   // Marketing Strategy & Execution
  Search: Search, // SEO Optimization
  Share2: Share2, // Social Media Management
  FileText: FileText, // Copywriting
  Video: Video, // Content Creation
  Camera: Camera, // Videography
  Image: Image, // Photography
  Palette: Palette, // Graphic Design
};

// Tag styling (using kebab-case to match data)
const tagStyles = {
  "coming-soon": "bg-yellow-100 text-yellow-800 border-yellow-300",
  security: "bg-red-100 text-red-800 border-red-300",
  marketing: "bg-blue-100 text-blue-800 border-blue-300",
  studio: "bg-purple-100 text-purple-800 border-purple-300",
};

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of services to bring your digital vision
            to life, with a strong emphasis on security and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            const firstTag = service.tags?.[0];
            return (
              <Card key={service.id} className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-6 w-6 text-primary" />
                    {service.tagLabel && (
                      <Badge
                        variant="secondary"
                        className={tagStyles[firstTag || "coming-soon"]}
                      >
                        {service.tagLabel}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {service.description && (
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted/50 p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">{securityNote.title}</h3>
          <p className="text-muted-foreground">{securityNote.content}</p>
        </div>
      </div>
    </section>
  );
}
