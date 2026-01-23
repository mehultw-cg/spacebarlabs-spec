"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface WhyUsCardProps {
  title: string;
  description?: string;
  detail?: string;
  graphic?: React.ReactNode;
  className?: string;
  // We explicitly ignore the 'icon' prop even if passed, or make it optional
}

export const WhyUsCard = ({
  title,
  description,
  detail,
  graphic,
  className,
}: WhyUsCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-xl transition-all duration-500",
        // Default variant styles from card.tsx
        "bg-[image:var(--gradient-glass-light)] dark:bg-[image:var(--gradient-glass-dark)]",
        "backdrop-blur-xl",
        "border border-black/5 dark:border-white/10",
        "shadow-lg shadow-black/5 dark:shadow-xl dark:shadow-neutral-800/20",
        "flex flex-col justify-end", 
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(62, 162, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Graphic Container (Background/Fill) - Added padding */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-80 transition-opacity duration-700 group-hover:opacity-100">
        {graphic}
      </div>
      
      {/* Content Overlay - Bottom Left - Added padding */}
      <div className="relative z-30 flex flex-col items-start gap-3 pointer-events-none p-8">
         {/* Title */}
        <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
          {title}
        </h3>
        {/* Description */}
        {description && (
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
        {/* Optional Detail text - Smoother reveal */}
        {detail && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
             <p className="text-xs text-neutral-500 dark:text-neutral-500 max-w-[90%] pt-2">
                {detail}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
