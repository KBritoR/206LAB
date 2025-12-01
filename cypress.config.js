
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/mochareports',
      overwrite: false,
      html: false, 
      json: true, 
      reportPageTitle: 'Relatório de Testes de UI - Prova', 
    },
  },
});