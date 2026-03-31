 # Development Workflow Guide

This guide outlines the standard development workflow for the Aurorys Labs marketing website project.

## Prerequisites

- Skiper/ui - again a smooth animation library with prebuilt components.[Bun](https://bun.sh/) installed (`bun@latest`)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed
- Git

## Setting Up the Development Environment

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd spacebar-spec
    ```

2.  **Install dependencies:**
    Bun is used for package management. It will be used in the container to install dependencies. In case of emergencies/troubleshooting and you need to use bun locally to develop, install dependencies with:
    ```bash
    bun install
    ```
    and launch app with on port 3079:
    ```bash
    bun dev --port 3079
    ```

3.  **Start the development server with Docker:**
    The project includes a Docker Compose setup for a consistent development environment.
    To build the docker container:
    ```bash
    docker-compose -f docker-compose.yml up --build
    ```
    To run the docker container and see whats happening in the container: 
    ```bash
    docker compose up
    ```
    To run the docker container in a detached environment (you keep access to your terminal and docker container runs in the background):
    ```bash
    docker compose up -d
    ```

    The application will be accessible at `http://localhost:3078`.

## Making Changes

1.  **Create a new feature branch:**
    ```bash
    git checkout -b feature/your-feature-name
    ```

2.  **Develop your feature:**
    - Make your changes in the `src/` directory.
    - The Docker container is set up for hot-reloading, so changes should reflect automatically in the browser.

3.  **Follow OpenSpec for new features:**
    - For significant changes, create a new OpenSpec proposal.
    - Use `openspec list` to see existing changes and `openspec show <change-id>` for details.
    - Validate your changes with `openspec validate <change-id> --strict`.

## Running Tests

(Add test commands and procedures here once tests are set up)

## Building for Production

To build the application for production:

```bash
bun run build
```

This will create an optimized build in the `.next` directory.

## Deployment

(Add deployment procedures here once configured, e.g., for Cloudflare Pages)

## Troubleshooting

- **Port already in use:** If port 3078 is occupied, you can change it in the `docker-compose.yml` file.
- **Dependencies not installing:** Ensure Bun is correctly installed and `bun install` is run in the project root.
- **Hot-reloading not working:** Ensure the Docker container is running and you are making changes in the mounted volume.


### Shadcn Repositories
- Origin UI - contains components, UI blocks, animations. Need to pull manually.
- SHSF UI - contains smooth animations to be implemented. 
- Skiper/ui - again a smooth animation library with prebuilt components.
- reUI - Unique uiu library built on top of shadcn ui.g
- Blocks.so - Code blocks built using shadcn