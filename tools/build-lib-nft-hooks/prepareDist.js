// Cloned from @apollo/client/config/prepareDist.js
// jkolyer@quiknode.io Jul 27, 2022

// The source that is published to npm is located in the
// "dist" directory. This utility script is called when building,
// to make sure the "dist" directory is prepared for publishing.
//
// This script will:
//
// - adjusting the package.json for publishing.
// - Copy the supporting files from the root into "dist" (e.g. `README.MD`,
//   `LICENSE`, etc.).

const fs = require('fs');
const path = require('path');

const libPath = `packages/libs/ui/nft-react-hooks`;
const distRoot = `${__dirname}/../../dist/${libPath}`;
fs.copyFileSync(`${distRoot}/package.json`, `${__dirname}/package.json`);

const packageJson = require('./package.json');

// Enable default interpretation of .js files as ECMAScript modules. We don't
// put this in the source ../package.json file because it interferes with tools
// like ts-node, which we use to run various ../config/*.ts scripts.
packageJson.type = 'module';

// The root package.json is marked as private to prevent publishing
// from happening in the root of the project. This sets the package back to
// public so it can be published from the "dist" directory.
packageJson.private = false;

// Remove package.json items that we don't need to publish
delete packageJson.scripts;
delete packageJson.bundlesize;
delete packageJson.engines;

packageJson.main = './main.cjs';

// The root package.json points to the CJS/ESM source in "dist", to support
// on-going package development (e.g. running tests, supporting npm link, etc.).
// When publishing from "dist" however, we need to update the package.json
// to point to the files within the same directory.
const distPackageJson = JSON.stringify(packageJson, null, 2) + '\n';

// Save the modified package.json to "dist"
fs.writeFileSync(`${distRoot}/package.json`, distPackageJson);
fs.unlinkSync(`${__dirname}/package.json`);

// Copy supporting files into "dist"
const topDir = `${__dirname}/../..`;
// fs.copyFileSync(`${topDir}/${libPath}/README.md`,  `${distRoot}/README.md`);
fs.copyFileSync(`${topDir}/LICENSE.txt`, `${distRoot}/LICENSE.txt`);
