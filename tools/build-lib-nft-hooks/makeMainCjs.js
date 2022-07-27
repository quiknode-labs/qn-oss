const {promisify} = require('util');
const fs = require('fs');
const {join} = require('path');
const mv = promisify(fs.rename);

const libPath = `packages/libs/ui/nft-react-hooks`;
const distRoot = `${__dirname}/../../dist/${libPath}`;

const moveMainFile = async () => {
  const original = `${distRoot}/index.js`;
  const target = '/tmp/main.cjs';
  await mv(original, target);
}

moveMainFile();

