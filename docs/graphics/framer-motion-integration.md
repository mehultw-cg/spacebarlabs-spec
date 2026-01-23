# Framer Motion Animation Concepts

High-level animation concepts AND detailed implementation pseudo-code for all "Why Us" section SVG graphics using Framer Motion.

## General Approach

All animations will:
- Use Framer Motion for React-based animation
- Be performant (SVG path-based, minimal repaints)
- Support both light and dark themes
- Be subtle (not distracting from content)
- Support hover states where appropriate
- Respect `useReducedMotion` user preference

## Per-Graphic Animation Concepts

### UI-Brain

#### High-Level Concepts

**UI Section (Wireframe Frame)**:
- Shimmer from left to right
- Diagonal angle (~45°)
- Light becomes brighter during shimmer
- Direction: left → right, then right → left
- Continuous loop

**Brain Section (Neural Network)**:
- Pulse illumination from center
- Starting from approximate brain center
- Radiates outward to all neural paths
- Soft glow effect, increasing then decreasing opacity
- Loop every 3-4 seconds

**Combined Behavior**:
- Shimmer and pulse are offset/alternating
- When shimmer reaches edge, brain pulse starts
- Creates sense of activity without chaos

#### Implementation Pseudo-Code

**UI Section Shimmer Animation**:
```tsx
import { motion } from "framer-motion";

// Wrap entire UI-Brain component
<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative"
>
  <g id="UI-brain">
    <defs>
      <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity={0.3} />
        <stop offset="50%" stopColor="currentColor" stopOpacity={1} />
        <stop offset="100%" stopColor="currentColor" stopOpacity={0.3} />
      </linearGradient>
    </defs>
    
    {uiPaths.map((path, index) => (
      <motion.path
        key={`ui-${index}`}
        d={path.d}
        stroke="url(#shimmerGradient)"
        strokeWidth={`${mainStroke}px`}
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.15,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
      />
    ))}
  </g>

  <motion.g
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    {/* Brain section with pulse */}
  </motion.g>
</motion.svg>
```

**Brain Section Pulse Animation**:
```tsx
<g id="Brain">
  {brainPaths.map((path, index) => {
    // Calculate distance from approximate center for delay
    const centerDistance = Math.abs(path.cx - centerX) + Math.abs(path.cy - centerY);
    const delay = (centerDistance / maxDistance) * 1.5;
    
    return (
      <motion.path
        key={`brain-${index}`}
        d={path.d}
        stroke="currentColor"
        strokeWidth={`${detailStroke}px`}
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.9, 0.3],
          filter: [
            "drop-shadow(0 0 0px rgba(100, 200, 255, 0))",
            "drop-shadow(0 0 8px rgba(100, 200, 255, 0.6))",
            "drop-shadow(0 0 0px rgba(100, 200, 255, 0))"
          ]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }}
      />
    );
  })}
</g>
```

**Combined Offset Animation**:
```tsx
// Wrap entire component with staggered entrance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <svg>
    {/* UI shimmer starts immediately */}
    {/* Brain pulse starts after 1.5s delay */}
  </svg>
</motion.div>
```

---

### Founders

#### High-Level Concepts

**Progressive Constellation Formation**:
- Lines draw in sequence following network path
- Star nodes fade in as lines connect
- Optional: Subtle rotation of entire constellation
- On hover: Glow effect on closest star
- Metaphor: Constellation forming as founders connect with client

#### Implementation Pseudo-Code

**Progressive Line Draw Animation**:
```tsx
import { motion } from "framer-motion";

const connectionLines = [
  { from: "client", to: "topLeft", path: "M..." },
  { from: "client", to: "topRight", path: "M..." },
  { from: "topLeft", to: "topRight", path: "M..." },
  // ... more connections
];

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <g id="Founders">
    <g id="FoundersConstellation">
      {/* Draw lines in sequence */}
      {connectionLines.map((line, index) => (
        <motion.path
          key={`line-${index}`}
          d={line.path}
          stroke="currentColor"
          strokeWidth={`${networkLinesStroke}px`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Star nodes fade in as lines connect */}
      {starNodes.map((node, index) => (
        <motion.path
          key={`star-${index}`}
          d={node.d}
          stroke="currentColor"
          strokeWidth={`${networkNodesStroke}px`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: (index + 1) * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </g>
    
    {/* Three circles with figure silhouettes - subtle pulse */}
    {circles.map((circle, index) => (
      <motion.g
        key={`circle-${index}`}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.7,
          ease: "easeInOut"
        }}
      >
        <circle {...circle} />
      </motion.g>
    ))}
  </g>
</motion.svg>
```

