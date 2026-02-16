# Intro

This docunent defines the Updates an agent must follow to update the codebase to version 1.5.0.

# Graphic Language

The design of the website reamains the same. Use the same design components, cards, affects, functionality as the original sections or components.
For example, if for Services section updates, make sure the same functionality exists for service section cards, the same hover effect, click to expand card etc. Use original component and design wherever possible. 

# Rules for Updates

- Create new components/files for updated sections/components.
- Do not modify original components/files unless explicitly allowed.
- Update the data with a new data file in the appropriate location, based on the content that needs to be there in the new component. 
- For each update for a section, a new openspec change/proposal must be created, following openspec best practices. 
- Each updated section would be done 1 by 1, not in parallel and each section would be updated in its own branch. 
- For each update for a section, create a new git branch from the new branch we would create when we begin this update - 'feature/update-1.5.0'. Each update should be in its own branch. Each update mush merge back to this 'feature/update-1.5.0' branch once the update is complete for that section.
- Everything should be type safe, and follow best practices for typescript and react. Along with best security practices, input sanitization and validation must be implemented.
- Whenever a link or button reaches to Contact form, fill it to the best of abilities, for instance when 'Initialize Project' is clicked on Hero, It fills out subject line with 'Init-Project: ', when Pricing section buttons are clicked for contact form (all buttons do), prefill the pricing selected in subject, and content of message should be prefilled with some text, features for that pricing selection, and some guidance to user that they can edit this text for whatever request, services, mix and match or something else. 

# Updates 

## Hero Section

### General overview

The section would be split in 2 columns. Left column would have the heading, sub-heading, and the call to action buttons. Right column would have the hero images. 

### Left Column

- This would have the same container that we currently have with glassmorphic background and border lights as it is right now. The container would feature 3 sets of Headers, sub-headings and CTAs. They would change to the next set every 3.5s, subtly enough that user wont notice the abruptness of the change in heading and CTAs etc. Make sure the text size changes depending on which device user is using. 

- Heading 1: "Security and Privacy by Design"
- Sub-heading 1: "We design resilient systems that protect your data, your infrastructure, and your long-term independence."
- Call to action 1 buttons: "Initialize Project" maps to Contact Section and "Our Approach" maps to Why Us Section.

- Heading 2: "Reduce Cloud Costs Without Compromising Security"
- Sub-heading 2: "We help organizations design infrastructure that balances performance, privacy, and long-term cost efficiency."
- Call to action 2 buttons: "Explore Migration Options" maps to Services section and "Learn How It Works" maps to Why Us section.

- Heading 3: "Secure Systems. Practical Processes. Measurable Results."
- Sub-heading 3: "From architecture to deployment, we integrate security into every stage of system development."
- Call to action 3 buttons: "Explore Services" maps to Services section and "Talk to an Engineer" maps to contact form.

### Right Column

Make the images change every 2.5s. The images must be animated in and out using framer motion, use opacity, blur and slight scale to animate the images. Each image animates in from blurred to focus, and animate out from focus to blurred.

- Hero image 1: Use the rocket logo only component under /components/vfx/why-us-graphics/rocket-logo-only.tsx. Make sure you give it the same treatment as other components in this folder, abstract out stroke width, stroke-color, fill-color etc. and allow the parent component to control these things. This is tha main Spacebar Labs Logo. 
- Hero image 2: Use the server-constellation-safe component for it. 
- Hero image 3: Use the shield-network component for it. 

### Last Part

Below the above columns, leave a spot to add tags that remain throughout any of the hero animations, and a spot for a small paragraph for the section, this should contain spacebar labs mission/vision related statement. Also add that we aim to reduce our dependency, privacy security and robust systems at core, and will have education, knowledge transfer and training in our dna. 

## Services Section

### General Overview

This section would feature six cards in two rows. It looks exactly like the section right now for services. Same hover effects, same border glue on mouse hovers, same different states. The only difference would be the height of each card would be larger in this because there is more information in these cards than the previous cards. The Icon Used would be lucide-react Icons. There would be a new data file under src/lib/data/services-updated.ts Position of tags would be the same. Each bullet point graphic would be an svg icon 'disc' from lucide-react. The unfocused/inactive view would display everything but Detail and Bullet point. On Active, the card would expand to show Detail and Bullet point. 
Keep the 'Commitment to Security' part, change it to include privacy, data ownership etc too. 

