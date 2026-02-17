"use client";

import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { MagicBentoCard } from "@/components/ui/magic-bento-grid";
import { servicesData } from "@/lib/data/services-updated";
import { cn } from "@/lib/utils";

// Define the type for the new service structure 
// (assuming servicesData elements are compatible with what we need, but we need to be explicit about the type if importing directly)
type ServiceItem = typeof servicesData[0];

interface ServiceRowUpdatedProps {
  services: ServiceItem[];
  rowIndex: number;
  className?: string;
}

export const ServiceRowUpdated = ({ services, rowIndex, className }: ServiceRowUpdatedProps) => {
  // Check if any service has defaultExpanded: true - that one should be expanded by default
  // services-updated.ts doesn't have defaultExpanded currently, so we use fallback logic.
  // We can also assume the first item (index 0) or use the pattern.
  const expandedFlagIndex = -1; // No defaultExpanded in data yet
  
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
          
          // Lucide icon component is passed directly in service.icon
          const IconComponent = service.icon;
          
          // Check for coming soon - not in new data but good to keep logic if needed
          const isComingSoon = false; // service.tags?.includes("coming-soon");

          return (
            <MagicBentoCard
              key={rowIndex + "-" + index} // Use composite key if id is not unique or available
              id={service.title.replace(/\s+/g, '-').toLowerCase()}
              title={service.title}
              description={service.description || ""}
              detail={service.detail}
              bullets={service.bullets}
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
