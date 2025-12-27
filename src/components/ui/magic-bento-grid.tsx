"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MagicBentoCardProps {
  id: string;
  title: string;
  description: string;
  detail?: string;
  icon: React.ElementType;
  badges: string[];
  colSpan?: number;
  isComingSoon?: boolean;
  className?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  rowIndex?: number;   // For neighbor glow detection
  cardIndex?: number;  // For neighbor glow detection
}

// Tag color mapping with light and dark shades for gradient
const tagColors: Record<string, { 
  bg: string; 
  text: string; 
  border: string; 
  colorHex: string;
  lightHex: string;
  darkHex: string;
}> = {
  business: { bg: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/20", colorHex: "#f97316", lightHex: "#fdba74", darkHex: "#c2410c" },
  core: { bg: "bg-fuchsia-500/10", text: "text-fuchsia-500", border: "border-fuchsia-500/20", colorHex: "#d946ef", lightHex: "#f0abfc", darkHex: "#a21caf" },
  dev: { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20", colorHex: "#10b981", lightHex: "#6ee7b7", darkHex: "#047857" },
  data: { bg: "bg-lime-500/10", text: "text-lime-500", border: "border-lime-500/20", colorHex: "#84cc16", lightHex: "#bef264", darkHex: "#4d7c0f" },
  ops: { bg: "bg-sky-500/10", text: "text-sky-500", border: "border-sky-500/20", colorHex: "#0ea5e9", lightHex: "#7dd3fc", darkHex: "#0369a1" },
  security: { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/20", colorHex: "#ef4444", lightHex: "#fca5a5", darkHex: "#b91c1c" },
  cloud: { bg: "bg-blue-600/10", text: "text-blue-600", border: "border-blue-600/20", colorHex: "#2563eb", lightHex: "#93c5fd", darkHex: "#1d4ed8" },
  studio: { bg: "bg-green-700/10", text: "text-green-700", border: "border-green-700/20", colorHex: "#15803d", lightHex: "#86efac", darkHex: "#14532d" },
  marketing: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20", colorHex: "#f59e0b", lightHex: "#fcd34d", darkHex: "#b45309" },
  design: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/20", colorHex: "#ec4899", lightHex: "#f9a8d4", darkHex: "#be185d" },
  "coming-soon": { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "border-yellow-500/20", colorHex: "#eab308", lightHex: "#fde047", darkHex: "#a16207" },
};

const getTagStyle = (tag: string) => {
  return tagColors[tag] || { 
    bg: "bg-neutral-500/10", 
    text: "text-neutral-500", 
    border: "border-neutral-500/20", 
    colorHex: "#737373",
    lightHex: "#a3a3a3",
    darkHex: "#525252"
  };
};

export const MagicBentoCard = ({
  id,
  title,
  description,
  detail,
  icon: Icon,
  badges,
  colSpan = 1,
  isComingSoon = false,
  className,
  isExpanded = false,
  onToggle,
  rowIndex = 0,
  cardIndex = 0,
}: MagicBentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  // Use single tag color with light/dark shades for gradient
  const activeTags = badges.filter(t => t !== "coming-soon");
  const primaryTag = getTagStyle(activeTags[0] || "core");
  
  const iconGradientStyle = {
    background: `linear-gradient(135deg, ${primaryTag.lightHex}40, ${primaryTag.darkHex}40)`,
    color: primaryTag.colorHex,
  };

  return (
    // Use layout="position" - animates POSITION only, not SIZE (prevents wobble)
    <motion.div
      ref={ref}
      layout="position"
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative h-[280px] rounded-2xl overflow-visible cursor-pointer",
        isExpanded ? "md:col-span-2" : "md:col-span-1",
        className
      )}
      onClick={handleClick}
      transition={{ 
        layout: {
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }
      }}
    >
      <MagicCard
        className={cn(
          "h-full border border-neutral-950/5 dark:border-white/5",
          isExpanded ? "border-neutral-950/5 dark:border-white/5" : ""
        )}
        cardId={`row-${rowIndex}-card-${cardIndex}`}
        rowIndex={rowIndex}
        cardIndex={cardIndex}
      >
        <div className="flex flex-col h-full p-5">
          {/* Coming Soon Badge */}
          {isComingSoon && (
            <div className="absolute top-8 right-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 shadow-md z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-[10px] font-medium text-yellow-500 uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          )}

          {/* Icon - simple CSS transition */}
          <motion.div 
            variants={{
              initial: { x: 0, scale: 1 },
              hover: { x: 10, scale: 1.1 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "rounded-2xl flex items-center justify-center w-12 h-12 shrink-0",
              "transition-[margin] duration-300 ease-out",
              isExpanded ? "mb-8" : "mb-16"
            )}
            style={iconGradientStyle}
          >
            <Icon className="w-6 h-6 shrink-0" />
          </motion.div>

          {/* Title */}
          <motion.h3 
            variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="text-base font-bold text-neutral-800 dark:text-white leading-tight mb-2 shrink-0"
          >
            {title}
          </motion.h3>

          {/* Content area */}
          <div className="flex-1 min-h-0 overflow-hidden">
            {/* Description */}
            <motion.p 
              variants={{
                initial: { x: 0 },
                hover: { x: 10 }
              }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className={cn(
                "text-sm dark:text-neutral-300 text-neutral-700 font-semibold leading-relaxed",
                isExpanded ? "line-clamp-2" : "line-clamp-3"
              )}
            >
              {description}
            </motion.p>

            {/* Detail - only Framer Motion animation here */}
            <AnimatePresence mode="wait">
              {isExpanded && detail && (
                <motion.div
                  key={`detail-${id}`}
                  initial={{ opacity: 0, filter: "blur(4px)", x: 0 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, filter: "blur(4px)", x: 0 }}
                  transition={{ duration: 0.15 }} // Short duration for expansion
                  className="mt-2 overflow-hidden"
                >
                   {/* Nested motion div for the hover effect delay to separate from expand effect */}
                   <motion.p
                     variants={{
                       hover: { x: 10 }
                     }}
                     transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                     className="text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed"
                   >
                    {detail}
                   </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Badges */}
          <motion.div 
            variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 pt-3 flex flex-wrap gap-1.5"
          >
            {badges.map((badge, index) => {
              const style = getTagStyle(badge);
              return (
                <Badge
                  key={index}
                  variant="outline"
                  className={cn(
                    "text-[9px] px-1.5 py-0.5 h-auto",
                    style.border,
                    style.text,
                    style.bg
                  )}
                >
                  {badge}
                </Badge>
              );
            })}
          </motion.div>
        </div>
      </MagicCard>
    </motion.div>
  );
};

interface MagicBentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicBentoGrid = ({ children, className }: MagicBentoGridProps) => {
  return (
    <LayoutGroup>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </LayoutGroup>
  );
};
