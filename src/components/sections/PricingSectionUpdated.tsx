"use client";

import React from "react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { pricingData } from "@/lib/data/pricing-updated";
import {
  Rocket,
  Zap,
  FlaskConical,
  SatelliteDish,
  Wrench,
  Check,
  Star,
  ServerCrash,
  Radar,
  Activity
} from 'lucide-react';
import { motion } from "framer-motion";
import Link from "next/link";
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

export function PricingSectionUpdated() {
  return (
    <section id="pricing" className="bg-transparent text-black dark:text-white">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white tracking-tight">
              Pricing
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium">
                Flexible ways to work together, based on your needs and goals. Bundled services for easy access.
              </p>
              
              <div className="bg-neutral-100/50 dark:bg-black/50 rounded-2xl p-6 backdrop-blur-sm border border-black/5 dark:border-white/10 inline-block text-left">
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-3 text-center">
                  Clients can engage with us through:
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Fixed-scope projects
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Milestone-based work
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Ongoing advisory partnership
                  </span>
                </div>
              </div>

              <p className="text-slate-200 dark:text-slate-200 italic">
                Our goal is to empower teams to operate independently, not create dependency.
              </p>
            </div>
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
  
  const contactLink = `/#contact?subject=${encodeURIComponent(`Interested in ${item.title}`)}`;

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(colSpanClass, "h-full relative group/card")}
    >
      {item.favored && (
         <div className="absolute -top-3 -right-3 z-20">
            <div className="relative bg-gradient-to-r from-[var(--color-2)] to-[var(--color-1)] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-1 border border-white/20">
              <Star className="w-3 h-3 fill-current animate-pulse" />
              <span>Most Popular</span>
            </div>
         </div>
      )}
      
      <Card
        className={cn(
          "h-full px-5 flex flex-col backdrop-blur-xl justify-between transition-all duration-300 border hover:shadow-xl border-black/5 dark:border-white/5 dark:bg-gradient-to-tr from-black/10 via-black/20 to-black/10",
          item.favored 
            ? "border-1 border-[var(--color-2)]/40 dark:border-[var(--color-2)]/40 shadow-emerald-500/30 hover:dark:shadow-emerald-500/30" 
            : "border-1 border-neutral-200/50 dark:border-white/10 hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-neutral-900/50"
        )}
      >
        <CardHeader className="p-5 pb-2">
          <motion.div
            variants={{
              initial: { x: 0, scale: 1 },
              hover: { x: 10, scale: 1.3 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-3 inline-flex p-2.5 rounded-xl w-fit"
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
            <CardTitle className="text-xl text-neutral-900 dark:text-white font-bold tracking-tight">{item.title}</CardTitle>
          </motion.div>

          <motion.p
             variants={{
              initial: { x: 0 },
              hover: { x: 10 }
            }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-md font-medium text-neutral-600 dark:text-neutral-100 mt-4"
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
            <CardDescription className="text-sm font-medium text-neutral-700 dark:text-neutral-400 mt-2 leading-relaxed">
                {item.detail}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow p-5 pt-2">
          {item.features && (
            <ul className="space-y-2.5">
              {item.features.slice(0, 5).map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hover: { x: 10, scale: 1.02 },
                    initial: { x: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.2, delay: 0.1 + (idx * 0.05) }}
                  className="flex items-start gap-3 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500" />
                  <span className="leading-tight">{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="p-5 pt-0 mt-auto relative z-10">
          <Link href={contactLink} className={cn("w-full flex", item.favored ? "justify-center" : "")}>
            <Button
                variant={item.favored ? "default" : "outline"}
                rounded="full"
                size="lg"
                className={cn(
                    "text-sm font-bold h-11 transition-all duration-300 relative overflow-hidden group/btn",
                    item.favored 
                        ? "w-auto px-8 bg-gradient-to-r from-[var(--color-2)] to-[var(--color-1)] text-white border-0 shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-[1.05]" 
                        : "w-full bg-white/50 dark:bg-white/5 border-neutral-200 dark:border-white/10 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:text-emerald-600 dark:hover:text-emerald-400"
                )}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {item.cta}
                    {item.favored && <Rocket className="w-4 h-4 animate-pulse" />}
                </span>
                {item.favored && (
                    <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover/btn:translate-y-[0%] transition-transform duration-300" />
                )}
            </Button>
          </Link>
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
    case "ServerCrash":
      return <ServerCrash className={className} />;
    case "Radar":
      return <Radar className={className} />;
    case "Activity":
      return <Activity className={className} />;
    default:
      return <Rocket className={className} />;
  }
};
