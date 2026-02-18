"use client";

import React, { useRef } from "react";
import { ServiceRowUpdated } from "@/components/ui/ServiceRowUpdated";
import { servicesData, securityNote } from "@/lib/data/services-updated";
import { Shield } from "lucide-react";
import { spacebarFont } from "@/app/page";

// Helper to chunk array into groups of 3
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

export function ServiceSectionNewUpdated() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const allRows = chunkArray(servicesData, 3);

  return (
    <section ref={sectionRef} id="services-new" className="py-20 bg-[radial-gradient(circle at 50% 50%, transparent 0%, #020302 100%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-neutral-300 text-shadow-lg/30 dark:text-white ${spacebarFont.className}`}>
            Our Services
          </h2>
          <p className="text-neutral-300 text-shadow-lg/30 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs.
          </p>
        </div>

        {/* Grid Container - No collapse logic, just render all rows */}
        <div className="relative flex flex-col gap-4">
          {allRows.map((rowServices, index) => (
            <ServiceRowUpdated
              key={index}
              services={rowServices}
              rowIndex={index}
              className="w-full"
            />
          ))}
        </div>

        {/* Security Commitment Section - Dark glassmorphic with gradient */}
        <div className="mt-36 mb-24 p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl border border-neutral-950/10 dark:border-white/10 shadow-2xl shadow-purple-500/10 dark:bg-gradient-to-br from-neutral-950/70 via-neutral-950/40 to-black/80 dark:backdrop-blur-xl">
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
