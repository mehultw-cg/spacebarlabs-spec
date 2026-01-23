# Graphics Catalog

Complete catalog of "Why Us" section SVG graphics with usage information.

## Quick Reference Table

| Graphic | Component | Used For | Main Stroke | Detail Stroke | Key Features | File |
|---------|------------|------------|--------------|---------------|--------------|------|
| UI-Brain | `ui-brain.tsx` | Stunning Design | 4px | 2px (Brain section) | UI frame + neural network | src/components/vfx/why-us-graphics/ui-brain.tsx |
| Founders | `founders.tsx` | Access to Founders | 4px | - | Constellation of 3 circles | src/components/vfx/why-us-graphics/founders.tsx |
| Shield Network | `shield-network.tsx` | Security First | 4px | 2px (network lines) | Nested shields + network | src/components/vfx/why-us-graphics/shield-network.tsx |
| Analytical Lock | `analytical-lock.tsx` | Research Capabilities | 4px | 2px (lock top) | Lock with analytics bars | src/components/vfx/why-us-graphics/analytical-lock.tsx |
| Open Lock | `open-lock.tsx` | Continuous Monitoring | 4px | - | Open lock symbol | src/components/vfx/why-us-graphics/open-lock.tsx |
| Closed Lock + Fingerprint | `closed-lock-fingerprint.tsx` | Privacy First | 4px | 2px (fingerprint, lock top) | Lock with fingerprint | src/components/vfx/why-us-graphics/closed-lock-fingerprint.tsx |
| Boxed Fingerprint | `boxed-fingerprint.tsx` | Immersive UI | 4px | 2px (fingerprint) | Fingerprint in frame | src/components/vfx/why-us-graphics/boxed-fingerprint.tsx |
| Line Up | `line-up.tsx` | Lightning Fast Code | 4px | 2px (constellation lines) | Rising line chart | src/components/vfx/why-us-graphics/line-up.tsx |
| Generic Globe | `generic-globe.tsx` | Full Suite Services | 4px | - | Globe with grid | src/components/vfx/why-us-graphics/generic-globe.tsx |
| Cloud Migration | `cloud-migration.tsx` | Cloud Deployments | 4px | - | Cloud with migration arrows | src/components/vfx/why-us-graphics/cloud-migration.tsx |
| Server Constellation Safe | `server-constellation-safe.tsx` | Stunning Design | *pending update* | - | Complex server network | src/components/vfx/why-us-graphics/server-constellation-safe.tsx |

**Note**: server-constellation-safe.tsx excluded from current refinement, pending simplified version

---

## Detailed Sections

### UI-Brain

**File**: `src/components/vfx/why-us-graphics/ui-brain.tsx`

**Purpose**: Represents "Stunning Design" capability. Shows a wireframe UI interface combined with a brain neural network, symbolizing the intersection of design and intelligence.

**Structure**:
- **UI Section** (mainStroke 4px): Wireframe rectangles, lines, ellipses representing a typical UI layout
- **Brain Section** (detailStroke 2px): Organic neural pathways and brain shape

**Props**:
```tsx
interface UiBrainProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;  // Default: 4px
  };
  strokeColor?: string;   // Default: "stroke-cyan-200 dark:stroke-cyan-700"
  fillColor?: string;     // Default: "none"
}
```

**Usage**:
```tsx
<UiBrain className="w-full h-full" />
<UiBrain strokeWidths={{ main: 6 }} strokeColor="stroke-blue-500" />
```

**Design Notes**:
- Two-section composition reflects design thinking (structure) + intelligence (brain)
- Thinner detail lines (2px) on brain create depth and hierarchy
- Used in 3x3 bento grid spanning 3 columns, 3 rows

**Animation Concepts**: See `framer-motion-integration.md`

---

### Founders

**File**: `src/components/vfx/why-us-graphics/founders.tsx`

**Purpose**: Represents "Access to Founders" capability. Shows a constellation connecting three circles representing founders working together.

**Structure**:
- **Client Circle** (bottom left): Represents client/founder relationship
- **Top-Left Circle**: Represents one founder
- **Top-Right Circle**: Represents another founder
- **Constellation Lines**: Connect all three circles with node points

**Props**:
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
}
```

**Usage**:
```tsx
<Founders className="w-full h-full" />
<Founders strokeWidths={{ networkLines: 3 }} />
```

**Design Notes**:
- Constellation metaphor: founders are like stars connected in purpose
- Three circles symbolize partnership and collaboration
- Complex star/node patterns represent network effect of working directly with founders
- Used in bento grid spanning 2 columns, 4 rows

**Export Note**: Default export added (`export default Founders;`) to fix runtime import error.

**Animation Concepts**: See `framer-motion-integration.md`

---

### Shield Network

**File**: `src/components/vfx/why-us-graphics/shield-network.tsx`

**Purpose**: Represents "Security First" capability. Shows nested shields with network lines symbolizing layered security.

**Props**:
```tsx
interface ShieldNetworkProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    outerShield?: number;     // Default: 4px
    middleShield?: number;    // Default: 2px
    innerShield?: number;     // Default: 4px
    networkLines?: number;    // Default: 2px
    networkNodes?: number;    // Default: 4px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

**Design Notes**:
- Three-layer shield represents defense-in-depth strategy
- Network overlay shows monitoring and active security
- Thinner middle shield (2px) creates depth

---

### Analytical Lock

**File**: `src/components/vfx/why-us-graphics/analytical-lock.tsx`

**Purpose**: Represents "Research Capabilities". Shows a lock with bar chart rectangles, symbolizing secure analytics.

