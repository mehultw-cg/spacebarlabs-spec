"use client";

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

export function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Pricing", link: "#pricing" },
    { name: "Why Us", link: "#why-us" },
    { name: "Tech Stack", link: "#tech-stack" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full">
      <AceternityNavbar className={className}>
        <NavBody className="gap-4">
          <div className="flex items-center gap-2">
            <NavbarLogo />
          </div>
          
          <NavItems items={navItems} />
          
          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <AnimatedThemeToggler />
            <Button variant="default" size="sm" className="hidden sm:flex">
              Get Started
            </Button>
          </div>
        </NavBody>

        <MobileNav>
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
          >
             <div className="flex flex-col gap-4 w-full">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="w-full mt-4">Get Started</Button>
             </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
