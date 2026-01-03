# Compliance Alignment & Roadmap

Building trust with our clients starts with adherence to internationally recognized standards. While **Spacebar** is a growing agency, we are building our processes from the ground up to align with major compliance frameworks.

## 1. Immediate Alignment Goals (Current Status)

### 1.1 GDPR (General Data Protection Regulation)
We are fully committed to protecting the privacy of EU citizens and effectively apply these high standards globally.
- **Lawful Basis**: We only collect data that is necessary for our services and do so with explicit consent.
- **Data Minimization**: We practice "privacy by design," ensuring we only store what is absolutely needed.
- **Rights of Individuals**: Our systems are built to support Data Subject Access Requests (DSARs), including the "Right to be Forgotten" and data portability.
- **Data Processing Agreements (DPA)**: We have vetted all sub-processors (e.g., cloud providers, payment gateways) to ensuring they are GDPR compliant.

### 1.2 SOC 2 (Service Organization Control 2) - Type 1 Preparation
We are structuring our internal controls based on the **Trust Services Criteria**:
- **Security**: We have implemented firewalls (UFW), intrusion detection (Falco/Wazuh), and access controls to protect against unauthorized access.
- **Availability**: Our infrastructure uses redundancy and monitoring (Prometheus/Grafana) to ensure agreed-upon uptime.
- **Confidentiality**: Sensitive data is encrypted at rest and in transit.

## 2. Compliance Roadmap

### Phase 1: Foundation (Months 1-6)
- [x] Establish Information Security Policy.
- [x] Implement initial technical controls (Encryption, MFA, Backups).
- [ ] Conduct first internal Risk Assessment.
- [ ] formalized Incident Response Plan.

### Phase 2: Auditing & Attestation (Months 6-12)
- [ ] **SOC 2 Type 1 Audit**: Engage a CPA firm to review the design of our security controls.
- [ ] **GDPR Audit**: Third-party review of our data privacy practices.

### Phase 3: Certification (Year 2+)
- [ ] **ISO 27001 Certification**: We aim to implement a full Information Security Management System (ISMS) and achieve ISO 27001 certification to demonstrate our maturity to enterprise clients.
- [ ] **SOC 2 Type 2**: Verification of the *operating effectiveness* of our controls over a period of time (6-12 months).

## 3. Client Responsibility
While we manage the security of the infrastructure (VPS, Network), clients are responsible for the security of their application logic and user management (Shared Responsibility Model). We provide tools and guidance to help clients meet their own compliance obligations.
