const { promisify } = require('util');
const fs = require('fs');
const { join } = require('path');
const mv = promisify(fs.rename);

const libPath = `packages/libs/ui/nft-react-hooks`;
const distRoot = `${__dirname}/../../dist/${libPath}`;

const moveMainFile = async () => {
  const original = '/tmp/main.cjs';
  const target = `${distRoot}/main.cjs`;
  await mv(original, target);
};

moveMainFile();
