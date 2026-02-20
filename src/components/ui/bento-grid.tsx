import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

import { AnimatePresence, motion } from "framer-motion";

import { Badge, BadgeProps } from "@/components/ui/badge";

import { cardVariants } from "@/components/ui/card";

import React from "react";

export const BentoGridItem = React.forwardRef<HTMLDivElement, {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  detail?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badges?: { text: string; variant: BadgeProps["variant"]; className?: string }[];
  isExpanded?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  "data-active"?: boolean;
}>(({
  className,
  title,
  description,
  detail,
  header,
  icon,
  badges,
  isExpanded,
  onClick,
  style,
  "data-active": dataActive,
}, ref) => {
  return (
    <AnimatePresence>
    <motion.div
      ref={ref}
      style={style}
      data-active={dataActive}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 40
      }}
      onClick={onClick}
      className={cn(
        cardVariants({ variant: "default" }),
        "group/bento row-span-1 justify-between p-2 cursor-pointer hover:shadow-xl transition-all duration-300 gap-6",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-between h-full relative z-10">
        <div>
          <div>{icon}</div>
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 mb-2">
            {description}
          </div>
          
          
            {isExpanded && detail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="font-sans text-sm font-normal text-neutral-500 dark:text-neutral-400 mt-2 mb-2 overflow-hidden"
              >
                {detail}
              </motion.div>
            )}
        </div>

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant={badge.variant} 
                appearance="outline"
                className={cn("text-xs", badge.className)}
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
    </AnimatePresence>
  );
});

BentoGridItem.displayName = "BentoGridItem";
