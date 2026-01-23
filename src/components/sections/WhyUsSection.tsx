"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { WhyUsCard } from "@/components/ui/why-us-card";
import ServerSafeAnimation from "@/components/vfx/why-us-graphics/server-constellation-safe";
import BoxedFingerprint from "@/components/vfx/why-us-graphics/boxed-fingerprint";
import ShieldNetwork from "@/components/vfx/why-us-graphics/shield-network";
import AnalyticalLock from "@/components/vfx/why-us-graphics/analytical-lock";
import OpenLock from "@/components/vfx/why-us-graphics/open-lock";
import ClosedLockFingerprint from "@/components/vfx/why-us-graphics/closed-lock-fingerprint";
import UiBrain from "@/components/vfx/why-us-graphics/ui-brain";
import Founders from "@/components/vfx/why-us-graphics/founders";
import LineUp from "@/components/vfx/why-us-graphics/line-up";
import GenericGlobe from "@/components/vfx/why-us-graphics/generic-globe";
import CloudMigration from "@/components/vfx/why-us-graphics/cloud-migration";
import { whyUsData } from "@/lib/data/why-us";
import {
  IconShieldCheck,
  IconPalette,
  IconUsers,
  IconCode,
  IconEye,
  IconLayout,
  IconClick,
  IconLock,
  IconCloud,
  IconSettings,
  IconMicroscope,
  IconHeart,
  IconStack2,
} from "@tabler/icons-react";

