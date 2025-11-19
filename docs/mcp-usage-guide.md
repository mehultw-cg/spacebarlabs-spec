# Shadcn MCP Implementation Guide

## MCP Core Concepts
- **Registry Types**:
  - `@shadcn` (official)
  - `@acme` (custom example)
  - `@private` (internal registries)
- **Registry Structure**:
  ```json
  {
    "name": "@shadcn",
    "url": "https://ui.shadcn.com/registry.json",
    "auth": "ENV:SHADCN_TOKEN",
    "components": ["button", "card"]
  }
  ```

## MCP Server Setup
### 1. Initialize MCP Configuration
```bash
# npm
npx shadcn@latest mcp init --client claude --protocol v3

# bun
bunx shadcn@latest mcp init --client claude --protocol v3
```

### 2. Start MCP Server
```bash
# npm
npx shadcn@latest mcp --port 3001 --log-level debug

# bun 
bunx shadcn@latest mcp --port 3001 --log-level debug
```

### 3. Verify Connection
```bash
# npm
npx shadcn@latest mcp ping

# bun
bunx shadcn@latest mcp ping
# Expected response: {"status":"ok","version":"3.2.1"}
```

## Registry Management
### Add Custom Registry
```bash
# npm
npx shadcn@latest registry add @acme https://registry.acme.com \
  --auth-header "Authorization: Bearer ${ACME_TOKEN}" \
  --priority 50

# bun  
bunx shadcn@latest registry add @acme https://registry.acme.com \
  --auth-header "Authorization: Bearer ${ACME_TOKEN}" \
  --priority 50
```

### List Configured Registries
```bash
# npm
npx shadcn@latest registry list

# bun
bunx shadcn@latest registry list
```

### Search Across Registries
```bash
# npm
npx shadcn@latest mcp search --registries @shadcn,@acme --query "auth form"

# bun
bunx shadcn@latest mcp search --registries @shadcn,@acme --query "auth form"
```

## MCP Tool Integration
### AI Assistant Schema
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx", // For bun use: "bunx"
      "args": ["shadcn@latest", "mcp"],
      "capabilities": {
        "componentDiscovery": true,
        "specValidation": true,
        "registryOps": true
      }
    }
  }
}
```

## Common MCP Operations
```bash
# Get component metadata
# npm
npx shadcn@latest mcp get @shadcn/button --json
# bun
bunx shadcn@latest mcp get @shadcn/button --json

# Validate component spec  
# npm
npx shadcn@latest mcp validate @acme/custom-card
# bun
bunx shadcn@latest mcp validate @acme/custom-card

# Diff registry versions
# npm
npx shadcn@latest mcp diff @shadcn/button@1.2.0 @shadcn/button@1.3.0
# bun
bunx shadcn@latest mcp diff @shadcn/button@1.2.0 @shadcn/button@1.3.0
```

## Registry Security
### JWT Authentication Flow
```bash
# Generate MCP token
# npm
npx shadcn@latest mcp auth generate \
  --role "admin" \
  --expires "1d" \
  --registries "@shadcn,@acme"

# bun  
bunx shadcn@latest mcp auth generate \
  --role "admin" \
  --expires "1d" \
  --registries "@shadcn,@acme"

# Verify token
# npm
npx shadcn@latest mcp auth verify ${TOKEN}
# bun
bunx shadcn@latest mcp auth verify ${TOKEN}
```

## Troubleshooting
```bash
# Audit MCP dependencies
# npm
npx shadcn@latest mcp audit --depth 2
# bun
bunx shadcn@latest mcp audit --depth 2

# Repair registry links
# npm
npx shadcn@latest mcp repair --registry @shadcn
# bun
bunx shadcn@latest mcp repair --registry @shadcn

# Generate MCP debug report
# npm
npx shadcn@latest mcp debug --output mcp-report.json
# bun
bunx shadcn@latest mcp debug --output mcp-report.json
```

## MCP CI/CD Pipeline
```yaml
# .github/workflows/mcp-sync.yml
jobs:
  sync:
    steps:
      - run: npx shadcn@latest mcp sync # For bun: bunx shadcn@latest mcp sync
