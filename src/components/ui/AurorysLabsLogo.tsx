"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { headingFont, nasaFont } from "@/app/page";

interface AurorysLabsLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function AurorysLabsLogo({ className, iconClassName, textClassName }: AurorysLabsLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative w-14 h-14", iconClassName)}>
        {/* Main Logo Layer 1 */}
        <Image
          src="/logo_1.svg"
          alt="Aπurorys Labs Logo"
          fill
          className="object-contain"
          priority
        />
        {/* Rotating Decorative Element */}
        {/* <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-40 mix-blend-screen pointer-events-none">
          <Image
            src="/logo_rotate.svg"
            alt=""
            fill
            className="object-contain scale-[1.15]"
          />
        </div> */}
      </div>
      <span className={cn("text-xl font-bold tracking-wide text-foreground", nasaFont.className, textClassName)}>
        Aurorys Labs
      </span>
    </div>
  );
}