const GRAPHIC_STROKE_WIDTHS = {
  main: 4,
  detail: 2,
  outerShield: 4,
  middleShield: 2,
  innerShield: 4,
  networkLines: 2,
  networkNodes: 4,
  rectangles: 4,
  keyhole: 4,
  outerLock: 4,
  lockTop: 2,
  lockMain: 4,
  triangle: 2,
  xAxis: 4,
  yAxis: 4,
  graphLines: 4,
  bigLine: 4,
  fingerprint: 2,
  outer: 4,
  constellationLines: 2,
  constellationNodes: 4,
} as const;

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-transparent text-black dark:text-white">
      <div className="max-w-[104rem] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Why Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We are more than just a dev shop. We are your partners in innovation.
          </p>
        </div>

        <BentoGrid className="max-w-full mx-auto md:auto-rows-[10rem] md:grid-cols-7">
          {whyUsData.map((item, i) => {
            let className = "";
            if (item.colSpan === 2) className += "md:col-span-2 ";
            else if (item.colSpan === 3) className += "md:col-span-3 ";
            else if (item.colSpan === 4) className += "md:col-span-4 ";
            else if (item.colSpan === 5) className += "md:col-span-5 ";
            else if (item.colSpan === 6) className += "md:col-span-6 ";
            else if (item.colSpan === 7) className += "md:col-span-7 ";

            if (item.rowSpan === 2) className += "md:row-span-2 ";
            else if (item.rowSpan === 3) className += "md:row-span-3 ";
            else if (item.rowSpan === 4) className += "md:row-span-4 ";

            // Graphic Mapping - Select appropriate SVG for each card type
            let GraphicComponent = null;

            switch (item.id) {
              case "cloud-deployments":
                GraphicComponent = <CloudMigration strokeWidths={{ main: GRAPHIC_STROKE_WIDTHS.main }} />;
                break;
              case "stunning-design":
                GraphicComponent = <ServerSafeAnimation />;
                break;
              case "security-first":
                GraphicComponent = <ShieldNetwork strokeWidths={{
                  outerShield: GRAPHIC_STROKE_WIDTHS.outerShield,
                  middleShield: GRAPHIC_STROKE_WIDTHS.middleShield,
                  innerShield: GRAPHIC_STROKE_WIDTHS.innerShield,
                  networkLines: GRAPHIC_STROKE_WIDTHS.networkLines,
                  networkNodes: GRAPHIC_STROKE_WIDTHS.networkNodes,
                }} />;
                break;
              case "access-to-founders":
                GraphicComponent = <Founders strokeWidths={{
                  outerShield: GRAPHIC_STROKE_WIDTHS.outerShield,
                  middleShield: GRAPHIC_STROKE_WIDTHS.middleShield,
                  innerShield: GRAPHIC_STROKE_WIDTHS.innerShield,
                  networkLines: GRAPHIC_STROKE_WIDTHS.networkLines,
                  networkNodes: GRAPHIC_STROKE_WIDTHS.networkNodes,
                }} />;
                break;
              case "research-capabilities":
                GraphicComponent = <AnalyticalLock strokeWidths={{
                  rectangles: GRAPHIC_STROKE_WIDTHS.rectangles,
                  keyhole: GRAPHIC_STROKE_WIDTHS.keyhole,
                  outerLock: GRAPHIC_STROKE_WIDTHS.outerLock,
                  innerLockTop: GRAPHIC_STROKE_WIDTHS.lockTop,
                }} />;
                break;
              case "privacy-first":
                GraphicComponent = <ClosedLockFingerprint strokeWidths={{
                  fingerprint: GRAPHIC_STROKE_WIDTHS.fingerprint,
                  outerLock: GRAPHIC_STROKE_WIDTHS.outerLock,
                  lockTop: GRAPHIC_STROKE_WIDTHS.lockTop,
                }} />;
                break;
              case "continuous-monitoring":
                GraphicComponent = <OpenLock strokeWidths={{ lockMain: GRAPHIC_STROKE_WIDTHS.lockMain }} />;
                break;
              case "immersive-ui":
                GraphicComponent = <BoxedFingerprint strokeWidths={{
                  outer: GRAPHIC_STROKE_WIDTHS.outer,
                  fingerprint: GRAPHIC_STROKE_WIDTHS.fingerprint,
                }} />;
                break;
              case "lightning-fast":
                GraphicComponent = <LineUp strokeWidths={{
                  constellationLines: GRAPHIC_STROKE_WIDTHS.constellationLines,
                  constellationNodes: GRAPHIC_STROKE_WIDTHS.constellationNodes,
                  triangle: GRAPHIC_STROKE_WIDTHS.triangle,
                  xAxis: GRAPHIC_STROKE_WIDTHS.xAxis,
                  yAxis: GRAPHIC_STROKE_WIDTHS.yAxis,
                  graphLines: GRAPHIC_STROKE_WIDTHS.graphLines,
                  rectangles: GRAPHIC_STROKE_WIDTHS.rectangles,
                }} />;
                break;
              case "full-suite":
                GraphicComponent = <GenericGlobe strokeWidths={{ main: GRAPHIC_STROKE_WIDTHS.main }} />;
                break;
            }
            
            return (
              <WhyUsCard
                key={i}
                title={item.title}
                description={item.description}
                detail={item.detail}
                graphic={GraphicComponent}
                className={className.trim() + " p-0 bg-neutral-100 dark:bg-neutral-900/50"} // Reset padding and ensure bg is set if needed, though WhyUsCard has defaults
              />
            )
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

const WhyUsHeader = ({ icon }: { icon: string }) => {
  const getIcon = (iconName: string) => {
    const className = "h-full w-full";
    switch (iconName) {
      case "ShieldCheck": return <IconShieldCheck className={className} />;
      case "Palette": return <IconPalette className={className} />;
      case "Users": return <IconUsers className={className} />;
      case "Code2": return <IconCode className={className} />;
      case "Eye": return <IconEye className={className} />;
      case "Layout": return <IconLayout className={className} />;
      case "MousePointerClick": return <IconClick className={className} />;
      case "Lock": return <IconLock className={className} />;
      case "Cloud": return <IconCloud className={className} />;
      case "Settings": return <IconSettings className={className} />;
      case "Microscope": return <IconMicroscope className={className} />;
      case "Heart": return <IconHeart className={className} />;
      case "Layers": return <IconStack2 className={className} />;
      default: return <IconShieldCheck className={className} />;
    }
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center p-4 border border-white/10">
      <div className="w-12 h-12 opacity-50">{getIcon(icon)}</div>
    </div>
  );
};

const WhyUsIcon = ({ icon }: { icon: string }) => {
  const className = "h-8 w-8 text-neutral-300";
  switch (icon) {
    case "ShieldCheck": return <IconShieldCheck className={className} />;
    case "Palette": return <IconPalette className={className} />;
    case "Users": return <IconUsers className={className} />;
    case "Code2": return <IconCode className={className} />;
    case "Eye": return <IconEye className={className} />;
    case "Layout": return <IconLayout className={className} />;
    case "MousePointerClick": return <IconClick className={className} />;
    case "Lock": return <IconLock className={className} />;
    case "Cloud": return <IconCloud className={className} />;
    case "Settings": return <IconSettings className={className} />;
    case "Microscope": return <IconMicroscope className={className} />;
    case "Heart": return <IconHeart className={className} />;
    case "Layers": return <IconStack2 className={className} />;
    default: return <IconShieldCheck className={className} />;
  }
};
