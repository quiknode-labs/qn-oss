import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
//import { terser } from 'rollup-plugin-terser';
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import path from 'path';
import { URL } from 'url';

// esm patch for __dirname
const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

export default {
  input: toAbsoluteDir('./src/index.ts'),
  output: {
    file: 'dist/packages/libs/sdk/esm/index.js',
    format: 'esm',
    sourcemap: 'inline',
    sourcemapExcludeSources: true,
  },
  plugins: [
    externals(),
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.esm.json'),
    }),
    localResolve(),
    commonjs(),
    copy({
      targets: [
        {
          src: [toAbsoluteDir('README.md'), toAbsoluteDir('package.json')],
          dest: 'dist/packages/libs/sdk/',
        },
      ],
    }),
  ],
};
