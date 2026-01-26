module.exports = {
  default: {
    // Feature files location
    paths: ['cucumber/features/'],
    
    // Step definitions
    require: [
      'cucumber/step-definitions/**/*.cjs'
    ],
    
    // Output formats
    format: [
      'summary',
      'progress-bar',
      'json:cucumber/reports/cucumber-report.json',
      'html:cucumber/reports/cucumber-report.html'
    ],
    
    // Format options
    formatOptions: {
      snippetInterface: 'async-await'
    },
    
    // Test execution options
    publishQuiet: true,
    parallel: 1,
    forceExit: true,
    
    // Timeout settings
    timeout: 30000
  }
};