#### Card 1
Icon: 'shield-plus'
Tags: ['security', 'core', 'architecture', 'infrastructure', 'policy']
Title: Secure Architecture & System Design
Description: Designing secure foundations for modern digital systems.
Detail: We help organizations build architectures that remain secure, resilient, and adaptable over time.
Bullet Points:
- Threat modeling and risk assessment
- Secure system architecture design
- Infrastructure hardening, security, and privacy strategies 
- Policy and process planning
- Protocol and security workflow design

#### Card 2
Icon: 'workflow'
Tags: ['security', 'devsecops', 'cloud', 'appsec', 'automation', 'engineering' ]
Title: DevSecOps & Secure Development
Description: Integrating security throughout the software development lifecycle.
Detail: We implement practical DevSecOps processes that protect systems without slowing development, ensuring security is built-in, not added as an afterthought.
Bullet Points:
- CI/CD security pipeline
- Automated security testing and scanning
- Secure development practices and training
- Infrastructure as Code (IaC) security
- Secrets management integration

#### Card 3
Icon: 'server'
Tags: ['cloud', 'core', 'infrastructure', 'security', 'migration']
Title: Infrastructure Security, Hardening & Migration
Description: Securing infrastructure from the ground up.
Detail: We strengthen infrastructure to reduce risk exposure and improve long-term stability, while saving costs.
Bullet Points:
- Infrastructure hardening, optimization and cost management
- Hybrid infrastructure planning
- Secure, encrypted Cloud-to-VPS/Cloud-to-Cloud/Cloud-to-Hybrid migration strategies (and Vice versa)
- Network security architecture and Zero-trust controls.
- Cloud security configuration and compliance

#### Card 4
Icon: 'radar'
Tags: ['security', 'audit', 'architecture', 'risk', 'policy']
Title: Security Assessment & Testing
Description: Identifying risks before they become incidents.
Detail: We assess systems to uncover vulnerabilities and provide clear remediation guidance.
Bullet Points:
- Threat modeling and risk assessment
- Vulnerability assessment and management
- Web and application security testing
- Cloud security reviews
- Configuration audits
- Basic offensive security testing

#### Card 5
Icon: 'shield-check'
Tags: ['security', 'compliance', 'risk', 'governance', 'policy', 'audit']
Title: Compliance & Risk Readiness
Description: Preparing organizations for regulatory and security expectations..
Detail: We help organizations align systems with global data protection and risk management requirements.
Bullet Points:
- GDPR, DPDP, HIPAA, CCPA readiness guidance
- Risk assessment and documentation
- Security policy, process and control framework design
- Compliance gap analysis
- NIST, SOC2, PCI DSS alignment

#### Card 6
Icon: 'activity'
Tags: ['advisory', 'strategy', 'security']
Title: Ongoing Security Advisory
Description: Long-term guidance for evolving systems.
Detail: We provide ongoing advisory support to help organizations adapt to changing risks and technology.
Bullet Points:
- Security strategy and roadmap development
- Incident response guidance
- Security architecture review and guidance
- Compliance and policy updates
- Security and privacy best practices

## Pricing Section

### General Overview

This section would have the same layout as it does right now. Height of each row/card is reduced so entire pricing is visible in the viewport. With same hover effects, 'box' lucide-react svg for bullets, same color as now. Same description, details, features, cta buttons, and layout as it is right now - 3 rows, 2 cards on top, 1 card middle spanning entire row, 2 cards on the bottom. In curly brackets '{}' you might sometimes find actions for AI to generate some stuff. 

Heading: Pricing
Subtext: Flexible ways to work together, based on your needs and goals. Bundled services for easy access.
Sub-sub-text: Clients can engage with us through:

• Fixed-scope projects
• Milestone-based work
• Ongoing advisory partnership

Our goal is to empower teams to operate independently, not create dependency.

Escape Velocity
Launch Ready
Lift Off
System Scan
Mission Support

### Top Row

#### Card 1

