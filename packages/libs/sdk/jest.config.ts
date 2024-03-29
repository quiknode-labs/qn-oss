/* eslint-disable */
export default {
  displayName: 'libs-sdk',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', '<rootDir>/tsconfig.spec.json'],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  setupFiles: ['./spec/testSetup/jestSetup.ts'],
  setupFilesAfterEnv: ['./spec/testSetup/jestSetupAfterEnv.ts'],
  testEnvironment: 'node',
  slowTestThreshold: 15,
  coveragePathIgnorePatterns: [
    './spec/testSetup',
    './src/lib/helpers/globalFetch.ts',
  ],
};
