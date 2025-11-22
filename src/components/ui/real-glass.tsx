"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Types for RealGlass options
interface RealGlassOptions {
  frosting?: number;
  chromaticAberration?: number;
  glassOpacity?: number;
  lightStrength?: number;
  lightX?: number;
  lightY?: number;
  edgeSmoothness?: number;
  ior?: number;
  borderRadius?: number;
  specularShininess?: number;
  thickness?: number;
  tintColor?: [number, number, number];
  tintStrength?: number;
  useMask?: boolean;
  maskImage?: string | null;
  maskElement?: HTMLElement | null;
  maskSmoothing?: number;
}

interface RealGlassContextType {
  instance: any | null;
  isInitialized: boolean;
  init: () => Promise<void>;
}

const RealGlassContext = createContext<RealGlassContextType>({
  instance: null,
  isInitialized: false,
  init: async () => {},
});

/**
 * RealGlassProvider
 * 
 * This provider manages a single instance of RealGlass to avoid re-screenshotting the page
 * multiple times. Wrap your application or a specific section with this provider.
 * 
 * Note: RealGlass works by taking a screenshot of the page. If the background changes
 * significantly (e.g., navigation), you might need to re-initialize.
 */
export const RealGlassProvider = ({ children }: { children: React.ReactNode }) => {
  const [instance, setInstance] = useState<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const init = async () => {
    if (typeof window === "undefined") return;

    try {
      // Dynamically import realglass to avoid SSR issues
      const RealGlassModule = await import("realglass");
      // @ts-ignore
      const RealGlass = RealGlassModule.default || RealGlassModule;
      
      const glass = new RealGlass();
      await glass.init();
      setInstance(glass);
      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize RealGlass:", error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <RealGlassContext.Provider value={{ instance, isInitialized, init }}>
      {children}
    </RealGlassContext.Provider>
  );
};

export const useRealGlass = () => useContext(RealGlassContext);

interface RealGlassProps extends RealGlassOptions {
  children?: React.ReactNode;
  className?: string;
  /**
   * If true, forces a new instance of RealGlass instead of using the shared one.
   * Useful if this element needs a fresh screenshot of the underlying content.
   */
  forceNewInstance?: boolean;
}

/**
 * RealGlass Component
 * 
 * A React wrapper for the realglass library.
 * 
 * @example
 * ```tsx
 * <RealGlass 
 *   frosting={0.2} 
 *   ior={1.5} 
 *   className="p-8 text-white"
 * >
 *   <h1>Glass Content</h1>
 * </RealGlass>
 * ```
 */
export const RealGlass = ({
  children,
  className,
  forceNewInstance = false,
  ...options
}: RealGlassProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { instance: masterInstance, isInitialized } = useRealGlass();
  const [localInstance, setLocalInstance] = useState<any>(null);

  useEffect(() => {
    const applyEffect = async () => {
      if (!ref.current) return;

      try {
        let glassToUse = localInstance;

        if (!glassToUse) {
          const RealGlassModule = await import("realglass");
          // @ts-ignore
          const RealGlass = RealGlassModule.default || RealGlassModule;

          if (forceNewInstance) {
            // Create a completely new instance (screenshots page again)
            glassToUse = new RealGlass();
            await glassToUse.init();
          } else if (masterInstance && isInitialized) {
            // Use the master instance as a base (reuses screenshot)
            glassToUse = new RealGlass(masterInstance);
          } else {
            // Wait for master instance or fallback
            return;
          }
          setLocalInstance(glassToUse);
        }

        if (glassToUse) {
          await glassToUse.apply(ref.current, {
            frosting: 0.1,
            borderRadius: 20,
            lightStrength: 1.5,
            ior: 1.2,
            ...options
          });
        }
      } catch (error) {
        console.error("Error applying RealGlass:", error);
      }
    };

    applyEffect();
  }, [masterInstance, isInitialized, forceNewInstance, options]);

  return (
    <div 
      ref={ref} 
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </div>
  );
};
