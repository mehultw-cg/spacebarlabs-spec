"use client";

import React from "react";
import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "Why Us", href: "#why-us" },
        { name: "Tech Stack", href: "#tech-stack" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: IconBrandTwitter, href: "#" },
    { icon: IconBrandGithub, href: "#" },
    { icon: IconBrandLinkedin, href: "#" },
    { icon: IconBrandInstagram, href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <NavbarLogo />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-xs">
              Forging digital legacies with code and creativity. We build the future, one pixel at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {links.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-black dark:text-white mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} SpaceBar Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>in the Cosmos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
