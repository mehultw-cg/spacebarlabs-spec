"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = "";
      if (href.startsWith("#")) {
        targetId = href;
      } else if (href.startsWith("?") && href.includes("#")) {
        // Handle links like "?subject=...#contact"
        targetId = "#" + href.split("#")[1];
      }

      // Handle internal hash links only
      if (targetId && targetId.length > 1) {
        e.preventDefault();
        
        // Update URL with the query params and hash
        window.history.pushState({}, "", href);

        const element = document.querySelector(targetId) as HTMLElement;
        if (element && lenis) {
          lenis.scrollTo(element, { 
            offset: -100, // Offset for navbar (approx 80px + padding)
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
}
