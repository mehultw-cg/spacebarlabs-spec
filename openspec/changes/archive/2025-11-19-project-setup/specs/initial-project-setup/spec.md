## ADDED Requirements
### Requirement: Next.js 15 with Bun Runtime
The project SHALL be initialized as a Next.js 15 application using the Bun runtime for package management and execution.

#### Scenario: Project Initialization
- **WHEN** the project is set up
- **THEN** it SHALL use `next@^15.5.6` and `bun@latest`
- **AND** the `package.json` SHALL include scripts for `dev`, `build`, and `start` using Bun

### Requirement: Docker Development Environment
The project SHALL provide a Docker development environment supporting hot-reloading.

#### Scenario: Docker Dev Setup
- **WHEN** the Docker development environment is running
- **THEN** it SHALL map host port 3078 to container port 3000
- **AND** changes in the source code SHALL trigger hot-reloads in the container

### Requirement: OpenSpec Integration
The project SHALL integrate OpenSpec for managing changes and specifications.

#### Scenario: OpenSpec Files
- **WHEN** the project is initialized
- **THEN** it SHALL contain an `openspec/` directory at the root
- **AND** this directory SHALL include `project.md`, `specs/`, and `changes/` subdirectories
- **AND** the `openspec/AGENTS.md` file SHALL be present with up-to-date instructions

### Requirement: Project Structure
The project SHALL have a clear and organized initial structure.

#### Scenario: Directory Layout
- **WHEN** examining the project root
- **THEN** it SHALL contain standard Next.js directories (`src/`, `public/`)
- **AND** a `.dockerignore` file SHALL be present
- **AND** essential configuration files like `next.config.ts`, `tsconfig.json`, and `eslint.config.mjs` SHALL exist
