# Aurorys Labs

Aurorys Labs is a specialized engineering firm focused on building trust, security, and digital independence. We design and implement resilient infrastructure, perform deep security audits, and facilitate seamless migrations to sovereign, self-managed digital environments.

## Core Mission
Our mission is to empower organizations with software that doesn't just work, but stays secure and independent from restrictive platforms. We specialize in:
- **Resilient Architectures**: Designing systems that scale without compromising security.
- **Digital Sovereignty**: Migrating away from legacy cloud-lock-in to independent, self-hosted infrastructure.
- **Security Audits**: In-depth analysis and hardening of core protocols and applications.

---

## Development Guide

### Local Development
To run this project locally, ensure you have **Bun** installed.
```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

### Build & Deployment
For a production-ready environment, **Docker** is the preferred method.
- **CI/CD**: This project utilizes GitHub Actions to build and push sterile, optimized Docker images to the GitHub Container Registry (GHCR).
- **Environment**: The final image is a lightweight Next.js standalone server running natively on Bun for maximum performance.
- **Deployment**: We deploy to self-managed infrastructure using container orchestration to ensure high availability and data sovereignty.

---
*© 2026 Aurorys Labs. Secure Protocol Initiated.*
