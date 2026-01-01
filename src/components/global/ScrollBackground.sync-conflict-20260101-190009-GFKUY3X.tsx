'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrollBackgroundProps {
  children: React.ReactNode;
}

const BACKGROUND_IMAGES = [
  '/horsehead.webp',    // 0%
  '/webp/Tarantula_nebula_sm.webp',    // 25%
  '/webp/L1572_protostar_sm.webp',     // 50%
  '/webp/RhoOphiuchi_newStars_sm_bot_cr.webp',    // 75%
  '/horsehead.webp',    // 100%
];

const SCROLL_THRESHOLDS = [0, 0.25, 0.5, 0.75, 1];

export function ScrollBackground({ children }: ScrollBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    BACKGROUND_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the whole page
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Avoid division by zero
      if (docHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, scrollTop / docHeight));
      setScrollProgress(progress);

      // Determine active index
      let newIndex = 0;
      for (let i = SCROLL_THRESHOLDS.length - 1; i >= 0; i--) {
        if (progress >= SCROLL_THRESHOLDS[i]) {
          newIndex = i;
          break;
        }
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background layers */}
      <div className="fixed inset-0 -z-10 bg-black">
        {BACKGROUND_IMAGES.map((src, index) => (
          <motion.div
            key={`${index}-${src}`}
            className="absolute inset-0"
            style={{
              zIndex: index === activeIndex ? 1 : 0
            }}
            initial={false}
            animate={{
              opacity: index === activeIndex ? 1 : 0
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${src})`,
              }}
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 30,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Debug indicator (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-2 rounded text-sm pointer-events-none font-mono">
          Scroll: {Math.round(scrollProgress * 100)}% |
          Bg: {activeIndex + 1}/{BACKGROUND_IMAGES.length}
        </div>
      )}
    </div>
  );
}
