# Landing Page UI/UX Hierarchical Layout & Implementation Guide

This document outlines the hierarchical structure, user journey, and detailed UI breakdown for the Aurorys Labs landing page.

## 1. Overall Page Layout & Structure (Hierarchical View)

```
spacebar-spec-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (ThemeProvider, fonts)
│   │   ├── page.tsx                   # Homepage (orchestrates sections)
│   │   └── globals.css                # Global styles & theme variables
│   ├── components/
│   │   ├── ui/                        # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ... (other shadcn/ui components)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Persistent navigation
│   │   │   └── Footer.tsx             # Site footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Hero banner
│   │   │   ├── ServicesSection.tsx    # Services showcase
│   │   │   ├── PricingSection.tsx     # Pricing tiers
│   │   │   └── (Future sections: About, Testimonials, etc.)
│   │   └── common/
│   │       ├── ThemeToggle.tsx        # Dark/light mode switcher
│   │       └── icons.ts               # Icon imports (Lucide)
│   └── lib/
│       ├── data/
│       │   ├── servicesData.ts        # Services content & Zod validation
│       │   └── pricingData.ts         # Pricing content & Zod validation
│       ├── utils.ts                   # General utilities (e.g., cn)
│       └── theme.ts                   # Theme configuration (if needed)
└── docs/
    ├── landing-page-ux-hierarchy.md    # This file
    └── ui-implementation-guide.md      # Component selection guide
```

### Key Layout Principles:
- **Persistent Header:** Navigation bar remains visible at all times for easy access.
- **Clear Sections:** Each section is distinct and separated for better readability.
- **Visual Hierarchy:** Use size, color, and spacing to guide the user's eye.
- **Mobile-First:** Design for mobile devices first, then scale up for larger screens.
- **Dark/Light Mode:** Support for both themes with a seamless transition.

## 2. User Journey

1.  **Discovery:** User lands on the page via a search engine, social media link, or direct URL.
2.  **First Impression (Hero):** The hero section immediately communicates who Aurorys Labs is and what they do (software development, security, innovation).
3.  **Interest (Services):** User scrolls to the Services section to understand the specific offerings. Icons and short descriptions provide a quick overview.
4.  **Consideration (Pricing):** User checks the Pricing section to see if the services fit their budget and needs. "Get Quote" CTA encourages engagement.
5.  **Exploration (Future Sections):** User might explore "About Us" to learn more about the team, "Testimonials" for social proof, or "Contact" to get in touch.
6.  **Conversion (Footer/CTAs):** Clear contact information and calls-to-action in the footer or within sections prompt the user to take the next step (e.g., email, call, request a quote).

## 3. Section-by-Section Breakdown

### 3.1. Header / Navigation (`src/components/layout/Navbar.tsx`)

**Purpose:** Provide easy navigation, brand identity, and primary CTAs.

**Hierarchy:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo: Aurorys Labs] [Nav Links: Home, Services, Pricing,  │
│ About, Contact] [CTA Button: Get Started] [Theme Toggle]    │
└─────────────────────────────────────────────────────────────┘
```

**UI Components:**
-   **Logo:** Aurorys Labs (text-based or custom icon).
-   **Navigation Links:** Home (optional if on homepage), Services, Pricing, About, Contact.
-   **Primary CTA Button:** "Get Started" or "Contact Us".
-   **Theme Toggle:** Switch between light and dark mode (`src/components/common/ThemeToggle.tsx`).

**Styling:**
-   Fixed or sticky positioning.
-   Clean, minimalist background (light/dark mode variant).
-   Clear, legible typography.

### 3.2. Hero Section (`src/components/sections/HeroSection.tsx`)

**Purpose:** Capture attention, communicate core value proposition, and encourage exploration.

**Hierarchy:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           [Main Headline: e.g., "Pioneering the Frontiers"]  │
│           [Sub-headline: e.g., "of Software Development &   │
│                        Security"]                            │
│                                                             │
│           [Primary CTA: "Explore Our Services"]             │
│           [Secondary CTA: "Get a Quote"]                    │
│                                                             │
│           [Visual Element: Abstract background, graphic,    │
│                        or placeholder for future image/video]│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**UI Components:**
-   `<h1>`: Main Headline
-   `<p>`: Sub-headline
-   `<button>`: Primary CTA (shadcn/ui Button)
-   `<button>`: Secondary CTA (shadcn/ui Button, variant)
-   Background image, video, or abstract graphic.

**Styling:**
-   Full-height or large padding.
-   Centered text.
-   Strong contrast for readability.

### 3.3. Services Section (`src/components/sections/ServicesSection.tsx`)

**Purpose:** Showcase the range of services offered by Aurorys Labs.

**Hierarchy:**
```
┌─────────────────────────────────────────────────────────────┐
│                      [Section Title]                         │
│                      [Section Subtitle]                      │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│  │             │ │             │ │             │ │         │ │
│  │ [Icon]      │ │ [Icon]      │ │ [Icon]      │ │ [Icon]  │ │
│  │             │ │             │ │             │ │         │ │
│  │ [Title]     │ │ [Title]     │ │ [Title]     │ │ [Title] │ │
│  │             │ │             │ │             │ │         │ │
│  │ [Desc]      │ │ [Desc]      │ │ [Desc]      │ │ [Desc]  │ │
│  │             │ │             │ │             │ │         │ │
│  │ [Badge*]    │ │ [Badge*]    │ │ [Badge*]    │ │ [Badge*]│ │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│  (Repeat for all services)                                  │
│                                                             │
│  [Security Commitment Box]                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
*\*Badge indicates "Coming Soon", "Security", "Marketing", or "Studio" tags.*

