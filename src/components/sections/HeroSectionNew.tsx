"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";

import { spacebarFont } from "@/app/page";

// Import graphics
import { ReactComponent as RocketLogo } from "@/components/vfx/why-us-graphics/rocket-logo-only";
import HeirarchyStars from "@/components/vfx/why-us-graphics/heirarchy-stars"; 
import { ReactComponent as ShieldNetwork } from "@/components/vfx/why-us-graphics/shield-network";

const HERO_CONTENT = [
  {
    id: 1,
    heading: "Security and Privacy by Design",
    subheading: "We design resilient systems that protect your data, your infrastructure, and your long-term independence.",
    cta1: { text: "Initialize Project", link: "?subject=START_BUILD#contact" },
    cta2: { text: "Our Approach", link: "#why-us" }
  },
  {
    id: 2,
    heading: "Reduce Cloud Costs Without Compromising Security",
    subheading: "We help organizations design infrastructure that balances performance, privacy, and long-term cost efficiency.",
    cta1: { text: "Explore Migration Options", link: "#services" },
    cta2: { text: "Learn How It Works", link: "#why-us" }
  },
  {
    id: 3,
    heading: "Secure Systems. Practical Processes. Measurable Results.",
    subheading: "From architecture to deployment, we integrate security into every stage of system development.",
    cta1: { text: "Explore Services", link: "#services" },
    cta2: { text: "Talk to an Engineer", link: "?subject=PING_HELLO#contact" }
  }
];

const HERO_IMAGES = [
  { id: 1, component: RocketLogo, scaleClass: "scale-125" }, // Larger Rocket
  { id: 2, component: HeirarchyStars, scaleClass: "scale-[1.2] [&_path]:!stroke-[4px] [&_rect]:!stroke-[4px]" },
  { id: 3, component: ShieldNetwork, scaleClass: "scale-100" } // Smaller Shield
];

export function HeroSectionNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content rotation logic (Slower: 6s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Image rotation logic (5s)
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const content = HERO_CONTENT[currentIndex];
  // Verify image component exists before rendering
  const activeImage = HERO_IMAGES[imageIndex];
  const CurrentImageComponent = activeImage.component;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
       
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        
        {/* Left Column: Content */}
        {/* Fixed height container to prevent layout shift */}
        <div className="flex flex-col justify-center h-[700px] relative z-10 w-full">
           
           {/* Glassmorphic Card Container matching original design */}
           <div className="relative overflow-hidden rounded-3xl bg-white/5 dark:bg-neutral-950/30 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-12 w-full h-full flex flex-col items-center text-center">
             
             {/* Open to projects Badge (Centered & Stable outside AnimatePresence) */}
             <div className="absolute top-12 left-0 right-0 flex justify-center z-20">
                 <Badge 
                    variant="secondary" 
                    className="backdrop-blur-xl bg-white/10 border-white/10 text-neutral-200 px-4 py-1.5 rounded-full shadow-lg gap-2"
                  >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Accepting New Projects
                 </Badge>
             </div>

             {/* Text Animation Container - Centered vertically in remaining space */}
             <div className="flex-grow flex flex-col justify-center w-full mt-8">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={content.id}
                     initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                     exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                     className="space-y-8 flex flex-col items-center"
                   >
                     {/* Gradient Header - Green/Purple/Blue hues */}
                     <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${spacebarFont.className}`}>
                       <AuroraText 
                          className="text-shadow-sm/5"
                          colors={["#11b579ff", "#1fc1ccff", "#e523dbff", "#3279f4ff"]} // Green, Cyan, Purple loop
                          speed={0.75} // Slower animation
                       >
                         {content.heading}
                       </AuroraText>
                     </h1>
                     
                     <p className="text-lg md:text-xl text-neutral-200 dark:text-neutral-300 leading-relaxed max-w-2xl">
                       {content.subheading}
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
                       <RainbowButton
                          size="lg"
                          variant="outline"
                          className="rounded-full h-12 px-8 font-medium text-md w-full sm:w-auto shadow-xl"
                          asChild
                       >
                          <a href={content.cta1.link}>{content.cta1.text}</a>
                       </RainbowButton>
                       
                       <Button 
                         size="lg" 
                         variant="ghost" 
                         className="text-neutral-200 dark:text-white hover:bg-transparent hover:text-white dark:hover:bg-white/10 backdrop-blur-sm rounded-full h-12 px-8 border border-neutral-200 dark:border-white/20"
                         asChild
                       >
                         <a href={content.cta2.link}>{content.cta2.text}</a>
                       </Button>
                     </div>
                   </motion.div>
                 </AnimatePresence>
             </div>

             {/* Border Beams */}
             <BorderBeam
               size={350}
               duration={12}
               borderWidth={2}
               className="from-transparent via-emerald-500 to-transparent z-30" />
             <BorderBeam
               size={350}
               duration={12}
               delay={6}
               borderWidth={2}
               className="from-transparent via-sky-500 to-transparent z-30" />
             <BorderBeam
               size={350}
               duration={6}
               borderWidth={2}
               reverse
               className="from-transparent via-violet-600 to-transparent z-30" />

           </div>
        </div>

        {/* Right Column: Images */}
        <div className="flex items-center justify-center h-[650px] w-full relative z-10 pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }} 
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full max-w-[650px] max-h-[650px] p-6 flex items-center justify-center">
                 {/* 
                    Apply scale class based on component type.
                    Use lighter blue color (var(--color-3) = #3498db) as requested.
                 */}
                 <CurrentImageComponent 
                    className={cn(
                        "w-full h-full drop-shadow-[0_0_15px_rgba(52,152,219,0.3)] transition-transform duration-1000", 
                        activeImage.scaleClass,
                        "text-[var(--color-3)]" // Lighter blue
                    )}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        shapeRendering: 'geometricPrecision',
                        color: 'var(--color-3)' // Ensure prop propagation uses this for current color
                    }}
                 />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Section: Mission & Tags */}
      {/* 
          Layout: 
          [Tags]
          [Mission]
          No card background. Glassmorphic pill for tags.
      */}
      <div className="w-full flex justify-center pb-12 z-20 px-4">
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-6">
           
           {/* Tags - Glassmorphic pills */}
           <div className="flex flex-wrap justify-center gap-3">
             {['Privacy', 'Security', 'Resilience', 'Independence', 'Education'].map(tag => (
               <div key={tag} className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm">
                 <AuroraText colors={["#34d399", "#22d3ee", "#a855f7"]}>
                    {tag}
                 </AuroraText>
               </div>
             ))}
           </div>

           {/* Mission - Subtler, Slower Animated Gradient Text */}
           <div className="max-w-3xl">
             <h3 className="text-sm uppercase tracking-[0.2em] mb-3 font-bold">
                {/* Slower speed (3) and subtler colors (blues/cyans/teals) */}
                <AuroraText 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400" 
                    speed={3}
                    colors={["#22d3ee", "#3b82f6", "#2dd4bf"]}
                >
                  Core Mission
                </AuroraText>
             </h3>
             <p className="text-neutral-300 dark:text-neutral-300 text-shadow-lg/30 text-sm leading-relaxed mx-auto font-medium">
               Spacebar Labs aims to reduce dependency through resilient, private, and secure systems. Education, knowledge transfer, and training are in our DNA.
             </p>
           </div>

        </div>
      </div>
      
    </section>
  );
}
