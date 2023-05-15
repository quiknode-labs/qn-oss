// eslint-disable-next-line @nx/enforce-module-boundaries
import { CodegenConfig } from '@graphql-codegen/cli';
import { readFileSync } from 'fs';

const additionalHeaders: Record<string, string> = JSON.parse(
  String(readFileSync('graphqlHeaders.json'))
);

const config: CodegenConfig = {
  overwrite: true,
  documents: ['src/**/*.gql', 'src/**/!(*.d).{ts,tsx}'],
  schema: [
    {
      'https://api.quicknode.com/graphql': {
        headers: {
          'content-type': 'application/json',
          ...additionalHeaders,
        },
      },
    },
  ],
  generates: {
    'src/api/graphql/generatedTypes.ts': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        namingConvention: './codegenCustomNaming',
        exportFragmentSpreadSubTypes: true,
        inlineFragmentTypes: 'combine',
      },
    },
    'src/api/graphql/fragmentMatcher.ts': {
      plugins: ['fragment-matcher'],
    },
  },
};

export default config;
