## MODIFIED Requirements
### Requirement: Service List Display
The Services section SHALL display a list of services using a bento-grid layout.
#### Scenario: Initial State
- **WHEN** the user views the Services section
- **THEN** the first 3 rows of services SHALL be fully visible
- **AND** a portion (peek) of the 4th row SHALL be visible
- **AND** a "Show More Services" button SHALL be displayed with a gradient overlay

#### Scenario: Expansion
- **WHEN** the user clicks "Show More Services"
- **THEN** the next 2 rows of services SHALL be revealed smoothly
- **AND** the peek SHALL move to the next hidden row
- **AND** if all rows are visible, the "Show More" button SHALL disappear

#### Scenario: Collapse
- **WHEN** all rows are visible
- **THEN** a "Collapse Services" button SHALL be displayed
- **WHEN** the user clicks "Collapse Services"
- **THEN** the list SHALL return to the initial state (3 rows visible)
- **AND** the view SHALL scroll back to the top of the Services section
