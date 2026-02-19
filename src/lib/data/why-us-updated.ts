
import React from 'react';

export interface WhyUsItem {
    id: string;
    title: string;
    subheading: string;
    description?: string;
    bullets?: string[];
    graphic: string;
    colSpan: number;
    rowSpan: number;
    tier: 1 | 2 | 3;
}

export const whyUsData: WhyUsItem[] = [
    // ROW 1 START
    // Card 1: 3x2, Tier 1, Top-Left
    {
        id: "card-1",
        title: "Security built into the foundation",
        subheading: "Not added later. Designed from the start.",
        description: "We architect systems where security is a structural property, not a reactive feature. We do not rely on patching vulnerabilities after deployment. We build systems to minimize them from the beginning. We systematically follow our 19K word security documentation",
        bullets: [
            "Threat-aware system design",
            "Hardened infrastructure",
            "Atomated security controls",
            "Long-term resilience planning",
        ],
        graphic: "ShieldNetwork",
        colSpan: 3,
        rowSpan: 2,
        tier: 1
    },
    // Card 2: 2x1, Tier 2, Top-Middle-Right
    {
        id: "card-2",
        title: "Reduce Cloud Costs. Increase Long-Term Value",
        subheading: "Optimized systems without unnecessary complexity.",
        description: "We help organizations understand where resources are being spent inefficiently and design architectures that deliver stronger performance with lower operational overhead.",
        graphic: "LineDown",
        colSpan: 2,
        rowSpan: 1,
        tier: 2
    },
    // Card 3: 1x2, Tier 3, Top-Right
    {
        id: "card-3",
        title: "Direct Access to Engineers",
        subheading: "Work directly with the people designing your systems.",
        graphic: "HeirarchyStars",
        colSpan: 1,
        rowSpan: 2,
        tier: 3
    },

    // ROW 2 START (Implicitly filled by flows, but Card 7 starts here in col 4,5)
    // Card 7: 2x3, Tier 1, Below Card 2 (Right-Center)
    // Placed here in array to fill the slot at (Row 1, Col 3)
    {
        id: "card-7",
        title: "Privacy First. No Vendor Lock-In.",
        subheading: "You own your systems, your infrastructure, and your data.",
        description: "We believe organizations should retain full control over their digital environments. We help clients avoid long-term dependency on vendors, including us.",
        bullets: [
            "Data ownership and control",
            "Flexible infrastructure choices",
            "Private and self-hosted options",
            "Migration independence",
            "Secure sovereign systems"
        ],
        graphic: "BoxedFingerprint",
        colSpan: 2,
        rowSpan: 3,
        tier: 1
    },

    // ROW 3 START (Row 2 in 0-indexed)
    // Card 4: 1x1, Tier 3, Left-Middle
    {
        id: "card-4",
        title: "Data Control By Design",
        subheading: "Clear control over data storage, access, and lifecycle.",
        graphic: "ClosedLockFingerprint",
        colSpan: 1,
        rowSpan: 1,
        tier: 3
    },
    // Card 6: 2x2, Tier 2, Left-Center (Right of Card 4/5)
    {
        id: "card-6",
        title: "Human-Centric Secure Infrastructure",
        subheading: "Systems designed for real teams to operate.",
        description: "We build infrastructure that balances security with usability. Secure systems should empower teams, not overwhelm them.",
        bullets: [
            "Operational clarity",
            "First principles engineering",
            "Maintainable architectures",
            "Strong documentation",
            "Predictable workflows"
        ],
        graphic: "UiBrain",
        colSpan: 2,
        rowSpan: 2,
        tier: 2
    },
    // Card 8: 1x1, Tier 3, Right-Bottom-Center (Below Card 3)
    {
        id: "card-8",
        title: "Adaptable Across Technologies.",
        subheading: "Flexible across languages, infrastructures, and environments.",
        graphic: "BgNetwork",
        colSpan: 1,
        rowSpan: 1,
        tier: 3
    },

    // ROW 4 START (Row 3 in 0-indexed)
    // Card 5: 1x1, Tier 3, Left-Bottom
    {
        id: "card-5",
        title: "Global Compliance Ready",
        subheading: "Aligned with international frameworks and standards.",
        graphic: "GenericGlobe",
        colSpan: 1,
        rowSpan: 1,
        tier: 3
    },
    // Card 9: 1x1, Tier 3, Right-Bottom
    {
        id: "card-9",
        title: "Long-Term Resilience",
        subheading: "Architectures built to evolve over time.",
        graphic: "AnalyticalLock",
        colSpan: 1,
        rowSpan: 1,
        tier: 3
    }
];
