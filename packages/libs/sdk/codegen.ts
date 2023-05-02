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
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        namingConvention: './codegenCustomNaming',
        exportFragmentSpreadSubTypes: true,
        inlineFragmentTypes: 'combine',
        fragmentMasking: false,
      },
    },
    'src/api/graphql/fragmentMatcher.ts': {
      plugins: ['fragment-matcher'],
    },
  },
};

export default config;