**UI Components:**
-   `<h2>`: Section Title
-   `<p>`: Section Subtitle
-   `Card` Component (shadcn/ui Card, for each service):
    -   Icon (from Lucide,)
    -   `<h3>`: Service Title
    -   `<p>`: Service Description
    -   `Badge` Component (shadcn/ui Badge): For tags ("Coming Soon", etc.)
-   `Card` or `Box` Component (shadcn/ui Card): For the security commitment note.

**Data Source:** `src/lib/data/servicesData.ts` (with Zod validation)

**Styling:**
-   Grid layout for service cards (responsive: 1, 2, 3, 4 columns).
-   Consistent card styling.
-   Highlighted "Coming Soon" badges.

### 3.4. Pricing Section (`src/components/sections/PricingSection.tsx`)

**Purpose:** Outline different service tiers and encourage users to get a quote.

**Hierarchy:**
```
┌─────────────────────────────────────────────────────────────┐
│                      [Section Title]                         │
│                      [Section Subtitle]                      │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│  │             │ │             │ │             │ │         │ │
│  │ [Tier Name] │ │ [Tier Name] │ │ [Tier Name] │ │[Tier]   │ │
│  │ [Price*]    │ │ [Price*]    │ │ [Price*]    │ │[Price]  │ │
│  │             │ │             │ │             │ │         │ │
│  │ [Feature 1] │ │ [Feature 1] │ │ [Feature 1] │ │[Feat 1] │ │
│  │ [Feature 2] │ │ [Feature 2] │ │ [Feature 2] │ │[Feat 2] │ │
│  │ [Feature 3] │ │ [Feature 3] │ │ [Feature 3] │ │[Feat 3] │ │
│  │             │ │             │ │             │ │         │ │
│  │ [CTA:       │ │ [CTA:       │ │ [CTA:       │ │[CTA:    │ │
│   Get Quote]   │ │  Get Quote]  │ │  Get Quote]  │ │Get Quote]│ │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│  (Repeat for all pricing tiers)                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
*\*Price might be "Custom Quote" or similar.*

**UI Components:**
-   `<h2>`: Section Title
-   `<p>`: Section Subtitle
-   `Card` Component (shadcn/ui Card, for each pricing tier):
    -   `<h3>`: Tier Name (e.g., "Craft your Ship")
    -   `<p>`: Price/Tagline (e.g., "Custom Quote")
    -   `<ul>`: List of key features
    -   `<button>`: CTA ("Get Quote", shadcn/ui Button)

**Data Source:** `src/lib/data/pricingData.ts` (with Zod validation - to be created)

**Styling:**
-   Grid layout for pricing cards (responsive: 1, 2, 3, 4 columns).
-   Highlighted "Popular" or "Recommended" tier if applicable.
-   Clear CTAs.

### 3.5. Footer (`src/components/layout/Footer.tsx`)

**Purpose:** Provide additional links, contact information, and copyright details.

**Hierarchy:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo/Brand Name] | [Nav Links] | [Social Media Icons]      │
│                                                             │
│ [Contact Info: Email, Phone, Address]                       │
│                                                             │
│ [Copyright Notice]                                          │
└─────────────────────────────────────────────────────────────┘
```

**UI Components:**
-   Logo/Brand Name
-   Navigation Links (simplified)
-   Social Media Icons (links, from Lucide)
-   Contact Information
-   Copyright Notice

**Styling:**
-   Clean, simple design.
-   Typically dark background in light mode, and vice-versa for contrast.
-   Centered or left-aligned text.

## 4. Dark Mode Implementation Strategy

-   **Next.js `next-themes`:** This library is the standard for managing themes in Next.js applications with shadcn/ui. It handles the `class` strategy on the `html` element.
    -   Wrap `src/app/layout.tsx` with `ThemeProvider` from `next-themes`.
-   **shadcn/ui Components:** Most shadcn/ui components are designed to be theme-aware. They will automatically adapt to the current theme (light/dark) based on the CSS variables provided by `next-themes`.
-   **Tailwind CSS:** Use `dark:` variants for custom styles. For example, `bg-white dark:bg-gray-900`.
-   **Custom CSS Variables:** Define theme-specific colors in `src/app/globals.css` and use them consistently. shadcn/ui's `tailwind.config.ts` and `components.json` help manage this.

## 5. Component Sourcing (shadcn/ui & Aceternity UI)

-   **shadcn/ui:** Primary choice for most components (Button, Card, Badge, Input, etc.) due to consistency and TypeScript support.
    -   Use the `shadcn-mcp` tool to fetch components and understand their usage before implementation.
-   **Aceternity UI:** For more visually striking, pre-built sections or animations if needed (e.g., hero section with a special effect, animated cards). Can be integrated alongside shadcn/ui.
    -   Navbar from Aceternity UI is a good candidate as suggested.
-   **SmoothUI / Other Registries:** If specific, unique components are found here that fit the design language, they can be considered.

## 6. Next Steps

1.  **Theming:** Implement dark mode using `next-themes`.
2.  **Core Components:** Implement Header/Navigation (`Navbar.tsx`, potentially from Aceternity UI) and Footer (`Footer.tsx`).
3.  **Section Components:** Build out Hero (`HeroSection.tsx`), Services (`ServicesSection.tsx` - already done), and Pricing (`PricingSection.tsx`) sections based on this hierarchy.
4.  **Data Management:** Create data files (e.g., `pricingData.ts`)
5.  **Refinement:** Iterate on design, responsiveness, and micro-interactions.
