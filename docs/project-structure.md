# Project Structure Overview

This document provides an overview of the project structure for the SpaceBar Labs marketing website.

```
spacebar-spec/
├── .dockerignore                 # Files and directories ignored by Docker
├── .gitignore                    # Files and directories ignored by Git
├── AGENTS.md                     # OpenSpec instructions for AI agents
├── CLINE.md                      # Instructions for the Cline AI assistant
├── bun.lockb                     # Lock file for Bun dependencies
├── components.json               # Configuration for shadcn/ui components
├── docker-compose.yml            # Docker Compose configuration for development
├── Dockerfile.dev                # Dockerfile for the development environment
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project README
├── tsconfig.json                 # TypeScript configuration
├── .next/                        # Next.js build output (gitignored)
├── docs/                         # Documentation directory
│   ├── development-workflow.md   # Guide for setting up and developing
│   └── project-structure.md     # This file - overview of project structure
├── node_modules/                 # Project dependencies (gitignored)
├── openspec/                     # OpenSpec configuration and proposals
│   ├── AGENTS.md                 # AI agent instructions
│   ├── project.md                # Project-level OpenSpec conventions
│   ├── specs/                    # Current, implemented specifications
│   │   └── initial-project-setup/
│   │       └── spec.md          # Specification for the initial setup
│   ├── changes/                 # Proposed changes (not yet implemented)
│   │   ├── project-setup/       # The 'project-setup' change
│   │   │   ├── proposal.md      # Why and what of the change
│   │   │   ├── tasks.md         # Implementation checklist
│   │   │   └── specs/           # Delta specifications for this change
│   │   │       └── initial-project-setup/
│   │   │           └── spec.md  # ADDED/MODIFIED/REMOVED requirements
│   │   └── archive/             # Completed and archived changes
│   └── openspec-bak/            # Backup of OpenSpec files
├── public/                       # Static assets served by Next.js
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── security-reports/            # Reports from security scanning tools
│   └── snyk/                    # Snyk vulnerability reports
├── sonarqube/                    # SonarQube code quality analysis data
├── src/                          # Source code for the Next.js application
│   ├── app/                     # App Router directory (Next.js 13+)
│   │   ├── favicon.ico          # Site favicon
│   │   ├── globals.css         # Global CSS styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Homepage component
│   └── lib/                     # Utility functions and shared code
│       └── utils.ts              # General utility functions
└── old-docker/                  # Legacy Docker configurations (if any)
```

## Key Directories and Files

### `src/app/`
This directory uses the Next.js App Router. Key files:
- `layout.tsx`: Defines the root layout for your application.
- `page.tsx`: The homepage of your marketing website.
- `globals.css`: Global styles for the entire application.
- `favicon.ico`: The icon for your website.

### `openspec/`
Central to the project's specification-driven development:
- `specs/`: Contains the current, implemented specifications. These are the "source of truth".
- `changes/`: Contains proposals for new features or modifications. Each change has its own subdirectory with `proposal.md`, `tasks.md`, and any necessary `spec.md` deltas.

### `docs/`
Holds all project documentation, including this overview and the development workflow guide.

### `public/`
Static assets like images, fonts, and other files that should be served directly by the browser.

### `package.json`
Defines project metadata, scripts (e.g., `bun run dev`, `bun run build`), and dependencies.

### Docker Configuration
- `Dockerfile.dev`: Configures the development environment.
- `docker-compose.yml`: Defines the services and how they interact, primarily for running the development server in a container.

## Development Workflow

1.  **Propose Changes:** For new features, create an OpenSpec proposal in `openspec/changes/`.
2.  **Implement Tasks:** Complete the tasks listed in the change's `tasks.md`.
3.  **Update Specs:** As features are implemented, ensure `openspec/specs/` reflects the current state.
4.  **Validate:** Use `openspec validate <change-id> --strict` to ensure proposals are well-formed.
5.  **Archive:** Once a change is deployed, move it to `openspec/changes/archive/`.

This structure supports a clear, maintainable, and specification-driven development process.
