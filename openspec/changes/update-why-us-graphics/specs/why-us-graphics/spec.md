## ADDED Requirements

### Requirement: SVG Graphics Standardization
All "Why Us" section SVG graphics SHALL use consistent stroke width conventions.

#### Scenario: Default stroke widths
- **WHEN** a graphic component is rendered without explicit stroke width props
- **THEN** it uses main stroke of 4px for structural elements
- **AND** it uses detail stroke of 2px for fine detail lines (where applicable)

#### Scenario: Customizable stroke widths
- **WHEN** a graphic component has multiple stroke types
- **THEN** it provides a strokeWidths object prop for customization
- **AND** defaults are set to 4px for main strokes and 2px for detail strokes

#### Scenario: Stroke width application
- **WHEN** differentiating between structural and detail elements
- **THEN** structural elements (frames, main shapes) use 4px
- **AND** detail elements (neural paths, network lines, fine patterns) use 2px

### Requirement: Component Export Consistency
All SVG graphic components SHALL use default exports.

#### Scenario: Component import
- **WHEN** importing a graphic component in other files
- **THEN** default export syntax works (e.g., `import Founders from "./founders"`)

### Requirement: Graphics Component Structure
All "Why Us" graphics components SHALL follow consistent interface patterns.

#### Scenario: strokeWidths object
- **WHEN** a graphic has multiple stroke types
- **THEN** it defines strokeWidths object prop with typed keys
- **AND** each key has a sensible default value

#### Scenario: Common props support
- **WHEN** rendering any graphic component
- **THEN** it supports className, strokeColor, and fillColor props
- **AND** it passes through standard SVGProps for additional customization

### Requirement: Graphics Documentation
All "Why Us" section graphics SHALL be documented in docs/graphics/.

#### Scenario: Catalog reference
- **WHEN** developer needs to find information about a graphic
- **THEN** docs/graphics/catalog.md provides quick reference table
- **AND** detailed documentation exists in separate graphic-specific files

#### Scenario: Component details
- **WHEN** developer needs implementation details for a specific graphic
- **THEN** docs/graphics/{graphic-name}.md provides component structure, props, and usage examples

### Requirement: Animation Concepts
All "Why Us" graphics SHALL have documented animation concepts in docs/graphics/.

#### Scenario: Animation planning
- **WHEN** planning Framer Motion animations for graphics
- **THEN** docs/graphics/framer-motion-integration.md provides high-level animation concepts
- **AND** each graphic has detailed implementation pseudo-code

#### Scenario: Animation implementation
- **WHEN** implementing animations for a graphic
- **THEN** pseudo-code provides specific animation patterns (shimmer, pulse, draw-in)
- **AND** timing and duration recommendations are documented

### Requirement: Fill Usage
Graphics SHALL only use fillColor for specific elements (triangles, rectangles in analytics graphics).

#### Scenario: Fill application
- **WHEN** a graphic has elements requiring fill
- **THEN** only end-cap triangles and structural rectangles receive fill values
- **AND** other elements maintain `fill: none` or `fillOpacity: 0`

#### Scenario: Default no-fill
- **WHEN** rendering a graphic without explicit fillColor prop
- **THEN** elements default to no fill for stroke-based graphics
- **AND** only specific filled elements use `fillColor || "currentColor"`
