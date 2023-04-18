import { CodegenConfig } from '@graphql-codegen/cli';
import { readFileSync } from 'fs';

const additionalHeaders: Record<string, string> = JSON.parse(
  readFileSync('graphqlHeaders.json')
);

const config: CodegenConfig = {
  overwrite: true,
  documents: 'src/**/*.gql',
  schema: [
    {
      'http://localhost:4000/graphql': {
        headers: {
          'content-type': 'application/json',
          ...additionalHeaders,
        },
      },
    },
  ],
  generates: {
    'src/graphql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
      config: {
        exportFragmentSpreadSubTypes: true,
        inlineFragmentTypes: 'combine',
      },
    },
    'src/graphql/fragmentMatcher.ts': {
      plugins: ['fragment-matcher'],
    },
  },
};

export default config;