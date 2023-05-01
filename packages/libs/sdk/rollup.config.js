import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const path = require('path');
const rootDir = path.resolve(__dirname);
const externalDeps = Array.from(new Set(Object.keys(pkg.dependencies ?? {})));
console.log(externalDeps);

const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

export default {
  input: toAbsoluteDir('./src/index.ts'),
  output: [
    {
      file: 'dist/packages/libs/sdk/src/index.esm.js',
      format: 'esm',
      exports: 'named',
      //sourceMaps: true,
      //sourcemapExcludeSources: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.lib.json'),
      declaration: false,
    }),
    nodeResolve({ includeModules: true }),
    commonjs({
      include: 'node_modules/**',
    }),
    copy({
      targets: [
        {
          src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
          dest: 'dist/packages/libs/sdk',
        },
      ],
    }),
  ],
};
