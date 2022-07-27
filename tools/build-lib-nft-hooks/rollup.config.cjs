const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup')
const commonjs = require('@rollup/plugin-commonjs')

const path = require('path');
const fs = require('fs');

// import nodeResolve from '@rollup/plugin-node-resolve';
const minify = require('rollup-plugin-terser')

const distDir = './dist';

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


module.exports = (config) => {
    // console.log(`config = ${JSON.stringify(config, null, 2)}`);
    const nxConfig = nrwlConfig(config);
    // nxConfig.input = { input: nxConfig.input }
    nxConfig.output.name = 'Icy NFT Hooks';
    
    const format = process.env['FORMAT'] ?? 'esm'
    // console.log(`env format = ${format}; current format = ${nxConfig.output.format}`)
    nxConfig.output.format = format
    
    console.log(`nxConfig = ${JSON.stringify(nxConfig, null, 2)}`);

    return nxConfig;
}