**Hover Glow Effect**:
```tsx
<motion.svg
  whileHover={{ 
    scale: 1.02,
    filter: "drop-shadow(0 0 12px rgba(100, 200, 255, 0.4))"
  }}
  transition={{ 
    type: "spring", 
    stiffness: 300,
    damping: 20
  }}
>
  {/* constellation content */}
</motion.svg>
```

**Continuous Twinkle on Extra Stars**:
```tsx
{extraStars.map((star, i) => (
  <motion.circle
    key={`twinkle-${i}`}
    cx={star.x}
    cy={star.y}
    r={star.r}
    fill="currentColor"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: "easeInOut"
    }}
  />
))}
```

---

### Shield Network

#### High-Level Concepts

**Layered Shield Pulse**:
- Three shield layers pulse at different rates
- Network lines show data flowing (small particles moving along paths)
- Outer shield: slow pulse (4s)
- Middle shield: medium pulse (3s)
- Inner shield: fast pulse (2s)
- Metaphor: Active monitoring and layered security

#### Implementation Pseudo-Code

**Shield Layer Pulse Animation**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <g id="Shielkd">
    {/* Outer shield - slow pulse */}
    <motion.g
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <g id="Outer-Shield">
        {/* Outer shield paths */}
      </g>
    </motion.g>

    {/* Middle shield - medium pulse */}
    <motion.g
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 0.9, 0.7] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: 0.5,
        ease: "easeInOut"
      }}
    >
      <g id="Middle-Shield">
        {/* Middle shield paths */}
      </g>
    </motion.g>

    {/* Inner shield - fast pulse */}
    <motion.g
      initial={{ opacity: 0.9 }}
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: 1,
        ease: "easeInOut"
      }}
    >
      <g id="Inner-Shield">
        {/* Inner shield paths */}
      </g>
    </motion.g>

    {/* Network overlay with flowing particles */}
    <g id="Network">
      {/* Network paths with particle flow */}
    </g>
  </g>
</motion.svg>
```

**Network Line Particle Flow**:
```tsx
{networkPaths.map((path, index) => (
  <g key={`network-${index}`}>
    {/* Static path */}
    <path
      d={path.d}
      stroke="currentColor"
      strokeWidth={`${networkLinesStroke}px`}
      opacity={0.4}
    />
    
    {/* Moving particles along path */}
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.circle
        key={`particle-${index}-${i}`}
        r={3}
        fill="currentColor"
        initial={{ offsetDistance: 0 }}
        animate={{ offsetDistance: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "linear"
        }}
        style={{
          offsetPath: path.d,
        }}
      />
    ))}
  </g>
))}
```

---

### Analytical Lock

#### High-Level Concepts

**Analytics Bars Animation**:
- Rectangle bars animate height (like real-time chart)
- Bars rise and fall independently
- Lock body has subtle glow
- Keyhole accent pulses
- Metaphor: Real-time analytics with secure access

#### Implementation Pseudo-Code

**Bar Chart Animation**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Analytics-Lock">
    <g id="analytics-Lock-rectangles">
      {rectanglesData.map((rect, index) => (
        <motion.rect
          key={`bar-${index}`}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.baseHeight}
          stroke="currentColor"
          strokeWidth={`${rectanglesStroke}px`}
          fill="none"
          initial={{ height: rect.baseHeight }}
          animate={{ height: [rect.baseHeight, rect.targetHeight, rect.baseHeight] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </g>

    {/* Lock body with glow */}
    <motion.g
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <g id="Closed-Lock-Kehole">
        {/* Lock body paths */}
      </g>
    </motion.g>
  </g>
</motion.svg>
```

