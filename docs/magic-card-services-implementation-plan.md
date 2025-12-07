Implementation Plan - Magic Bento Grid Services Section
Goal
Create a new, premium Services section using a custom "Magic Bento Grid" with advanced interactions, progressive loading, and detailed card animations.

User Review Required
IMPORTANT

This new section will be added below the existing Services section as requested. The existing section will remain untouched.

Proposed Changes
OpenSpec
[NEW] 
magic-bento-grid.md
Define the specs for the new component and interactions.
Components
[NEW] 
magic-bento-grid.tsx
Base grid component.
MagicBentoCard component with:
MagicCard
 wrapper.
Layout animations (Framer Motion).
Hover/Click states.
"Coming Soon" badge.
[NEW] 
ServicesSectionNew.tsx
Implements the grid with services data.
Handles row expansion/collapse state.
Progressive blur overlay.
Integration
[MODIFY] 
page.tsx
Import and add ServicesSectionNew below 
ServicesSection
.
Verification Plan
Manual Verification
Card Interaction:
Hover: Magic effect + text peek.
Click: Expand to show full text, layout shift (icon/title move up).
"Coming Soon": Check badge position and pulse.
Grid Interaction:
Initial Load: Top 3 rows visible.
"Show More": Reveals next 2 rows.
"Collapse All": Resets to initial state and scrolls up.
Responsiveness: Check 4-column layout on desktop and appropriate stacking on mobile.