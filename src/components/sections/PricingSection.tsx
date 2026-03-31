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
import { animate, motion } from "framer-motion";
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
import Image from "next/image";
import { headingFont } from "@/app/page";

//USPs
  // - Secure by default
  // - privacy first
  // - escape cloud tax
  // - ethical practices
  // - Human first products
  // - founder led engineering
  // - scientific method design/UX
// things to add:
// - add most chosen or similar badge to liftoff. 
// - add other pricing options like
  // - migrating to vps - choosing your orbit
  // - 



export function PricingSection() {
  return (

    <section id="pricing" className="bg-transparent text-black dark:text-white">
      <div className="py-20">
        {/* <Image
          src="/Binary_Black_Holes_Accretion_Disk.webp"
          alt="Pricing Background"
          fill
          content="center"
          className="object-cover"
        /> */}


        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-neutral-200 text-shadow-lg/30 dark:text-white ${headingFont.className}`}>
              Pricing
            </h2>
            <p className="text-neutral-200 dark:text-neutral-300 italic text-shadow-sm/30 max-w-2xl mx-auto">
              Transparent pricing for every stage of your journey.
            </p>
          </div>

          <BentoGrid className="max-w-7xl lg:w-7xl mx-auto md:grid-cols-5 md:auto-rows-auto">
            {pricingData.map((item, i) => (
              <PricingCard key={i} item={item} />
            ))}
          </BentoGrid>
        </div>
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
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(colSpanClass, "h-full")}
    >
      <Card
        className="h-full px-4 flex flex-col backdrop-blur-sm justify-between transition-all duration-300 hover:shadow-xl border-black/5 dark:border-white/5 dark:bg-gradient-to-tr from-black/10 via-black/20 to-black/10"
      >
        <CardHeader className="p-6 pb-2">
          <motion.div
            variants={{
              initial: { x: 0, scale: 1 },
              hover: { x: 10, scale: 1.3 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 inline-flex p-2.5 rounded-xl w-fit"
          >
            <PricingIcon icon={item.icon} />
          </motion.div>

          <motion.div
            variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
          >
            <CardTitle className="text-lg text-black dark:text-white md:text-xl font-bold">{item.title}</CardTitle>
          </motion.div>

          <motion.p
            variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-sm text-neutral-700 dark:text-neutral-500"
          >
            {item.description}
          </motion.p>

          <motion.div
            variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          >
            <CardDescription className="text-md text-neutral-800 dark:text-neutral-400 mt-2 leading-relaxed">
              {item.detail}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow p-6 pt-2">
          {item.features && (
            <ul className="space-y-3">
              {item.features.slice(0, 5).map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    // initial: { opacity: 0, y: 10, x: 0 },
                    // animate: {opacity: 1, y: 0},
                    hover: { x: 50, scale: 1.1 },
                    // exit: { opacity: 0, y: 10},
                  }}
                  transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05), ease: "easeOut" }}
                  className="flex items-start gap-3 text-md text-neutral-800 dark:text-neutral-300"
                >
                  <Check className="mt-1 h-5 w-5 text-emerald-600 dark:text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto relative z-10">
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
    </motion.div>
  );
};

const PricingIcon = ({ icon }: { icon: string }) => {
  const className = "h-8 w-8 text-emerald-700 dark:text-emerald-500";
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
