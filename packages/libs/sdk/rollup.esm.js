import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { apiExtractor } from 'rollup-plugin-api-extractor';
import { terser } from 'rollup-plugin-terser';
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
    // Minify library code
    terser(),
    // Using API Extractor to rollup the ts declarations into one file
    apiExtractor({
      configuration: {
        projectFolder: '.',
        compiler: {
          tsconfigFilePath: toAbsoluteDir('tsconfig.esm.json'),
        },
      },
    }),
  ],
  external: [/node_modules/],
};
