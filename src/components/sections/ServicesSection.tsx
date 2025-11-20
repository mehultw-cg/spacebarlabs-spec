"use client";

import { useState } from "react";
import { BentoRow } from "@/components/ui/bento-row";
import { 
  Lightbulb, Briefcase, FlaskConical as Flask, Code, Server, Database, 
  Wrench, Shield, Cpu, Headphones, ShieldAlert as ShieldX, FileCheck, 
  Cloud, Globe, Lock, PenTool, TrendingUp, Search, Share2, FileText, 
  Video, Camera, Image as ImageIcon, Palette, ChevronDown 
} from "lucide-react";
import { validatedServices, securityNote } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BadgeProps } from "@/components/ui/badge";
import { ChevronUp } from "lucide-react";

// ... (imports remain the same)

// Icon mapping based on the schema
const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-6 w-6 text-neutral-500" />,
  Briefcase: <Briefcase className="h-6 w-6 text-neutral-500" />,
  Flask: <Flask className="h-6 w-6 text-neutral-500" />,
  Code: <Code className="h-6 w-6 text-neutral-500" />,
  Server: <Server className="h-6 w-6 text-neutral-500" />,
  Database: <Database className="h-6 w-6 text-neutral-500" />,
  Wrench: <Wrench className="h-6 w-6 text-neutral-500" />,
  Shield: <Shield className="h-6 w-6 text-neutral-500" />,
  Cpu: <Cpu className="h-6 w-6 text-neutral-500" />,
  Headphones: <Headphones className="h-6 w-6 text-neutral-500" />,
  ShieldX: <ShieldX className="h-6 w-6 text-neutral-500" />,
  FileCheck: <FileCheck className="h-6 w-6 text-neutral-500" />,
  Cloud: <Cloud className="h-6 w-6 text-neutral-500" />,
  Globe: <Globe className="h-6 w-6 text-neutral-500" />,
  Lock: <Lock className="h-6 w-6 text-neutral-500" />,
  PenTool: <PenTool className="h-6 w-6 text-neutral-500" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-neutral-500" />,
  Search: <Search className="h-6 w-6 text-neutral-500" />,
  Share2: <Share2 className="h-6 w-6 text-neutral-500" />,
  FileText: <FileText className="h-6 w-6 text-neutral-500" />,
  Video: <Video className="h-6 w-6 text-neutral-500" />,
  Camera: <Camera className="h-6 w-6 text-neutral-500" />,
  Image: <ImageIcon className="h-6 w-6 text-neutral-500" />,
  Palette: <Palette className="h-6 w-6 text-neutral-500" />,
};

import { AnimatePresence, motion } from "framer-motion";

// Helper to map tags to badge styles
const getBadgeStyle = (tag: string): { variant: BadgeProps["variant"]; className?: string } => {
  // User asked for: purple (security), orange (marketing), sky blue (cloud), dark blue (cloud?), green (data), 
  // bottlegreen (studio), yellow (coming-soon), magenta (core), pink (design), royal purple (dev).
  // Added background colors with low opacity for better visibility and aesthetics.
  
  switch (tag) {
    case "security": return { variant: "outline", className: "text-purple-600 border-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-400" };
    case "marketing": return { variant: "outline", className: "text-orange-600 border-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-400" };
    case "business": return { variant: "outline", className: "text-orange-600 border-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-400" };
    case "cloud": return { variant: "outline", className: "text-sky-600 border-sky-600 bg-sky-100 dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-400" };
    case "data": return { variant: "outline", className: "text-green-600 border-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-400" };
    case "studio": return { variant: "outline", className: "text-emerald-700 border-emerald-700 bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-500 dark:border-emerald-500" }; // Bottlegreen -> Emerald
    case "coming-soon": return { variant: "outline", className: "text-yellow-600 border-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-400" };
    case "core": return { variant: "outline", className: "text-fuchsia-600 border-fuchsia-600 bg-fuchsia-100 dark:bg-fuchsia-900/20 dark:text-fuchsia-400 dark:border-fuchsia-400" }; // Magenta -> Fuchsia
    case "design": return { variant: "outline", className: "text-pink-600 border-pink-600 bg-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-400" };
    case "dev": return { variant: "outline", className: "text-violet-700 border-violet-700 bg-violet-100 dark:bg-violet-900/20 dark:text-violet-500 dark:border-violet-500" }; // Royal purple -> Violet
    case "ops": return { variant: "outline", className: "text-blue-800 border-blue-800 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400" }; // Dark blue for ops (implied from "dark blue for cloud" duplicate or just fitting)
    default: return { variant: "outline" };
  }
};

