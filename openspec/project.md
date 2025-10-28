# Project Context

## Purpose
We are creating an impactful interactive website with modern technologies to serve as a place for people/clients to find our firm, what we do, services we provide, technologies we use, projects we were a part of, a way to contact with us etc. This will have beutiful animations, visuals that allow us to attract and keep clients, would have glassmorphic design, a space related theme, as the firm is called: 'SpaceBar Labs', the name is chosen to blend development/computers with astrophysics, as both founders have astrophysics background. The firm does end-to-end development, from business consultancy to deployment and maintanance, including business consulting, ui and ux research, frontend, backend, database, devops, devsecops, sysadmin, maintanance, and other smaller security related tasks. We also provide high quality, performant and secure development by default. 

## Tech Stack
- Nextjs 
- ShadcnUI
- Tailwind CSS
- Aceternity UI
- Framer Motion
- Zod
- Docker
- trivvy
- OWASP ZAP
- SonarQube
- Resend (for transactional emails)
- Plausible Analytics (Community Edition, self-hosted for analytics)
- Jest & React Testing Library (for component testing)
- Cypress (for end-to-end testing)

## Project Conventions

### Code Style
The code would be clean, secure, following best practices from OWASP, NIST, etc. Follow best React and NextJS practices for formatting, linting and naming conventions.  

### Architecture Patterns
We use json and objects to store small scale data such as for services, projects, tools sections, where we can store various attributes for the data, and use this json in our code. json would be stored as its own file.

### Data Schemas
We use Zod to define schemas for all external data sources, including the JSON files that store content for sections like services, projects, and tools. This ensures data integrity and provides type safety throughout the application. Zod is also used for validating user input in forms to enhance security and prevent invalid submissions.

### Testing Strategy
Our testing strategy is designed to be pragmatic and focused on ensuring the reliability of key user interactions without over-engineering.

#### Component & Integration Testing
We use **Jest** and **React Testing Library** to write unit and integration tests for critical and interactive components. The primary focus is on components that involve user input and state management, such as the contact form, to verify correct behavior, validation, and user feedback.

#### End-to-End (E2E) Testing
We use **Cypress** to conduct E2E tests for essential user journeys. This includes tests for:
- Navigating between pages to ensure all links are working.
- Submitting the contact form and verifying a successful response.
- Confirming that core interactive elements and animations are functioning as expected.

Follow best security methods and frameworks such as OWASP and NIST to check what all from them could be used for testing for our usecase.


### Development, Production and Security Workflow
We will create docker based local development environment and use bun instead of npm. We will mount our dev folder for hot reloading, and make sure extra nextjs/node folders(node-modules etc.) don't mount back to our project folder. We create a multi-layer docker production environment to help launch this in production, not just the development environment. So we will have multiple docker-compose and dockerfiles. For Extra/experimental setup, we will create other docker workflows and containers for security, such as trivvy, sonarqube, etc and implement these in our CICD workflow, both locally and in production, we could use jenkins or similar to implement this. Some other docker workflows could include the plausible extension for analytics.

### Git Workflow
We will commit often, so there is a breadcrumb of changes we can follow back in case we need to rollback. 
For each new feature, and each different implementation of that feature we decide we need to try, we create a new branch. Once the feature is done, and works without errors, we merge it into the closest working branch such as dev or similar. 

## Domain Context
This is a marketing website with awesome visuals, animations and content to keep visitors and fully inform them about the firm, while giving them options to connect with us. The website would have glassmorphic design, imapctful visuals and animations and space themed appearance. 

## Important Constraints
Do not put any personal information that could be used to do OSINT against us, keep it professional and fun. 

## External Dependencies
### Contact Form
- **Service**: Resend
- **Usage**: To handle email submissions from the contact form. An API key will be managed via environment variables.

### Analytics
- **Service**: Plausible Analytics (Community Edition)
- **Usage**: Self-hosted on our own infrastructure to gather privacy-friendly website analytics.

### Hosting & Deployment
- **Platform**: Self-hosted on a Virtual Private Server (VPS).
- **Deployment Tools**: Dokploy or Coolify for managing deployments.
- **CI/CD**: A Continuous Integration/Continuous Deployment pipeline will be set up using GitHub Actions to automate the deployment process upon merging to the main branch. Experimental pipelines with Jenkins and ArgoCD will also be explored.
- **Security**: Standard server security practices will be implemented, including firewall configuration, regular system updates, and secure management of secrets and credentials.
