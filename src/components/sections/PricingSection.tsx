"use client";

import React from "react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { pricingData } from "@/lib/data/pricing";
import {
  IconRocket,
  IconBolt,
  IconAnchor,
  IconTelescope,
  IconWorld,
} from "@tabler/icons-react";
import { Check, Rocket, Zap, FlaskConical, SatelliteDish, Wrench } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

        <BentoGrid className="max-w-7xl lg:w-7xl mx-auto md:grid-cols-5 md:auto-rows-auto">
          {pricingData.map((item, i) => (
            <PricingCard key={i} item={item} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const PricingCard = ({ item }: { item: typeof pricingData[0] }) => {
  const colSpanClass =
    item.colSpan === 4
      ? "md:col-span-4"
      : item.colSpan === 3
      ? "md:col-span-3"
      : item.colSpan === 2
      ? "md:col-span-2"
      : item.colSpan === 5
      ? "md:col-span-5"
      : ""

  return (
    <Card
      className={cn(colSpanClass, "px-4flex flex-col justify-between transition-all duration-300 hover:shadow-xl border-black/5 dark:border-white/5")}
    >
      <CardHeader className="p-6 pb-2">
        <div className="mb-4 inline-flex p-2.5 rounded-xl w-fit">
          <PricingIcon icon={item.icon} />
        </div>
        <CardTitle className="text-lg md:text-xl font-bold">{item.title}</CardTitle>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">{item.description}</p>
        <CardDescription className="text-md text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
          {item.detail}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        {item.features && (
          <ul className="space-y-3">
            {item.features.slice(0, 5).map((feature, idx) => (
              <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, x: 50, transition: { duration: 0.3 } }}
              key={idx} className="flex items-start gap-3 text-md text-neutral-600 dark:text-neutral-300">
                {/* <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> */}
                <Check className="mt-1 h-5 w-5 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button
          variant="outline-glass"
          rounded="full"
          size="default"
          className="w-full text-sm font-semibold h-10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-primary/20"
        >
          {item.cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingIcon = ({ icon }: { icon: string }) => {
  const className = "h-8 w-8 text-emerald-500";
  switch (icon) {
    case "Rocket":
      return <Rocket className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Wrench":
      return <Wrench className={className} />;
    case "FlaskConical":
      return <FlaskConical className={className} />;
    case "SatelliteDish":
      return <SatelliteDish className={className} />;
    default:
      return <Rocket className={className} />;
  }
};
