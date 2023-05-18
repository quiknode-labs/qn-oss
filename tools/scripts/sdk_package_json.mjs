// Write a package.json in the dist/packages/libs/sdk/esm/ directory with "type": "module"
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const packageJson = {
  type: 'module',
}

// create and write to file
// create file first
fs.writeFileSync(toAbsoluteDir('../../dist/packages/libs/sdk/esm/package.json'), JSON.stringify(packageJson, null, 2))
