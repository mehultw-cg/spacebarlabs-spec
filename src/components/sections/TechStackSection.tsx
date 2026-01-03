"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { techStackData, TechItem } from "@/lib/data/tech-stack";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronUp, ChevronDown } from "lucide-react";



// in futre, for mobile, the scrolling on the categories could be horizontal instead per category. 

export function TechStackSection() {
  // Default to the first item of the first category
  const [selectedTech, setSelectedTech] = useState<TechItem>(
    techStackData[0].items[0]
  );
  
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const categoryColors: Record<string, { border: string; text: string; glow: string; icon: string; blob: string; shadow: string }> = {
    frontend: { border: "border-violet-500", text: "text-violet-600 dark:text-violet-400", glow: "from-violet-500/40 via-violet-500/10 to-transparent", icon: "text-violet-500", blob: "bg-violet-500", shadow: "shadow-violet-500/25" },
    backend: { border: "border-emerald-500", text: "text-emerald-600 dark:text-emerald-400", glow: "from-emerald-500/40 via-emerald-500/10 to-transparent", icon: "text-emerald-500", blob: "bg-emerald-500", shadow: "shadow-emerald-500/25" },
    database: { border: "border-green-500", text: "text-green-600 dark:text-green-400", glow: "from-green-500/40 via-green-500/10 to-transparent", icon: "text-green-500", blob: "bg-green-500", shadow: "shadow-green-500/25" },
    "devops-cloud": { border: "border-sky-500", text: "text-sky-600 dark:text-sky-400", glow: "from-sky-500/40 via-sky-500/10 to-transparent", icon: "text-sky-500", blob: "bg-sky-500", shadow: "shadow-sky-500/25" },
    "ui-ux": { border: "border-pink-500", text: "text-pink-600 dark:text-pink-400", glow: "from-pink-500/40 via-pink-500/10 to-transparent", icon: "text-pink-500", blob: "bg-pink-500", shadow: "shadow-pink-500/25" },
    security: { border: "border-purple-500", text: "text-purple-600 dark:text-purple-400", glow: "from-purple-500/40 via-purple-500/10 to-transparent", icon: "text-purple-500", blob: "bg-purple-500", shadow: "shadow-purple-500/25" },
    "network-security": { border: "border-red-500", text: "text-red-600 dark:text-red-400", glow: "from-red-500/40 via-red-500/10 to-transparent", icon: "text-red-500", blob: "bg-red-500", shadow: "shadow-red-500/25" },
    automation: { border: "border-orange-500", text: "text-orange-600 dark:text-orange-400", glow: "from-orange-500/40 via-orange-500/10 to-transparent", icon: "text-orange-500", blob: "bg-orange-500", shadow: "shadow-orange-500/25" },
    compliance: { border: "border-yellow-500", text: "text-yellow-600 dark:text-yellow-400", glow: "from-yellow-500/40 via-yellow-500/10 to-transparent", icon: "text-yellow-500", blob: "bg-yellow-500", shadow: "shadow-yellow-500/25" },
  };

  const selectedCategory = techStackData.find(c => c.name === selectedTech.category) || techStackData[0];
  const activeColor = categoryColors[selectedCategory.id] || categoryColors.frontend;


  const handleScrollDown = () => {
    if (currentCategoryIndex < techStackData.length - 1 && scrollContainerRef.current) {
      const nextIndex = currentCategoryIndex + 1;
      setCurrentCategoryIndex(nextIndex);
      const targetCategory = categoryRefs.current[nextIndex];
      if (targetCategory) {
        // Calculate offset relative to the container, subtracting padding (e.g., 32px or header height)
        const top = targetCategory.offsetTop - 128; // Adjust based on py-32 (128px)
        scrollContainerRef.current.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const handleScrollUp = () => {
    if (currentCategoryIndex > 0 && scrollContainerRef.current) {
      const prevIndex = currentCategoryIndex - 1;
      setCurrentCategoryIndex(prevIndex);
      const targetCategory = categoryRefs.current[prevIndex];
      if (targetCategory) {
        const top = targetCategory.offsetTop - 128; // Adjust based on py-32
        scrollContainerRef.current.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // Optional: Sync active index on manual scroll?
  // For now, let's keep it simple: buttons drive the "snap" experience.

  const INITIAL_VISIBLE_COUNT = 7;
  // If there are only a few more items than the limit (e.g. 1 or 2), just show them all to avoid a "See More" button for a trivial amount.
  const COLLAPSE_THRESHOLD = INITIAL_VISIBLE_COUNT + 3; 

  return (
    <section id="tech-stack" className="py-20 bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Our Tech Stack
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We use the latest and greatest tools to build robust, scalable, and
            beautiful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Categories and Tech Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8 pr-2 relative h-[35vh] lg:h-[900px] overflow-hidden rounded-3xl bg-neutral-50/50 dark:bg-neutral-900/10 border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm order-2 lg:order-1">
            {/* Top Control Overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 h-14 lg:h-36 pointer-events-none flex justify-center pt-2 lg:pt-6">
                <div className="absolute inset-0 z-0">
                    <ProgressiveBlur direction="top" className="h-full w-full" blurIntensity={1} blurLayers={6} />
                </div>
               <button
                  onClick={handleScrollUp}
                  className={cn(
                    "pointer-events-auto relative z-10 p-2 w-48 h-10 flex items-center justify-center rounded-full dark:bg-black/5 hover:bg-neutral-200/20 backdrop-blur-[4px] dark:hover:bg-neutral-900/10 transition-all group border border-white/10 dark:border-black/10",
                    currentCategoryIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}
                  aria-label="Scroll Up"
                >
                  <ChevronUp className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                </button>
            </div>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto no-scrollbar py-14 lg:py-32 px-8 space-y-12 scroll-smooth"
            >
              <LayoutGroup>
                <div className="flex flex-col gap-12">
                  {techStackData.map((category, index) => {
                    const isExpanded = expandedCategories[category.id];
                    const shouldBeCollapsible = category.items.length > COLLAPSE_THRESHOLD;
                    
                    const itemsToShow = shouldBeCollapsible && !isExpanded
                      ? category.items.slice(0, INITIAL_VISIBLE_COUNT)
                      : category.items;

                    return (
                      <motion.div 
                        layout 
                        key={category.id} 
                        ref={(el: HTMLDivElement | null) => {
                          if (el) categoryRefs.current[index] = el;
                        }}
                        className="flex flex-col gap-6 max-w-2xl scroll-mt-16 lg:scroll-mt-32"
                      >
                        <h3 className={cn(
                          "text-xl font-bold pl-2 border-l-2 transition-colors duration-300 text-neutral-700 dark:text-neutral-300",
                          categoryColors[category.id]?.border || "border-emerald-400 dark:border-emerald-700"
                        )}>
                          {category.name}
                        </h3>
                        
                        <motion.div layout className="flex flex-wrap gap-3">
                          <AnimatePresence initial={false}>
                            {itemsToShow.map((item) => (
                              <motion.button
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                                transition={{ type: "spring", stiffness: 500, damping: 30, mass: 1 }}
                                key={item.id}
                                onClick={() => setSelectedTech(item)}
                                className={cn(
                                  "flex items-center gap-2 px-4 py-3 rounded-xl backdrop-blur-md border transition-colors ease-out duration-200 shadow shadow-2xlπ group",
                                  selectedTech.id === item.id
                                    ? "bg-emerald-100/50 dark:bg-emerald-900/40 border-emerald-300/50 dark:border-emerald-600/50 shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/50"
                                    : "bg-white/60 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:bg-emerald-100/30 dark:hover:bg-emerald-800/30 hover:border-emerald-300/50 dark:hover:border-emerald-600/30"
                                )}
                              >
                                <item.icon className={cn(
                                  "w-5 h-5 transition-colors",
                                  selectedTech.id === item.id ? "text-emerald-700 dark:text-emerald-500" : "text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200"
                                )} />
                                <span className={cn(
                                  "text-sm font-medium",
                                  selectedTech.id === item.id ? "text-black dark:text-white" : "text-neutral-800 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-neutral-200"
                                )}>{item.name}</span>
                              </motion.button>
                            ))}

                            {shouldBeCollapsible && (
                              <motion.button
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                                transition={{ type: "spring", stiffness: 700, damping: 30, mass: 1 }}
                                key={`toggle-${category.id}`}
                                onClick={() => toggleCategory(category.id)}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40 border border-emerald-200/50 dark:border-emerald-800/50 transition-colors"
                              >
                                {isExpanded ? (
                                    <>
                                        <span>Show Less</span>
                                        <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        <span>See More</span>
                                       <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </LayoutGroup>
            </div>

            {/* Bottom Control Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-14 lg:h-36 pointer-events-none flex justify-center pb-2 lg:pb-6 items-end">
                <div className="absolute inset-0 z-0">
                    <ProgressiveBlur direction="bottom" className="h-full w-full" blurIntensity={1} blurLayers={6} />
                </div>
               <button
                  onClick={handleScrollDown}
                  className={cn(
                    "pointer-events-auto relative z-10 p-2 w-48 h-10 flex items-center justify-center rounded-full hover:bg-neutral-200/20 dark:bg-black/5 backdrop-blur-[4px] dark:hover:bg-neutral-900/10 transition-all group border border-white/10 dark:border-black/10",
                    currentCategoryIndex === techStackData.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}
                  aria-label="Scroll Down"
                >
                  <ChevronDown className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                </button>
            </div>
          </div>


          {/* Right Side: Detail Card */}
          <div className="lg:col-span-1 relative h-[50vh] min-h-0 lg:h-auto lg:min-h-auto order-1 lg:order-2">
            <div className="relative w-full h-full lg:sticky lg:top-[15vh] lg:h-auto">

              {/* Background Gradient Blob */}
              <div className="absolute -z-20 -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -z-20 -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />


              <AnimatePresence mode="wait">
                <CardContainer containerClassName="py-0 w-full h-full lg:h-auto" className="w-full h-full lg:h-auto">

                  <motion.div
                    key={selectedTech.id}
                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full lg:h-auto [transform-style:preserve-3d] bg-[image:var(--gradient-glass-light)] dark:bg-[image:var(--gradient-glass-dark)] rounded-3xl relative"
                  >
                    <CardBody className="w-full h-full min-h-0 lg:min-h-[42rem] relative group/card text-left flex flex-col !bg-transparent !border-0 !shadow-none !p-0">
                      
                      {/* Background Layer (Visuals + Blobs) - Z-0 */}
                      <div className="absolute inset-0 z-0 rounded-3xl [transform-style:preserve-3d]">
                        {/* Pulsing BLOB 1: Top Left */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                              opacity: [0.1, 0.2, 0.1], 
                              scale: [1, 1.2, 1],
                          }}
                          transition={{ 
                              duration: 5, 
                              repeat: Infinity, 
                              ease: "easeInOut", 
                          }}
                          className={cn(
                              "absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none opacity-10",
                              activeColor.blob
                          )}
                        />

                        {/* Pulsing BLOB 2: Bottom Right */}
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ 
                              opacity: [0.1, 0.2, 0.1], 
                              scale: [1, 1.3, 1],
                          }}
                          transition={{ 
                              duration: 7, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: 0.5 
                          }}
                          className={cn(
                              "absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none opacity-10",
                              activeColor.blob
                          )}
                        />

                         {/* Visual Glass Background */}
                        <div className={cn(
                            "absolute inset-0 rounded-3xl backdrop-blur-xl bg-[image:var(--gradient-glass-light)] dark:bg-[image:var(--gradient-glass-dark)] border shadow-2xl transition-all duration-500",
                            "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700",
                            activeColor.shadow
                        )} />
                      </div>

                      {/* Content Layer (3D Context) - Z-10 */}
                      <div className="relative z-10 w-full h-full p-8 pb-12 flex flex-col overflow-y-auto lg:overflow-visible no-scrollbar rounded-3xl [transform-style:preserve-3d] [&_*]:[transform-style:preserve-3d]">
                        <div>
                          <div className="flex items-start justify-between mb-6">
                            <CardItem className={cn(
                                "w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center border shadow-inner transition-colors duration-500",
                                "border-neutral-200 dark:border-neutral-700", // Default border
                                // We can accent the border of the icon box or just the icon logic?
                                // Let's keep box neutral, icon colored.
                            )}>
                              <selectedTech.icon className={cn("w-8 h-8 transition-colors duration-500", activeColor.icon)} />
                            </CardItem>
                            <CardItem className={cn(
                                "px-3 py-1 rounded-full backdrop-blur-lg bg-neutral-100/40 dark:bg-neutral-800/40 text-xs font-medium border transition-colors duration-500",
                                activeColor.text,
                                activeColor.border
                            )}>
                              {selectedTech.category}
                            </CardItem>
                          </div>

                          <CardItem translateZ={60} className="text-3xl font-bold text-black dark:text-white mb-2 w-full">
                            {selectedTech.name}
                          </CardItem>
                          <CardItem translateZ={40} className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed w-full">
                            {selectedTech.description}
                          </CardItem>

                          <div className="space-y-6 w-full">
                            <div>
                              <CardItem translateZ={30} className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                                Why we use it
                              </CardItem>
                              <CardItem translateZ={40} className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed w-full">
                                {selectedTech.whyWeUseIt}
                              </CardItem>
                            </div>

                            {selectedTech.metadata && (
                              <div>
                                <CardItem translateZ={30} className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                                  Quick Facts
                                </CardItem>
                                <CardItem translateZ={40} className="grid grid-cols-2 gap-2 w-full">
                                  {Object.entries(selectedTech.metadata).map(([key, value], idx) => (
                                    <div key={idx} className="flex flex-col p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                      <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400 font-semibold">{key}</span>
                                      <span className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">{value}</span>
                                    </div>
                                  ))}
                                </CardItem>
                              </div>
                            )}

                            <div>
                              <CardItem translateZ={30} className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
                                Key Features
                              </CardItem>
                              <CardItem translateZ={50} className="flex flex-wrap gap-2 w-full">
                                {selectedTech.features.map((feature, idx) => (
                                  <span key={idx} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-600 dark:text-neutral-300">
                                    {feature}
                                  </span>
                                ))}
                              </CardItem>
                            </div>

                            {selectedTech.images && selectedTech.images.length > 0 && (
                                <div>
                                    <CardItem translateZ={30} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                                        Gallery
                                    </CardItem>
                                    <CardItem translateZ={40} className="flex overflow-x-auto gap-4 pb-2 w-full snap-x">
                                        {selectedTech.images.map((img, idx) => (
                                            // Placeholder for actual image component
                                            <div key={idx} className="flex-none w-48 h-32 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center snap-center border border-neutral-300 dark:border-neutral-700">
                                                <span className="text-xs text-neutral-500">Image {idx + 1}</span>
                                            </div>
                                        ))}
                                    </CardItem>
                                </div>
                            )}

                            {selectedTech.codeSnippet && (
                              <div>
                                <CardItem translateZ={30} className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-3">
                                  Code Snippet
                                </CardItem>
                                <CardItem translateZ={40} className="w-full rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4 overflow-x-auto shadow-inner">
                                  <pre className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                                    <code>{selectedTech.codeSnippet}</code>
                                  </pre>
                                </CardItem>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </motion.div>
                </CardContainer>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
