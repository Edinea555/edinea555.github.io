const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/**/*.cy.js',
    supportFile: false
  },
  video: false
});