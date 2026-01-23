## Why
"Why Us" section SVG graphics need consistent stroke widths for visual coherence, and comprehensive documentation for maintainability. Founders.tsx also has a missing default export causing runtime error.

## What Changes
- Fix founders.tsx: Add default export to resolve runtime error
- Standardize stroke widths: main stroke 4px, detail stroke 2px (where applicable)
- Add detailStroke prop to UI-Brain graphic
- Update all why-us graphics (except server-constellation-safe) with standardized stroke defaults
- Refactor line-down.tsx to proper component structure with strokeWidths support
- Create graphics documentation system in docs/graphics/
- Document Framer Motion animation concepts for all graphics

## Impact
- Affected specs: why-us-graphics (new capability)
- Affected code:
  - src/components/vfx/why-us-graphics/founders.tsx (add default export)
  - src/components/vfx/why-us-graphics/ui-brain.tsx (add detailStroke, update defaults)
  - src/components/vfx/why-us-graphics/shield-network.tsx (update defaults)
  - src/components/vfx/why-us-graphics/analytical-lock.tsx (update defaults)
  - src/components/vfx/why-us-graphics/boxed-fingerprint.tsx (update defaults)
  - src/components/vfx/why-us-graphics/open-lock.tsx (update defaults)
  - src/components/vfx/why-us-graphics/closed-lock-fingerprint.tsx (update defaults)
  - src/components/vfx/why-us-graphics/generic-globe.tsx (update defaults)
  - src/components/vfx/why-us-graphics/cloud-migration.tsx (update defaults)
  - src/components/vfx/why-us-graphics/line-up.tsx (update defaults)
  - src/components/vfx/why-us-graphics/line-down.tsx (refactor to proper structure)
- New documentation:
  - docs/graphics/README.md
  - docs/graphics/catalog.md
  - docs/graphics/ui-brain.md
  - docs/graphics/founders.md
  - docs/graphics/framer-motion-integration.md
