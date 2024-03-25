const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'test-results/test-output-[hash].xml',
  },
  chromeWebSecurity: true,
  projectId: 'mvfhih',
  defaultCommandTimeout: 300000,
  pageLoadTimeout: 120000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.google.com/',
    excludeSpecPattern: ['*.js', '*.md'],
    specPattern: 'cypress/integration/**/*.feature',
  },
})
