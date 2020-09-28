const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: ['./config/jest.setup.js'],
  testMatch: ['**/*.spec.js'],
  transform: {
    '^.+\\.(jsx?|tsx?)$': './config/jest.transform.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules'],
  testPathIgnorePatterns: ['\\node_modules\\', 'config'],
  moduleNameMapper: {
    '.+\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
};
