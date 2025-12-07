# Magic Bento Grid - Implementation Plan v3.0

## Overview
This document outlines the fixes and improvements for the Magic Bento Grid Services section, focusing on animation quality, layout consistency, and proper progressive loading.

---

## Issues Identified

| Issue | Description |
|-------|-------------|
| Animation Wobble | `layoutId` on child elements causes distortion when parent dimensions change |
| Show More Logic | Current implementation doesn't match original ServicesSection's smooth height animation |
| Card Background | Using dark blue instead of black glassmorphic |
| Tag Positioning | Tags not reliably pinned to bottom |
| Icon/Title Spacing | No gap between icon and title |
| Divider Inconsistency | Horizontal divider only appears in expanded state |

---

## Framer Motion Layout Animation Guide

### The `layout` Prop

When you add `layout` to a motion component, Framer Motion automatically animates any changes to its position or size in the DOM.

```tsx
<motion.div layout className={isExpanded ? "w-full" : "w-1/2"}>
  Content
</motion.div>
```

**When to use**: Single component size/position changes

### The `layoutId` Prop

Use `layoutId` when animating a component **between different parent components** or unmounting/remounting states.

```tsx
// Collapsed: image in card
{!isExpanded && <motion.img layoutId="hero" src="..." />}

// Expanded: same image in overlay (different parent)
{isExpanded && (
  <div className="overlay">
    <motion.img layoutId="hero" src="..." />
  </div>
)}
```

**When to use**: Shared element transitions across different components

### Key Principles

1. **Don't mix carelessly** - Avoid `layout` and `layoutId` on the same element unless intentional
2. **Wrap in LayoutGroup** - Multiple independent layout animations need `<LayoutGroup>` to prevent interference
3. **Children inherit** - Parent with `layout` causes children with `layout` to also animate
4. **Avoid layoutId internally** - For card expansion, use `layout` on container + CSS transitions on children
5. **Use layout="position"** - Animates only position changes (prevents size distortion)

---

## Implementation Changes

### MagicBentoCard Component

```diff
- <motion.div layoutId={`icon-${id}`} ...>
+ <div className="transition-all duration-300">

- <motion.div layoutId={`header-${id}`} ...>
+ <div className="transition-all duration-300">

- <motion.p layoutId={`desc-${id}`} ...>
+ <p className="transition-all duration-300">

- <motion.div layoutId={`badges-${id}`} ...>
+ <div className="transition-all duration-300">
```

**Rationale**: Remove `layoutId` from internal elements. Use CSS transitions for smoother, simpler animations.

### Card Structure

```tsx
<motion.div layout className="h-[280px]">
  <MagicCard className="bg-black/40 backdrop-blur-md">
    <div className="flex flex-col h-full p-5">
      {/* Icon - fixed size */}
      <div className="w-12 h-12 mb-6">...</div>
      
      {/* Content - grows to fill */}
      <div className="flex-1 flex flex-col">
        <h3>Title</h3>
        <p>Description</p>
        {isExpanded && <p>Details</p>}
      </div>
      
      {/* Tags - pinned to bottom */}
      <div className="mt-auto pt-4">...</div>
    </div>
  </MagicCard>
</motion.div>
```

### ServicesSectionNew - Show More Pattern

Adopt the original ServicesSection's approach:

```tsx
// First row always visible
<ServiceRow ... />

// Remaining rows in animated container
<motion.div
  animate={{ 
    height: isAllVisible ? "auto" : (visibleRows - 1) * ROW_HEIGHT + PEEK_HEIGHT 
  }}
  className="overflow-hidden relative"
>
  {remainingRows.map(...)}
  
  {/* Gradient overlay at bottom */}
  {!isAllVisible && (
    <div className="absolute bottom-0 ... bg-gradient-to-t from-neutral-950">
      <Button onClick={handleShowMore}>Show More</Button>
    </div>
  )}
</motion.div>

{/* Collapse button outside container */}
{isAllVisible && <Button onClick={handleCollapse}>Collapse</Button>}
```

---

## Verification Checklist

- [ ] Cards expand without element distortion
- [ ] Tags always pinned to bottom
- [ ] Proper spacing between icon and title
- [ ] Black glassmorphic background (not blue)
- [ ] No divider in collapsed state
- [ ] Show More reveals rows smoothly
- [ ] Collapse scrolls back to section top
- [ ] Works on mobile and desktop
