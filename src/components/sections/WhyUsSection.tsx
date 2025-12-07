"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white dark:bg-black text-black dark:text-white">
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
             
             return (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={className.trim()}
              icon={item.icon === "Placeholder" ? null : <WhyUsIcon icon={item.icon} />}
            />
          )})}
        </BentoGrid>
      </div>
    </section>
  );
}

const WhyUsHeader = ({ icon }: { icon: string }) => {
  const getIcon = (iconName: string) => {
    const className = "h-full w-full text-neutral-300";
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
