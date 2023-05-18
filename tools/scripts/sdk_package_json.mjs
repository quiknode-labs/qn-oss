// Write a package.json in the dist/packages/libs/sdk/esm/ directory with "type": "module"
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const esmPackageJson = {
  type: 'module',
}

const cjsPackageJson = {
  type: "commonjs",
}

// esm package.json
fs.writeFileSync(toAbsoluteDir('../../dist/packages/libs/sdk/esm/package.json'), JSON.stringify(esmPackageJson, null, 2))
// cjs package.json
fs.writeFileSync(toAbsoluteDir('../../dist/packages/libs/sdk/cjs/package.json'), JSON.stringify(cjsPackageJson, null, 2))
