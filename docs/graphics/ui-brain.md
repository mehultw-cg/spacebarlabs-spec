# UI-Brain Component

Detailed documentation for a UI-Brain SVG graphic component.

## Description

The UI-Brain component represents "Stunning Design" capability in the "Why Us" section. It combines a wireframe UI interface with a brain neural network, visually communicating a intersection of thoughtful design and intelligent execution.

## Component Structure

### UI Section (Main Frame)

Located in `<g id="UI-brain">` element.

**Elements**:
- Main container rectangle (wireframe)
- Header section with ellipses (window controls/buttons)
- Navigation bar lines
- Large content rectangle (main area)
- Sidebar rectangle
- Text placeholder lines

**Stroke**: Uses `mainStroke` (default 4px)

### Brain Section (Neural Network)

Located in `<g id="Brain">` element.

**Elements**:
- Brain outline path
- Multiple curved neural pathway lines (11 paths total)
- Organic, non-geometric shapes

**Stroke**: Uses `detailStroke` (default 2px) - thinner to create visual hierarchy

## Props Interface

```tsx
interface UiBrainProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;  // Default: 4px
  };
  strokeColor?: string;   // Default: "stroke-cyan-200 dark:stroke-cyan-700"
  fillColor?: string;     // Default: "none"
  className?: string;
  style?: React.CSSProperties;
  // ... other SVGProps
}
```

## Usage Examples

### Basic Usage

```tsx
import UiBrain from "@/components/vfx/why-us-graphics/ui-brain";

<UiBrain className="w-full h-full" />
```

### Custom Stroke Widths

```tsx
<UiBrain strokeWidths={{ main: 6 }} />
```

### Custom Colors

```tsx
<UiBrain strokeColor="stroke-blue-400" />
```

### With Fill (Not Typical)

```tsx
<UiBrain fillColor="rgba(100, 200, 255, 0.1)" />
```

## Design Decisions

### Why Two Different Stroke Widths?

1. **Visual Hierarchy**: Thicker UI frame (4px) establishes structure, thinner brain (2px) suggests detail and complexity
2. **Metaphor**: UI is "structured and deliberate" (thick), brain is "organic and nuanced" (thin)
3. **Depth**: Stroke width variation creates perceived depth without fill

### Why UI + Brain Combination?

- Communicates that design isn't just visual—it's cognitive
- Represents intersection of aesthetics and intelligence
- Aligns with SpaceBar Labs' identity (astrophysics + development)

### Color Choice

Default `stroke-cyan-200 dark:stroke-cyan-700`:
- Light mode: Light cyan, subtle and clean
- Dark mode: Darker cyan, maintains contrast
- Cyan theme matches space/astronomy branding

## Integration

### Where It's Used

- **Section**: "Why Us"
- **Card**: "Stunning Design"
- **Data**: `src/lib/data/why-us.ts` - id: "stunning-design"
- **Component**: `src/components/sections/WhyUsSection.tsx` - line 69

### Layout Context

```tsx
// In BentoGrid
<WhyUsCard
  title="Stunning Design"
  description="Aesthetics that captivate and convert."
  detail="We believe that great software should not only work well but also look beautiful. Our designs are crafted to leave a lasting impression."
  graphic={<UiBrain />}
  className="md:col-span-3 md:row-span-3"
/>
```

## Animation Concepts

### UI Section Shimmer

**Effect**: Shimmer from left to right
**Details**:
- Diagonal angle (~45°)
- Light becomes brighter during shimmer
- Direction: left → right, then right → left
- Continuous loop

**Implementation Pseudo-Code**:
```tsx
import { motion } from "framer-motion";

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
        key={index}
        d={path.d}
        stroke="url(#shimmerGradient)"
        strokeWidth={`${mainStroke}px`}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.1,
          times: [0, 0.5, 1]
        }}
      />
    ))}
  </g>
</motion.svg>
```

### Brain Section Pulse

**Effect**: Pulse illumination from center
**Details**:
- Starting from approximate brain center
- Radiates outward to all neural paths
- Soft glow effect, increasing then decreasing opacity
- Loop every 3-4 seconds

**Implementation Pseudo-Code**:
```tsx
import { motion } from "framer-motion";

<g id="Brain">
  {brainPaths.map((path, index) => (
    <motion.path
      key={index}
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
        delay: index * 0.15,
        ease: "easeInOut"
      }}
    />
  ))}
</g>
```

### Combined Offset Animation

**Effect**: Shimmer and pulse alternate with timing offset
**Details**:
- When shimmer reaches edge (left or right), brain pulse starts
- Creates sense of activity without chaos
- Different frequencies prevent synchronization boredom

**Implementation Pseudo-Code**:
```tsx
// Wrap entire component
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <svg>
    {/* UI Section with shimmer */}
    <g id="UI-brain">
      {/* shimmering paths */}
    </g>
    
    {/* Brain Section with pulse, offset timing */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {/* pulsing brain paths */}
    </motion.g>
  </svg>
</motion.div>
```

## Performance Notes

- Use `strokeDasharray` for draw-in effects (GPU-accelerated)
- Avoid animating `d` attribute directly for complex paths
- Use `opacity` and `filter` for glow/pulse effects
- Test on mobile devices for performance
- Consider using `useReducedMotion` hook to respect user preferences

## Maintenance Notes

- To modify stroke widths: Change `mainStroke` constant or pass via `strokeWidths` prop
- To add detail strokes: Add new constant, apply to Brain section paths
- SVG paths are in `<g id="UI-brain">` (lines 37-163) and `<g id="Brain">` (lines 167-294)
- UI section: 27 elements (rectangles, paths, ellipses)
- Brain section: 11 path elements

## Related Documentation

- **System overview**: `docs/graphics/README.md`
- **Catalog entry**: `docs/graphics/catalog.md`
- **Animation concepts**: `docs/graphics/framer-motion-integration.md`
- **Spec requirements**: `openspec/specs/why-us-graphics/spec.md`
