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

export const BentoGridItem = ({
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
}: {
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
}) => {
  return (
    <AnimatePresence>
    <motion.div
      layout
      style={style}
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
      <motion.div layout className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-between h-full">
        <div>
          <motion.div layout>{icon}</motion.div>
          <motion.div layout className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </motion.div>
          <motion.div layout className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 mb-2">
            {description}
          </motion.div>
          
          
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
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};
