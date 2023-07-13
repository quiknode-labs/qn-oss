// Write a package.json in the dist/packages/libs/sdk/esm/ and dist/packages/libs/sdk/esm/ directory
// to override the type field in the package.json in the root directory. This allows us to use
// both module systems in the same package.
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const esmPackageJson = {
  type: 'module',
  sideEffects: false,
};

const cjsPackageJson = {
  type: 'commonjs',
};

// esm package.json
fs.writeFileSync(
  toAbsoluteDir('../../dist/packages/libs/sdk/esm/package.json'),
  JSON.stringify(esmPackageJson, null, 2)
);
// cjs package.json
fs.writeFileSync(
  toAbsoluteDir('../../dist/packages/libs/sdk/cjs/package.json'),
  JSON.stringify(cjsPackageJson, null, 2)
);
