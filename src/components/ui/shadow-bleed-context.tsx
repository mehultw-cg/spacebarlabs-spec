"use client";

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface HoverState {
  isHovered: boolean;
  cardRect: DOMRect | null;
  mouseX: number;
  mouseY: number;
}

interface ShadowBleedContextType {
  registerHover: (cardRect: DOMRect, mouseX: number, mouseY: number) => void;
  unregisterHover: () => void;
  hoverState: HoverState;
}

const ShadowBleedContext = createContext<ShadowBleedContextType | null>(null);

export function useShadowBleed() {
  return useContext(ShadowBleedContext);
}

interface ShadowBleedProviderProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}

export function ShadowBleedProvider({ children, containerRef }: ShadowBleedProviderProps) {
  const [hoverState, setHoverState] = useState<HoverState>({
    isHovered: false,
    cardRect: null,
    mouseX: 0,
    mouseY: 0,
  });

  const registerHover = useCallback((cardRect: DOMRect, mouseX: number, mouseY: number) => {
    setHoverState({
      isHovered: true,
      cardRect,
      mouseX,
      mouseY,
    });
  }, []);

  const unregisterHover = useCallback(() => {
    setHoverState({
      isHovered: false,
      cardRect: null,
      mouseX: 0,
      mouseY: 0,
    });
  }, []);

  return (
    <ShadowBleedContext.Provider value={{ registerHover, unregisterHover, hoverState }}>
      {children}
      <ShadowBleedOverlay containerRef={containerRef} hoverState={hoverState} />
    </ShadowBleedContext.Provider>
  );
}

interface ShadowBleedOverlayProps {
  containerRef: React.RefObject<HTMLDivElement>;
  hoverState: HoverState;
}

function ShadowBleedOverlay({ containerRef, hoverState }: ShadowBleedOverlayProps) {
  const { isHovered, cardRect, mouseX, mouseY } = hoverState;
  
  if (!isHovered || !cardRect || !containerRef.current) {
    return null;
  }

  // Get container position to calculate relative coordinates
  const containerRect = containerRef.current.getBoundingClientRect();
  
  // Shadow position relative to container
  const shadowLeft = cardRect.left - containerRect.left - 32; // -32 for bleed
  const shadowTop = cardRect.top - containerRect.top - 32;
  const shadowWidth = cardRect.width + 64;
  const shadowHeight = cardRect.height + 64;
  
  // Mouse position relative to shadow element
  const relativeMouseX = mouseX + 32; // Offset for the -32 bleed
  const relativeMouseY = mouseY + 32;

  return (
    <div
      className="pointer-events-none absolute rounded-[40px] blur-3xl transition-opacity duration-300"
      style={{
        left: shadowLeft,
        top: shadowTop,
        width: shadowWidth,
        height: shadowHeight,
        background: `radial-gradient(300px circle at ${relativeMouseX}px ${relativeMouseY}px, var(--color-2) 20%, var(--color-5) 50%, transparent 70%)`,
        opacity: 0.6,
        zIndex: -10, // Above section bg but below all rows
      }}
    />
  );
}
