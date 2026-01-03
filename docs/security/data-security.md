# Data Security Policy

At **Spacebar**, we prioritize the security of our clients' data above all else. This document outlines our comprehensive approach to securing data at rest and in transit, ensuring confidentiality, integrity, and availability.

## 1. Data at Rest
Data at rest refers to data that is stored physically on our servers or databases. We employ strict encryption and access control measures to protect this data.

### 1.1 Encryption Standards
- **Database Encryption**: All databases (PostgreSQL, MongoDB) are encrypted using **AES-256** standard. This ensures that even if physical storage media is compromised, the data remains unreadable without the decryption keys.
- **File Storage**: Static assets and sensitive files stored in object storage (e.g., AWS S3, MinIO) are encrypted server-side using AES-256.
- **Disk Encryption**: We utilize full-disk encryption (LUKS for Linux servers) on all VPS and dedicated servers to protect the operating system and application data.

### 1.2 Key Management
- **Vault Integration**: We use **Hashicorp Vault** to securely store and manage API keys, database credentials, and encryption keys.
- **Rotation**: cryptographic keys and access credentials are rotated automatically every 90 days or immediately upon a suspected compromise.
- **Access**: Access to encryption keys is strictly limited to authorized personnel and services via Role-Based Access Control (RBAC).

### 1.3 Backup Security
- **Encrypted Backups**: All backups are encrypted before they leave the production environment.
- **Offsite Storage**: Backups are stored in a geographically separate location to ensure disaster recovery capabilities.
- **Immutability**: Where possible, we utilize immutable backup storage to prevent data tampering or deletion by ransomware.

## 2. Data in Transit
Data in transit refers to data securely moving between the user's client (browser), our servers, and third-party services.

### 2.1 Transport Layer Security (TLS)
- **HTTPS Everywhere**: We enforce HTTPS for all web applications and APIs. HTTP traffic is automatically redistributed to HTTPS.
- **TLS 1.3**: We configure our servers (Traefik, Nginx) to prefer **TLS 1.3**, the latest and most secure version of the protocol. We disable support for older, insecure protocols (TLS 1.0, 1.1) and weak cipher suites.
- **HSTS**: We implement **HTTP Strict Transport Security (HSTS)** headers to instruct browsers to strictly use secure connections for a defined period, mitigating downgrade attacks.

### 2.2 Secure API Communication
- **Authentication**: All internal and external API communications are authenticated using **OAuth 2.0** or **JWT (JSON Web Tokens)**.
- **Input Validation**: We strictly validate all incoming data to prevent injection attacks (SQLi, XSS) before it is processed or transmitted.

## 3. Access Control & Monitoring
- **Least Privilege Principle**: Users and services are granted only the minimum level of access required to perform their functions.
- **Multi-Factor Authentication (MFA)**: MFA is enforced for all administrative access to our infrastructure and dashboards.
- **Audit Logs**: We maintain detailed, tamper-proof logs of all data access and modifications for compliance and forensic analysis.
