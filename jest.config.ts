import type { Config } from 'jest';

const config: Config = {
  // Use ts-jest preset configured for ESM to properly handle TypeScript modules
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    // Enable ts-jest to compile TypeScript to ESM during tests
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tests/tsconfig.json',
        useESM: true,
      },
    ],
  },
};

export default config;
