module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  testMatch: ['<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/styleMock.js'
  }
}
