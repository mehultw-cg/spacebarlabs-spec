## Context
The project uses shadcn/ui components as a base. Custom sections (Hero, Services, TechStack) have specialized styling, but default sections (Pricing, Why Us) need a cohesive glass-themed aesthetic inspired by Supabase and Spotify.

## Goals
- Create reusable glass-themed variants for Card and Button components
- Establish consistent typography hierarchy via CSS utilities
- Create a gradient preset system using existing `--color-*` CSS variables
- Ensure light/dark mode parity with appropriate saturation
- Apply defaults automatically to unstyled sections

## Non-Goals
- Do not modify existing custom sections (Hero, Services, TechStack, Contact)
- Do not create new section components
- Do not add JavaScript functionality, only styling

## Decisions

### Gradient Preset System
- **Decision**: Create named gradient presets using `--color-*` variables
- **Rationale**: Consistent, reusable, and easy to iterate
- **Presets**:
  | Name | Colors |
  |------|--------|
  | `--gradient-ocean` | `--color-3 → --color-4` |
  | `--gradient-mint` | `--color-1 → --color-2` |
  | `--gradient-lavender` | `--color-5 → --color-3` |
  | `--gradient-emerald` | `--color-6 → --color-1` |
  | `--gradient-sunset` | `--color-5 → --color-6` |
  | `--gradient-aurora` | `--color-7 → --color-2 → --color-5` |

### Card Default = Glass
- **Decision**: Change Card `default` variant to glass styling
- **Rationale**: User preference for glass as primary aesthetic
- **Protection**: Existing styled sections use custom components, not base Card

### Button Variant Combinations
- **Decision**: Create atomic variants (glass, gradient, glow) that can be composed
- **Rationale**: More flexible than monolithic variants
- **Implementation**: Use CVA with compound variants

### Typography via CSS Layers
- **Decision**: Use `@layer base` to style h1-h6 with proper hierarchy
- **Rationale**: Automatically applies to all headings without explicit classes
- **Implementation**: Font weights, tracking, and colors by heading level

### RainbowButton Contrast
- **Decision**: Add `dark` and `light` variants alongside existing `default` and `outline`
- **Rationale**: Provides mode-appropriate contrast options

## Risks / Trade-offs
- **Risk**: Base typography may conflict with existing custom styles
  - **Mitigation**: Custom sections use explicit styling that will override base layer
- **Risk**: Glass blur may impact performance on low-end devices
  - **Mitigation**: Use subtle blur values (8-16px), test on mobile

## Migration Plan
1. Add CSS variables for gradient presets
2. Update Card component with glass default
3. Update Button component with new variants
4. Update RainbowButton with mode variants
5. Verify protected sections are unaffected
6. Test Pricing and Why Us sections

## Open Questions
- ~~Should glass cards have animated gradient on hover?~~ **No, keep static**
- ~~What exact colors for gradient endpoints?~~ **Use preset system**
