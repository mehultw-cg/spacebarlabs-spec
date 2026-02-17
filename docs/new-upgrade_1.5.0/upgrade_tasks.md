# Upgrade 1.5.0 Tasks

This task list tracks the progress of the 1.5.0 upgrade as defined in `Changes to update.md` and `implementation_plan.md`.

- [ ] **Preparation**
    - [ ] Create `feature/update-1.5.0` branch
    - [ ] Verify `openspec` usage (manual creation of files)
    - [ ] **Setup Font**: Ensure `nasalization-rg.ttf` is available and configured for "Spacebar Labs" logo and Headings.
    - [ ] **Security Setup**: Configure automated security testing (OWASP/MITRE) in the build/test pipeline.

- [ ] **Global Components**
    - [ ] Create `SpacebarLabsRectangleLogo.tsx` (Reuse `rocket-logo-only.tsx` + `nasalization-rg.ttf` text).

- [ ] **Hero Section**
    - [ ] Create OpenSpec proposal for Hero update
    - [ ] Create branch `feature/update-1.5.0-hero`
    - [ ] Layout: Split into 2 columns (Left: Content, Right: Images)
    - [ ] Left Column: Implement 3-set rotating Header/Subheader/CTA (3.5s interval)
    - [ ] Right Column: Implement 3-image carousel (2.5s interval, framer-motion animations)
        - [ ] Image 1: `rocket-logo-only.tsx` (Refactor for props)
        - [ ] Image 2: `server-constellation-safe`
        - [ ] Image 3: `shield-network`
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

- [ ] **Pricing Section**
    - [ ] Create OpenSpec proposal for Pricing update
    - [ ] Create branch `feature/update-1.5.0-pricing`
    - [ ] Layout: 3 rows (2-1-2 cards). Middle card spans full row.
    - [ ] Content: Update text, features, CTAs as specified.
    - [ ] "Escape Velocity" card: Add "bow tie" / favored indicator.
    - [ ] Actions: Connect CTAs to Contact form with prefilled subject/message.
    - [ ] **Responsiveness**: Adjust layout for mobile.
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Why Us Section**
    - [ ] Create OpenSpec proposal for Why Us update
    - [ ] Create branch `feature/update-1.5.0-why-us`
    - [ ] Grid Layout: 6x4 grid. 3 Tiers of cards.
    - [ ] Components: Refactor graphic components to accept styles (stroke, fill, etc.)
        - [ ] `shield-network.tsx`
        - [ ] `line-down.tsx`
        - [ ] `closed-lock-fingerprint.tsx`
        - [ ] `generic-globe.tsx`
        - [ ] `ui-brain.tsx`
        - [ ] `server-constellation-safe.tsx`
        - [ ] `bg-network.tsx`
        - [ ] `analytical-lock.tsx`
    - [ ] Animation: Expand content on hover.
    - [ ] **Responsiveness**: Grid adapts to mobile flow.
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Tech Stack Section**
    - [ ] Remove section from homepage.
    - [ ] Move component to `components` directory (if not already there).

- [ ] **About Section**
    - [ ] Create OpenSpec proposal for About update
    - [ ] Create branch `feature/update-1.5.0-about`
    - [ ] Update content & Value cards.
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Contact Section**
    - [ ] Create OpenSpec proposal for Contact update
    - [ ] Create branch `feature/update-1.5.0-contact`
    - [ ] Aesthetic: Keep "Terminal/System" theme.
    - [ ] Update fields: Identity, Coordinates, Protocol (Dropdown), Payload.
    - [ ] Implement logic to prefill based on incoming links (from Hero/Pricing).
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Footer Section**
    - [ ] Create OpenSpec proposal for Footer update
    - [ ] Create branch `feature/update-1.5.0-footer`
    - [ ] Logo: Use `SpacebarLabsLogo.tsx`.
    - [ ] Links: Remove Careers.
    - [ ] Policies: Generate Privacy, TOS, Cookie Policy (Shadcn modals).
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Nav Bar**
    - [ ] Create OpenSpec proposal for Navbar update
    - [ ] Create branch `feature/update-1.5.0-navbar`
    - [ ] Logo: Use `SpacebarLabsLogo.tsx`.
    - [ ] Mobile: Bottom navbar, menu opens up. Rainbow button style.
    - [ ] Verify & Merge to `feature/update-1.5.0`

- [ ] **Final Polish & Merge**
    - [ ] Comprehensive testing (Responsiveness, Type safety, Security).
    - [ ] **Automated Tests**: Run `bun run build`, `bun run lint`.
    - [ ] **Security Tests**: Run custom security test suite (Edge cases, OWASP).
    - [ ] Merge `feature/update-1.5.0` to `main` (or designated target).
