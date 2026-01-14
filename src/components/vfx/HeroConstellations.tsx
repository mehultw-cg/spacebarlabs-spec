'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURATION ---
const VIEWBOX_WIDTH = 100;
const VIEWBOX_HEIGHT = 100;
const TRANSITION_DURATION = 1.5; // Seconds to morph

// --- 1. DEFINE EXACT SHAPE COORDINATES ---
// We define shapes on a 100x100 grid.
// We only need ~35 points to make recognizable shapes. 
// The points will interpolate from one shape to the next.

const SHAPES = {
  // 1. RANDOM CLOUD (Initial State)
  cloud: Array.from({ length: 40 }).map(() => ({
    x: 50 + (Math.random() - 0.5) * 60,
    y: 50 + (Math.random() - 0.5) * 60,
  })),

  // 2. ROCKET (Triangle top, fins, window)
  rocket: [
    { x: 50, y: 10 }, // Nose
    { x: 35, y: 35 }, { x: 65, y: 35 }, // Upper Body
    { x: 35, y: 65 }, { x: 65, y: 65 }, // Lower Body
    { x: 20, y: 75 }, // Left Fin Tip
    { x: 80, y: 75 }, // Right Fin Tip
    { x: 50, y: 40 }, // Window Center
    { x: 50, y: 80 }, // Exhaust
    // Fillers to create volume (random points inside the rocket body)
    ...Array.from({ length: 31 }).map((_, i) => ({
      x: 40 + Math.random() * 20,
      y: 20 + Math.random() * 50,
    })),
  ],

  // 3. LOCK (Arch top, square body)
  lock: [
    // The Shackle (Arch)
    { x: 30, y: 40 }, { x: 30, y: 30 }, { x: 40, y: 20 }, { x: 50, y: 15 }, 
    { x: 60, y: 20 }, { x: 70, y: 30 }, { x: 70, y: 40 },
    // The Body (Square)
    { x: 25, y: 40 }, { x: 75, y: 40 }, // Top corners
    { x: 25, y: 80 }, { x: 75, y: 80 }, // Bottom corners
    // Fingerprint / Keyhole center
    { x: 50, y: 60 }, { x: 45, y: 60 }, { x: 55, y: 60 }, { x: 50, y: 55 }, { x: 50, y: 65 },
    // Fillers
    ...Array.from({ length: 24 }).map(() => ({
      x: 30 + Math.random() * 40,
      y: 45 + Math.random() * 30,
    })),
  ],

  // 4. SERVER STACK (Rhombus shapes)
  server: [
    // Top Layer
    { x: 50, y: 20 }, { x: 75, y: 30 }, { x: 50, y: 40 }, { x: 25, y: 30 },
    // Middle Layer
    { x: 50, y: 45 }, { x: 75, y: 55 }, { x: 50, y: 65 }, { x: 25, y: 55 },
    // Bottom Layer
    { x: 50, y: 70 }, { x: 75, y: 80 }, { x: 50, y: 90 }, { x: 25, y: 80 },
    // Fillers (Vertical lines connecting layers)
    { x: 25, y: 42 }, { x: 75, y: 42 }, { x: 25, y: 67 }, { x: 75, y: 67 },
    ...Array.from({ length: 24 }).map(() => ({
      x: 40 + Math.random() * 20,
      y: 30 + Math.random() * 50,
    })),
  ]
};

// Sequence of animations
const SEQUENCE = ['cloud', 'rocket', 'lock', 'server'] as const;

export default function HeroConstellation() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Cycle through shapes every 3 seconds
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % SEQUENCE.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get the points for the current shape
  const activeShape = SHAPES[SEQUENCE[currentStep]];
  
  // Define a fixed topology for lines (Mesh). 
  // We connect point 0->1, 1->2, etc. to create the "constellation" look.
  // We don't change WHO connects to WHO, we just move the points.
  // This is crucial for performance.
  const lines = activeShape.map((_, i) => {
    if (i >= activeShape.length - 1) return null;
    return {
      from: i,
      to: i + 1,
    };
  }).filter(Boolean);

  // Add some random cross-connections for more "web" like structure
  const extraLines = [
     {from: 0, to: 5}, {from: 5, to: 10}, {from: 10, to: 15}, 
     {from: 2, to: 8}, {from: 15, to: 25}, {from: 20, to: 35}
  ];

  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-transparent overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-slate-950 to-slate-950" />

      <motion.svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="w-full h-full max-w-2xl max-h-2xl stroke-blue-400 fill-blue-400"
        style={{ overflow: 'visible' }}
      >
        {/* 1. DRAW LINES FIRST (So they are behind dots) */}
        {[...lines, ...extraLines].map((line, i) => {
             if(!line) return null;
             return (
              <motion.line
                key={`line-${i}`}
                // Animate X1, Y1, X2, Y2
                initial={false}
                animate={{
                  x1: activeShape[line.from].x,
                  y1: activeShape[line.from].y,
                  x2: activeShape[line.to].x,
                  y2: activeShape[line.to].y,
                }}
                transition={{
                  duration: TRANSITION_DURATION,
                  ease: "easeInOut"
                }}
                stroke="rgba(96, 165, 250, 0.2)" // Faint Blue
                strokeWidth="0.5"
              />
            )
        })}

        {/* 2. DRAW DOTS */}
        {activeShape.map((point, i) => (
          <motion.circle
            key={`dot-${i}`}
            initial={false}
            animate={{
              cx: point.x,
              cy: point.y,
            }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: "easeInOut",
              // Add a tiny stagger so they don't all move robotically at once
              delay: i * 0.005 
            }}
            r={1.5} // Dot size
            className="drop-shadow-[0_0_4px_rgba(96,165,250,0.8)]" // Glow effect
          />
        ))}
      </motion.svg>
    </div>
  );
}