# Application Warmup Documentation

## Overview

The xEvolve Website includes comprehensive warmup functionality to reduce cold start times and ensure optimal performance after deployment. This system includes both automated deployment warmup and manual testing capabilities.

## Components

### 1. Warmup API Endpoint (`/api/warmup`)

A dedicated endpoint that performs several initialization tasks:

- **Module Loading**: Ensures Node.js modules and dependencies are loaded
- **Cache Initialization**: Prepares any caching mechanisms
- **Static Data Loading**: Pre-loads configuration files like `services.json`
- **Filesystem Testing**: Verifies file system access and Next.js environment
- **Middleware Initialization**: Initializes global state and middleware

**Response Format:**
```json
{
  "status": "warmed-up",
  "timestamp": "2025-06-17T12:00:00.000Z",
  "service": "xEvolve Website API",
  "uptime": 1.234,
  "warmupDuration": "150ms",
  "tasks": [
    {
      "task": 1,
      "status": "fulfilled",
      "value": "modules-loaded"
    }
  ],
  "nodeVersion": "v22.0.0",
  "platform": "linux",
  "memory": {
    "used": 45,
    "total": 128
  }
}
```

### 2. Health Check Endpoint (`/api/health`)

A simpler endpoint for basic health checks:

```json
{
  "status": "ok",
  "timestamp": "2025-06-17T12:00:00.000Z",
  "service": "xEvolve Website API",
  "uptime": 1.234
}
```

### 3. Automated Deployment Warmup

The GitHub Actions deployment workflow automatically performs warmup after deployment using the dedicated script `.github/scripts/warmup-application.sh`:

1. **Wait Period**: 30-second settling time after deployment
2. **Multi-tier Warmup**: Tests multiple endpoints in order of preference:
   - `/api/warmup` (primary)
   - `/api/health` (fallback)
   - `/` (final fallback)
3. **Retry Logic**: Up to 5 attempts with 20-second intervals
4. **Detailed Logging**: Comprehensive output including warmup duration, task results, and diagnostic information
5. **Failure Handling**: Provides troubleshooting guidance and diagnostic commands

### 4. Manual Testing Scripts

#### GitHub Deployment Script (`.github/scripts/warmup-application.sh`)

The main warmup script used in deployments. Can also be used manually for testing deployed applications:

```bash
# Basic usage (requires Azure CLI authentication)
.github/scripts/warmup-application.sh <app-name> <resource-group>

# With optional parameters
.github/scripts/warmup-application.sh <app-name> <resource-group> <subscription-id> <max-retries> <initial-wait>

# Example
.github/scripts/warmup-application.sh "xevolve-dta-website" "xevolve-dta-rg" "4a55c776-9f6b-4966-921e-c9f60e50652f" 5 30
```

#### Local Testing Script (`scripts/warmup-test.sh`)

Simplified script for local development testing:

```bash
# Test local development server
./scripts/warmup-test.sh

# Test specific URL
./scripts/warmup-test.sh https://your-app.azurewebsites.net

# Test with custom timeout and retries
./scripts/warmup-test.sh https://your-app.azurewebsites.net 90 5
```

**Script Parameters:**
- **GitHub Script**: `<app-name> <resource-group> [subscription-id] [max-retries] [initial-wait]`
- **Local Script**: `[url] [timeout] [max-retries]`

## Benefits

### For Development
- **Faster Testing**: Reduces wait time when testing after deployment
- **Consistent Performance**: Ensures consistent response times across requests
- **Early Issue Detection**: Identifies startup problems before users encounter them

### For Production
- **Improved User Experience**: First-time visitors get fast response times
- **Better Performance Metrics**: Reduced average response times
- **Deployment Validation**: Confirms application is ready to serve traffic

### For Monitoring
- **Health Verification**: Confirms all components are functioning
- **Performance Baselines**: Provides warmup duration metrics
- **System Information**: Reports memory usage and system details

## Configuration

### Environment Variables
No additional environment variables are required. The warmup system adapts to the current environment automatically.

### Customization
To customize warmup tasks, edit `/src/app/api/warmup/route.ts` and modify the `warmupTasks` array.

### Deployment Integration
The warmup is automatically integrated into the deployment workflow using `.github/scripts/warmup-application.sh`. To modify the warmup behavior during deployment, edit either:
- The script itself: `.github/scripts/warmup-application.sh`
- The workflow step: "Warmup Application" in `.github/workflows/build-deploy-template.yml`

## Troubleshooting

### Common Issues

1. **Warmup Timeout**: Increase timeout values in the deployment workflow
2. **Memory Issues**: Monitor memory usage in warmup response
3. **File Access Errors**: Check file permissions and paths

### Debugging

1. **Check Warmup Response**: Visit `/api/warmup` directly to see detailed status
2. **Review Deployment Logs**: Check GitHub Actions logs for warmup output from `.github/scripts/warmup-application.sh`
3. **Use Test Scripts**: 
   - Run `scripts/warmup-test.sh` for local testing
   - Run `.github/scripts/warmup-application.sh` for deployed app testing (requires Azure CLI)
4. **Azure Diagnostics**: The GitHub script provides Azure CLI commands for troubleshooting

### Monitoring

- Monitor warmup duration trends over time
- Track success/failure rates in deployment logs
- Watch for memory usage patterns in warmup responses

## Best Practices

1. **Regular Testing**: Test warmup functionality with each deployment
2. **Monitor Performance**: Track warmup duration to identify degradation
3. **Update Tasks**: Add new warmup tasks when adding heavy initialization code
4. **Graceful Degradation**: Warmup failures don't prevent deployment completion
5. **Documentation**: Update this documentation when modifying warmup behavior
