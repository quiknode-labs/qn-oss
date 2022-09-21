/* eslint-disable */
export default {
  displayName: 'libs-api-sdk',
  preset: '../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/packages/libs/api/sdk',
  setupFiles: ['./testSetup/jestSetup.ts'],
};
