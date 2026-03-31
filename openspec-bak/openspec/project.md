# Project Context

## Purpose
We are creating an impactful interactive website with modern technologies to serve as a place for people/clients to find our firm, what we do, services we provide, technologies we use, projects we were a part of, a way to contact with us etc. This will have beutiful animations, visuals that allow us to attract and keep clients, would have glassmorphic design, a space related theme, as the firm is called: 'Aurorys Labs', the name is chosen to blend development/computers with astrophysics, as both founders have astrophysics background. The firm does end-to-end development, from business consultancy to deployment and maintanance, including business consulting, ui and ux research, frontend, backend, database, devops, devsecops, sysadmin, maintanance, and other smaller security related tasks. We also provide high quality, performant and secure development by default. 

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

## Project Conventions

### Code Style
The code would be clean, secure, following best practices from OWASP, NIST, etc. Follow best React and NextJS practices for formatting, linting and naming conventions.  

### Architecture Patterns
We use json and objects to store small scale data such as for services, projects, tools sections, where we can store various attributes for the data, and use this json in our code. json would be stored as its own file.

### Testing Strategy
For each functional component such as forms, create robust testing methodologies and fix issues found, follow best security methods and frameworks such as OWASP and NIST to check what all from them could be used for testing for our usecase.

### Git Workflow
We will commit often, so there is a breadcrumb of changes we can follow back in case we need to rollback. 
For each new feature, and each different implementation of that feature we decide we need to try, we create a new branch. Once the feature is done, and works without errors, we merge it into the closest working branch such as dev or similar. 

## Domain Context
This is a marketing website with awesome visuals, animations and content to keep visitors and fully inform them about the firm, while giving them options to connect with us. The website would have glassmorphic design, imapctful visuals and animations and space themed appearance. 

## Important Constraints
Do not put any personal information that could be used to do OSINT against us, keep it professional and fun. 

## External Dependencies
[Document key external services, APIs, or systems]
