"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceRow } from "@/components/ui/service-row";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ShadowBleedProvider } from "@/components/ui/shadow-bleed-context";
import { servicesData, securityNote } from "@/lib/data/services";
import { useLenis } from "lenis/react";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";

// Helper to chunk array into groups of 3
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

// Row height calculation: 280px card + 16px gap = 296px per row
const ROW_HEIGHT = 296;
const PEEK_HEIGHT = 100;

export function ServicesSectionNew() {
  const lenis = useLenis();
  const [visibleRows, setVisibleRows] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const allRows = chunkArray(servicesData, 3);
  const totalRows = allRows.length;
  const isAllVisible = visibleRows >= totalRows;

  const handleShowMore = () => {
    setVisibleRows(prev => Math.min(prev + 2, totalRows));
  };

  const handleCollapse = () => {
    setVisibleRows(3);
    if (lenis) {
      lenis.scrollTo('#services-new', { offset: -100 });
    }
  };

  return (
    <section ref={sectionRef} id="services-new" className="py-20 bg-neutral-100 dark:bg-gradient-to-br from-black via-[#020502] via-[#020302] to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-950 dark:text-white">
            Our Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs.
          </p>
        </div>

        {/* Grid Container with Shadow Bleed Provider */}
        <div ref={gridContainerRef} className="relative">
          <ShadowBleedProvider containerRef={gridContainerRef as React.RefObject<HTMLDivElement>}>
            {/* First Row - Always Visible */}
            {allRows[0] && (
              <ServiceRow 
                services={allRows[0]} 
                rowIndex={0} 
                className="w-full mb-4"
              />
            )}

            {/* Collapsible Container for Remaining Rows */}
            <motion.div
              animate={{ 
                height: isAllVisible ? "auto" : ((visibleRows - 1) * ROW_HEIGHT + PEEK_HEIGHT)
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
              style={{ 
                // Use clip with custom inset to allow horizontal overflow but clip vertical
                clipPath: isAllVisible ? 'none' : 'inset(-300px -300px 0 -300px)'
              }}
            >
              <div className="flex flex-col gap-4">
                {allRows.slice(1).map((rowServices, index) => (
                  <ServiceRow 
                    key={index + 1} 
                    services={rowServices} 
                    rowIndex={index + 1} 
                    className="w-full"
                  />
                ))}
              </div>
            </motion.div>
          </ShadowBleedProvider>

          {/* Progressive Blur Overlay - positioned lower to show more peek */}
          <AnimatePresence>
            {!isAllVisible && (
              <>
               {/* Progressive blur effect */}
                <ProgressiveBlur 
                  direction="bottom" 
                  blurLayers={4}
                  blurIntensity={1}
                  className="absolute bottom-2 h-[10%] w-full"
                >
                  
                </ProgressiveBlur>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-4 left-0 right-0 z-50"
              >
               
                
                {/* Solid background + button container */}
                <div className="h-32 flex items-center justify-center -mt-4  bg-gradient-to-b from-transparent from-50%  to-neutral-100 dark:to-[#020302] to-80%"    >
                  <RainbowButton 
                    onClick={handleShowMore}
                    className="px-8 py-3 text-base font-semibold rounded-full"
                    size="lg"
                    variant="outline"
                  >
                    Show More Services
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </RainbowButton>
                </div>
              </motion.div>
            </>
            )}
          </AnimatePresence>
        </div>
        
        {/* Collapse Button */}
        <AnimatePresence>
          {isAllVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mt-8"
            >
              <RainbowButton 
                onClick={handleCollapse}
                className="px-8 py-3 rounded-full text-base font-semibold"
                size="lg"
                variant="outline"
              >
                Collapse Services
                <ChevronUp className="ml-2 h-4 w-4" />
              </RainbowButton>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security Commitment Section - Dark glassmorphic with gradient */}
        <div className="mt-36 mb-24 p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl border border-neutral-950/10 dark:border-white/10 shadow-2xl shadow-purple-500/10">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/70 via-neutral-100/70 to-neutral-100/5 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-black/80" />
          
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-transparent to-emerald-500/5" />
          
          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon with gradient background */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10 shrink-0">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 dark:text-white text-neutral-700">{securityNote.title}</h3>
              <p className="dark:text-neutral-400 text-neutral-600 leading-relaxed">
                {securityNote.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