Title: Launch Ready
Icon: 'wrench'
Description: Understand your current security posture, risks and priorities.
Details: {fill in a detailed blurb for this}
Features: ['Architecture Review', 'Risk Prioritization', 'Security Roadmap', 'Vulnerability Assessment', 'Remediation Guidance']
CTA: 'Request Assessment'

#### Card 2

Title: Lift Off
Icon: 'server-crash'
Description: Start new projects with security integrated from day one.
Details: {fill in a detailed blurb for this}
Features: ['Secure Architecture Design', 'Threat Modeling', 'Secure Development Guidance', 'DevSecOps Pipeline Setup', 'Infrastructure Hardening', 'Security Review']
CTA: 'Start Securely'

### Middle Row
#### Card 3
This would be the featured card, spanning the entire middle row. 
Add a bow tie on top right corner indicated most favored.

Title: Escape Velocity
Icon: 'rocket'
Description: Move to resilient, secure infrastructure with confidence.
Details: {fill in a detailed blurb for this}
Features: ['Infrastructure Assessment', 'Migration Planning', 'Cloud-to-VPS Migration', 'Infrastructure Hardening', 'Risk Mitigation Strategy', 'Secure Deployment Configuration', 'Cost Assessment & Optimization']
CTA: 'Plan Your Migration'

### Bottom Row
#### Card 4

Title: System Scan
Icon: 'radar'
Description: Prepare systems and processes for global standards.
Details: {fill in a detailed blurb for this}
Features: ['Readiness Gap Analysis', 'Policy and Process Development', 'Audit preperation Support', 'Compliance Alignment', 'Risk Assessment and Documentation Support', 'Security Control Implementation Guidance']
CTA: 'Prepare for Compliance'

#### Card 5

Title: Mission Support
Icon: 'activity'
Description: Continuous guidance as your systems evolve.
Details: {fill in a detailed blurb for this}
Features: ['Security Strategy', 'Incident Support Guidance', 'Architecture Review', 'Compliance Updates', 'Security Best Practices']
CTA: 'Discuss Advisory'

## Why Us Section

The wires should be overhauled. This would consist of a grid of dimensions: 6 horizontally, 4 vertically.

The card orientation is as follows. There would be 3 tiers of cards, 1 - 3, 1 being highest priority and largest, 3 being smallest. Large cards would have more data to show, small cards would have less data to show. Initial state would have the title and subheading visible, with the rest hidden, text would be on lower left of the card. On active/hover, the content would gracefully animate up to reveal the rest of the content. Graphics would be on the right side of the card, as a background so text can overlay on top. There would be a gradient overlay over the graphic to make the text more readable.

Each card would feature a title, a subheading, a description on hover/action, and a graphic from the SVGs we have at our disposal in /src/components/vfx/why-us-graphics. 
Here is the layout:
Card 1 : 3 cols 2 rows, tier 1, situated: top-left about: Security built into the foundation
Card 2 : 2 cols 1 row, tier 2, situated: top-middle-right about: Reduce Cloud Costs. Increase Long-Term Value 
Card 3 : 1 col 2 row, tier 3, situated: top-right about: Direct Access to Engineers
Card 4 : 1 col 1 row, tier 3, situated: left-middle about: Data Control By Design
Card 5 : 1 col 1 row, tier 3, situated: left-bottom about: Global Compliance Ready
Card 6 : 2 cols 2 rows, tier 2, situated: left-center(right of the previous 2 cards) about: Human-Centric Secure Infrastructure
Card 7: 2 cols 3 rows, tier 1, situated: right-center(below Card 2, right of Card 6) about: Privacy First. No Vendor Lock-In.
Card 8: 1 col 1 row, tier 3, situated: right-bottom-center(below card 3, right of card 7)  about: Adaptable Across Technologies. 
Card 9: 1 col 1 row, tier 3, situated: right-bottom(below card 8, right of Card 7) about: Long-Term Resilience

### Card Details

#### Card 1
Title: Security built into the foundation
Subheading: Not added later. Designed from the start.
Description: We architect systems where security is a structural property, not a reactive feature.

Our approach focuses on:

• threat-aware system design
• hardened infrastructure
• automated security controls
• long-term resilience planning

We do not rely on patching vulnerabilities after deployment.
We build systems to minimize them from the beginning.

Graphic: shield-network.tsx

