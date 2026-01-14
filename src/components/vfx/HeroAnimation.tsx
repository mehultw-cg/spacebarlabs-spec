'use client';

import React, { useEffect, useRef } from 'react';

// --- Configuration ---
const PARTICLE_COUNT = 80;
const CONNECT_DISTANCE = 100;
const TRANSITION_SPEED = 0.04; // Lower = slower, smoother morphing

type Point = { x: number; y: number };

// --- Shape Generators (Math to mimic your images) ---
// These functions return normalized coordinates (0 to 1)

const getSpiralShape = (i: number, total: number): Point => {
  const theta = i * 0.5; // tightness
  const r = (i / total) * 0.4;
  return {
    x: 0.5 + r * Math.cos(theta),
    y: 0.5 + r * Math.sin(theta),
  };
};

const getRocketShape = (i: number, total: number): Point => {
  // Simple approximation: Triangle top, rectangle bottom
  if (i < total * 0.3) {
    // Nose cone (triangle)
    const prog = i / (total * 0.3);
    return { x: 0.5 - 0.15 * prog + 0.3 * prog * (i%2), y: 0.2 + 0.3 * prog }; // Rough triangle noise
  } else {
    // Body and fins
    const prog = (i - total * 0.3) / (total * 0.7);
    return { 
        x: 0.35 + 0.3 * Math.random(), 
        y: 0.5 + 0.4 * prog 
    };
  }
};

const getLockShape = (i: number, total: number): Point => {
    // Padlock: loop on top, square body
    if (i < total * 0.3) {
        // Shackle (Arch)
        const angle = Math.PI + (Math.PI * i) / (total * 0.3);
        return { x: 0.5 + 0.2 * Math.cos(angle), y: 0.4 + 0.2 * Math.sin(angle) };
    } else {
        // Body (Square)
        return { 
            x: 0.3 + 0.4 * Math.random(), 
            y: 0.4 + 0.4 * Math.random() 
        };
    }
};

const getServerShape = (i: number, total: number): Point => {
    // Stacked rectangles
    const layer = Math.floor((i / total) * 3); // 3 layers
    const xBase = 0.25;
    const width = 0.5;
    const yBase = 0.2 + layer * 0.25;
    
    return {
        x: xBase + width * Math.random(),
        y: yBase + 0.15 * Math.random()
    };
};

const SHAPES = [getSpiralShape, getRocketShape, getLockShape, getServerShape];

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let currentShapeIndex = 0;
    let frameCount = 0;

    // --- Particle System ---
    class Particle {
      x: number = 0;
      y: number = 0;
      targetX: number = 0;
      targetY: number = 0;

      constructor(index: number) {
        // Start random
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.setTarget(0, index);
      }

      setTarget(shapeIndex: number, particleIndex: number) {
        const shapeFunc = SHAPES[shapeIndex];
        const normalized = shapeFunc(particleIndex, PARTICLE_COUNT);
        
        // Map normalized (0-1) coords to canvas size
        // We add margins (0.2 to 0.8 range) to keep shapes centered
        this.targetX = normalized.x * width;
        this.targetY = normalized.y * height;
      }

      update() {
        // Ease towards target (Linear Interpolation)
        this.x += (this.targetX - this.x) * TRANSITION_SPEED;
        this.y += (this.targetY - this.y) * TRANSITION_SPEED;
      }
    }

    // Initialize Particles
    const particles: Particle[] = [];
    
    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-calculate targets on resize so shapes stay proportional
      particles.forEach((p, i) => p.setTarget(currentShapeIndex, i));
    };

    // Initial Setup
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(i));
    }

    // --- Animation Loop ---
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // 1. Update and Draw Particles
      ctx.fillStyle = '#60a5fa'; // Blue-400 (Tailwind color)
      
      particles.forEach((p) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Connections (The "Constellation" look)
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)'; // Faint blue line
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      // 3. Handle Shape Cycling
      frameCount++;
      // Change shape every 200 frames (approx 3 seconds)
      if (frameCount % 200 === 0) {
        currentShapeIndex = (currentShapeIndex + 1) % SHAPES.length;
        particles.forEach((p, i) => p.setTarget(currentShapeIndex, i));
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-96 relative bg-slate-900 rounded-lg overflow-hidden"
    >
      <canvas ref={canvasRef} className="block" />
      {/* Optional Gradient Overlay for style */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
}