**Keyhole Pulse**:
```tsx
<motion.path
  d={keyholePath}
  stroke="currentColor"
  strokeWidth={`${keyholeStroke}px`}
  initial={{ opacity: 0.6 }}
  animate={{ 
    opacity: [0.6, 1, 0.6],
    filter: [
      "drop-shadow(0 0 0px rgba(100, 200, 255, 0))",
      "drop-shadow(0 0 6px rgba(100, 200, 255, 0.3))",
      "drop-shadow(0 0 0px rgba(100, 200, 255, 0))"
    ]
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

---

### Open Lock

#### High-Level Concepts

**Shackle Animation**:
- Lock shackle animates/moves to "open" position
- Slight glow to indicate unlocked state
- Optional: Continuous monitoring pulse
- Metaphor: Continuous monitoring, open and accessible

#### Implementation Pseudo-Code

**Shackle Open Animation**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Open-Lock">
    {/* Lock body (static or subtle pulse) */}
    <motion.g
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Lock body paths */}
    </motion.g>

    {/* Shackle that opens */}
    <motion.g
      initial={{ rotate: 0, y: 0 }}
      animate={{ 
        rotate: [0, 25, 25],
        y: [0, -8, -8]
      }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut"
      }}
    >
      {/* Shackle paths */}
    </motion.g>
  </g>
</motion.svg>
```

---

### Closed Lock + Fingerprint

#### High-Level Concepts

**Secure Lock Animation**:
- Lock body stays static (secure)
- Fingerprint pattern has subtle pulse/glow
- On hover: Fingerprint becomes more prominent
- Metaphor: Privacy-first, secure with biometric access

#### Implementation Pseudo-Code