#### Card 2
Title: Reduce Cloud Costs. Increase Long-Term Value
Subheading: Optimized systems without unnecessary complexity.
Description: We help organizations understand where resources are being spent inefficiently and design architectures that deliver stronger performance with lower operational overhead.
Graphic: line-down.tsx

#### Card 3
Title: Direct Access to Engineers
Subheading: Work directly with the people designing your systems.
Graphic: line-down.tsx

#### Card 4
Title: Data Control By Design
Subheading: Clear control over data storage, access, and lifecycle.
Graphic: closed-lock-fingerprint.tsx

#### Card 5
Title: Global Compliance Ready
Subheading: Aligned with international frameworks and standards..
Graphic: generic-globe.tsx

#### Card 6
Title: Human-Centric Secure Infrastructure
Subheading: Systems designed for real teams to operate.
Description: We build infrastructure that balances security with usability.

Our designs emphasize:

• operational clarity
• maintainable architectures
• strong documentation
• predictable workflows

Secure systems should empower teams, not overwhelm them.
Graphic: ui-brain.tsx

#### Card 7
Title: Privacy First. No Vendor Lock-In.
Subheading: You own your systems, your infrastructure, and your data.
Description: We believe organizations should retain full control over their digital environments.

Our designs prioritize:

• data ownership and control
• flexible infrastructure choices
• private and self-hosted options
• migration independence

We help clients avoid long-term dependency on vendors, including us.
Graphic: server-constellation-safe.tsx

#### Card 8
Title: Adaptable Across Technologies.
Subheading: Flexible across languages, infrastructures, and environments..
Graphic: bg-network.tsx

#### Card 9
Title: Long-Term Resilience
Subheading: Architectures built to evolve over time.
Graphic: analytical-lock.tsx



## Tech Stack Section

We are removing this section for now. 

## About Section

Heading: About Spacebar Labs

### Main Text

Spacebar Labs is a security-focused engineering firm dedicated to building resilient digital infrastructure.

We believe technology should empower individuals and organizations while respecting privacy, ownership, and long-term sustainability.

Our work combines practical engineering discipline with a deep commitment to human-centric system design.

We partner with clients to create secure foundations that can evolve confidently over time.

### Supporting Value Cards

- Security-First Engineering
- Privacy-Respecting Architecture
- Independent Infrastructure Philosophy
- Global Standards Alignment



## Contact Section

Keep the general aesthetic, change the text

Window Title: 'secure_upliink@spacebar-labs:~/connect'
Status Bar: 'Connection: Encrypted (TLS 1.3)'
Name -> 'Identity(Name)'; placeholder -> 'John Doe (CEO)'
Email -> 'Coordinates(Email); placeholder -> 'john.doe@company.com'
Subject -> 'Protocol'; this would be a dropdown with options: ['INIT_MIGRATION','REQ_AUDIT', 'START_BUILD', 'PING_HELLO'] With a default value of 'PING_HELLO', and for other buttons on the page leading to here, select the correct subject/protocol for the action, and the correct placeholder depending on the protocol selected. 
Message -> 'Payload (Message); placeholder -> 'Brief us on your mission parameters..'
Submit Button -> 'Transmit Securely'

Add a micro-copy on the left-bottom most side of this with a neutral/gray message (unintrusive): '0% Spam Probability. We respect your inbox.'



## Footer Section


Keep the current Layout, Change the logo to the rocket-logo-only.tsx. Change the firm name to Spcaebar Labs. remove social icons, microcopy 'Building secure privacy-centric digital foundations, one instance at a time.'

For rest of the columns, remove the 'Careers' link under company. For the Legal column, Generate Privacy Policy, Terms of Service, and Cookie Policy. Use Shadcn modals to pop up a div where you would put that content for each of the policy. These policies should be robust, real world and cater to the ethos of the website. 

## Nav Bar

Keep the current layout, change the logo to the rocket-logo-only.tsx. Change the firm name to Spcaebar Labs. Update the button in the mobile view to the Rainbow style button we have in desktop view. Move the nav bar in the mobile view to the bottom. the Menu button that opens should open on the top instead of the bottom, since the navbar is in the bottom. Also add lucide icons for the nav bar menu items in the mobile version, along with the text the have.