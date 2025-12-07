"use client";

import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { MagicBentoCard } from "@/components/ui/magic-bento-grid";
import { Service } from "@/lib/data/services";
import { 
  IconBulb, IconBriefcase, IconFlask, IconCode, IconServer, IconDatabase, 
  IconTool, IconShield, IconCpu, IconHeadphones, IconShieldCheck, 
  IconFileCheck, IconCloud, IconGlobe, IconLock, 
  IconTrendingUp, IconSearch, IconShare, IconFileText, IconVideo, 
  IconCamera, IconPhoto, IconPalette 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Helper to get icon component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Lightbulb": return IconBulb;
    case "Briefcase": return IconBriefcase;
    case "Flask": return IconFlask;
    case "Code": return IconCode;
    case "Server": return IconServer;
    case "Database": return IconDatabase;
    case "Wrench": return IconTool;
    case "Shield": return IconShield;
    case "Cpu": return IconCpu;
    case "Headphones": return IconHeadphones;
    case "ShieldX": return IconShieldCheck;
    case "FileCheck": return IconFileCheck;
    case "Cloud": return IconCloud;
    case "Globe": return IconGlobe;
    case "Lock": return IconLock;
    case "PenTool": return IconLock;
    case "TrendingUp": return IconTrendingUp;
    case "Search": return IconSearch;
    case "Share2": return IconShare;
    case "FileText": return IconFileText;
    case "Video": return IconVideo;
    case "Camera": return IconCamera;
    case "Image": return IconPhoto;
    case "Palette": return IconPalette;
    default: return IconCode;
  }
};

interface ServiceRowProps {
  services: Service[];
  rowIndex: number;
  className?: string;
}

export const ServiceRow = ({ services, rowIndex, className }: ServiceRowProps) => {
  // Check if any service has defaultExpanded: true - that one should be expanded by default
  const expandedFlagIndex = services.findIndex(s => s.defaultExpanded === true);
  
  // If no card has defaultExpanded flag, use deterministic pattern
  const pattern = [0, 1, 2, 1, 2, 0];
  const fallbackIndex = pattern[rowIndex % pattern.length];
  
  const initialExpanded = expandedFlagIndex !== -1 ? expandedFlagIndex : fallbackIndex;
  
  const [expandedIndex, setExpandedIndex] = useState<number>(initialExpanded);

  const handleToggle = (index: number) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    }
  };

  return (
    // LayoutGroup ensures cards in the same row coordinate their layout animations
    <LayoutGroup id={`row-${rowIndex}`}>
      <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 w-full", className)}>
        {services.map((service, index) => {
          const isExpanded = index === expandedIndex;
          const IconComponent = getIconComponent(service.icon);
          const isComingSoon = service.tags?.includes("coming-soon");

          return (
            <MagicBentoCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description || ""}
              detail={service.detail}
              icon={IconComponent}
              badges={service.tags || []}
              colSpan={1}
              isComingSoon={!!isComingSoon}
              isExpanded={isExpanded}
              onToggle={() => handleToggle(index)}
              rowIndex={rowIndex}
              cardIndex={index}
            />
          );
        })}
      </div>
    </LayoutGroup>
  );
};