**Fingerprint Pulse**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Locked-Lock-Fingerprint">
    {/* Lock body - static with subtle glow */}
    <motion.g
      initial={{ opacity: 0.9 }}
      animate={{ 
        opacity: [0.9, 1, 0.9],
        filter: [
          "drop-shadow(0 0 0px rgba(100, 200, 255, 0))",
          "drop-shadow(0 0 8px rgba(100, 200, 255, 0.2))",
          "drop-shadow(0 0 0px rgba(100, 200, 255, 0))"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Lock body paths */}
    </motion.g>

    {/* Fingerprint with pulse */}
    <g id="Fingerprint">
      {fingerprintPaths.map((path, index) => (
        <motion.path
          key={`fp-${index}`}
          d={path.d}
          stroke="currentColor"
          strokeWidth={`${fingerprintStroke}px`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.08,
            ease: "easeInOut"
          }}
        />
      ))}
    </g>
  </g>
</motion.svg>
```

**Hover Enhancement**:
```tsx
<motion.svg
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  {/* content */}
</motion.svg>
```

---

### Boxed Fingerprint

#### High-Level Concepts

**Fingerprint Reveal**:
- Fingerprint lines draw progressively
- Frame stays static
- On hover: Fingerprint glows
- Metaphor: Immersive UI with biometric authentication

#### Implementation Pseudo-Code

**Progressive Draw Animation**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Boxed-Fingerprint">
    {/* Static frame */}
    <g id="Frame">
      {/* Frame paths */}
    </g>

    {/* Fingerprint drawing progressively */}
    <g id="Fingerprint">
      {fingerprintPaths.map((path, index) => (
        <motion.path
          key={`fp-${index}`}
          d={path.d}
          stroke="currentColor"
          strokeWidth={`${fingerprintStroke}px`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </g>
  </g>
</motion.svg>
```

**Hover Glow**:
```tsx
<motion.svg
  whileHover={{ 
    scale: 1.02,
    filter: "drop-shadow(0 0 10px rgba(100, 200, 255, 0.3))"
  }}
  transition={{ duration: 0.3 }}
>
  {/* content */}
</motion.svg>
```

---

### Line Up

#### High-Level Concepts

**Rising Chart Animation**:
- Line chart draws from left to right following path
- Slight upward bounce at the end
- On hover: Line glows
- Metaphor: Performance improvement, growth

#### Implementation Pseudo-Code

**Line Draw Animation**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Line-Chart-Up">
    {/* Constellation stars with delay */}
    {starsData.map((star, index) => (
      <motion.path
        key={`star-${index}`}
        d={star.d}
        stroke="currentColor"
        strokeWidth={`${constellationNodesStroke}px`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2,
          ease: "easeOut"
        }}
      />
    ))}

    {/* Constellation lines draw progressively */}
    {constellationLines.map((line, index) => (
      <motion.path
        key={`line-${index}`}
        d={line.d}
        stroke="currentColor"
        strokeWidth={`${constellationLinesStroke}px`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.2,
          delay: index * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Main line with bounce */}
    <motion.path
      d={mainLinePath}
      stroke="currentColor"
      strokeWidth={`${graphLinesStroke}px`}
      initial={{ pathLength: 0 }}
      animate={{ 
        pathLength: [0, 1, 1, 1],
        rotate: [0, 0, 5, 0]
      }}
      transition={{
        duration: 2.5,
        times: [0, 0.4, 0.7, 1],
        ease: ["easeOut", "easeOut", "easeInOut", "easeInOut"]
      }}
    />
  </g>
</motion.svg>
```

**Hover Glow**:
```tsx
<motion.svg
  whileHover={{ 
    filter: "drop-shadow(0 0 8px rgba(100, 200, 255, 0.4))",
    strokeWidth: "5px"  // Thicker on hover
  }}
  transition={{ duration: 0.3 }}
>
  {/* content */}
</motion.svg>
```

---

### Line Down

#### High-Level Concepts

**Line Chart Animation**:
- Line draws following path
- Can represent metrics (not necessarily "negative")
- End-cap triangle uses fillColor
- Rectangles have subtle height animation
- Metaphor: Analytics visualization

#### Implementation Pseudo-Code

**Progressive Line Draw**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <g id="Line-Chart-Down">
    {/* Rectangles with subtle breathing */}
    {rectanglesData.map((rect, index) => (
      <motion.rect
        key={`rect-${index}`}
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.baseHeight}
        stroke="currentColor"
        strokeWidth={`${rectanglesStroke}px`}
        initial={{ height: rect.baseHeight }}
        animate={{ height: [rect.baseHeight, rect.targetHeight, rect.baseHeight] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Big line draws */}
    <motion.path
      id="line-chart-big-line-path"
      d={bigLinePath}
      stroke="currentColor"
      strokeWidth={`${bigLineStroke}px`}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />

    {/* Triangle end-cap with pulse */}
    <motion.path
      d={trianglePath}
      stroke="currentColor"
      fill={fillColor || "currentColor"}
      strokeWidth={`${triangleStroke}px`}
      initial={{ opacity: 0.7, scale: 0.95 }}
      animate={{ 
        opacity: [0.7, 1, 0.7],
        scale: [0.95, 1, 0.95]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </g>
</motion.svg>
```

---

### Generic Globe

#### High-Level Concepts

**Globe Rotation/Grid Pulse**:
- Subtle 3D rotation effect (using perspective transform)
- Grid lines have moving opacity to suggest "global connectivity"
- On hover: Rotation speed increases slightly
- Metaphor: Full suite services, global reach

#### Implementation Pseudo-Code

**3D Rotation Effect**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  style={{ perspective: 1000 }}
>
  <motion.g
    initial={{ rotateY: 0 }}
    animate={{ rotateY: [0, 15, 0] }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {/* Globe paths */}
  </motion.g>
</motion.svg>
```

**Grid Lines Pulse**:
```tsx
{gridLines.map((line, index) => (
  <motion.path
    key={`grid-${index}`}
    d={line.d}
    stroke="currentColor"
    strokeWidth={`${mainStroke}px`}
    initial={{ opacity: 0.3 }}
    animate={{ opacity: [0.3, 0.7, 0.3] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: index * 0.1,
      ease: "easeInOut"
    }}
  />
))}
```

**Hover Speed Increase**:
```tsx
<motion.svg
  whileHover={{ 
    rotateY: [0, 360, 0]  // Faster rotation
  }}
  transition={{ 
    duration: 8,  // Faster than default 20s
    repeat: Infinity,
    ease: "linear"
  }}
>
  {/* content */}
</motion.svg>
```

---

### Cloud Migration

#### High-Level Concepts

**Arrow Flow Animation**:
- Arrow paths have moving particles or opacity waves
- Cloud has subtle "breathing" animation
- Shows active migration process
- Metaphor: Cloud deployment, active transfer

#### Implementation Pseudo-Code

**Cloud Breathing**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <motion.g
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.03, 1] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Cloud paths */}
  </motion.g>

  {/* Arrow with particle flow */}
  <motion.g>
    {/* Base arrow path */}
    <path
      d={arrowPath}
      stroke="currentColor"
      strokeWidth={`${mainStroke}px`}
      opacity={0.5}
    />

    {/* Moving particles */}
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.circle
        key={`particle-${i}`}
        r={4}
        fill="currentColor"
        initial={{ offsetDistance: 0 }}
        animate={{ offsetDistance: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "linear"
        }}
        style={{
          offsetPath: arrowPath,
        }}
      />
    ))}
  </motion.g>
</motion.svg>
```

---

## Implementation Priority

### Phase 1: High Impact (Core Value Graphics)
1. **UI-Brain** - Used in prominent "Stunning Design" card
2. **Founders** - Represents key company differentiator

### Phase 2: Medium Impact
3. **Shield Network** - Security-first messaging
4. **Analytical Lock** - Research capabilities

### Phase 3: Supporting Graphics
5. **Open Lock**, **Closed Lock + Fingerprint**, **Boxed Fingerprint**
6. **Line Up**, **Generic Globe**, **Cloud Migration**
7. **Line Down** (if used in future)

## Common Implementation Patterns

### Stroke Draw Animation
```tsx
<motion.path
  d="..."
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>
```

### Pulse Animation
```tsx
<motion.g
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>
  {/* paths */}
</motion.g>
```

### Hover Effect
```tsx
<motion.svg
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* content */}
</motion.svg>
```

### Glow Effect
```tsx
<motion.path
  animate={{ 
    filter: [
      "drop-shadow(0 0 0px rgba(...))",
      "drop-shadow(0 0 8px rgba(...))",
      "drop-shadow(0 0 0px rgba(...))"
    ]
  }}
  transition={{ repeat: Infinity, duration: 3 }}
/>
```

### Staggered Animations
```tsx
{items.map((item, index) => (
  <motion.path
    key={index}
    animate={{ opacity: 1 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

## Performance Considerations

### GPU-Accelerated Properties
- **Preferred**: `opacity`, `transform`, `filter`
- **Avoid**: Animating `d` attribute for complex paths
- **Alternative**: Use `pathLength` with `strokeDasharray` for draw-in effects

### Animation Duration Guidelines
- **Draw-in animations**: 0.5 - 2 seconds
- **Pulse animations**: 2 - 4 seconds per cycle
- **Hover effects**: 0.2 - 0.5 seconds
- **Continuous loops**: 3 - 20 seconds per cycle

### Performance Testing
- Test on mobile devices
- Use `useReducedMotion` hook for accessibility:
```tsx
const prefersReducedMotion = useReducedMotion();

// Skip animations if true
if (!prefersReducedMotion) {
  // Run animations
}
```

### Intersection Observer for Scroll-Triggered
```tsx
import { useInView } from "framer-motion";

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1
});

<motion.div ref={ref} animate={inView ? { opacity: 1 } : {}}>
  {/* content */}
</motion.div>
```

## Resources

- **Framer Motion docs**: https://www.framer.com/motion/
- **SVG animation best practices**: https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL
- **Performance**: GPU-accelerated properties preferred
- **Accessibility**: Respect `prefers-reduced-motion`

## Future Enhancements

- **Scroll-triggered animations**: Elements animate as they enter viewport
- **Mouse-follow parallax effects**: Subtle 3D perspective shift on mouse move
- **Interactive hover states**: More complex animations on hover specific to each graphic
- **Sound effects**: Optional, tasteful audio feedback on interaction
- **Theme-aware animations**: Different animation styles for light vs dark mode
