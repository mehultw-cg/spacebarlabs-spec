# Founders Component

Detailed documentation for a Founders SVG graphic component.

## Description

The Founders component represents "Access to Founders" capability. It shows a constellation connecting three circles, symbolizing direct partnership with company founders and the collaborative nature of working together.

## Component Structure

### Three-Circle Constellation

**Bottom Circle - Client**:
- Center: (212.5, 1038.5)
- Radius: 203.5
- Contains figure silhouette
- Represents: Client relationship

**Top-Left Circle**:
- Center: (207.5, 210.5)
- Radius: 203.5
- Contains figure silhouette
- Represents: First founder

**Top-Right Circle**:
- Center: (860.5, 207.5)
- Radius: 203.5
- Contains figure silhouette
- Represents: Second founder

### Constellation Network

**Connection Lines**:
- Diagonal lines connecting all three circles
- Star nodes at connection points
- Elaborate star patterns throughout

**Visual Metaphor**: 
- Circles are "stars" in the constellation
- Lines represent collaborative network
- Being "connected to founders" is like being part of their constellation

## Props Interface

```tsx
interface FoundersProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    outerShield?: number;     // Default: 4px
    middleShield?: number;    // Default: 2px
    innerShield?: number;     // Default: 4px
    networkLines?: number;    // Default: 2px
    networkNodes?: number;    // Default: 4px
  };
  strokeColor?: string;   // Default: "stroke-cyan-200 dark:stroke-cyan-700"
  fillColor?: string;     // Default: "none"
  className?: string;
  style?: React.CSSProperties;
  // ... other SVGProps
}
```

**Note**: Despite having `shield`-named properties, this is the Founders constellation component. Property names are from original SVG conversion.

## Usage Examples

### Basic Usage

```tsx
import Founders from "@/components/vfx/why-us-graphics/founders";

<Founders className="w-full h-full" />
```

### Custom Stroke Widths

```tsx
<Founders strokeWidths={{ networkLines: 3 }} />
```

## Design Decisions

### Why Constellation Metaphor?

1. **Astronomy Brand**: Fits SpaceBar Labs' space/astrophysics identity
2. **Connection**: Constellations are patterns of connection—founders working together
3. **Guidance**: Stars/constellations have guided navigation for millennia—founders guide clients

### Why Three Circles?

- Represents partnership: client + two founders
- Balanced composition (triangular)
- Each circle contains a figure silhouette, personalizing the connection

### Stroke Width Hierarchy

- **Outer elements** (circles, main stars): 4px - establish structure
- **Network lines**: 2px - create connection detail without overwhelming
- **Inner elements** (middle shield-like lines): 2px - add depth

## Integration

### Where It's Used

- **Section**: "Why Us"
- **Card**: "Access to Founders"
- **Data**: `src/lib/data/why-us.ts` - id: "access-to-founders"
- **Component**: `src/components/sections/WhyUsSection.tsx` - line 75

### Layout Context

```tsx
// In BentoGrid
<WhyUsCard
  title="Access to Founders"
  description="We are your partners, not adversaries."
  detail="Work directly with people who care most about your success. No middle management layers, just direct collaboration."
  graphic={<Founders />}
  className="md:col-span-2 md:row-span-4"
/>
```

## Animation Concepts

### Progressive Constellation Formation

**Effect**: Lines draw in sequence following network path

**Details**:
- Lines connect following network topology
- Star nodes fade in as lines reach them
- Optional: Subtle rotation of entire constellation
- On hover: Glow effect on closest star

**Metaphor**: Constellation forming as founders connect with client

**Implementation Pseudo-Code**:
```tsx
import { motion } from "framer-motion";

<motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <g id="Foounders">
    <g id="FoundersConstellation">
      {/* Connection lines - draw in sequence */}
      {connectionLines.map((line, index) => (
        <motion.path
          key={index}
          d={line.d}
          stroke="currentColor"
          strokeWidth={`${networkLines}px`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Star nodes - fade in */}
      {starNodes.map((node, index) => (
        <motion.path
          key={index}
          d={node.d}
          stroke="currentColor"
          strokeWidth={`${networkNodes}px`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
    </g>
    
    {/* Three circles with figure silhouettes */}
    {/* ... circles with static or subtle animations */}
  </g>
</motion.svg>
```

### Hover Glow Effect

**Effect**: Highlight constellation on interaction

**Details**:
- Subtle scale increase (1.02x)
- Glow filter on connection lines
- Smooth transition

**Implementation Pseudo-Code**:
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

### Continuous Twinkle

**Effect**: Subtle star twinkling

**Details**:
- Random small stars fade in/out
- Different durations
- Adds life to constellation

**Implementation Pseudo-Code**:
```tsx
{extraStars.map((star, i) => (
  <motion.circle
    key={i}
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

## Performance Notes

- Use `pathLength` with `strokeDasharray` for smooth draw-in (GPU-accelerated)
- Limit concurrent animations (draw-in + hover effects)
- Test on mobile devices
- Use `useReducedMotion` hook for accessibility

## Maintenance Notes

- **Export fix**: Added `export default Founders;` to resolve runtime import error
- **Stroke hierarchy**: Outer 4px, network lines 2px for visual depth
- **Property names**: Keep `shield`-named props for compatibility with existing usage
- **Complexity**: Large graphic (479 lines), handle carefully during refactors

## Related Documentation

- **System overview**: `docs/graphics/README.md`
- **Catalog entry**: `docs/graphics/catalog.md`
- **Animation concepts**: `docs/graphics/framer-motion-integration.md`
- **Spec requirements**: `openspec/specs/why-us-graphics/spec.md`
