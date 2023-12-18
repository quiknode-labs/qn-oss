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
const buildRootDir = 'dist/packages/libs/sdk';

const bundle = (config) => ({
  input: toAbsoluteDir('./src/index.ts'),
  ...config,
});

// The shared rollup plugins for esm and cjs bundles
const sharedPlugins = [
  externals(), // Exclude node_modules from bundle
  json({ compact: true }),
];

export default [
  bundle({
    preserveModules: true,
    output: {
      dir: `${buildRootDir}/esm`,
      format: 'esm',
    },
    plugins: [
      ...sharedPlugins,
      typescript({
        tsconfig: toAbsoluteDir('tsconfig.lib.json'),
        outDir: `${buildRootDir}/esm`,
      }),
    ],
  }),
  bundle({
    output: {
      file: `${buildRootDir}/cjs/index.js`,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      ...sharedPlugins,
      typescript({
        tsconfig: toAbsoluteDir('tsconfig.lib.json'),
      }),
      copy({
        targets: [
          {
            src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
            dest: `${buildRootDir}/`,
          },
        ],
      }),
    ],
  }),
  bundle({
    input: toAbsoluteDir('./src/index.ts'),
    plugins: [dts()], // Rollup the .d.ts files
    output: {
      file: `${buildRootDir}/index.d.ts`,
      format: 'es',
    },
  }),
  bundle({
    input: toAbsoluteDir('./src/core/index.ts'),
    plugins: [dts()], // Rollup the .d.ts files
    output: {
      file: `${buildRootDir}/esm/core/index.d.ts`,
      format: 'es',
    },
  }),
];
