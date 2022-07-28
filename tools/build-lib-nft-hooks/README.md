# Build & Packaging Process

Requirements:  support ESM & CommonJS formats, 
mimic @apollo/client build system

## Rollup & Nx
Rollup configuration can be done with either a data structure, or a JS function.  [JS has limitations](https://www.rollupjs.org/guide/en/#differences-to-the-javascript-api).  [Apollo client uses a data structure config](https://github.com/apollographql/apollo-client/blob/main/config/rollup.config.js).  It's preferable to copy the apollo technique, but we cannot because we require an initial config from Nx, which can only come through a JS function.  Nx does not support a promise from this function, therefore we cannot directly use [the rollup API](https://www.rollupjs.org/guide/en/#javascript-api).  Therefore we cannot return an array of configs from our JS function (which is what apollo does).  

The workaround is to run the build twice, once each for ESM and CommonJS.  Since Nx clears the package dist folder between builds, we preserve the `main.cjs` file after the `cjs` build and copy it into the dist folder after running the `esm` format.  The shell script `build-lib-nft-hooks.bash` encapsulates the process.  
