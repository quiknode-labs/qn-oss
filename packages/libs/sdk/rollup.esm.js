import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const path = require('path');
const rootDir = path.resolve(__dirname);

const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const EXTERNALS = ['cross-fetch', 'graphql'];

export default {
  input: toAbsoluteDir('./src/index.ts'),
  output: {
    file: 'dist/packages/libs/sdk/src/index.esm.js',
    format: 'esm',
    sourcemap: 'inline',
    sourcemapExcludeSources: true,
  },
  plugins: [
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.esm.json'),
      declaration: false,
      sourceMap: false, // Conflicts with rollup sourcemap option
      inlineSources: true,
    }),
    copy({
      targets: [
        {
          src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
          dest: 'dist/packages/libs/sdk',
        },
      ],
    }),
    terser(), // Minify
  ],
  external: EXTERNALS,
};
