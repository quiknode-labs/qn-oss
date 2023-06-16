// eslint-disable-next-line @typescript-eslint/no-var-requires
const readline = require('readline');

type Property = {
  name: string;
  type: string;
  desc: string;
  properties: Property[];
};

type ObjectType = {
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
      type: Array.isArray(value) ? 'array' : typeof value,
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

// Read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = '';
rl.on('line', (line: any) => {
  inputString += line;
});

rl.on('close', () => {
  try {
    const input = JSON.parse(inputString);
    const description: ObjectType[] = transformObjectToDescription(input);
    console.log(JSON.stringify(description, null, 2));
  } catch (error) {
    console.error('Invalid JSON input');
  }
});
