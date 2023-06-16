// In root dir, run example app and run like this:
// curl http://localhost:3333/api/nftsByWallet/quicknode.eth | jq | npx ts-node packages/libs/sdk/docs/generate_result_format.ts nftsGetByWallet

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

type Property = {
  name: string;
  type: string;
  desc: string;
  properties: Property[];
};

function transformObjectToDescription(obj: any): Property[] {
  const properties: Property[] = [];

  for (const key in obj) {
    const value = obj[key];
    const property: Property = {
      name: key,
      type: value == null ? '' : Array.isArray(value) ? 'array' : typeof value,
      desc: '',
      properties: [],
    };

    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === 'object') {
        property.properties = transformObjectToDescription(value[0]);
      }
    } else if (typeof value === 'object' && value !== null) {
      property.properties = transformObjectToDescription(value);
    }

    properties.push(property);
  }

  return properties;
}

const generateResultFormat = (input: any, outputFileName: string) => {
  try {
    const description: Property[] = transformObjectToDescription(input);
    const outputPath = path.join('generated_docs', `${outputFileName}.json`);
    const outputData = JSON.stringify(description, null, 2);

    fs.mkdirSync('generated_docs', { recursive: true });
    fs.writeFileSync(outputPath, outputData);

    console.log(`Result has been written to: ${outputPath}`);
  } catch (error) {
    console.error('Invalid JSON input:', error);
    process.exit(1);
  }
};

// Read input from stdin
let inputString = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    inputString += chunk;
  }
});

process.stdin.on('end', () => {
  try {
    const input = JSON.parse(inputString);
    const inputFileName = process.argv[2];
    const outputFileName = path.basename(
      inputFileName,
      path.extname(inputFileName)
    );

    generateResultFormat(input, outputFileName);
  } catch (error) {
    console.error('Invalid JSON input');
    process.exit(1);
  }
});
