"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackData, TechItem } from "@/lib/data/tech-stack";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function TechStackSection() {
  // Default to the first item of the first category
  const [selectedTech, setSelectedTech] = useState<TechItem>(
    techStackData[0].items[0]
  );

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-neutral-950 text-black dark:text-white overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          {/* Left Side: Categories and Tech Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8 overflow-y-auto pr-2 max-h-[800px] no-scrollbar">
            {techStackData.map((category) => (
              <div key={category.id} className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 pl-2 border-l-2 border-emerald-400 dark:border-emerald-700">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTech(item)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 group",
                        selectedTech.id === item.id
                          ? "bg-emerald-100/50 dark:bg-emerald-800/20 border-emerald-300/50 dark:border-emerald-600/50 shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/50"
                          : "bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:bg-emerald-100/30 dark:hover:bg-emerald-600/5 hover:border-emerald-300/50 dark:hover:border-emerald-600/30"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 transition-colors",
                         selectedTech.id === item.id ? "text-emerald-700/70 dark:text-emerald-500" : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200"
                      )} />
                      <span className={cn(
                        "text-sm font-medium",
                        selectedTech.id === item.id ? "text-black dark:text-white" : "text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-neutral-200"
                      )}>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>


{/* // ... (rest of imports remain the same, ensuring this is at the top)

// Inside TechStackSection component, replacing the right side div: */}

          {/* Right Side: Detail Card */}
          <div className="lg:col-span-1 relative h-full min-h-[500px] lg:min-h-auto">
            <div className="sticky top-24 h-full">
              
                         {/* Background Gradient Blob */}
                      <div className="absolute -z-20 -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -z-20 -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                     
<AnimatePresence>
              <CardContainer containerClassName="py-0 h-full w-full" className="h-full w-full">
                
                  <motion.div
                    key={selectedTech.id}
                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <CardBody className="h-full w-full bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden group/card text-left">
                      <div className="w-full h-full flex flex-col justify-between">
                        <div>
                        <div className="flex items-start justify-between mb-6">
                            <CardItem translateZ={50} className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 shadow-inner">
                                <selectedTech.icon className="w-8 h-8 text-emerald-700/70 dark:text-emerald-500" />
                            </CardItem>
                            <CardItem translateZ={50} className="px-3 py-1 rounded-full backdrop-blur-lg bg-neutral-100/40 dark:bg-neutral-800/40 text-xs font-medium text-emerald-600 dark:text-emerald-500 border border-emerald-200 dark:border-emerald-700">
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
                                <CardItem translateZ={30} className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed w-full">
                                    {selectedTech.whyWeUseIt}
                                </CardItem>
                            </div>

                            <div>
                                <CardItem translateZ={30} className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
                                    Key Features
                                </CardItem>
                                <CardItem translateZ={30} className="flex flex-wrap gap-2 w-full">
                                    {selectedTech.features.map((feature, idx) => (
                                        <span key={idx} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-600 dark:text-neutral-300">
                                            {feature}
                                        </span>
                                    ))}
                                </CardItem>
                            </div>

                            <div>
                                <CardItem translateZ={30} className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-3">
                                    Code Snippet
                                </CardItem>
                                <CardItem translateZ={40} className="w-full rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4 overflow-x-auto">
                                    <pre className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                                        <code>{selectedTech.codeSnippet}</code>
                                    </pre>
                                </CardItem>
                            </div>
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
