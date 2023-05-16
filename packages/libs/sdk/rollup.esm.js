import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const path = require('path');
const rootDir = path.resolve(__dirname);

const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const EXTERNALS = ['cross-fetch', 'graphql'];

export default {
  input: toAbsoluteDir('./src/index.ts'),
  output: [
    {
      file: 'dist/packages/libs/sdk/src/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.esm.json'),
      declaration: false,
    }),
    nodeResolve({ include: ['node_modules/**'], skip: EXTERNALS }),
    copy({
      targets: [
        {
          src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
          dest: 'dist/packages/libs/sdk',
        },
      ],
    }),
  ],
  external: EXTERNALS,
};
