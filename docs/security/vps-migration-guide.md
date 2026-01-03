# Moving from Big Cloud to Managed VPS: A Security & Cost-Efficiency Guide

## Part 1: Why Move? (Client-Facing Copy)

Many businesses start on "Big Cloud" (AWS, Google Cloud, Azure) assuming it's the only professional choice. While these platforms are powerful, they often lead to:
- **Vendor Lock-in**: Proprietary services make it difficult to leave.
- **Unpredictable Costs**: Pay-as-you-go models can lead to billing shocks for bandwidth or compute spikes.
- **Complexity**: Securing an AWS VPC requires specialized DevOps knowledge.

### The Managed VPS Advantage
At **Spacebar**, we offer a migration path to Managed VPS infrastructure that is **Secure by Default** and **Cost-Predictable**.

1.  **Ownership of Data**: You host your data on your own private server instances, ensuring complete isolation and control.
2.  **Predictable Pricing**: Flat monthly fees. No surprise bills for bandwidth or IOPS.
3.  **Performance**: Dedicated resources often yield significantly better performance-per-dollar than shared cloud vCPUs.
4.  **Security**: We harden the OS layer, manage firewalls, and automate updates.

---

## Part 2: Technical Migration Guide (Coolify & Dokploy)

We utilize modern, self-hosted PaaS solutions like **Coolify** and **Dokploy** to provide a strictly managed, Heroku-like experience on top of raw VPS infrastructure.

### Step 1: VPS Provisioning & Hardening
Before installing any platform, we secure the raw Linux (Ubuntu 24.04 LTS) server.

#### 1.1 Secure Access
- **Disable Root Login**: Create a sudo user (`deployer`) and disable root SSH login.
- **SSH Keys Only**: Disable password authentication entirely in `/etc/ssh/sshd_config`.

```bash
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
```

#### 1.2 Firewall (UFW)
We follow a "Deny All" strategy, only opening essential ports.

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp  # SSH
ufw allow 80/tcp  # HTTP
ufw allow 443/tcp # HTTPS
ufw enable
```

#### 1.3 Intrusion Prevention (Fail2Ban)
Install `fail2ban` to ban IPs that show malicious signs (repeated failed login attempts).

### Step 2: Deployment Platform
Depending on client needs, we deploy one of two platforms:

#### Option A: Coolify (Recommended for most)
- **Why**: comprehensive, beautiful UI, supports unlimited servers, auto-SSL.
- **Setup**:
  ```bash
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
  ```
- **Security Check**: Ensure the Coolify dashboard itself is behind a secure authentication wall and SSL.

#### Option B: Dokploy (Lightweight)
- **Why**: extremely lightweight, Docker-native, great for smaller nodes.
- **Setup**:
  ```bash
  curl -sSL https://dokploy.com/install.sh | sh
  ```

### Step 3: Migration Workflow
1.  **Containerize**: Ensure the legacy application is Dockerized (`Dockerfile`).
2.  **Data Export**: Dump existing databases (e.g., `pg_dump`, `mongodump`) from RDS/Atlas.
3.  **Import**: Create the database service in Coolify/Dokploy and restore the data securely.
4.  **Deploy**: Connect the Git repository to Coolify/Dokploy for automated building and deployment.
5.  **DNS Switch**: Update DNS records to point to the new VPS IP once verification is complete.
