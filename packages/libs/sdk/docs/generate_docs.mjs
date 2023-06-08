import tsj from 'ts-json-schema-generator';
import fs from 'fs';
import path from 'path';
import { type } from 'os';

// esm patch for __dirname
const __dirname = new URL('.', import.meta.url).pathname;
const rootDir = path.resolve(__dirname);
const toAbsoluteDir = (relativeDir) => path.resolve(rootDir, relativeDir);

const typename = 'TransactionsByHashResult';
console.log(toAbsoluteDir('../libs/sdk/tsconfig.lib.json'));
/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
  path: toAbsoluteDir('../src/index.ts'),
  tsconfig: toAbsoluteDir('../tsconfig.lib.json'),
  type: typename, // Or <type-name> if you want to generate schema for that one type only
};

const output_path = toAbsoluteDir('./generated/schema.json');
const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(output_path, schemaString, (err) => {
  if (err) throw err;
});

const returnGasPrices = {
  gasPrices: [
    {
      blockNumber: 17343891,
      total: 7011.32,
      average: 40.06,
      ceiling: 435.71,
      floor: 34.92,
      median: 35.5,
    },
  ],
};

const returnWalletBalances = {
  results: [
    {
      totalBalance: '35546774534000000000000000',
      address: '0x3b484b82567a09e2588a13d54d032153f0c0aee0',
      decimals: 18,
      name: 'SOS',
      symbol: 'SOS',
    },
    {
      totalBalance: '2500000000000000000000000',
      address: '0x69f9045d02cf274c5af4bc4ee3d8f936697071c6',
      decimals: 18,
      name: 'Luna Community Refund (terraluna.claims)',
      symbol: 'Luna Community Refund (terraluna.claims)',
    },
  ],
  pageInfo: {
    endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
  },
  address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
  ensName: 'quicknode.eth',
};

function getType(value) {
  const typeOfValue = typeof value;

  if (Array.isArray(value)) {
    return 'array';
  } else if (typeOfValue === 'object') {
    return 'object';
  } else {
    return typeOfValue;
  }
}

function transformResponse(response) {
  const transformProperties = (prop) => {
    if (typeof prop !== 'object' && !Array.isArray(prop)) {
      return [];
    }

    return Object.entries(prop).map(([key, value]) => {
      let properties = [];

      if (getType(value) === 'array') {
        if (value[0]) {
          properties = transformProperties(value[0]);
        }
      } else if (getType(value) === 'object') {
        properties = transformProperties(value);
      }

      let name = key;
      if (getType(value) === 'array') name = 'array';
      if (getType(value) === 'object') name = 'object';

      return {
        name: name,
        type: getType(value),
        desc: '',
        properties,
      };
    });
  };

  return Object.entries(response).map(([key, value]) => {
    let properties = [];

    if (getType(value) === 'array') {
      if (value[0]) {
        properties = transformProperties(value[0]);
      }
    } else if (getType(value) === 'object') {
      properties = transformProperties(value);
    }

    let name = key;
    if (getType(value) === 'array') name = 'array';
    if (getType(value) === 'object') name = 'object';

    return {
      name,
      type: getType(value),
      desc: '',
      properties,
    };
  });
}

console.log(JSON.stringify(transformResponse(returnGasPrices), null, 2));
console.log(JSON.stringify(transformResponse(returnWalletBalances), null, 2));
