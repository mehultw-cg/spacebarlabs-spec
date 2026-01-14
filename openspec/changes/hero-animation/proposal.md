# Hero Animation Sequence Proposal

## Context
The Hero section requires a high-fidelity, narrative-driven particle animation to represent the brand's "constellation" theme. The previous implementation was too static and boxy.

## Sequence Definition
The animation follows a cyclical 11-step narrative:
1.  **Nebula**: Ambient cloud/fog, no stars.
2.  **Emergence**: Stars appear chaotically through the fog.
3.  **Formation (Rocket)**: Stars align into a Rocket shape (Logo).
4.  **Constellation (Rocket)**: Lines connect the stars to form the rocket chassis.
5.  **Dissolution**: Lines fade, stars scatter.
6.  **Formation (Lock)**: Stars align into a Lock shape with a Fingerprint core.
7.  **Constellation (Lock)**: Lines connect to reveal the lock and fingerprint details.
8.  **Dissolution**: Scatter.
9.  **Transit**: Two star clusters pass each other (Left<->Right) with trailing lines.
10. **Formation (Stack)**: Stars align into a 4-layer Isometric Tech Stack. We will put div boxes and text on these tech stack facets.
11. **Reset**: Scatter and return to step two, post nebula.

## Technical Approach
-   **Canvas API**: High-performance 2D rendering.
-   **Path Sampling**: Shapes will be defined as SVG-like paths sampled into discrete points for stars to target.
-   **Curved Lines**: Connections will use quadratic curves where appropriate to avoid "boxiness".
-   **Particle Physics**: Simple spring/friction model for smooth transitions. Can use framer motion if it works with canvas.

## Design Targets
-   **Colors**: Transparent background. Star color `rgba(100, 180, 255, 1)`. Nebula uses deep blues/purples.
-   **Timing**: Each phase lasts ~3-5 seconds.
