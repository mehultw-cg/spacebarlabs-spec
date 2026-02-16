"use client";

import React from "react";
import { ReactComponent as RocketLogo } from "@/components/vfx/why-us-graphics/rocket-logo-only";
import { cn } from "@/lib/utils";

interface SpacebarLabsLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function SpacebarLabsLogo({ className, iconClassName, textClassName }: SpacebarLabsLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("w-8 h-8", iconClassName)}>
        <RocketLogo 
          className="w-full h-full text-cyan-400 fill-current" 
          fillColor="currentColor"
          strokeColor="currentColor"
        />
      </div>
      <span className={cn("text-xl font-bold tracking-wide text-foreground", textClassName)} style={{ fontFamily: 'Nasalization, sans-serif' }}>
        Spacebar Labs
      </span>
      {/* Styles for font loading if not globally loaded yet */}
      <style jsx global>{`
        @font-face {
          font-family: 'Nasalization';
          src: url('/fonts/nasalization-rg.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
