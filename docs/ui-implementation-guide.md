# UI Implementation Guide for SpaceBar Labs Landing Page

This guide details the specific components and implementation strategies for building the SpaceBar Labs landing page, based on the `landing-page-ux-hierarchy.md`. It focuses on using shadcn/ui as the primary component library, with potential integrations from Aceternity UI for premium elements.

## Core Principles

-   **shadcn/ui First:** Default to shadcn/ui components for consistency, accessibility, and TypeScript support.
-   **shadcn registries:** Use other shadcn registries listed in `components.json` or using shadcn mcp tool
-   **Component Composition:** Build complex sections by composing smaller, reusable shadcn/ui components.
-   **Code Blocks:** Use shadcn and registries code blocks for prebuilt blocks of component code ready to use, for things like calendar, navbar, login page etc.
-   **Theme Awareness:** Leverage shadcn/ui's built-in dark/light mode support.
-   **Accessibility:** Ensure all components are accessible (keyboard navigation, ARIA attributes, etc.).
-   **Responsive Design:** Use Tailwind CSS's responsive utilities for all layouts.

## 1. Theming (Dark/Light Mode)

**Goal:** Implement a seamless dark/light mode toggle using `next-themes`.

### Components & Setup:
-   **Library:** `next-themes`
-   **Action:**
    1.  Install `next-themes`: `bun add next-themes`
    2.  Create `src/components/common/ThemeToggle.tsx`:
        -   Use a simple button or a dedicated toggle component (e.g., from Lucide: `Sun` for light, `Moon` for dark).
        -   Use `useTheme()` hook from `next-themes` to toggle between `"light"` and `"dark"`.
    3.  Wrap `src/app/layout.tsx` with `ThemeProvider` from `next-themes`:
        ```tsx
        import { ThemeProvider as NextThemesProvider } from "next-themes";
        // ...
        <NextThemesProvider
          attribute="class"
          defaultTheme="system" // or "light"
          enableSystem
          disableTransitionOnChange
        >
          <App />
        </NextThemesProvider>
        ```
    4.  Update `src/app/globals.css` with theme-aware classes and CSS variables for custom colors (if any beyond shadcn/ui defaults):
        
    5.  Ensure all custom styles use `dark:` variants (e.g., `bg-white dark:bg-gray-900`).

## 2. Layout Components

### 2.1. Navbar (`src/components/layout/Navbar.tsx`)

**Goal:** A persistent, accessible navigation bar.

**shadcn/ui Components:**
-   `Card` (optional, for background if not transparent)
-   `Button` (for CTA and potentially mobile menu toggle)
-   `Badge` (optional, for notifications)
-   `Separator` (optional, for visual division)

**Aceternity UI Consideration:**
-   Explore Aceternity UI's navbar for pre-built, animated, or more stylized options. Try these first, use shadcn custom as a fallback, look into shadcn code blocks for prebuilt shadcn navbar.

**Implementation Details in shadcn custom:**
-   **Structure:** Flexbox for logo, nav links, and CTA/Theme toggle.
-   **Styling:**
    - Glassmorphic design language
-   **Mobile Responsiveness:**
    -   Use a hamburger menu icon (e.g., `Menu` from Lucide) for mobile.
    -   Collapsible nav links using `@radix-ui/react-navigation-menu` or a simple state-managed `div` for mobile view.
    -   Consider `Sheet` component from shadcn/ui for the mobile menu overlay.
-   **Theme Toggle:** Include `ThemeToggle.tsx` component.



### 2.2. Footer (`src/components/layout/Footer.tsx`)

**Goal:** A clean, informative footer.

**shadcn/ui Components:**
-   `Card` (optional, for background)
-   `Button` (optional, for CTA links)
-   `Separator` (optional, for dividing sections)

**Implementation Details:**
-   **Structure:** Flexbox or Grid for logo, nav links, social icons, and contact info.


## 3. Section Components

### 3.1. Hero Section (`src/components/HeroSection.tsx`)

**Goal:** High-impact introduction.

**shadcn/ui Components:**
-   `Button` (Primary and Secondary CTAs)
-   `Card` to enclose main section content

**Aceternity UI Consideration:**
-   Aceternity UI's "Bento Grid" or "Animated Hero" could be used here for a more dynamic feel.

### 3.2. Services Section (`src/components/ServicesSection.tsx` - Partially Done)

**Goal:** Display services in an organized, visually appealing grid.

