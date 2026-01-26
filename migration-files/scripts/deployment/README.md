# Deployment Scripts

This directory contains scripts used for Azure deployment and related operations.

## Active Scripts (Used by GitHub Actions)

### `configure-env-vars.sh`
Configures environment variables for Azure Web Apps by comparing the local .env file with Azure app settings and updating them accordingly.

**Usage:** `./configure-env-vars.sh <app-name> <env-file> <resource-group> <subscription-id>`

### `create-deployment-package.sh`
Creates a deployment ZIP package containing the built application, excluding development files and unnecessary directories.

**Features:**
- Excludes development/test files
- Includes essential files: app.js, package.json, .next, node_modules
- Optimized for Azure Linux App Service

### `test-app-startup.sh`
Validates that the application is correctly configured for deployment by checking:
- app.js exists
- package.json has correct start script and main field
- ES modules configuration is correct

### `verify-build-directories.sh`
Verifies that required build directories (.next, node_modules) exist after the build process.

### `verify-deployment-package.sh`
Verifies that the deployment package contains all essential files and directories before deployment.

## Legacy Scripts (For Reference)

### `azure-deploy.sh`
Legacy Azure deployment script - replaced by GitHub Actions workflow.

### `deploy.sh`
Legacy deployment script - replaced by GitHub Actions workflow.

## Usage in GitHub Actions

These scripts are automatically called by the `build-deploy-template.yml` workflow:

1. **Build Phase:** `test-app-startup.sh`, `verify-build-directories.sh`
2. **Package Phase:** `create-deployment-package.sh`, `verify-deployment-package.sh`
3. **Deploy Phase:** `configure-env-vars.sh`

## Configuration

All scripts are designed to work with:
- **Node.js 22**
- **Azure Linux App Service**
- **ES Modules** (app.js with type: "module")
- **Next.js 15** with custom Express server

## Error Handling

Scripts include comprehensive error handling and will:
- Continue on non-critical errors
- Provide detailed logging for debugging
- Exit with appropriate error codes for CI/CD integration
