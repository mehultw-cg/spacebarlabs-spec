# Graphics System Documentation

This directory contains documentation for the "Why Us" section SVG graphics system.

## Overview

The "Why Us" section displays various SVG graphics representing company values and capabilities. Each graphic is a React component built from converted SVG files, supporting customizable stroke widths and colors.

## File Structure

```
docs/graphics/
├── README.md                    # This file - system overview
├── catalog.md                   # Quick reference table + detailed sections
├── ui-brain.md                 # UI-Brain component documentation
├── founders.md                  # Founders component documentation
└── framer-motion-integration.md # Framer Motion animation concepts
```

## Conventions

### Stroke Widths

All graphics follow these standard conventions:

- **Main structural strokes**: 4px (default)
  - Used for: frames, main shapes, structural outlines
  - Purpose: Establish primary visual hierarchy

- **Detail/fine lines**: 2px (default, where applicable)
  - Used for: neural pathways, network lines, fine patterns, constellation connections
  - Purpose: Add complexity and detail without overwhelming

### Component Props

All graphics support these common props:

```tsx
interface GraphicsProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    // Type-specific stroke width keys
    // e.g., main, outerShield, networkLines, etc.
  };
  strokeColor?: string;  // Default: "stroke-cyan-200 dark:stroke-cyan-700"
  fillColor?: string;    // Default: "none"
  className?: string;
  style?: React.CSSProperties;
  // ... other standard SVGProps
}
```

### Color Theme

Default `stroke-cyan-200 dark:stroke-cyan-700`:
- **Light mode**: Light cyan, subtle and clean
- **Dark mode**: Darker cyan, maintains contrast
- **Theme**: Matches SpaceBar Labs' space/astronomy branding

### Fill Usage

Most graphics use stroke-only design (`fill: "none"` or `fillOpacity: 0`).

**Exceptions** - fillColor applies to:
- End-cap triangles (line-up, line-down arrow indicators)
- Structural rectangles in analytics graphics
- Specific decorative elements requiring solid fills

### Exports

All graphics use default exports for consistent import syntax:

```tsx
import Founders from "@/components/vfx/why-us-graphics/founders";
import UiBrain from "@/components/vfx/why-us-graphics/ui-brain";
import ShieldNetwork from "@/components/vfx/why-us-graphics/shield-network";
// ... etc.
```

## Maintenance Workflow

1. **Adding new graphics**:
   - Create component in `src/components/vfx/why-us-graphics/`
   - Follow interface pattern with `strokeWidths` object
   - Set defaults: main strokes 4px, detail strokes 2px (if applicable)
   - Add default export `export default ComponentName;`

2. **Updating stroke widths**:
   - Component defaults in graphics file for long-term changes
   - Override via `strokeWidths` prop for per-instance customization

3. **Updating documentation**:
   - Add entry to `docs/graphics/catalog.md` (quick reference table)
   - Create dedicated doc file for complex graphics: `docs/graphics/{graphic-name}.md`
   - Add animation concepts to `docs/graphics/framer-motion-integration.md`

4. **Adding animations**:
   - Document animation concept in `framer-motion-integration.md`
   - Include high-level description + implementation pseudo-code
   - Consider performance (SVG path animations preferred)

## Related Files

- **Component source**: `src/components/vfx/why-us-graphics/`
- **Usage**: `src/components/sections/WhyUsSection.tsx`
- **Data mapping**: `src/lib/data/why-us.ts`
- **OpenSpec spec**: `openspec/specs/why-us-graphics/spec.md`

## Graphics List

| Graphic | Component | Used For | Main Stroke | Detail Stroke | Status |
|---------|------------|------------|--------------|---------------|--------|
| UI-Brain | `ui-brain.tsx` | Stunning Design | 4px | 2px (Brain) | Updated |
| Founders | `founders.tsx` | Access to Founders | 4px | - | Updated |
| Shield Network | `shield-network.tsx` | Security First | 4px | 2px (network) | Updated |
| Analytical Lock | `analytical-lock.tsx` | Research Capabilities | 4px | 2px (lock top) | Updated |
| Open Lock | `open-lock.tsx` | Continuous Monitoring | 4px | - | Updated |
| Closed Lock + Fingerprint | `closed-lock-fingerprint.tsx` | Privacy First | 4px | 2px (fingerprint, lock top) | Updated |
| Boxed Fingerprint | `boxed-fingerprint.tsx` | Immersive UI | 4px | 2px (fingerprint) | Updated |
| Line Up | `line-up.tsx` | Lightning Fast Code | 4px | 2px (constellation lines) | Updated |
| Line Down | `line-down.tsx` | *not used* | 4px | 2px (constellation lines) | Refactored |
| Generic Globe | `generic-globe.tsx` | Full Suite Services | 4px | - | Updated |
| Cloud Migration | `cloud-migration.tsx` | Cloud Deployments | 4px | - | Updated |
| Server Constellation Safe | `server-constellation-safe.tsx` | Stunning Design | *pending update* | - | Skipped |
| Hierarchy Stars | `heirarchy-stars.tsx` | *not used* | *pending* | *pending* | Skipped |

## Animation Status

See `docs/graphics/framer-motion-integration.md` for detailed animation concepts.

**Priority Order**:
1. **Phase 1**: UI-Brain, Founders (high impact, core value)
2. **Phase 2**: Shield Network, Analytical Lock (security/research messaging)
3. **Phase 3**: Lock variants, Line Up, Globe, Cloud Migration (supporting graphics)

## Troubleshooting

### Missing default export
**Symptom**: Runtime error importing graphic component

**Solution**: Add `export default ComponentName;` at end of file

```tsx
const MyComponent = () => { ... };

export default MyComponent; // Fix missing export
```

### Stroke width not applying
**Symptom**: Custom `strokeWidths` prop not changing graphic appearance

**Solution**: Ensure graphic component accepts `strokeWidths` prop and uses it:

```tsx
interface MyGraphicProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;
    detail?: number;
  };
}

const MyGraphic = ({ strokeWidths, ... }: MyGraphicProps) => {
  const mainStroke = strokeWidths?.main ?? 4;
  const detailStroke = strokeWidths?.detail ?? 2;

  return <svg>...</svg>;
}
```

### Fill appearing where unwanted
**Symptom**: Solid color fill instead of stroke-only design

**Solution**: Ensure elements use `fill: "none"` or `fillOpacity: 0`:

```tsx
<path
  d="..."
  style={{
    fill: "none",  // or fillOpacity: 0
    stroke: "currentColor",
    strokeWidth: `${mainStroke}px`,
  }}
/>
```

## Best Practices

1. **Stroke width hierarchy**: Use 4px for structure, 2px for details to create visual depth
2. **Consistent naming**: Use descriptive names for strokeWidths keys (`main`, `detail`, `outer`, `inner`, etc.)
3. **Theme awareness**: Default colors support both light and dark modes
4. **Performance**: Prefer SVG path animations over complex transforms for Framer Motion
5. **Accessibility**: Graphics are visual elements; ensure surrounding content provides context
6. **Documentation first**: Document new graphics before adding to production