**shadcn/ui Components:**
-   `Card` (for each service item)
-   `Badge` (for "Coming Soon", "Security", etc. tags)
-   `Image` (for potential background image on hover)

**Implementation Details:**
-   **Grid** 
-   or **Bento Box**
-   **Card Structure:**
    -   Icon at the top.
    -   Title (`CardTitle`) beside the icon. 
    -   Description (paragraph or a single line) below Title.
    -   Badge (conditionally rendered).
-   **Icons:** Import directly from `lucide-react` as needed.
-   **Data:** Use `src/lib/data/servicesData.ts` with Zod validation.

### 3.3. Pricing Section (`src/components/PricingSection.tsx` - To be built)

**Goal:** Present pricing tiers clearly.

**shadcn/ui Components:**
-   `Card` (for each pricing tier)
-   `Button` (for "Get Quote" CTA)
-   `Separator` (optional, to divide features)

**Implementation Details:**
-   **Grid:** 
-   or **Bento Box**
-   **Card Structure:**
    -   Tier Name.
    -   Price/Tagline.
    -   Features List (`ul` with `li` items).
    -   CTA Button (`Button` component).
-   **Highlighting:** Add a distinct border, background or a different decoration to a "Popular" or "Recommended" tier.
-   **Data:** Create `src/lib/data/pricingData.ts` with Zod validation.

## 4. Common Components

### 4.1. Theme Toggle (`src/components/ThemeToggle.tsx`)

**Goal:** Allow users to switch between light and dark modes.

**shadcn/ui Components:**
-   `Button` (to wrap the icon)

**Implementation Details:**
-   Use `useTheme()` from `next-themes`.
-   Toggle between `"light"` and `"dark"` themes.
-   Button 

### 4.2. Icons (`src/components/icons.ts` - Optional)

**Goal:** Centralize icon imports if managing many.

**Implementation Details:**
-   This can be a simple file that re-exports icons from `lucide-react`.
-   Example: `export { Lightbulb, Briefcase, ... } from "lucide-react";`
-   This is optional but can help if icon sets change or for consistent naming.

## 5. Data Management

**Goal:** Define and validate content for sections.

**Implementation Details:**
-   **File:** `src/lib/data/servicesData.ts`, `src/lib/data/pricingData.ts`, etc.
-   **Validation:** Use `zod` for schema validation.
    -   Example for pricing:
        ```ts
        import { z } from "zod";

        const PricingTierSchema = z.object({
          id: z.string(),
          name: z.string(),
          priceTag: z.string(), // e.g., "Custom Quote", "$99/mo"
          features: z.array(z.string()),
          ctaText: z.string(),
          isPopular: z.boolean().optional(),
        });

        export type PricingTier = z.infer<typeof PricingTierSchema>;

        export const pricingData: PricingTier[] = [
          // ... data
        ];
        ```
-   **Usage in Components:** Import data and use `.map()` to render components.

## 6. Styling & Polish

-   **Spacing:** Consistent use of `p-`, `m-`, `space-y-`, `space-x-` utilities.
-   **Typography:** Use `text-` utilities for consistent font sizes and weights.
-   **Colors:** Rely on shadcn/ui's color palette (`primary`, `secondary`, `muted`, `accent`, `destructive`) via Tailwind classes.
-   **Transitions:** Add `transition-colors duration-200` to interactive elements (buttons, links) for smooth theme and hover changes.
-   **Hover Effects:** Subtle `hover:bg-...` or `hover:text-...` for interactivity.

## 7. Component Considerations

-   **Aceternity UI:**
    -   **Navbar:** If a more complex or animated navbar is desired.
    -   **Hero Sections:** For animated backgrounds or text effects.
    -   **Bento Grids:** For more complex, visually rich layouts (could be used for services or features).
    -   **3D Cards:** If a "wow" factor for service/pricing cards is needed.
-   **SmoothUI / Other Libraries:**
    -   Review for any unique components that fill a gap not met by shadcn/ui or Aceternity UI.
    -   Prioritize compatibility with Tailwind and TypeScript.

## 8. Testing Checklist

-   [ ] Light mode rendering.
-   [ ] Dark mode rendering.
-   [ ] Theme toggle functionality.
-   [ ] Responsive layout (mobile, tablet, desktop).
-   [ ] Component accessibility (keyboard nav, screen reader).
-   [ ] Links and CTAs work.
-   [ ] Data renders correctly.
