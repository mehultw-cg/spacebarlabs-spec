## Why
The Services section required a complete overhaul of its expand/collapse animation to provide a smoother, more organic user experience. The previous implementation was abrupt and lacked visual polish. Additionally, layout adjustments were needed to fix spacing and card stability issues.

## What Changes
- **Services Section Animation**: Reimplemented using a container-based height animation with `framer-motion` layout support.
- **Incremental Expansion**: Changed logic to reveal 2 rows at a time instead of all at once.
- **Peek Effect**: Implemented a calculated "peek" of the next row with a refined gradient overlay.
- **Smooth Scroll**: Integrated `lenis` for smooth scrolling across the application.
- **Grid Stability**: Improved `BentoGridItem` structure to prevent content shifting during expansion.

## Impact
- Affected specs: `services`
- Affected code: `src/components/sections/ServicesSection.tsx`, `src/components/ui/bento-grid.tsx`, `src/app/layout.tsx`
