"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// This file merges @apollo/client/rollup.config.js and @nrwl bundle-rollup.js

import path from 'path';
import { promises as fs } from "fs";

import nodeResolve from '@rollup/plugin-node-resolve';
import { terser as minify } from 'rollup-plugin-terser';

const distDir = './dist/packages/libs/ui/nft-react-hooks/';

// Adapted from https://github.com/meteor/meteor/blob/devel/tools/static-assets/server/mini-files.ts
function toPosixPath(p) {
  // Sometimes, you can have a path like \Users\IEUser on windows, and this
  // actually means you want C:\Users\IEUser
  if (p[0] === '\\') {
    p = process.env.SystemDrive + p;
  }

  p = p.replace(/\\/g, '/');
  if (p[1] === ':') {
    // Transform "C:/bla/bla" to "/c/bla/bla"
    p = '/' + p[0] + p.slice(2);
  }

  return p;
}

function prepareCJS(input, output) {
  return {
    input,
    external(id, parentId) {
      return isExternal(id, parentId, false);
    },
    output: {
      file: output,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      externalLiveBindings: false,
    },
    plugins: [
      nodeResolve(),
    ],
  };
}

function prepareCJSMinified(input) {
  return {
    input,
    output: {
      file: input.replace('.cjs', '.min.cjs'),
      format: 'cjs',
    },
    plugins: [
      minify({
        mangle: {
          toplevel: true,
        },
        compress: {
          toplevel: true,
          global_defs: {
            '@__DEV__': 'false',
          },
        },
      }),
    ],
  };
}

function getRollupOptions(options) {
  const extraGlobals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    '@emotion/react': 'emotionReact',
    '@emotion/styled': 'emotionStyled',
  };
  options.output = Object.assign(Object.assign({}, options.output), {
    globals: Object.assign(Object.assign({}, options.output.globals),
                           extraGlobals)
  });
  fs.writeFileSync(`/tmp/options.json`, JSON.stringify(options,null,2));
  // console.log(`options = ${JSON.stringify(options,null,2)}`);
  return options;
}

module.exports = getRollupOptions;
