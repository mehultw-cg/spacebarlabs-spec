"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackData, TechItem } from "@/lib/data/tech-stack";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  // Default to the first item of the first category
  const [selectedTech, setSelectedTech] = useState<TechItem>(
    techStackData[0].items[0]
  );

  return (
    <section id="tech-stack" className="py-20 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Tech Stack
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We use the latest and greatest tools to build robust, scalable, and
            beautiful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          {/* Left Side: Categories and Tech Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8 overflow-y-auto pr-2 max-h-[800px] no-scrollbar">
            {techStackData.map((category) => (
              <div key={category.id} className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-300 pl-2 border-l-2 border-neutral-700">
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
                          ? "bg-neutral-800 border-neutral-600 shadow-lg shadow-neutral-900/50"
                          : "bg-neutral-900/50 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 transition-colors",
                         selectedTech.id === item.id ? "text-blue-400" : "text-neutral-400 group-hover:text-neutral-200"
                      )} />
                      <span className={cn(
                        "text-sm font-medium",
                        selectedTech.id === item.id ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                      )}>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Detail Card */}
          <div className="lg:col-span-1 relative h-full min-h-[500px] lg:min-h-auto">
            <div className="sticky top-24 h-full">
                <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTech.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full w-full rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col shadow-2xl backdrop-blur-sm relative overflow-hidden"
                >
                    {/* Background Gradient Blob */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-neutral-800/80 flex items-center justify-center border border-neutral-700 shadow-inner">
                                <selectedTech.icon className="w-8 h-8 text-blue-400" />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-xs font-medium text-neutral-400 border border-neutral-700">
                                {selectedTech.category}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedTech.name}</h3>
                        <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                            {selectedTech.description}
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Why we use it</h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {selectedTech.whyWeUseIt}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Key Features</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedTech.features.map((feature, idx) => (
                                        <span key={idx} className="px-2 py-1 rounded-md bg-neutral-800/50 border border-neutral-700 text-xs text-neutral-300">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">Code Snippet</h4>
                                <div className="rounded-lg bg-neutral-950 border border-neutral-800 p-4 overflow-x-auto">
                                    <pre className="text-xs text-neutral-300 font-mono">
                                        <code>{selectedTech.codeSnippet}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
