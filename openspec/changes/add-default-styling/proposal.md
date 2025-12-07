## Why
The project needs a cohesive default styling system for components like Cards and Buttons that aren't part of custom sections (Hero, Services, TechStack). Sections like Pricing and "Why Us" use default shadcn components without the premium glass aesthetic.

## What Changes
- Add **glass card variants** with gradient backgrounds, transparency, and elevation
- Add **new button variants**: glass, gradient, glow, and combinations (outlined-glass, ghost-glow)
- Add **button sizes and shapes**: more size options, different roundedness levels
- Add **typography utilities** for automatic heading/subheading styling
- Add **spacing defaults** for consistent gaps and padding
- Create **RainbowButton variants**: dark and light backgrounds for mode-appropriate contrast

## Impact
- Affected specs: ui-components (new capability)
- Affected code:
  - `src/components/ui/card.tsx` - Add glass/elevated variants
  - `src/components/ui/button.tsx` - Add new variants and sizes
  - `src/components/ui/rainbow-button.tsx` - Add dark/light variants
  - `src/app/globals.css` - Add CSS variables and typography utilities
- **Will NOT affect**: Hero, Services, TechStack sections (already customized)
- **Will apply to**: Pricing, Why Us sections (currently using default styling)
