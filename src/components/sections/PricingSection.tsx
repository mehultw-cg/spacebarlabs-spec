"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { pricingData } from "@/lib/data/pricing";
import {
  IconRocket,
  IconBolt,
  IconAnchor,
  IconTelescope,
  IconWorld,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Pricing
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Transparent pricing for every stage of your journey.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] md:grid-cols-4">
          {pricingData.map((item, i) => {
            const colSpanClass = item.colSpan === 4 ? "md:col-span-4" : 
                                 item.colSpan === 3 ? "md:col-span-3" : 
                                 item.colSpan === 2 ? "md:col-span-2" : "";
            return (
            <BentoGridItem
              key={i}
              title={item.title}
              description={
                <div className="flex flex-col gap-4">
                  <span className="text-sm text-neutral-300">
                    {item.description}
                  </span>
                  {item.features && (
                    <ul className="list-disc list-inside text-xs text-neutral-400 space-y-1">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  <Button variant="glass" size="lg" className="w-full max-w-[200px] my-4 rounded-full group-hover:bg-primary/20 transition-colors mx-auto">
                    {item.cta}
                  </Button>
                </div>
              }
              className={colSpanClass}
              icon={<PricingIcon icon={item.icon} />}
            />
          )})}
        </BentoGrid>
      </div>
    </section>
  );
}

const PricingHeader = ({ icon }: { icon: string }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <IconRocket className="h-full w-full text-neutral-300" />;
      case "Zap":
        return <IconBolt className="h-full w-full text-neutral-300" />;
      case "Anchor":
        return <IconAnchor className="h-full w-full text-neutral-300" />;
      case "Telescope":
        return <IconTelescope className="h-full w-full text-neutral-300" />;
      case "Globe":
        return <IconWorld className="h-full w-full text-neutral-300" />;
      default:
        return <IconRocket className="h-full w-full text-neutral-300" />;
    }
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center p-4 border border-white/10">
      <div className="w-16 h-16 opacity-50">{getIcon(icon)}</div>
    </div>
  );
};

const PricingIcon = ({ icon }: { icon: string }) => {
  const className = "h-10 w-10 text-neutral-300";
  switch (icon) {
    case "Rocket":
      return <IconRocket className={className} />;
    case "Zap":
      return <IconBolt className={className} />;
    case "Anchor":
      return <IconAnchor className={className} />;
    case "Telescope":
      return <IconTelescope className={className} />;
    case "Globe":
      return <IconWorld className={className} />;
    default:
      return <IconRocket className={className} />;
  }
};
