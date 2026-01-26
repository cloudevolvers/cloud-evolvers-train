# Cucumber BDD Tests

This folder contains all the Cucumber BDD (Behavior-Driven Development) tests for the xEvolve website Dutch localization system.

## Structure

```
cucumber/
├── features/                 # Feature files (Gherkin scenarios)
├── step-definitions/         # Step definition implementations
├── support/                  # Test support utilities (server runner, etc.)
├── reports/                  # Generated test reports (gitignored)
├── cucumber.config.cjs       # Cucumber configuration
└── run-tests.cjs            # Test runner script
```

## Running Tests

```bash
# From the project root
node cucumber/run-tests.cjs

# Or with npm script (if added to package.json)
npm run test:cucumber
```

## Test Coverage

The test suite covers:

- **API Language Support**: Dutch/English API endpoint testing
- **Dutch Blog System**: Intelligent slug detection and routing
- **Dutch Training System**: Course content validation
- **Translation System**: Hydration-free language switching

## Features

- ✅ **21 test scenarios** covering complete Dutch localization
- ✅ **140 test steps** with comprehensive validation
- ✅ **Automated server management** on port 4111
- ✅ **Dynamic port detection** and environment configuration
- ✅ **Graceful shutdown** handling

## Reports

Test reports are generated in the `reports/` folder:
- `cucumber-report.html` - Interactive HTML report
- `cucumber-report.json` - JSON data for CI/CD integration
