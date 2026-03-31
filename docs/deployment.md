# Deployment Process

This document outlines the deployment process for the Aurorys Labs marketing website.

## Prerequisites for Deployment

- A Docker-compatible environment.
- The project built successfully using the production Dockerfile (`Dockerfile.prod`).
- A GitHub repository for the project.
- For VPS deployments: A VPS with Docker and Docker Compose installed, and access to a domain name.

---

## Docker-based Deployment with GitHub Actions

This is the current primary method for deploying the application.

### GitHub Actions Workflow

A GitHub Actions workflow (e.g., in `.github/workflows/deploy-prod.yml`) will handle the build and push to a container registry (like Docker Hub, GitHub Container Registry, or a private registry), and then deploy to the VPS.

**Workflow Steps:**

1.  **Trigger:** On push to the `main` branch or creation of a release tag.
2.  **Checkout Code:** `actions/checkout@v3`
3.  **Set up Docker Buildx:** `docker/setup-buildx-action@v2`
4.  **Log in to Container Registry:** `docker/login-action@v2` (secrets for registry credentials needed).
5.  **Extract Metadata:** `docker/metadata-action@v4` (for tagging).
6.  **Build and Push Docker Image:**
    ```yaml
    - name: Build and push Docker image
      uses: docker/build-push-action@v4
      with:
        context: .
        file: ./Dockerfile.prod
        push: true
        tags: ${{ secrets.REGISTRY_USERNAME }}/${{ github.event.repository.name }}:latest,${{ secrets.REGISTRY_USERNAME }}/${{ github.event.repository.name }}:${{ github.sha }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
    ```
7.  **Deploy to VPS (via SSH or using a deployment tool):**
    *   This step will involve SSH-ing into the VPS and pulling the new image, or triggering a deployment script on the VPS.
    *   Secrets for `SSH_PRIVATE_KEY` and `VPS_IP` will be required.

### Local Build and Test (Optional)

You can test the production Docker image locally before deployment:

```bash
# Build the image
docker build -f Dockerfile.prod -t spacebar-marketing:latest .

# Run the container
docker run -p 3000:3000 --name spacebar-marketing-test spacebar-marketing:latest

# Access the app at http://localhost:3000
```

### Environment Variables for Docker

If your application requires environment variables, they can be passed during the `docker run` command or defined in a `.env` file mounted into the container. For production on a VPS, these will be managed by the deployment tool (Dokploy/Coolify) or systemd service.

---

## VPS Deployment (Dokploy/Coolify)

This section covers deploying to a VPS using a management tool like Dokploy or Coolify.

### VPS Setup

1.  **Choose a VPS Provider:** Examples include DigitalOcean, Linode, Vultr, Hetzner, or AWS Lightsail.
2.  **Provision a VPS:** A minimum of 2GB RAM and 2 vCPUs is recommended for a small to medium site. Choose a Linux distribution (Ubuntu or Debian are common choices).
3.  **Update System:**
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
4.  **Install Docker and Docker Compose:**
    ```bash
    # Install Docker
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER

    # Install Docker Compose
    sudo apt install docker-compose-plugin -y # Or use the standalone binary
    ```
    *Note: Log out and log back in for the `docker` group membership to take effect, or use `sudo` for subsequent Docker commands.*
5.  **Configure Firewall (UFW):**
    ```bash
    sudo ufw allow OpenSSH
    sudo ufw allow 80/tcp    # HTTP
    sudo ufw allow 443/tcp   # HTTPS
    sudo ufw enable
    ```
6.  **Set Up Domain Name:**
    *   Point your domain's A and AAAA records to your VPS's IP address.
    *   For HTTPS, you'll need to handle SSL certificates. Dokploy/Coolify can assist with this.

### VPS Hardening

1.  **Disable Password Authentication for SSH (Key-based only):**
    Edit `/etc/ssh/sshd_config`:
    ```
    PasswordAuthentication no
    PubkeyAuthentication yes
    ```
    Restart SSH: `sudo systemctl restart sshd`
