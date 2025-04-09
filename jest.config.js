/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset
  testEnvironment: 'node',
  moduleNameMapper: {
    // Handle module aliases (if you have them in tsconfig.json)
    // Example: '^@/(.*)$': '<rootDir>/src/$1'

    // Force module resolution for ESM
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // Use ts-jest for .ts files with ESM support
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json', // Ensure it points to your TS config
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES Modules
  testMatch: [ // Where to look for tests
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  // Optional: Setup files to run before tests
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Optional: Collect coverage
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // coverageProvider: 'v8', // or 'babel'
};
