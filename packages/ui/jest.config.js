const { defaults } = require('jest-config')

module.exports = {
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', ...defaults.moduleFileExtensions],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress/']
}
