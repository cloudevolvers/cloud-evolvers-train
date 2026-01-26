# 🚀 Staging Environment Deployment Guide

This guide covers the deployment process for the Cloud Evolvers Training Platform with Azure Static Web Apps Standard tier and staging environments.

## 🏗️ Infrastructure Overview

### Architecture
- **Standard Tier**: Azure Static Web Apps Standard tier with managed identity support
- **Key Vault Integration**: Secure secrets management with RBAC access
- **Multi-Environment Setup**: Development, Staging, DTA, and Production environments
- **Staging Environments**: Full staging support for testing features before production

### Resource Structure
```
Azure Resources:
├── Resource Groups
│   ├── xevolve-dta-rg (DTA environment)
│   ├── xevolve-staging-rg (Staging environment)
│   └── xevolve-prod-rg (Production environment)
│
├── Static Web Apps (Standard Tier)
│   ├── cloudevolvers-dta-website-swa
│   ├── cloudevolvers-staging-website-swa
│   └── cloudevolvers-prod-website-swa
│
└── Key Vault
    └── xevolve-shared-kv (Shared across environments)
```

## 🔧 Environment Configuration

### Environment Variables by Stage

| Variable | Development | Staging | Production |
|----------|-------------|---------|------------|
| `VITE_APP_ENV` | development | staging | production |
| `VITE_SHOW_CONSTRUCTION_BANNER` | true | false | false |
| `VITE_BLOG_UNDER_CONSTRUCTION` | true | true | true |
| `VITE_DEBUG` | true | false | false |

### Blog Construction Banner
The blog section displays a construction banner in all environments until the blog is fully implemented. This allows safe deployment while maintaining user experience.

## 🎯 Deployment Workflows

### 1. Local Development
```bash
# Start development server
npm run dev

# Test with staging environment
npm run dev:staging

# Build for development
npm run build:dev
```

### 2. Staging Deployment
```bash
# Run staging tests
./scripts/test-staging.sh

# Deploy to staging
./scripts/deploy-staging.sh

# Or use npm script
npm run swa:deploy:staging
```

### 3. Production Deployment
```bash
# Deploy to production (with confirmation)
./scripts/deploy-production.sh

# Or manual deployment
npm run swa:deploy
```

## 🧪 Testing Strategy

### Automated Testing
Run the comprehensive staging test suite:
```bash
./scripts/test-staging.sh
```

This tests:
- ✅ Environment variable configuration
- ✅ Build process for staging
- ✅ Blog construction banner display
- ✅ Server startup and accessibility

### Manual Testing Checklist
After deploying to staging, verify:

- [ ] Main site loads correctly
- [ ] Navigation works properly
- [ ] Blog page shows construction banner
- [ ] Construction banner displays appropriate message
- [ ] Theme and branding are correct
- [ ] Performance is acceptable
- [ ] No console errors

## 🔐 Azure Key Vault Setup

### Managed Identity Configuration
The Standard tier Static Web Apps have managed identity enabled, providing secure access to Azure Key Vault:

1. **System-Assigned Managed Identity**: Automatically created with the Static Web App
2. **Key Vault Access**: RBAC roles assigned for secure secret retrieval
3. **Role Assignments**:
   - Key Vault Secrets User (read secrets)
   - Reader (list operations)

### Key Vault Secrets
Store sensitive configuration in Azure Key Vault:
```
Secrets:
├── database-connection-string
├── api-keys
├── external-service-tokens
└── ssl-certificates
```

## 📋 Deployment Commands Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server |
| `npm run dev:staging` | Start local server with staging config |
| `npm run build:staging` | Build for staging environment |
| `npm run swa:start` | Start local SWA CLI server |
| `npm run swa:deploy:staging` | Deploy to staging environment |
| `./scripts/test-staging.sh` | Run staging environment tests |
| `./scripts/deploy-staging.sh` | Full staging deployment script |
| `./scripts/deploy-production.sh` | Full production deployment script |

## 🚨 Important Notes

### Blog Section Status
- **Current State**: Under construction in all environments
- **Construction Banner**: Displays appropriate messaging per environment
- **Safe Deployment**: Application can be deployed while blog is under development
- **Future**: Banner will be removed when blog is fully implemented

### Staging Environment Benefits
- **Feature Testing**: Test new features before production
- **Performance Validation**: Verify performance under staging conditions  
- **Integration Testing**: Test third-party service integrations
- **User Acceptance**: Stakeholder review and approval

### Security Considerations
- All sensitive data stored in Azure Key Vault
- Managed identity used for secure resource access
- Environment-specific configurations prevent data leakage
- RBAC permissions follow least-privilege principle

## 🎉 Next Steps

1. **Infrastructure Deployment**: Run `./scripts/deploy-infrastructure.sh` to set up Azure resources
2. **Staging Testing**: Deploy to staging and run comprehensive tests
3. **Production Readiness**: When satisfied with staging, deploy to production
4. **Blog Implementation**: Complete blog features and remove construction banner

---

*For technical issues or questions, refer to the main README.md or contact the development team.*