**Props**:
```tsx
interface AnalyticalLockProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    rectangles?: number;    // Default: 4px
    keyhole?: number;       // Default: 4px
    outerLock?: number;      // Default: 4px
    innerLockTop?: number;   // Default: 2px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

**Design Notes**:
- Lock symbolizes secure access
- Bar chart rectangles represent analytics/research
- Thinner lock top (2px) adds detail

---

### Open Lock

**File**: `src/components/vfx/why-us-graphics/open-lock.tsx`

**Purpose**: Represents "Continuous Monitoring". Shows an open lock symbol.

**Props**:
```tsx
interface OpenLockProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    lockMain?: number;  // Default: 4px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

---

### Closed Lock + Fingerprint

**File**: `src/components/vfx/why-us-graphics/closed-lock-fingerprint.tsx`

**Purpose**: Represents "Privacy First". Shows a closed lock with fingerprint pattern.

**Props**:
```tsx
interface ClosedLockFingerprintProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    fingerprint?: number;   // Default: 2px
    outerLock?: number;      // Default: 4px
    lockTop?: number;         // Default: 2px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

**Design Notes**:
- Fingerprint represents biometric authentication
- Thin strokes (2px) on fingerprint and lock top create detail

---

### Boxed Fingerprint

**File**: `src/components/vfx/why-us-graphics/boxed-fingerprint.tsx`

**Purpose**: Represents "Immersive UI". Shows a fingerprint in a frame.

**Props**:
```tsx
interface BoxedFingerprintProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    outer?: number;        // Default: 4px
    fingerprint?: number;  // Default: 2px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

**Design Notes**:
- Fingerprint represents immersive/biometric UX
- Thinner fingerprint (2px) adds detail complexity

---

### Line Up

**File**: `src/components/vfx/why-us-graphics/line-up.tsx`

**Purpose**: Represents "Lightning Fast Code". Shows a rising line chart with constellation stars.

**Props**:
```tsx
interface LineUpProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    constellationLines?: number;  // Default: 2px
    constellationNodes?: number;  // Default: 4px
    triangle?: number;            // Default: 2px
    xAxis?: number;               // Default: 4px
    yAxis?: number;               // Default: 4px
    graphLines?: number;           // Default: 4px
    rectangles?: number;           // Default: 4px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

**Design Notes**:
- Rising line chart represents growth/performance
- Thin constellation lines (2px) add detail
- Triangle end-caps use fillColor

---

### Generic Globe

**File**: `src/components/vfx/why-us-graphics/generic-globe.tsx`

**Purpose**: Represents "Full Suite Services". Shows a globe with grid lines.

**Props**:
```tsx
interface GenericGlobeProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;  // Default: 4px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

---

### Cloud Migration

**File**: `src/components/vfx/why-us-graphics/cloud-migration.tsx`

**Purpose**: Represents "Cloud Deployments". Shows a cloud with migration arrows.

**Props**:
```tsx
interface CloudMigrationProps extends SVGProps<SVGSVGElement> {
  strokeWidths?: {
    main?: number;  // Default: 4px
  };
  strokeColor?: string;
  fillColor?: string;
}
```

---

### Server Constellation Safe

**File**: `src/components/vfx/why-us-graphics/server-constellation-safe.tsx`

**Purpose**: Represents "Stunning Design". Complex server network graphic.

**Status**: Excluded from current refinement. Simplified version to be provided later.

**Note**: Large file (280KB), pending simplified replacement.

---

## Stroke Width Reference

### Standard Values

| Type | Value | Usage |
|-------|--------|--------|
| Main structural | 4px | Frames, main shapes, outlines |
| Detail/fine | 2px | Neural paths, network lines, fine patterns |

### Per-Graphic Breakdown

| Graphic | Structural Elements (4px) | Detail Elements (2px) |
|---------|---------------------------|---------------------|
| UI-Brain | UI frame, rectangles, ellipses | Brain neural paths (all 11 paths) |
| Founders | Main circles, network nodes | Constellation lines |
| Shield Network | Outer shield, inner shield, nodes | Middle shield, network lines |
| Analytical Lock | Lock body, keyhole, rectangles | Lock top curve |
| Boxed Fingerprint | Outer frame | Fingerprint pattern |
| Closed Lock + Fingerprint | Lock body | Fingerprint, lock top |
| Line Up | Main line, axes, nodes, rectangles | Constellation lines, triangle |
| Open Lock | Lock body (all) | - |
| Generic Globe | Globe, grid | - |
| Cloud Migration | Cloud, arrow path | - |

## Usage in WhyUsSection

Graphics are mapped in `src/components/sections/WhyUsSection.tsx`:

```tsx
switch (item.id) {
  case "cloud-deployments":
    GraphicComponent = <CloudMigration />;
    break;
  case "stunning-design":
    GraphicComponent = <ServerSafeAnimation />;
    break;
  case "security-first":
    GraphicComponent = <ShieldNetwork />;
    break;
  case "access-to-founders":
    GraphicComponent = <Founders />;
    break;
  case "research-capabilities":
    GraphicComponent = <AnalyticalLock />;
    break;
  case "privacy-first":
    GraphicComponent = <ClosedLockFingerprint />;
    break;
  case "continuous-monitoring":
    GraphicComponent = <OpenLock />;
    break;
  case "immersive-ui":
    GraphicComponent = <BoxedFingerprint />;
    break;
  case "lightning-fast":
    GraphicComponent = <LineUp />;
    break;
  case "full-suite":
    GraphicComponent = <GenericGlobe />;
    break;
}
```

See `docs/graphics/ui-brain.md` and `docs/graphics/founders.md` for detailed component documentation.

See `docs/graphics/framer-motion-integration.md` for animation concepts.
