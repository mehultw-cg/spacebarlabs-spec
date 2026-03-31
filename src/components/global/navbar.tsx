"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/global/theme-toggle";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Button } from "@/components/ui/button";
import { RainbowButton } from "../ui/rainbow-button";
import { Sparkles, CreditCard, Rocket, Info, Mail } from "lucide-react";

export function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "#services", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Pricing", link: "#pricing", icon: <CreditCard className="w-4 h-4" /> },
    { name: "Why Us", link: "#why-us", icon: <Rocket className="w-4 h-4" /> },
    { name: "About", link: "#about", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-transparent to-black">
      <AceternityNavbar className={cn(className, "top-auto bottom-0 sm:top-2 sm:bottom-auto")}>
        <NavBody className="gap-4">
          <div className="flex items-center gap-2">
            <NavbarLogo />
          </div>
          
          <NavItems items={navItems} />
          
          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <AnimatedThemeToggler />
            <RainbowButton variant="outline" size="sm" className="hidden sm:flex" asChild>
              <a href="?subject=START_BUILD#contact">Get Started</a>
            </RainbowButton>
           
          </div>
        </NavBody>

        <MobileNav className="bottom-4 sm:bottom-auto">
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              {/* <ThemeToggle /> */}
              <AnimatedThemeToggler />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bottom-20 top-auto origin-bottom sm:top-16 sm:bottom-auto sm:origin-top"
          >
             <div className="flex flex-col gap-4 w-full">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="flex items-center gap-3 text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
                <RainbowButton variant="outline" className="w-full mt-4" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <a href="?subject=START_BUILD#contact">Get Started</a>
                </RainbowButton>
             </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
