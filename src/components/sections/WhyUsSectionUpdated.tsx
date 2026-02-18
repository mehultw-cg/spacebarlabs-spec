"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { whyUsData } from "@/lib/data/why-us-updated";
import { cn } from "@/lib/utils";

// Import all graphics
import AnalyticalLock from "@/components/vfx/why-us-graphics/analytical-lock";
import BgNetwork from "@/components/vfx/why-us-graphics/bg-network";
import ClosedLockFingerprint from "@/components/vfx/why-us-graphics/closed-lock-fingerprint";
import CloudMigration from "@/components/vfx/why-us-graphics/cloud-migration";
import Founders from "@/components/vfx/why-us-graphics/founders";
import GenericGlobe from "@/components/vfx/why-us-graphics/generic-globe";
import HeirarchyStars from "@/components/vfx/why-us-graphics/heirarchy-stars";
import LineDown from "@/components/vfx/why-us-graphics/line-down";
import LineUp from "@/components/vfx/why-us-graphics/line-up";
import OpenLock from "@/components/vfx/why-us-graphics/open-lock";
import ServerConstellationSafe from "@/components/vfx/why-us-graphics/server-constellation-safe";
import ShieldNetwork from "@/components/vfx/why-us-graphics/shield-network";
import UiBrain from "@/components/vfx/why-us-graphics/ui-brain";
import { Asterisk } from "lucide-react";

// Card colors from global css vars
const CARD_COLORS = [
    "#16a085", // Teal
    "#74d59c", // Light Green
    "#3498db", // Blue
    "#2980b9", // Dark Blue
    "#dda1f1", // Lavender
    "#2ecc71", // Green
    "#00cec9", // Cyan
];

