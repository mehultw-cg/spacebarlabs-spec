"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Main Container with Animated Gradient Border */}
      <div className="relative z-10 overflow-hidden rounded-3xl bg-neutral-950/50 border border-white/10">
        <BorderBeam size={250} duration={12} delay={9} borderWidth={2} colorFrom="#3b82f6" colorTo="#a855f7" />
        
        {/* Glassmorphic Card Content */}
        <div className="relative z-20 backdrop-blur-xl px-8 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-4">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Projects
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Forge your digital legacy <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              like the stars forged you.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We weave code into constellations, crafting digital experiences that defy gravity and illuminate the void. Your vision is our universe; let's explore the infinite possibilities together.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-12 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's start your project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 font-medium backdrop-blur-sm"
              onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
