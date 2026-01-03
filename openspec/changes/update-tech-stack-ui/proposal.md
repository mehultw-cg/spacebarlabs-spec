## Why
The current Tech Stack UI has layout issues (content cut-off) and lacks visual engagement. The user wants a more "premium" feel with 3D elements, better layout handling (sticky right card), and more relevant content display (hiding irrelevant code snippets).

## What Changes
- **UI Layout**: 
    - Right card will have a "sticky" float behavior to follow user scroll.
    - Right card height will be adjusted to not span the full section constantly.
- **Visuals**: 
    - Integrate 3D pop-out effects for the detail card (Aceternity UI style).
- **Data/Schema**: 
    - Update `TechItem` schema to allow optional `codeSnippet`.
    - Add optional `images` field for screenshots or diagrams.
    - Add optional `metadata` key-value pairs for flexible metrics/info (e.g., "License", "Version").
    - conditionally render code snippets and images only when relevant.
- **Content**: 
    - Enhance descriptions and feature lists for tools.
    - Add images/diagrams for complex tools (e.g., Architecture diagrams).
    - Remove code snippets for tools where it doesn't make sense (e.g., Figma, Cloud platforms).

## Impact
- **Affected Specs**: `tech-stack-display` (New capability)
- **Affected Code**: 
    - `src/lib/data/tech-stack.ts` (Schema and Data)
    - `src/components/sections/TechStackSection.tsx` (UI Component)