2.  **Fail2Ban:** Install to ban IP addresses with too many failed login attempts.
    ```bash
    sudo apt install fail2ban -y
    # Configure /etc/fail2ban/jail.local (create if not exists)
    sudo systemctl enable fail2ban --now
    ```
3.  **Regular Updates:** Set up unattended upgrades.
    ```bash
    sudo apt install unattended-upgrades -y
    sudo dpkg-reconfigure -plow unattended-upgrades
    ```
4.  **Log Monitoring:** Use tools like `logwatch` or a centralized logging service.
5.  **Non-root User:** Ensure you are using a non-root user with `sudo` privileges for daily tasks.

### Deploying with Dokploy

[Dokploy](https://dokploy.com/) is a modern PaaS alternative.

1.  **Install Dokploy** on your VPS following their official documentation.
2.  **Connect GitHub Repository:** In the Dokploy dashboard, add your GitHub repository. Dokploy will typically trigger a deployment on push to `main`.
3.  **Configure Application:**
    *   **Dockerfile:** Point to `Dockerfile.prod`.
    *   **Build Context:** `.` (project root).
    *   **Port:** `3000`.
    *   **Environment Variables:** Add any required (e.g., `NODE_ENV=production`).
    *   **Resource Limits:** Set memory and CPU limits as needed.
4.  **Domain and SSL:** Add your domain and configure automatic SSL certificates using Let's Encrypt.
5.  **Deploy:** Trigger an initial deployment. Dokploy will build the image and run the container.

### Deploying with Coolify

[Coolify](https://coolify.io/) is another open-source alternative to Heroku.

1.  **Install Coolify** on your VPS following their official documentation.
2.  **Setup GitHub Integration:** Connect your GitHub account in Coolify.
3.  **Create New Application:** Select your repository.
4.  **Configure Build:**
    *   **Dockerfile:** `Dockerfile.prod`.
    *   **Install Command:** `bun install --frozen-lockfile`.
    *   **Build Command:** `bun run build`.
    *   **Start Command:** `node server.js` (or the command defined in your Dockerfile's CMD).
    *   **Port:** `3000`.
5.  **Environment Variables:** Define them in the Coolify UI.
6.  **Domain and SSL:** Add your domain and enable automatic SSL.
7.  **Deploy:** Coolify will build and deploy your application on push to the configured branch.

### Integrating Self-Hosted Tools (Plausible, Snyk, SonarQube)

Your VPS can host other tools. Here's how to approach it:

1.  **Docker Compose for Multi-Service Setup:**
    *   Create a `docker-compose.yml` file in your VPS home directory or a dedicated `/opt` directory.
    *   Define services for your Next.js app, Plausible, Snyk (if self-hosting their scanner, though Snyk SaaS is more common), SonarQube, etc.
    *   Use Docker networks for inter-service communication.
    *   Example snippet for `docker-compose.yml`:
        ```yaml
        version: '3.8'
        services:
          spacebar-marketing:
            build:
              context: /path/to/your/spacebar-marketing-app
              dockerfile: Dockerfile.prod
            ports:
              - "3000:3000"
            environment:
              - NODE_ENV=production
            networks:
              - app-network
            restart: unless-stopped

          plausible:
            image: plausible/analytics:latest # Check official Plausible image
            ports:
              - "8000:8000" # Plausible app
              - "9000:9000" # Clickhouse
            environment:
              # Add Plausible environment variables
            networks:
              - app-network
            volumes:
              - plausible_data:/bitnami/clickhouse
            restart: unless-stopped

          sonarqube:
            image: sonarqube:community
            ports:
              - "9001:9000"
            volumes:
              - sonarqube_data:/opt/sonarqube/data
            networks:
              - app-network
            restart: unless-stopped

        volumes:
          plausible_data:
          sonarqube_data:

        networks:
          app-network:
            driver: bridge
        ```
2.  **GitHub Actions Integration:**
    *   **Snyk/Code Analysis:** Run Snyk or SonarQube scans as part of your GitHub Actions workflow *before* deploying. Push results to the repository or use Snyk/SonarQube cloud APIs.
        *   Example SonarCloud setup in GitHub Actions:
            ```yaml
            - name: SonarCloud Scan
              uses: SonarSource/sonarcloud-github-action@master
              env:
                GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
            ```
    *   **Triggering Deploys:** Use GitHub Actions to SSH into your VPS and run `docker-compose -f /path/to/your/docker-compose.yml up -d --force-recreate` to update services.
3.  **Dokploy/Coolify for Additional Services:**
    *   You can also use Dokploy or Coolify to manage Plausible, SonarQube, etc., as separate applications alongside your Next.js app if you prefer their management interfaces over raw `docker-compose`.

---

## Legacy Deployment: Cloudflare Pages

*(This section is for historical reference. The project is now primarily deployed via Docker to a VPS.)*

### Prerequisites for Deployment

- A Cloudflare account.
- The project built successfully (`bun run build`).
- The `CF_PAGES_TOKEN` environment variable set up in your CI/CD environment (e.g., GitHub Secrets).

### GitHub Actions Workflow

A GitHub Actions workflow (typically located in `.github/workflows/pages.yml` or similar) was triggered on pushes to the `main` branch. This workflow handled:

1.  **Checking out the code.**
2.  **Installing dependencies** using Bun (`bun install`).
3.  **Building the project** (`bun run build`).
4.  **Deploying to Cloudflare Pages** using the `cloudflare-pages-action`.

### Local Build Verification

Before deploying, you could verify the build locally:

```bash
bun install
bun run build
```

The built application was in the `.next` directory.

### Triggering a Deployment

Deployments were automated:
- **Push to `main` branch:** Automatically triggered a deployment.
- **Manual deployment:** Could be triggered via the Cloudflare dashboard for specific commits.

### Post-Deployment

- Cloudflare Pages provided a URL (e.g., `spacebarlabs-pages.pages.dev`) where the live site was available.
- Custom domains could be configured in the Cloudflare Pages settings.

### Environment Variables

If the application required environment variables:
1.  They were added as secrets in the GitHub repository settings (`Settings` > `Secrets and variables` > `Actions`).
2.  Referenced in `next.config.ts` using `process.env.VARIABLE_NAME`.
3.  Also added to the Cloudflare Pages environment variables if needed at build time.

### Monitoring and Rollback

- **Cloudflare Analytics:** Site traffic and performance were monitored through the Cloudflare dashboard.
- **Rollback:** If a deployment failed or caused issues, a rollback to a previous deployment could be done directly from the Cloudflare Pages dashboard.

## Troubleshooting Deployments

- **Build Failures:** Check GitHub Actions logs for detailed error messages. Common issues include missing dependencies, TypeScript errors, or environment variable mismatches.
- **404 Errors on Pages:** Ensure `next.config.ts` is correctly configured for dynamic routes if used.
- **Caching Issues:** If changes don't appear, try a hard refresh or clearing the browser cache. Hosting platforms also have their own caching which can be managed via their dashboards.
- **Docker Image Build Issues:** Check the Docker build logs. Ensure `next.config.ts` has `output: 'standalone'` for the production Dockerfile to work correctly.
    ```typescript
    // next.config.ts
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'standalone',
    };
    export default nextConfig;
    ```

## Security Considerations for Deployment

- **Environment Variables:** Never commit sensitive information to Git. Use repository secrets, environment variable management provided by the hosting platform, or secrets management tools on the VPS.
- **Dependencies:** Regularly update dependencies to patch security vulnerabilities. Use `bun audit` locally and integrate security scanning into CI/CD (e.g., Snyk, GitHub Dependabot).
- **HTTPS:** Essential for production. VPS deployments with Nginx reverse proxy (often handled by Dokploy/Coolify) or Cloudflare Pages provide HTTPS.
- **Container Security:** Scan Docker images for vulnerabilities (e.g., Trivy, Snyk Container). Run containers as non-root users (as implemented in `Dockerfile.prod`).
- **VPS Security:** Follow hardening practices (firewall, fail2ban, regular updates, non-root users).
