import React, { useRef, useEffect } from 'react';

// --- Types & Interfaces ---

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number; // Velocity X
  vy: number; // Velocity Y
  targetX: number | null;
  targetY: number | null;
}

interface Point {
  x: number;
  y: number;
}

// A connection is a tuple of two indices [start_index, end_index]
type Connection = [number, number];

enum Phase {
  NEBULA = 0,
  STARS_APPEAR = 1,
  FORM_ROCKET = 2,
  DRAW_ROCKET_LINES = 3,
  SCATTER_ROCKET = 4,
  FORM_LOCK = 5,
  DRAW_LOCK_LINES = 6,
  SCATTER_LOCK = 7,
  FORM_STACK = 8,
  DRAW_STACK_LINES = 9,
  SCATTER_STACK = 10,
}

interface AnimationState {
  phase: Phase;
  phaseTimer: number;
  stars: Star[];
  nebulaOpacity: number;
  lineOpacity: number;
}

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    // --- Configuration ---
    const STAR_COUNT = 150;
    const STAR_COLOR = 'rgba(100, 180, 255, 1)';
    const LINE_COLOR = 'rgba(60, 120, 255, 0.6)';
    const TRANSITION_SPEED = 0.04; // How fast stars snap to grid

    // --- Shape Data ---
    // 1. ROCKET
    const ROCKET_POINTS: Point[] = [
      { x: 0.5, y: 0.2 }, { x: 0.4, y: 0.4 }, { x: 0.6, y: 0.4 }, // Top triangle
      { x: 0.4, y: 0.7 }, { x: 0.6, y: 0.7 }, // Body Base
      { x: 0.3, y: 0.8 }, { x: 0.7, y: 0.8 }, // Wing tips
      { x: 0.5, y: 0.9 }, // Exhaust
    ];
    // Indices in ROCKET_POINTS to connect
    const ROCKET_LINES: Connection[] = [
      [0,1],[0,2],[1,2],     // Top
      [1,3],[2,4],[3,4],     // Body
      [3,5],[4,6],           // Wings out
      [3,7],[4,7],[5,7],[6,7] // Bottom connections
    ];

    // 2. LOCK
    const LOCK_POINTS: Point[] = [
      { x: 0.4, y: 0.3 }, { x: 0.6, y: 0.3 }, // Shackle Top
      { x: 0.4, y: 0.5 }, { x: 0.6, y: 0.5 }, // Shackle Bottom
      { x: 0.3, y: 0.5 }, { x: 0.7, y: 0.5 }, // Body Top Corners
      { x: 0.3, y: 0.8 }, { x: 0.7, y: 0.8 }, // Body Bottom Corners
      // Fingerprint center
      { x: 0.5, y: 0.65 }, { x: 0.45, y: 0.6 }, { x: 0.55, y: 0.6 }, { x: 0.45, y: 0.7 }, { x: 0.55, y: 0.7 }
    ];
    const LOCK_LINES: Connection[] = [
      [0,1],[0,2],[1,3], // Shackle arch
      [2,4],[3,5],       // Connect shackle to body
      [4,5],[4,6],[5,7],[6,7], // Body box
      [8,9],[8,10],[8,11],[8,12] // Fingerprint starburst
    ];

    // 3. SERVER STACK (4 Layers Isometric)
    const STACK_POINTS: Point[] = [];
    const STACK_LINES: Connection[] = [];
    
    // Generate stack procedurally
    for (let i = 0; i < 4; i++) {
      const yOffset = 0.2 + i * 0.15;
      // 4 points per layer (diamond shape)
      const layer: Point[] = [
        { x: 0.5, y: yOffset },         // Top
        { x: 0.35, y: yOffset + 0.05 }, // Left
        { x: 0.5, y: yOffset + 0.1 },   // Bottom
        { x: 0.65, y: yOffset + 0.05 }  // Right
      ];
      STACK_POINTS.push(...layer);
      
      const base = i * 4;
      // Connect the diamond
      STACK_LINES.push([base, base+1], [base+1, base+2], [base+2, base+3], [base+3, base]);
      
      // Connect to layer above (vertical lines)
      if (i > 0) {
        STACK_LINES.push(
          [base, base-4], 
          [base+1, base-3], 
          [base+2, base-2], 
          [base+3, base-1]
        );
      }
    }

    // --- State Initialization ---
    const state: AnimationState = {
      phase: Phase.NEBULA,
      phaseTimer: 0,
      stars: [],
      nebulaOpacity: 1,
      lineOpacity: 0,
    };

    const initStars = (): Star[] => {
      const stars: Star[] = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.5, // Drift velocity
          vy: (Math.random() - 0.5) * 0.5,
          targetX: null,
          targetY: null,
        });
      }
      return stars;
    };

    const setShapeTargets = (points: Point[]) => {
      // Clear all targets first
      state.stars.forEach(star => {
        star.targetX = null;
        star.targetY = null;
      });

      // Assign targets to the first N stars
      points.forEach((point, i) => {
        if (state.stars[i]) {
          state.stars[i].targetX = point.x * width;
          state.stars[i].targetY = point.y * height;
        }
      });
    };

    const scatterStars = () => {
      state.stars.forEach(star => {
        star.targetX = null;
        star.targetY = null;
        // Give them a random push for the "explosion" effect
        star.vx = (Math.random() - 0.5) * 3;
        star.vy = (Math.random() - 0.5) * 3;
      });
    };

    const drawNebula = () => {
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.8);
      // Inner color
      gradient.addColorStop(0, `rgba(30, 60, 120, ${state.nebulaOpacity})`);
      // Outer color (fade to black)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = () => {
      ctx.fillStyle = STAR_COLOR;
      ctx.shadowBlur = 4;
      ctx.shadowColor = STAR_COLOR;
      
      state.stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
    };

    const drawLines = (lines: Connection[]) => {
      if (state.lineOpacity <= 0) return;

      ctx.strokeStyle = `rgba(60, 120, 255, ${state.lineOpacity})`;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 8;
      ctx.shadowColor = LINE_COLOR;
      
      ctx.beginPath();
      lines.forEach(([idx1, idx2]) => {
        const star1 = state.stars[idx1];
        const star2 = state.stars[idx2];
        // Only draw if both stars exist (safety check)
        if (star1 && star2) {
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
        }
      });
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const updatePhysics = () => {
      state.stars.forEach(star => {
        // If we have a target, move towards it
        if (star.targetX !== null && star.targetY !== null) {
          star.x += (star.targetX - star.x) * TRANSITION_SPEED;
          star.y += (star.targetY - star.y) * TRANSITION_SPEED;
        } else {
          // Otherwise drift
          star.x += star.vx;
          star.y += star.vy;

          // Bounce off walls
          if (star.x < 0 || star.x > width) star.vx *= -1;
          if (star.y < 0 || star.y > height) star.vy *= -1;
        }
      });
    };

    // --- Main Render Loop ---
    const render = () => {
      // clear canvas
      ctx.fillStyle = '#000000'; // Hard black background
      ctx.fillRect(0, 0, width, height);

      state.phaseTimer++;

      // State Machine Logic
      switch (state.phase) {
        case Phase.NEBULA:
          state.nebulaOpacity = Math.sin(state.phaseTimer * 0.02) * 0.3 + 0.3;
          if (state.phaseTimer > 200) {
            state.phase = Phase.STARS_APPEAR;
            state.phaseTimer = 0;
          }
          break;

        case Phase.STARS_APPEAR:
          state.nebulaOpacity -= 0.005;
          if (state.nebulaOpacity <= 0) {
            state.nebulaOpacity = 0;
            state.phase = Phase.FORM_ROCKET;
            setShapeTargets(ROCKET_POINTS);
            state.phaseTimer = 0;
          }
          break;

        case Phase.FORM_ROCKET:
          // Wait for stars to align
          if (state.phaseTimer > 100) {
            state.phase = Phase.DRAW_ROCKET_LINES;
            state.phaseTimer = 0;
          }
          break;

        case Phase.DRAW_ROCKET_LINES:
          state.lineOpacity += 0.01;
          if (state.lineOpacity >= 1) {
             state.lineOpacity = 1;
             if (state.phaseTimer > 150) { // Hold the image
               state.phase = Phase.SCATTER_ROCKET;
               scatterStars();
               state.phaseTimer = 0;
             }
          }
          break;

        case Phase.SCATTER_ROCKET:
          state.lineOpacity -= 0.05;
          if (state.phaseTimer > 60) {
            state.phase = Phase.FORM_LOCK;
            setShapeTargets(LOCK_POINTS);
            state.lineOpacity = 0;
            state.phaseTimer = 0;
          }
          break;

        case Phase.FORM_LOCK:
          if (state.phaseTimer > 100) {
            state.phase = Phase.DRAW_LOCK_LINES;
            state.phaseTimer = 0;
          }
          break;

        case Phase.DRAW_LOCK_LINES:
           state.lineOpacity += 0.01;
           if (state.lineOpacity >= 1) {
             state.lineOpacity = 1;
             if (state.phaseTimer > 150) {
               state.phase = Phase.SCATTER_LOCK;
               scatterStars();
               state.phaseTimer = 0;
             }
           }
          break;

        case Phase.SCATTER_LOCK:
          state.lineOpacity -= 0.05;
          if (state.phaseTimer > 60) {
            state.phase = Phase.FORM_STACK;
            setShapeTargets(STACK_POINTS);
            state.lineOpacity = 0;
            state.phaseTimer = 0;
          }
          break;

        case Phase.FORM_STACK:
           if (state.phaseTimer > 100) {
            state.phase = Phase.DRAW_STACK_LINES;
            state.phaseTimer = 0;
          }
          break;

        case Phase.DRAW_STACK_LINES:
          state.lineOpacity += 0.01;
           if (state.lineOpacity >= 1) {
             state.lineOpacity = 1;
             if (state.phaseTimer > 150) {
               state.phase = Phase.SCATTER_STACK;
               scatterStars();
               state.phaseTimer = 0;
             }
           }
          break;

        case Phase.SCATTER_STACK:
          state.lineOpacity -= 0.05;
          if (state.phaseTimer > 60) {
            // Loop back to start
            state.phase = Phase.NEBULA;
            state.lineOpacity = 0;
            state.phaseTimer = 0;
            state.stars = initStars(); // Reset positions completely
          }
          break;
      }

      drawNebula();
      drawStars();
      updatePhysics();

      // Conditional drawing based on phase
      if (state.phase === Phase.DRAW_ROCKET_LINES || state.phase === Phase.SCATTER_ROCKET) {
        drawLines(ROCKET_LINES);
      } else if (state.phase === Phase.DRAW_LOCK_LINES || state.phase === Phase.SCATTER_LOCK) {
        drawLines(LOCK_LINES);
      } else if (state.phase === Phase.DRAW_STACK_LINES || state.phase === Phase.SCATTER_STACK) {
        drawLines(STACK_LINES);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    // --- Resize Handler ---
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      // If we resize, re-initialize to avoid stretched coordinates
      state.stars = initStars(); 
      
      // If we are currently in a shape phase, we need to re-calculate target coordinates
      // based on the new width/height
      if (state.phase === Phase.FORM_ROCKET || state.phase === Phase.DRAW_ROCKET_LINES) {
        setShapeTargets(ROCKET_POINTS);
      } else if (state.phase === Phase.FORM_LOCK || state.phase === Phase.DRAW_LOCK_LINES) {
        setShapeTargets(LOCK_POINTS);
      } else if (state.phase === Phase.FORM_STACK || state.phase === Phase.DRAW_STACK_LINES) {
        setShapeTargets(STACK_POINTS);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        background: '#000',
      }}
    />
  );
};

export default HeroAnimation;