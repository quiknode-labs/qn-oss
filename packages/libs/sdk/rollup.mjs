import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import externals from 'rollup-plugin-node-externals';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import path from 'path';
import { URL } from 'url';

// esm patch for __dirname
const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const bundle = (config) => ({
  input: toAbsoluteDir('./src/index.ts'),
  ...config,
});

// The shared rollup plugins for esm and cjs bundles
const sharedPlugins = [
  externals(), // Exclude node_modules from bundle
  json({ compact: true }),
  typescript({
    tsconfig: toAbsoluteDir('tsconfig.lib.json'),
  }),
];

export default [
  bundle({
    output: {
      file: 'dist/packages/libs/sdk/esm/index.js',
      format: 'esm',
    },
    plugins: [...sharedPlugins],
  }),
  bundle({
    output: {
      file: 'dist/packages/libs/sdk/cjs/index.js',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      ...sharedPlugins,
      copy({
        targets: [
          {
            src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
            dest: 'dist/packages/libs/sdk/',
          },
        ],
      }),
    ],
  }),
  bundle({
    plugins: [
      dts({
        input: toAbsoluteDir('./src/index.ts'),
      }),
    ], // Rollup the .d.ts files
    output: {
      file: 'dist/packages/libs/sdk/index.d.ts',
      format: 'es',
    },
  }),
];
