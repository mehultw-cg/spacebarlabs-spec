# Upgrade 1.5.0 Tasks

This task list tracks the progress of the 1.5.0 upgrade as defined in `Changes to update.md` and `implementation_plan.md`.

- [x] **Preparation**
    - [x] Create `feature/update-1.5.0` branch
    - [x] Verify `openspec` usage (manual creation of files)
    - [x] **Setup Font**: Ensure `nasalization-rg.ttf` is available and configured for "Spacebar Labs" logo and Headings.
    - [x] **Security Setup**: Configure automated security testing (OWASP/MITRE) in the build/test pipeline.

- [x] **Global Components**
    - [x] Create `SpacebarLabsRectangleLogo.tsx` (Reuse `rocket-logo-only.tsx` + `nasalization-rg.ttf` text).

- [x] **Hero Section**
    - [x] Create OpenSpec proposal for Hero update
    - [x] Create branch `feature/update-1.5.0-hero`
    - [x] Layout: Split into 2 columns (Left: Content, Right: Images)
    - [x] Left Column: Implement 3-set rotating Header/Subheader/CTA (3.5s interval)
    - [x] Right Column: Implement 3-image carousel (2.5s interval, framer-motion animations)
        - [x] Image 1: `rocket-logo-only.tsx` (Refactor for props)
        - [x] Image 2: `server-constellation-safe`
        - [x] Image 3: `shield-network`
    - [x] Connect CTAs as appropriate to relevant sections or Contact with prefilled subject/message.
    - [x] Bottom: Tag list + Mission statement paragraph
    - [x] **Responsiveness**: Adjust text sizes (larger on desktop, smaller on mobile).
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Services Section**
    - [x] Create OpenSpec proposal for Services update
    - [x] Create branch `feature/update-1.5.0-services`
    - [x] Data: Create `src/lib/data/services-updated.ts`
    - [x] Layout: 6 cards, 2 rows. Taller cards.
    - [x] Components: Implement card behavior (hover, expand details on click; keep behavior same as now)
    - [x] Icons: Lucide-react (shield-plus, workflow, server, radar, shield-check, activity)
    - [x] **Responsiveness**: Stack cards on mobile.
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Pricing Section**
    - [x] Create OpenSpec proposal for Pricing update
    - [x] Create branch `feature/update-1.5.0-pricing`
    - [x] Layout: 3 rows (2-1-2 cards). Middle card spans full row.
    - [x] Content: Update text, features, CTAs as specified.
    - [x] "Escape Velocity" card: Add "bow tie" / favored indicator.
    - [x] Actions: Connect CTAs to Contact form with prefilled subject/message.
    - [x] **Responsiveness**: Adjust layout for mobile.
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Why Us Section**
    - [x] Create OpenSpec proposal for Why Us update
    - [x] Create branch `feature/update-1.5.0-why-us`
    - [x] Grid Layout: 6x4 grid. 3 Tiers of cards.
    - [x] Components: Refactor graphic components to accept styles (stroke, fill, etc.)
        - [x] `shield-network.tsx`
        - [x] `line-down.tsx`
        - [x] `closed-lock-fingerprint.tsx`
        - [x] `generic-globe.tsx`
        - [x] `ui-brain.tsx`
        - [x] `server-constellation-safe.tsx`
        - [x] `bg-network.tsx`
        - [x] `analytical-lock.tsx`
    - [x] Animation: Expand content on hover.
    - [x] **Responsiveness**: Grid adapts to mobile flow.
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Tech Stack Section**
    - [x] Remove section from homepage.
    - [x] Move component to `components` directory (if not already there).

- [x] **About Section**
    - [x] Create OpenSpec proposal for About update
    - [x] Create branch `feature/update-1.5.0-about`
    - [x] Update content & Value cards.
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Contact Section**
    - [x] Create OpenSpec proposal for Contact update
    - [x] Create branch `feature/update-1.5.0-contact`
    - [x] Aesthetic: Keep "Terminal/System" theme.
    - [x] Update fields: Identity, Coordinates, Protocol (Dropdown), Payload.
    - [x] Implement logic to prefill based on incoming links (from Hero/Pricing).
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Footer Section**
    - [x] Create OpenSpec proposal for Footer update
    - [x] Create branch `feature/update-1.5.0-footer`
    - [x] Logo: Use `SpacebarLabsLogo.tsx`.
    - [x] Links: Remove Careers.
    - [x] Policies: Generate Privacy, TOS, Cookie Policy (Shadcn modals).
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Nav Bar**
    - [x] Create OpenSpec proposal for Navbar update
    - [x] Create branch `feature/update-1.5.0-navbar`
    - [x] Logo: Use `SpacebarLabsLogo.tsx`.
    - [x] Mobile: Bottom navbar, menu opens up. Rainbow button style.
    - [x] Verify & Merge to `feature/update-1.5.0`

- [x] **Final Polish & Merge**
    - [ ] Comprehensive testing (Responsiveness, Type safety, Security).
    - [ ] **Automated Tests**: Run `bun run build`, `bun run lint`.
    - [ ] **Security Tests**: Run custom security test suite (Edge cases, OWASP).
    - [ ] Merge `feature/update-1.5.0` to `main` (or designated target).