export function WhyUsSectionUpdated() {
  return (
    <section id="why-us" className="py-20 bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            Why Us?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We don't just build software. We build trust, security, and independence.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-6 auto-rows-[310px] md:auto-rows-[310px] gap-6">
          {whyUsData.map((item, i) => (
            <WhyUsCard key={i} item={item} index={i} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const WhyUsCard = ({ item, index }: { item: typeof whyUsData[0]; index: number }) => {
    const colSpanClasses: Record<number, string> = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    };
    const rowSpanClasses: Record<number, string> = {
        1: "md:row-span-1",
        2: "md:row-span-2",
        3: "md:row-span-3",
    };

    const colClass = colSpanClasses[item.colSpan] || "md:col-span-1";
    const rowClass = rowSpanClasses[item.rowSpan] || "md:row-span-1";

    // Cycle through colors
    const color = CARD_COLORS[index % CARD_COLORS.length];
    
    // Helper for alpha
    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r} ${g} ${b}`; // Return only RGB values for Tailwind opacity modifier usage if needed, OR just return full rgba
    };
    
    // We'll use full RGBA strings for variables
    const activeShadow = `0 10px 40px -10px rgba(${hexToRgba(color, 1).replace(/ /g, ', ')}, 0.5)`;
    const inactiveShadow = `0 4px 20px -5px rgba(${hexToRgba(color, 1).replace(/ /g, ', ')}, 0.1)`;

    return (
        <BentoGridItem
            // Inject dynamic color variables
            style={{ 
                "--card-color": color,
                "--shadow-active": activeShadow,
                "--shadow-inactive": inactiveShadow,
            } as React.CSSProperties}
            
            // Header is the background graphic
            header={
                <div className="absolute inset-0 z-0 overflow-hidden rounded-xl bg-white/10 dark:bg-black/40 group-hover/bento:bg-white/30 dark:group-hover/bento:bg-black/50 transition-colors duration-500">
                    <GraphicComponent graphic={item.graphic} />
                    {/* Gradient Overlay for text readability - stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent opacity-90" />
                </div>
            }
            
            className={cn(
                colClass, 
                rowClass, 
                // Updated className: Fixed height (310px), explicit !shadow-none to reset defaults, then apply custom shadows
                "group/bento relative overflow-hidden h-full min-h-[310px] border border-neutral-200 dark:border-white/10 transition-all duration-300 [&>div:nth-child(2)]:justify-end [&>div:nth-child(2)]:h-full [&>div:nth-child(2)]:!translate-x-0 !shadow-none shadow-[var(--shadow-inactive)] hover:shadow-[var(--shadow-active)]"
            )}
            
            // Render content directly using flex-col justify-end to ensure bottom alignment
            // content expands *upwards* into available space without pushing parent boundaries
            title={
                <div className="relative z-20 h-full flex flex-col justify-end p-6 pointer-events-none">
                     {/* Title - Always visible at bottom anchor */}
                     <h3 className={cn(
                        "font-bold text-neutral-900 dark:text-white leading-tight mb-1 transition-all duration-300 z-10",
                        item.tier === 1 ? "text-2xl md:text-3xl" :
                        item.tier === 2 ? "text-xl md:text-2xl" :
                        "text-lg font-semibold"
                    )}>
                        {item.title}
                    </h3>
                    
                    {/* Sliding Content Container */}
                    {/* Tier 3: Border is ABOVE subheading (between Title and Subheading) */}
                    {/* Tier 1 & 2: Border is ABOVE description (between Subheading and Description) */}
                    
                    {/* Subheading Container */}
                    <div className={cn(
                        "transition-all duration-500 ease-in-out overflow-hidden bg-transparent",
                        // Tier 3: Subheading is part of revealed content, so it gets the border top
                        item.tier === 3 ? "max-h-0 opacity-0 group-hover/bento:max-h-[100px] group-hover/bento:opacity-100 border-t-2 mt-0 pt-0 group-hover/bento:pt-3 group-hover/bento:mt-2" : "max-h-[100px] opacity-100"
                    )}
                    style={item.tier === 3 ? { borderTopColor: color } : undefined}
                    >
                        <p className={cn(
                            "text-neutral-600 dark:text-neutral-300 font-medium pb-1",
                            item.tier === 1 ? "text-base md:text-lg" :
                            "text-sm"
                        )}>
                            {item.subheading}
                        </p>
                    </div>
                    
                    {/* Description & Buried Content - Hidden initially, slides up */}
                    <div 
                        className={cn(
                            "max-h-0 opacity-0 group-hover/bento:max-h-[500px] group-hover/bento:opacity-100 transition-all duration-500 ease-in-out overflow-hidden",
                            // Tier 1 & 2: Border is here
                            item.tier !== 3 && "border-t-2"
                        )}
                        style={item.tier !== 3 ? { borderTopColor: color } : undefined}
                    >
                         {/* Reduced text size for Tier 2 descriptions to save space */}
                         {item.description && <p className={cn("text-neutral-600 dark:text-neutral-400 my-3 leading-relaxed", item.tier === 2 ? "text-xs" : "text-sm")}>{item.description}</p>}
                         {item.bullets && (
                            <ul className="pl-1 space-y-2 pb-2">
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                                        <Asterisk className="w-4 h-4 shrink-0 mt-0.5" style={{ color: color }} />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            }
            icon={null}
        />
    )
}

// Updated GraphicComponent with adjusted colors
const GraphicComponent = ({ graphic }: { graphic?: string }) => {
    const baseClasses = "w-full h-full object-cover pointer-events-none absolute transition-all duration-700 ease-in-out";
    
    // Custom hover scaling for the Safe graphic since it has a large base scale
    const isSafe = graphic === "ServerConstellationSafe";
    const hoverClasses = isSafe 
        ? "group-hover/bento:scale-[1.6] group-hover/bento:opacity-100" 
        : "group-hover/bento:scale-110 group-hover/bento:opacity-100";
        
    const initialClasses = "opacity-60 mix-blend-multiply dark:mix-blend-screen scale-100";
    // Lighter Blue for Dark Mode (Cyan-50 to Cyan-200 range) as requested
    const colorClasses = "text-blue-900 dark:text-cyan-200"; 
    
    const className = cn(
        baseClasses, 
        hoverClasses, 
        initialClasses, 
        colorClasses,
        "right-[-10%] bottom-[-10%]" 
    );
    
    // Bolder stroke configurations
    const boldStroke = 2.5;
    const extraBoldStroke = 3;
    const ultraBoldStroke = 4; // Added for UiBrain

    switch (graphic) {
        case "Founders":
            return <Founders className={className} />;
        case "UiBrain":
            // UiBrain props: main
            // Moved up and to the right, even bolder
            return <UiBrain className={cn(className, "right-[-10%] bottom-[10%]")} strokeWidths={{ main: ultraBoldStroke }} />;
        case "AnalyticalLock":
            return <AnalyticalLock className={className} strokeWidths={{ rectangles: boldStroke, keyhole: boldStroke, outerLock: extraBoldStroke, innerLockTop: boldStroke }} />;
        case "ClosedLockFingerprint":
            // Bolder fingerprints
            return <ClosedLockFingerprint className={className} strokeWidths={{ fingerprint: 3, outerLock: 2.5, lockTop: 2.5 }} />;
        case "ShieldNetwork":
            return <ShieldNetwork className={cn(className, "right-[-10%] bottom-[-15%]")} />;
        case "CloudMigration":
            return <CloudMigration className={className} />;
        case "OpenLock":
            return <OpenLock className={className} />;
        case "GenericGlobe":
            return <GenericGlobe className={className} strokeWidths={{ main: boldStroke }} />;
        case "LineDown":
            return <LineDown className={className} strokeWidths={{ constellationLines: boldStroke, constellationNodes: 4, triangle: boldStroke, xAxis: boldStroke, yAxis: boldStroke, bigLine: extraBoldStroke, rectangles: boldStroke }} />;
        case "LineUp":
            return <LineUp className={className} />;
        case "ServerConstellationSafe":
             // Scaled up, opacity removed to match stroke intensity
             return <ServerConstellationSafe className={cn(className, "right-[-20%] scale-150 origin-center")} />;
        case "HeirarchyStars":
            return <HeirarchyStars className={className} />;
        case "BgNetwork":
            return <BgNetwork className={className} />;
        default:
            return <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10 absolute inset-0" />;
    }
}
