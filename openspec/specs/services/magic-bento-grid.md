# Magic Bento Grid Services Section

## Overview
A premium, interactive Services section featuring a custom "Magic Bento Grid" layout. This section emphasizes progressive disclosure, smooth animations, and a high-end aesthetic using glassmorphism and spotlight effects.

## Features

### 1. Magic Bento Grid
- **Layout**: 4-column grid.
- **Card Sizing**: Mixed `col-span-1` and `col-span-2` cards.
- **Initial State**: A pseudo-random card in each row is expanded by default (unless overridden).

### 2. Magic Bento Card
- **Visuals**:
    - Full-height `MagicCard` container.
    - Large, colored icon (top-left).
    - "Coming Soon" badge (top-right, ochre-yellow, pulsating dot) for future services.
    - Badges pinned to the bottom.
- **Interaction**:
    - **Hover**: Spotlight gradient + partial text peek.
    - **Click**: Expands the card to reveal full paragraph text.
- **Animation States**:
    - **Collapsed**: Icon -> Gap -> Heading/Subheading -> Badges.
    - **Expanded**: Icon -> Heading/Subheading (moves up) -> Paragraph Text (fades in) -> Badges.

### 3. Progressive Loading
- **Initial View**: Top 3 rows visible.
- **Overlay**: A gradient blur overlay covers the 4th row onwards.
- **"Show More"**:
    - Button centered in the overlay.
    - Reveals 2 additional rows per click.
- **"Collapse All"**:
    - Appears when all rows are visible.
    - Resets grid to initial state.
    - Smoothly scrolls back to the top of the grid.

## Technical Implementation
- **Base Component**: `MagicBentoGrid` (new).
- **Animation Library**: `framer-motion` for layout transitions (`layout` prop) and element animations.
- **Styling**: Tailwind CSS, `MagicCard` for glass/spotlight effects.
- **Data Source**: Existing `services` data (extended if necessary).
