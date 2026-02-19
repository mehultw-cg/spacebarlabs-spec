"use client";

import React, { Suspense } from "react";
import { aboutData } from "@/lib/data/about";
import { ContactSection } from "@/components/sections/ContactSection";
import { spacebarFont } from "@/app/page";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-transparent text-black dark:text-white">
      {/* About Content */}
      <div className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="rounded-lg bg-gradient-to-br from-white/70 to-white/50 dark:from-black/30 dark:to-black/10 backdrop-blur-lg p-8">
            <h2 className={cn("text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 font-bold mb-2", spacebarFont.className)}>
              {aboutData.title}
            </h2>
            {/* <div className="space-y-6 text-neutral-100 text-shadow-lg/60 dark:text-neutral-300 leading-relaxed text-lg">
              {aboutData.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div> */}
            <p className="text-neutral-900 dark:text-neutral-100 italic text-shadow-sm/30 mb-4">Designing the foundations of a safer digital world.</p>
            <div className="space-y-6 text-neutral-900 dark:text-neutral-100 dark:text-shadow-lg/30 dark:text-neutral-300 leading-relaxed text-lg">
              

<p>SpaceBar Labs is a security-first systems engineering firm focused on reducing operational risk and eliminating unnecessary infrastructure complexity.</p>

<p>We design secure infrastructure, privacy-aware architectures, and practical DevSecOps pipelines — ensuring teams retain control over their systems without dependency.</p>

<p>Our approach is structured, transparent, and documentation-driven.</p>
<p>We build systems your team can operate confidently — with security embedded from the foundation.</p>

<p>We do not promise invulnerability.</p>
<p>We deliver measured risk reduction and long-term clarity.</p>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {aboutData.valueCards.map((card, idx) => (
                <div key={idx} className="group relative p-6 rounded-xl bg-neutral-100/80 dark:bg-neutral-900/20 border backdrop-blur-lg border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-center overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20">
                  <div className="relative z-10 text-lg font-semibold text-neutral-800 dark:text-neutral-200">{card}</div>
                  <BorderBeam
                    duration={8}
                    size={150}
                    colorFrom="#2B7FFF"
                    delay={idx*0.75}
                    colorTo="#AD46FF"
                    borderWidth={2}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-auto sm:w-[30rem]">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30" />
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img
                    src="/webp/secure-cosmic-server.webp"
                    alt="SpaceBar Labs Team"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Suspense fallback={<div className="py-20 text-center">Loading contact form...</div>}>
        <ContactSection />
      </Suspense>
    </section>
  );
}
