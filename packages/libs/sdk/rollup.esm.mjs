import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import externals from 'rollup-plugin-node-externals'
import path from 'path';
import alias from '@rollup/plugin-alias';
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
    sourcemap: "inline", // Include source map for debugging
    sourcemapExcludeSources: true,  // Exclude external package sources from source map
  },
  plugins: [
    externals({ exclude: /@apollo\/client[^\n]*/g }), // Exclude node_modules from bundle
    typescript({
      tsconfig: toAbsoluteDir('tsconfig.esm.json'),
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
};