// Helper to chunk array into groups of 3
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

// Pseudo-random index generator based on row index to avoid hydration mismatch
const getPseudoRandomIndex = (rowIndex: number): 0 | 1 | 2 => {
  // Simple deterministic pattern: 0, 1, 2, 1, 2, 0, ...
  const pattern = [0, 1, 2, 1, 2, 0]; 
  return pattern[rowIndex % pattern.length] as 0 | 1 | 2;
}

export function ServicesSection() {
  const rows = chunkArray(validatedServices, 3);
  const [isExpanded, setIsExpanded] = useState(false);

  // Assuming validatedServices is the source data, and we need to chunk it for BentoRow
  const servicesData = validatedServices; 
  const allRows = chunkArray(servicesData, 3);
  const visibleRows = isExpanded ? allRows : allRows.slice(0, 1); // Show only the first row initially

  const isAllVisible = visibleRows.length >= allRows.length;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="services" className="space-y-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Our Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From ideation to launch, we provide a full spectrum of software
            development services to help you succeed.
          </p>
        </div>

        <div className="flex flex-col gap-4 relative">
          <AnimatePresence initial={false}>
            {allRows.map((row, rowIndex) => {
              // Determine the state of this row
              const isFirst = rowIndex === 0;
              const isSecond = rowIndex === 1;
              
              // State logic:
              // - If expanded: All rows are "visible" (auto height, opacity 1)
              // - If collapsed:
              //   - First row: "visible"
              //   - Second row: "partial" (fixed height, opacity 1, with gradient)
              //   - Other rows: "hidden" (height 0, opacity 0)
              
              let variant = "hidden";
              if (isExpanded) {
                variant = "visible";
              } else {
                if (isFirst) variant = "visible";
                else if (isSecond) variant = "partial";
                else variant = "hidden";
              }

              const variants = {
                visible: { opacity: 1, height: "auto", marginTop: 0 },
                partial: { opacity: 1, height: 120, marginTop: 0 },
                hidden: { opacity: 0, height: 0, marginTop: 0 }
              };

              return (
                <motion.div 
                  key={rowIndex}
                  layout
                  initial="hidden"
                  animate={variant}
                  variants={variants}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className={cn(
                    "relative overflow-hidden", 
                    // Add a small negative margin to hidden items to prevent layout gaps if any
                    variant === "hidden" && "m-0 p-0"
                  )}
                >
                  <BentoRow
                    initialExpandedIndex={getPseudoRandomIndex(rowIndex)}
                    items={row.map((service) => {
                      const tags = service.tags ? service.tags : (service.tagLabel ? [service.tagLabel] : []);
                      const badges = tags.map(tag => ({
                        text: tag,
                        ...getBadgeStyle(tag)
                      }));

                      return {
                        id: service.id,
                        title: service.title,
                        description: service.description || "Coming Soon",
                        detail: service.detail,
                        icon: iconMap[service.icon],
                        badges: badges
                      };
                    })}
                  />
                  
                  {/* Gradient Overlay Button for the "partial" row */}
                  <AnimatePresence>
                    {variant === "partial" && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/90 to-white dark:from-black/0 dark:via-black/90 dark:to-black backdrop-blur-[2px] flex items-end justify-center pb-4 z-20"
                      >
                        <Button 
                          onClick={handleToggleExpand}
                          variant="outline"
                          className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-black group text-black dark:text-white shadow-lg"
                        >
                          Show More Services
                          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Collapse Button when all rows are visible */}
        {isExpanded && (
          <div className="flex justify-center mt-8">
             <Button 
                onClick={handleToggleExpand}
                variant="outline"
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-black group text-black dark:text-white"
              >
                Collapse Services
                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </Button>
          </div>
        )}

        <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Shield className="h-8 w-8" />
            </div>
                   {/* Security Note - Only show when all rows are visible or at least after some interaction? 
            User said "button shifts to the bottom... till all rows are displayed". 
            The security note is separate. I'll keep it at the bottom always. */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">{securityNote.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {securityNote.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
