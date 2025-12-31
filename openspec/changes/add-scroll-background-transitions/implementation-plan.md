not # Implementation Plan - Scroll Background Transitions

The goal is to implement scroll-triggered background transitions as defined in the `add-scroll-background-transitions` spec. The `ScrollBackground` component exists but is not integrated.

## User Review Required
> [!IMPORTANT]
> This change involves making the main Hero section transparent to reveal the new global background. I will modify `HeroSection`'s top-level container to remove its opaque background. Per user feedback, **inner containers** in the HeroSection will remain unmodified to preserve their existing styling and effects. The `Starfield` component will be adjusted to have a transparent background.

## Proposed Changes

### Global
#### [MODIFY] [page.tsx](file:///Users/nandhusridhar/workspaces/spacebarlabs-spec/src/app/page.tsx)
- Wrap the main content in the `ScrollBackground` component.
- Remove the `hero-background` wrapper div.

#### [MODIFY] [globals.css](file:///Users/nandhusridhar/workspaces/spacebarlabs-spec/src/app/globals.css)
- Remove or update `.hero-background` class to avoid conflict with the new system.
- Ensure global backgrounds (like `body`) don't block the fixed background.

### Components
#### [MODIFY] [HeroSection.tsx](file:///Users/nandhusridhar/workspaces/spacebarlabs-spec/src/components/sections/HeroSection.tsx)
- Remove opaque background classes (`bg-white`, `dark:bg-black`) from the **top-level section element only**.
- **Keep inner containers (background effects, content cards) unmodified.**
- Update `Starfield` usage to pass `backgroundColor="transparent"`.

#### [MODIFY] [ScrollBackground.tsx](file:///Users/nandhusridhar/workspaces/spacebarlabs-spec/src/components/global/ScrollBackground.tsx)
- Verify logic and ensure it renders children correctly.

#### [MODIFY] [Starfield.tsx](file:///Users/nandhusridhar/workspaces/spacebarlabs-spec/src/components/vfx/Starfield.tsx)
- Ensure `clear()` respects the transparent color so it doesn't overwrite the background images.

## Verification Plan

### Automated Tests
- None planned as this is a visual feature.

### Manual Verification
- **Scroll Test**: Scroll through the page and verify the background image changes at 25%, 50%, 75%, and 100% scroll depth.
- **Starfield**: Verify the starfield effect is still visible and overlays the background images.
- **Visual Integrity**: Ensure text and content remain readable against the changing backgrounds.
