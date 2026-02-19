# Deploy Next.js to Cloudflare Workers (OpenNext + Bun)

This guide outlines how to deploy the Spacebar project to Cloudflare Workers using OpenNext and Bun via GitHub Actions.

## Prerequisites

1.  **Cloudflare Account**: You need a Cloudflare account.
2.  **API Token**:
    -   Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens).
    -   Create a token with `Edit Cloudflare Workers` template.
    -   Save this as a GitHub Secret: `CLOUDFLARE_API_TOKEN`.
3.  **Account ID**:
    -   Found on the right side of your Cloudflare Dashboard overview.
    -   Save as GitHub Secret: `CLOUDFLARE_ACCOUNT_ID`.

## 1. Install OpenNext Adapter

Install the OpenNext Cloudflare adapter in your project.

```bash
bun add @opennextjs/cloudflare
```

## 2. Configuration Files

### `open-next.config.ts` (Create in root)
This configures how OpenNext builds your application.

```typescript
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    placement: "smart", // Optimizes placement based on request
  },
};

export default config;
```

### `wrangler.toml` (Create in root)
This configures the Cloudflare Worker.

```toml
name = "spacebar-next"
main = ".worker-next/index.mjs"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".worker-next/assets"
binding = "ASSETS"
```

### `.gitignore`
Add the build output directory to gitignore.

```text
.worker-next
.open-next
```

## 3. Scripts

Add a build script to `package.json` if you want to test locally:

```json
"scripts": {
  "build:worker": "npx opennextjs-cloudflare",
  ...
}
```

## 4. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`. This uses Bun to install dependencies and deploy.

```yaml
name: Deploy Next.js to Cloudflare
on:
  push:
    branches: [cloudflare-deploy] # Trigger on this branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install Dependencies
        run: bun install

      - name: Build Worker
        run: npx opennextjs-cloudflare
        env:
          NEXT_PUBLIC_CLOUDFLARE_DEPLOY: true

      - name: Deploy to Cloudflare
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy

## Immediate Next Steps to Deploy

1.  **Install Adapter**: Run this in your terminal now:
    ```bash
    bun add -D @opennextjs/cloudflare
    ```
2.  **Commit & Push**:
    ```bash
    git add .
    git commit -m "chore: configure cloudflare deployment"
    git push origin cloudflare-deploy
    ```
3.  **Set Secrets**: Go to your GitHub Repo -> Settings -> Secrets and Variables -> Actions -> New Repository Secret.
    -   `CLOUDFLARE_API_TOKEN`: Create one with "Edit Cloudflare Workers" permissions.
    -   `CLOUDFLARE_ACCOUNT_ID`: Get from your Cloudflare dashboard overview.

Once you push, check the "Actions" tab in GitHub to see the deployment!
```

## 5. Deployment & Secrets Setup (Crucial)

### A. Get Cloudflare Credentials
1.  **Account ID**:
    -   Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
    -   Click on your account name / Home.
    -   In the URL bar, the ID is the alphanumeric string after `dash.cloudflare.com/` (e.g., `dash.cloudflare.com/abc123xyz...`).
    -   **Alternatively**: Go to "Workers & Pages" -> Overview. The Account ID is listed in the right sidebar.
2.  **API Token**:
    -   Go to **[My Profile > API Tokens](https://dash.cloudflare.com/profile/api-tokens)**.
    -   Click **Create Token**.
    -   Use the **Edit Cloudflare Workers** template.
    -   **Permissions**: Ensure it has `Workers Scripts: Edit`, `Account Settings: Read`, etc. (The template handles this).
    -   **Account Resources**: Select "Include" -> "All accounts" (or your specific account).
    -   Click **Continue to Summary** -> **Create Token**.
    -   **Copy this token immediately** (it won't be shown again).

### B. Add to GitHub Secrets
1.  Go to your GitHub Repository.
2.  Click **Settings** (top tab).
3.  On the left sidebar, click **Secrets and variables** -> **Actions**.
4.  Under **Repository secrets** (NOT Environment secrets), click **New repository secret**.
5.  Add:
    -   Name: `CLOUDFLARE_ACCOUNT_ID` -> Value: (Your Account ID from Step A)
    -   Name: `CLOUDFLARE_API_TOKEN` -> Value: (Your API Token from Step A)

---

## 6. Alternative: Cloudflare Pages (Dashboard Git Integration)

If you prefer to "Click to Deploy" from the Cloudflare Dashboard instead of using GitHub Actions:

_**Note**: This method uses Cloudflare Pages. OpenNext Config might need adjustment, or you can use the official `@cloudflare/next-on-pages` adapter._

1.  **Cloudflare Dashboard**:
    -   Go to **Workers & Pages** -> **Create Application**.
    -   Tab: **Pages** -> **Connect to Git**.
    -   Select your **GitHub Repository** (`spacebar-spec`) and Branch (`cloudflare-deploy`).
2.  **Build Configuration**:
    -   **Framework Preset**: Select `Next.js`.
    -   **Build Command**: `npx opennextjs-cloudflare` (if using OpenNext) OR `npx @cloudflare/next-on-pages` (if using official adapter).
    -   **Output Directory**: `.worker-next/assets` (for OpenNext) or `.vercel/output/static` (for official).
3.  **Deploy**.

**Why utilize the GitHub Action (Worker) method?**
-   We configured `wrangler.toml` specifically for a Worker deployment.
-   It ensures we assume the exact version of Bun and OpenNext we want.
-   Workers often have faster cold starts than Pages functions in some contexts.

**Recommendation**: Proceed with the **GitHub Action** method (Steps 1-5) as it is fully configured.
