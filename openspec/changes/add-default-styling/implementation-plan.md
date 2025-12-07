# Global Default Styling System

> A cohesive dark/light glass theme inspired by Supabase and Spotify, with preset gradients using CSS color variables.

---

## Overview

| Aspect | Decision |
|--------|----------|
| **Card Default** | Glass variant (gradient + blur + elevation) |
| **Protected Sections** | Hero, Services, TechStack, Contact (unaffected) |
| **Target Sections** | Pricing, Why Us (will use new defaults) |
| **Gradient System** | Preset gradients using `--color-*` CSS variables |

---

## 1. Gradient Presets

Using existing CSS color variables from `globals.css`:

```css
--color-1: #16a085 (teal)
--color-2: #74d59c (mint green)
--color-3: #3498db (blue)
--color-4: #2980b9 (deep blue)
--color-5: #dda1f1 (lavender)
--color-6: #2ecc71 (emerald)
--color-7: #00cec9 (cyan)
```

### Gradient Presets Table

| Preset Name | Colors | Use Case |
|-------------|--------|----------|
| `gradient-ocean` | `--color-3 → --color-4` | Primary actions, headers |
| `gradient-mint` | `--color-1 → --color-2` | Success states, CTAs |
| `gradient-lavender` | `--color-5 → --color-3` | Accent, creative sections |
| `gradient-emerald` | `--color-6 → --color-1` | Nature, growth themes |
| `gradient-sunset` | `--color-5 → --color-6` | Warm accents |
| `gradient-aurora` | `--color-7 → --color-2 → --color-5` | Premium, hero elements |
| `gradient-neutral-dark` | `neutral-800 → black` | Card backgrounds (dark mode) |
| `gradient-neutral-light` | `neutral-50 → white` | Card backgrounds (light mode) |

### CSS Implementation

```css
:root {
  --gradient-ocean: linear-gradient(135deg, var(--color-3), var(--color-4));
  --gradient-mint: linear-gradient(135deg, var(--color-1), var(--color-2));
  --gradient-lavender: linear-gradient(135deg, var(--color-5), var(--color-3));
  --gradient-emerald: linear-gradient(135deg, var(--color-6), var(--color-1));
  --gradient-sunset: linear-gradient(135deg, var(--color-5), var(--color-6));
  --gradient-aurora: linear-gradient(135deg, var(--color-7), var(--color-2), var(--color-5));
  --gradient-glass-dark: linear-gradient(135deg, rgb(38 38 38 / 0.8), rgb(0 0 0 / 0.9));
  --gradient-glass-light: linear-gradient(135deg, rgb(250 250 250 / 0.8), rgb(255 255 255 / 0.9));
}
```

---

## 2. Card Variants

| Variant | Background | Border | Shadow | Blur |
|---------|------------|--------|--------|------|
| `default` (glass) | `--gradient-glass-*` | `white/10` / `black/10` | `shadow-lg` | `backdrop-blur-xl` |
| `elevated` | Solid | Standard | `shadow-xl` | None |
| `outline` | Transparent | `border-2` | `shadow-sm` | None |

### Card Component Changes

```tsx
// card.tsx variant options
const cardVariants = cva("...", {
  variants: {
    variant: {
      default: "bg-[var(--gradient-glass-dark)] dark:bg-[var(--gradient-glass-light)] backdrop-blur-xl border-white/10 dark:border-black/10 shadow-lg",
      elevated: "bg-card shadow-xl hover:shadow-2xl transition-shadow",
      outline: "bg-transparent border-2 border-border shadow-sm",
    }
  }
})
```

---

## 3. Button Variants

### Core Variants

| Variant | Style | Hover Effect |
|---------|-------|--------------|
| `default` | Solid primary | Darken |
| `glass` | Backdrop blur + transparent | Opacity increase |
| `gradient` | Solid gradient fill | Brightness increase |
| `glow` | Standard + glow shadow | Glow intensifies |
| `outline` | Border only | Bg fill |
| `ghost` | Minimal | Subtle bg |

### Combined Variants

| Variant | Description |
|---------|-------------|
| `outline-glass` | Glass bg + outline border |
| `ghost-glow` | No bg, glow on hover |

### Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `xs` | `h-7` | `px-2` | `text-xs` |
| `sm` | `h-8` | `px-3` | `text-sm` |
| `default` | `h-9` | `px-4` | `text-sm` |
| `lg` | `h-10` | `px-6` | `text-base` |
| `xl` | `h-12` | `px-8` | `text-lg` |
| `2xl` | `h-14` | `px-10` | `text-xl` |

### Roundedness

| Option | Class |
|--------|-------|
| Default | `rounded-md` |
| Pill | `rounded-full` |
| Sharp | `rounded-sm` |
| None | `rounded-none` |

---

## 4. RainbowButton Variants

| Variant | Light Mode BG | Dark Mode BG | Use Case |
|---------|---------------|--------------|----------|
| `default` | Dark (`#121213`) | Light (`#fff`) | Current behavior |
| `dark` | Dark | Dark | High contrast in light mode |
| `light` | Light | Light | High contrast in dark mode |
| `outline` | Transparent | Transparent | Subtle rainbow border |

---

## 5. Typography System

### Base Heading Styles (auto-applied via `@layer base`)

| Element | Size | Weight | Tracking | Color |
|---------|------|--------|----------|-------|
| `h1` | `text-4xl md:text-5xl` | `font-bold` | `tracking-tight` | `text-foreground` |
| `h2` | `text-3xl md:text-4xl` | `font-semibold` | `tracking-tight` | `text-foreground` |
| `h3` | `text-2xl md:text-3xl` | `font-semibold` | `tracking-tight` | `text-foreground` |
| `h4` | `text-xl md:text-2xl` | `font-medium` | `tracking-normal` | `text-foreground` |
| `h5` | `text-lg` | `font-medium` | `tracking-normal` | `text-muted-foreground` |
| `h6` | `text-base` | `font-medium` | `tracking-normal` | `text-muted-foreground` |

### Utility Classes

| Class | Styles |
|-------|--------|
| `.text-title` | `font-bold tracking-tight text-foreground` |
| `.text-subtitle` | `font-semibold tracking-tight text-foreground/90` |
| `.text-body` | `font-normal text-muted-foreground` |
| `.text-caption` | `text-sm font-medium text-muted-foreground` |

---

## 6. Spacing Utilities

| Class | Value |
|-------|-------|
| `.container-gap` | `gap-6 md:gap-8` |
| `.card-padding` | `p-6 md:p-8` |
| `.section-padding` | `py-16 md:py-24` |
| `.rounded-glass` | `rounded-2xl` |

---

## Files to Modify

| File | Changes |
|------|---------|
| `globals.css` | Add gradient presets, typography base layer, spacing utilities |
| `card.tsx` | Add glass/elevated variants with CVA |
| `button.tsx` | Add glass/gradient/glow variants, new sizes |
| `rainbow-button.tsx` | Add dark/light variants |

---

## Verification Checklist

- [ ] All variants work in light mode
- [ ] All variants work in dark mode  
- [ ] Pricing section uses glass cards
- [ ] Why Us section uses glass cards
- [ ] Services section unchanged
- [ ] Hero section unchanged
- [ ] TechStack section unchanged
- [ ] Contact section unchanged
