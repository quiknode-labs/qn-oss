import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import path from 'path';

const rootDir = path.resolve(__dirname);

const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

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
    }),
    copy({
      targets: [
        {
          src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
          dest: 'dist/packages/libs/sdk',
        },
      ],
    }),
    terser({}), // Minify library code
    dts(), // Rollup the type declarations .d.ts files to one file
    // TODO: Add https://api-extractor.com/
  ],
  external: [/node_modules/],
};
