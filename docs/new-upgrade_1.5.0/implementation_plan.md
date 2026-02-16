# Implementation Plan - Upgrade 1.5.0

This plan outlines the strategy and steps to upgrade the Spacebar Labs codebase to version 1.5.0 as per `Changes to update.md`.

## Goal Description
Update the website to version 1.5.0 with new content, layout improvements, and enhanced components across all major sections (Hero, Services, Pricing, Why Us, About, Contact, Footer, Nav).

## User Review Required
- **OpenSpec Tooling**: The `openspec` CLI was not found in the environment. I will manually create the directory structure (`openspec/changes/...`) unless instructed otherwise. - update: there exists a dir 'openspec/' with 'openspec/changes/', 'openspec/specs', 'openspec/AGENTS.md', 'openspec/project.md'
- **Branching Strategy**: I will use `feature/update-1.5.0` as the main collection branch, and feature branches (e.g., `feature/update-1.5.0-hero`) for each section.
- **Tech Stack Removal**: The "Tech Stack" section will be removed entirely from homepage. The section component shall live in the `components` directory.
- **Development Environment**: Use `docker compose up` to launch the dev server.
- **Testing & Build**: Use `bun` instead of `npm`.

## Proposed Changes

### Setup
#### [NEW] `feature/update-1.5.0` Branch
- Create the base branch for the upgrade.

### Global Components
#### [NEW] `SpacebarLabsLogo.tsx`
- **Implementation**:
    - Create a reusable Rectangular Logo component.
    - Layout: Icon (`rocket-logo-only.tsx`) on Left, Text ("Spacebar Labs") on Right.
    - Font: `nasalization-rg.ttf` for text.
    - Usage: Navbar, Footer.

### Section 1: Hero Update
- **Change ID**: `update-hero-1.5.0`
- **Proposal**: Create `openspec/changes/update-hero-1.5.0/proposal.md`
- **Spec Delta**: `openspec/changes/update-hero-1.5.0/specs/hero/spec.md`
- **Implementation**:
    - Refactor `rocket-logo-only.tsx` (and other graphics) to accept `className`, `style`, or specific props for stroke/fill control.
    - Implement Split Layout (Left: Content, Right: Images).
    - Implement Content Rotation (3 sets, 3.5s interval).
    - Implement Image Carousel (3 images, 2.5s interval, framer-motion).
    - **Font**: Ensure headings use `nasalization-rg.ttf`.
    - **Responsiveness**: Adjust font sizes for Desktop vs Mobile.

### Section 2: Services Update
#### [NEW] `src/lib/data/services-updated.ts`
- **Change ID**: `update-services-1.5.0`
- **Implementation**:
    - Update Layout to 6 cards (2 rows).
    - Implement Card hover effects, expand interactions, same as 'components/sections/ServicesSectionNew.tsx' and its usage/build of other components.
    - Integrate Lucide icons.
    - **Responsiveness**: Ensure layout adapts to mobile (stacking).

### Section 3: Pricing Section
- **Change ID**: `update-pricing-1.5.0`
- **Implementation**:
    - Update Pricing Cards content and layout (3-row structure). Reduce height from current card heights. 
    - highlighting "Escape Velocity" with "Bow Tie" badge.
    - Wire up CTAs to Contact page with prefilled query parameters.
    - **Responsiveness**: Ensure layout adapts to mobile.

### Section 4: Why Us Section
- **Change ID**: `update-why-us-1.5.0`
- **Implementation**:
    - Implement 6x4 Grid Layout.
    - Refactor 8 graphic components for reusability.
    - Implement "Tier" based card sizing and hoverreveal animations.
    - **Responsiveness**: Adjust grid for mobile views.

### Section 5: About Section
- **Change ID**: `update-about-1.5.0`
- **Implementation**:
    - Update text content.
    - Update value cards.

### Section 6: Contact Section
- **Change ID**: `update-contact-1.5.0`
- **Implementation**:
    - Update form fields (Identity, Coordinates, Protocol, Payload).
    - Implement URL parameter handling for prefilling Subject/Message.

### Section 7: Footer & Nav
- **Change ID**: `update-footer-nav-1.5.0`
- **Implementation**:
    - Update Logos (Use new `SpacebarLabsLogo.tsx`).
    - Remove "Careers".
    - Add Shadcn modals for Policies (Privacy, TOS, Cookie).
    - Update Mobile Nav (Bottom bar, Rainbow button).

## Verification Plan

### Automated Tests
- **Build Check**: Run `bun run build` after each section merge.
- **Lint Check**: Run `bun run lint`.
- **Security Tests**: 
    - Write specific test files (e.g., `tests/security/owasp-injection.test.ts`) to test edge cases.
    - Focus on OWASP Top 10 / MITRE CWE Top 25 (e.g., Input Validation, XSS prevention in rendered content).

### Manual Verification
- **Visual Inspection**:
    - Check Hero rotation timing and smoothness.
    - Verify Services card hover states.
    - Verify Pricing card layout and badge.
    - Verify Why Us grid responsiveness and graphic rendering.
    - Verify Contact form prefilling from Pricing/Hero buttons.
    - Verify Mobile Nav behavior and positioning.
    - **Typography**: Verify `nasalization-rg.ttf` is correctly applied to Logo and Headings.
- **Responsiveness**: Check layout and font sizing on Mobile, Tablet, and Desktop.
