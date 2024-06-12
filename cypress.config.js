const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: false,
    specPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}'
  },
});
