/* eslint-disable */
export default {
  displayName: 'libs-sdk',
  preset: '../../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/packages/libs/sdk',
  setupFiles: ['./spec/testSetup/jestSetup.ts'],
  testTimeout: 30000,
};
