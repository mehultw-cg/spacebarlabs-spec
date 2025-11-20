import React, { useState } from "react";
import { BentoGridItem } from "./bento-grid";

import { BadgeProps } from "@/components/ui/badge";

// Define the shape of the items this row will accept
type BentoRowItem = {
  id: string | number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  detail?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badges?: { text: string; variant: BadgeProps["variant"]; className?: string }[];
};

type BentoRowProps = {
  // An array of items (1 to 4)
  items: BentoRowItem[];
  // The index of the card that is expanded by default
  initialExpandedIndex?: number;
};

export const BentoRow = ({ items, initialExpandedIndex = 0 }: BentoRowProps) => {
  const [expandedIndex, setExpandedIndex] = useState(initialExpandedIndex);

  return (
    // We use grid-cols-4 because our total spans are 2 + 1 + 1 = 4
    // If fewer items, we might need to adjust, but for now keeping the 4-column grid logic
    // and letting items take available space or wrapping could be tricky.
    // Better to stick to the user's requested logic: 3 items per row, 4 columns total.
    // If we have < 3 items, this specific layout logic breaks.
    // For now, assuming we will chunk data into groups of 3.
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          detail={item.detail}
          header={item.header}
          icon={item.icon}
          badges={item.badges}
          isExpanded={index === expandedIndex}
          // Dynamically set the col-span
          // If it's the expanded one, it takes 2 cols. Others take 1.
          className={index === expandedIndex ? "md:col-span-2 col-span-1" : "col-span-1"}
          // Set the new expanded index on click
          onClick={() => setExpandedIndex(index)}
        />
      ))}
    </div>
  );
};
