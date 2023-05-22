import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import externals from 'rollup-plugin-node-externals';
import dts from 'rollup-plugin-dts';
import path from 'path';
import { URL } from 'url';
import nodeResolve from '@rollup/plugin-node-resolve';

// esm patch for __dirname
const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const bundle = (config) => ({
  input: toAbsoluteDir('./src/index.ts'),
  ...config,
});

export default [
  bundle({
    output: {
      file: 'dist/packages/libs/sdk/esm/index.js',
      format: 'esm',
      sourcemap: 'inline', // Include source map for debugging
      sourcemapExcludeSources: true, // Exclude external package sources from source map
    },
    plugins: [
      externals(), // Exclude node_modules from bundle
      typescript({
        tsconfig: toAbsoluteDir('tsconfig.lib.json'),
      }),
    ],
  }),
  bundle({
    output: {
      file: 'dist/packages/libs/sdk/cjs/index.js',
      format: 'cjs',
      sourcemap: 'inline', // Include source map for debugging
      sourcemapExcludeSources: true, // Exclude external package sources from source map
    },
    plugins: [
      typescript({
        tsconfig: toAbsoluteDir('tsconfig.lib.json'),
      }),
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
