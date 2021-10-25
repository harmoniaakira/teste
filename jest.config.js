module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx}',
    '<rootDir>/src/containers/**/*.{js,jsx}',
    '<rootDir>/src/App.js',
    '!<rootDir>/src/containers/ThemeProviderContainer/*',
    '!<rootDir>/src/containers/Main/*',
    '!<rootDir>/src/containers/Geo/*',
    '!<rootDir>/src/**/*.styles.js'
  ],
  modulePathIgnorePatterns: [
    '__snapshots__',
  ],
  moduleDirectories: ["node_modules", "src"],
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/src/__mocks__/svgrMock.js",
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testRegex: ['.test.js'],
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
};
