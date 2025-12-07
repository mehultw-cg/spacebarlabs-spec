## ADDED Requirements

### Requirement: Glass Card Variant
The Card component SHALL provide a `glass` variant with gradient background, backdrop blur, and subtle border.

#### Scenario: Glass card in dark mode
- **WHEN** a Card is rendered with `variant="glass"` in dark mode
- **THEN** the card displays a diagonal gradient from neutral-800/80 to black/90
- **AND** has backdrop-blur-xl and border-white/10
- **AND** has subtle shadow for elevation

#### Scenario: Glass card in light mode
- **WHEN** a Card is rendered with `variant="glass"` in light mode
- **THEN** the card displays a diagonal gradient from neutral-50/80 to white/90
- **AND** has backdrop-blur-xl and border-neutral-900/10

### Requirement: Elevated Card Variant
The Card component SHALL provide an `elevated` variant with stronger shadow for depth.

#### Scenario: Elevated card rendering
- **WHEN** a Card is rendered with `variant="elevated"`
- **THEN** the card displays with shadow-xl and slight scale hover effect

### Requirement: Glass Button Variant
The Button component SHALL provide a `glass` variant with transparent background and backdrop blur.

#### Scenario: Glass button rendering
- **WHEN** a Button is rendered with `variant="glass"`
- **THEN** the button has backdrop-blur-md and bg-white/10 (dark) or bg-black/5 (light)
- **AND** has appropriate hover state with increased opacity

### Requirement: Gradient Button Variant
The Button component SHALL provide a `gradient` variant with solid gradient fill.

#### Scenario: Gradient button rendering
- **WHEN** a Button is rendered with `variant="gradient"`
- **THEN** the button has a diagonal gradient using theme colors
- **AND** text is white with proper contrast

### Requirement: Glow Button Variant
The Button component SHALL provide a `glow` variant with subtle glow on hover.

#### Scenario: Glow button hover
- **WHEN** a Button with `variant="glow"` is hovered
- **THEN** a soft glow appears around the button using theme accent colors

### Requirement: Combined Button Variants
The Button component SHALL support combined variants: `outline-glass` and `ghost-glow`.

#### Scenario: Outline-glass button
- **WHEN** a Button is rendered with `variant="outline-glass"`
- **THEN** the button combines outline border with glass backdrop

#### Scenario: Ghost-glow button
- **WHEN** a Button is rendered with `variant="ghost-glow"`
- **THEN** the button has no background but glows on hover

### Requirement: Extended Button Sizes
The Button component SHALL support additional sizes: `xs`, `xl`, `2xl`.

#### Scenario: Extra small button
- **WHEN** a Button is rendered with `size="xs"`
- **THEN** the button has h-7 and smaller text

#### Scenario: Extra large buttons
- **WHEN** a Button is rendered with `size="xl"` or `size="2xl"`
- **THEN** the button has increased height, padding, and font size

### Requirement: Button Roundedness Options
The Button component SHALL support roundedness options via className or variant.

#### Scenario: Pill-shaped button
- **WHEN** a Button includes `rounded-full` class
- **THEN** the button renders as a pill/capsule shape

### Requirement: RainbowButton Mode Variants
The RainbowButton component SHALL provide `dark` and `light` variants for mode-appropriate contrast.

#### Scenario: Dark rainbow button
- **WHEN** a RainbowButton is rendered with `variant="dark"`
- **THEN** the button has a dark background with rainbow border

#### Scenario: Light rainbow button
- **WHEN** a RainbowButton is rendered with `variant="light"`
- **THEN** the button has a light background with rainbow border

### Requirement: Base Typography Styles
The global CSS SHALL define base styles for h1-h6 elements with proper hierarchy.

#### Scenario: Heading hierarchy
- **WHEN** an h1-h6 element is rendered without explicit styling
- **THEN** it receives appropriate font-weight, tracking, and color based on level
- **AND** h1 is largest/boldest, h6 is smallest/lightest

### Requirement: Typography Utility Classes
The global CSS SHALL provide utility classes for text styling: `.text-title`, `.text-subtitle`, `.text-body`, `.text-caption`.

#### Scenario: Typography utilities application
- **WHEN** an element uses `.text-title` class
- **THEN** it receives bold weight, tight tracking, and appropriate foreground color

### Requirement: Spacing Utility Classes
The global CSS SHALL provide utility classes: `.container-gap`, `.card-padding`, `.rounded-glass`.

#### Scenario: Container gap utility
- **WHEN** a container uses `.container-gap`
- **THEN** it receives gap-6 (md:gap-8) for consistent spacing
