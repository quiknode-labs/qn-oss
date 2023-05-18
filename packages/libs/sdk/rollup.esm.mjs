import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
//import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import externals from 'rollup-plugin-node-externals';
import { URL } from 'url';
import commonjs from '@rollup/plugin-commonjs';

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
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.esm.json'),
    }),
    nodeResolve({
        preferBuiltins: true,
        extensions: ['.js', '.ts']
    }), // resolves third party modules from node_modules
    commonjs(), // transform CommonJS modules to ES6, so they can be included in a Rollup bundle
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
