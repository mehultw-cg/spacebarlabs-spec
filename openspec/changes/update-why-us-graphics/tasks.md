## 1. Fix Critical Error
- [x] 1.1 Add default export to founders.tsx

## 2. Refine UI-Brain
- [x] 2.1 Update mainStroke default from 5.21px to 4px
- [x] 2.2 Add detailStroke prop with default 2px
- [x] 2.3 Apply detailStroke to all Brain section paths (11 paths)

## 3. Update Other Graphics (exclude server-constellation-safe)
- [x] 3.1 Update shield-network.tsx defaults to 4px/2px
- [x] 3.2 Update analytical-lock.tsx defaults to 4px/2px
- [x] 3.3 Review and update boxed-fingerprint.tsx defaults to 4px/2px
- [x] 3.4 Review and update open-lock.tsx defaults to 4px
- [x] 3.5 Review and update closed-lock-fingerprint.tsx defaults to 4px/2px
- [x] 3.6 Review and update generic-globe.tsx defaults to 4px
- [x] 3.7 Review and update cloud-migration.tsx defaults to 4px
- [x] 3.8 Review and update line-up.tsx defaults to 4px/2px
- [x] 3.9 Refactor line-down.tsx to proper component structure with strokeWidths support
- [x] 3.10 Skip heirarchy-stars.tsx (not used in WhyUsSection)

## 4. Centralize Stroke Widths in WhyUsSection
- [x] 4.1 Add GRAPHIC_STROKE_WIDTHS constant object
- [x] 4.2 Update switch cases to pass strokeWidths props to graphics
- [x] 4.3 Fix typo "cloud-deployments" in case statement

## 5. Create OpenSpec Structure
- [x] 5.1 Create directory structure for update-why-us-graphics
- [x] 5.2 Write proposal.md
- [x] 5.3 Write tasks.md
- [x] 5.4 Write specs/why-us-graphics/spec.md

## 6. Create Documentation
- [x] 6.1 Create docs/graphics/ directory
- [x] 6.2 Write README.md (system overview and conventions)
- [x] 6.3 Write catalog.md (quick reference table + detailed sections)
- [x] 6.4 Write ui-brain.md (component documentation)
- [x] 6.5 Write founders.md (component documentation)
- [x] 6.6 Write framer-motion-integration.md (animation concepts with pseudo-code)

## 7. Verification
- [ ] 7.1 Run openspec validate update-why-us-graphics --strict
- [ ] 7.2 Test graphics render in browser
- [ ] 7.3 Verify founders export resolves web app error
- [ ] 7.4 Verify stroke width consistency across all graphics
