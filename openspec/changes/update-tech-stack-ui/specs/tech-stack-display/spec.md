## ADDED Requirements
### Requirement: Tech Stack Interactive Display
The system SHALL provide an interactive tech stack section that displays categorized tools with detailed information on selection.

#### Scenario: User selects a tool
- **WHEN** a user clicks on a tech stack item in the list
- **THEN** the right-hand detail card updates to show that item's details
- **AND** the card displays a code snippet ONLY IF one is defined for that item
- **AND** the card displays associated images/screenshots ONLY IF defined
- **AND** the card displays extra metadata (e.g. License, Version) if available
- **AND** the card employs 3D visual effects on hover/interaction

#### Scenario: Scrolling behavior
- **WHEN** the user scrolls through the long list of tech categories
- **THEN** the detail card floats (sticky) to remain visible within the viewport alongside the list

#### Scenario: Navigating Categories Window
- **WHEN** the tech stack category list exceeds a predefined visual height/count
- **THEN** the list is truncated to a scrollable "window" of categories
- **AND** Glassmorphic "Up" and "Down" buttons appear at the top and bottom edges
- **AND** clicking these buttons scrolls the view by a subset of categories, keeping one category overlap for context
- **AND** the edges feature a progressive blur effect to hint at off-screen content
