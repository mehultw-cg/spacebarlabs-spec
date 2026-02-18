"use client";

import React from "react";
import { ReactComponent as RocketLogo } from "@/components/vfx/why-us-graphics/rocket-logo-only";
import { cn } from "@/lib/utils";

interface SpacebarLabsLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

import { spacebarFont } from "@/app/page";

// ...

export function SpacebarLabsLogo({ className, iconClassName, textClassName }: SpacebarLabsLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("w-14 h-14", iconClassName)}>
        <RocketLogo 
          className="w-full h-full text-blue-900 dark:text-sky-400 fill-current" 
          fillColor="currentColor"
          strokeColor="currentColor"
          strokeWidth="35px"
        />
      </div>
      <span className={cn("text-xl font-bold tracking-wide text-foreground", spacebarFont.className, textClassName)}>
        Spacebar Labs
      </span>
    </div>
  );
}
