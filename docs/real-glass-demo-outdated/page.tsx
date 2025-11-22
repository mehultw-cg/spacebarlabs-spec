"use client";

import React from "react";
import { RealGlass, RealGlassProvider } from "@/components/ui/real-glass";
import { BackgroundBeams } from "@/components/ui/background-beams";
import LiquidGlass from 'liquid-glass-react'
import Image from "next/image";

export default function RealGlassDemo() {
  return (
    <>
   
    <RealGlassProvider>
      <div className="min-h-screen w-full bg-neutral-950 relative flex items-center justify-center overflow-hidden">
        {/* <BackgroundBeams className="opacity-50" /> */}
         <Image
        src='/weic2519a.webp'
        alt='weic2519a'
        layout="fill"
        objectFit="cover"
        objectPosition="center"
/>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4">
          
          {/* Card 1: Standard Glass */}
          <RealGlass 
            className="p-8 rounded-3xl text-white min-h-[300px] flex flex-col justify-center items-center text-center bg-black/50 backdrop-blur-lg"
            frosting={0.1}
            ior={1.2}
            lightStrength={2}
          >
            <h2 className="text-3xl font-bold mb-4">Real Glass</h2>
            <p className="text-neutral-200">
              This card uses the RealGlass library to create a realistic refraction effect based on the background.
            </p>
          </RealGlass>

          {/* Card 2: High Frosting */}
          <RealGlass 
            className="p-8 rounded-3xl text-white min-h-[300px] flex flex-col justify-center items-center text-center"
            frosting={0.5}
            ior={1.5}
            lightStrength={1.5}
            tintColor={[0, 1, 0]} // Green tint
            tintStrength={0.2}
          >
            <h2 className="text-3xl font-bold mb-4">Frosted & Tinted</h2>
            <p className="text-neutral-200">
              High frosting and a green tint applied.
            </p>
          </RealGlass>

          {/* Button Example */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
            <RealGlass 
              className="px-8 py-4 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-transform"
              frosting={0}
              ior={1.4}
              borderRadius={9999}
            >
              Glass Button
            </RealGlass>
          </div>

        </div>

        <div className="absolute bottom-10 left-0 right-0 text-center text-neutral-500">
          Note: RealGlass captures a static screenshot. If the background beams move, the refraction might remain static until re-initialized.
        </div>
      </div>
    </RealGlassProvider>
    
      <div className="min-h-screen w-full bg-neutral-950 relative flex items-center justify-center overflow-hidden">
        {/* <BackgroundBeams className="opacity-70" /> */}
         <Image
        src='/weic2519a.webp'
        alt='weic2519a'
        layout="fill"
        objectFit="cover"
        objectPosition="center"
/>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4">
          
          {/* Card 1: Standard Glass */}
         <LiquidGlass
            className="p-8 rounded-3xl text-white min-h-[300px] flex flex-col justify-center items-center text-center"
            blurAmount={78}
            displacementScale={89}
            elasticity={0.2}
            mode="prominent"
          >
            <h2 className="text-3xl font-bold mb-4">Real Glass</h2>
            <p className="text-neutral-200">
              This card uses the RealGlass library to create a realistic refraction effect based on the background.
            </p>
          </LiquidGlass>

          {/* Card 2: High Frosting */}
          <LiquidGlass 
            className="p-8 rounded-3xl text-white min-h-[300px] flex flex-col justify-center items-center text-center"
           blurAmount={0.88}
           saturation={180}
            displacementScale={89}
            cornerRadius={100}
            elasticity={0.2}
            mode="prominent"
          >
            <h2 className="text-3xl font-bold mb-4 z-20">Frosted & Tinted</h2>
            <p className="text-emerald-600 z-20">
              High frosting and a green tint applied.
            </p>
          </LiquidGlass>

          {/* Button Example */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
            <LiquidGlass 
              className="px-8 py-4 rounded-full text-white font-bold cursor-pointer hover:scale-105 transition-transform"
              blurAmount={0.1}
            displacementScale={89}
            elasticity={0.2}
            mode="prominent"
            >
              Glass Button
            </LiquidGlass>
          </div>

        </div>

        <div className="absolute bottom-10 left-0 right-0 text-center text-neutral-500">
          Note: RealGlass captures a static screenshot. If the background beams move, the refraction might remain static until re-initialized.
        </div>
      </div>
    </>
  );
}
