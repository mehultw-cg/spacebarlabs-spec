"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface HoverState {
  isHovered: boolean;
  cardId: string | null;
  cardRect: DOMRect | null;
  mouseX: number;
  mouseY: number;
}

interface ShadowBleedContextType {
  registerHover: (cardId: string, cardRect: DOMRect, mouseX: number, mouseY: number) => void;
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
    cardId: null,
    cardRect: null,
    mouseX: 0,
    mouseY: 0,
  });

  const registerHover = useCallback((cardId: string, cardRect: DOMRect, mouseX: number, mouseY: number) => {
    setHoverState({
      isHovered: true,
      cardId,
      cardRect,
      mouseX,
      mouseY,
    });
  }, []);

  const unregisterHover = useCallback(() => {
    setHoverState({
      isHovered: false,
      cardId: null,
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

  const containerRect = containerRef.current.getBoundingClientRect();
  
  const shadowLeft = cardRect.left - containerRect.left - 32;
  const shadowTop = cardRect.top - containerRect.top - 32;
  const shadowWidth = cardRect.width + 64;
  const shadowHeight = cardRect.height + 64;
  
  const relativeMouseX = mouseX + 32;
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
        zIndex: -10,
      }}
    />
  );
}
