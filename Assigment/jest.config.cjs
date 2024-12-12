module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', 
  ],
  testMatch: ['<rootDir>/test/**/*.test.js'], 
  moduleDirectories: ['node_modules', 'src'], 
};
