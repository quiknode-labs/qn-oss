/* eslint-disable */
export default {
  displayName: 'libs-api-icy-graphql-client',
  preset: '../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/packages/libs/api/icy-graphql-client',
  setupFiles: ['./testSetup/jestSetup.ts'],
};
