# Aurorys Labs VPS Deployment Guide

This guide walks you through deploying the `aurorys-labs` Next.js application to a standard Ubuntu/Debian VPS using Docker and CI/C.

## 1. Prerequisites on VPS
Ensure your VPS has Docker and Docker Compose installed:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## 2. Environment Variables
You must configure these variables in your Coolify service dashboard. Go to your **Service** -> **Environment Variables**.

```env
# SECURITY
TURNSTILE_SECRET_KEY=your_cloudflare_turnstile_secret_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key

# EMAIL SYSTEM (Resend)
RESEND_API_KEY=re_your_resend_api_key
```
> [!IMPORTANT]
> To ensure emails send properly, `auroryslabs.com` MUST be verified in your Resend Dashboard via DNS records. Otherwise, Resend will silently drop outbound emails.

## 3. Server Architecture
We use Next.js `standalone` mode to minimize image size and maximize performance.
- `next.config.ts` uses `output: "standalone"`.
- The `Dockerfile` uses `oven/bun` for ultra-fast builds and runs the final server natively on Bun.

## 4. Automation Workflow (GitHub + Coolify + Cloudflare)

The heavy lifting (building) is done on GitHub to save your VPS resources.

### Step A: GitHub Actions
Every time you push to `feature/vps-deployment` (or your main branch), GitHub will:
1. Build the Docker image.
2. Push it to the GitHub Container Registry (`ghcr.io`).

### Step B: Coolify Configuration
1. In Coolify, add a new **Docker Image** resource.
2. Image name: `ghcr.io/YOUR_GITHUB_USERNAME/spacebarlabs-spec:latest`
3. Map internal port `3000` to your domain.

### Step C: Auto-Deployment (Webhooks)
To make deployments completely hands-off:
1. In Coolify, go to your Profile **Settings** -> **API Tokens** and create a token.
2. In your Coolify service, go to **Settings** -> **Webhooks** and copy the **Deploy Webhook URL**.
3. In GitHub Secrets, add:
   - `COOLIFY_WEBHOOK_URL`
   - `COOLIFY_API_TOKEN`

### Step D: Cloudflare Cache Purge
The pipeline is configured to wait 60 seconds after the build to allow Coolify time to restart, then it purges the Cloudflare edge cache automatically.
1. In GitHub Secrets, add:
   - `CLOUDFLARE_ZONE_ID`
   - `CLOUDFLARE_API_TOKEN` (Permission: Zone: Cache Purge)

---

## 5. Security Protocols
The contact API (`src/app/api/send/route.ts`) is hardened:
1. **Turnstile:** Validates captcha tokens server-side.
2. **CORS:** Only allows requests from `https://auroryslabs.com`.
3. **Rate Limiting:** Maximum 10 requests per minute per IP.
4. **React Email:** Pre-compiled HTML rendering to ensure delivery reliability.

---
*© 2026 Aurorys Labs. Secure Protocol Initiated.*
