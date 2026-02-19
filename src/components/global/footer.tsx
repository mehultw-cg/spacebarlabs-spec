"use client";

import React from "react";
import Link from "next/link";
import { SpacebarLabsLogo } from "@/components/ui/SpacebarLabsLogo";
import { IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";
import { PrivacyModal, TermsModal, CookieModal } from "./PolicyModals";

export function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "Why Us", href: "#why-us" },
        // { name: "Tech Stack", href: "#tech-stack" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#", Modal: PrivacyModal },
        { name: "Terms of Service", href: "#", Modal: TermsModal },
        { name: "Cookie Policy", href: "#", Modal: CookieModal },
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
    <footer className="bg-transparent border-t border-neutral-200 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/">
                <SpacebarLabsLogo textClassName="text-white dark:text-white" />
              </Link>
            </div>
            <p className="text-neutral-200 dark:text-neutral-200 text-sm leading-relaxed max-w-xs">
              Designing the foundations of a safer digital world.
            </p>
          </div>

          {/* Links Columns - Glassmorphic Card Group */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 rounded-3xl bg-white/60 dark:bg-neutral-950/20 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10 shadow-xl dark:shadow-none">
            {links.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black dark:text-white mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.items.map((item, itemIdx) => {
                    // @ts-ignore
                    if (item.Modal) {
                      // @ts-ignore
                      const Modal = item.Modal;
                      return (
                        <li key={itemIdx}>
                          <Modal>
                            <button className="text-neutral-900 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400 text-sm transition-colors text-left bg-transparent border-none p-0">
                              {item.name}
                            </button>
                          </Modal>
                        </li>
                      );
                    }
                    return (
                      <li key={itemIdx}>
                        <a
                          href={item.href}
                          className="text-neutral-900 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400 text-sm transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm">
            &copy; {new Date().getFullYear()} SpaceBar Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-200 dark:text-neutral-200">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>for people, not just systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
