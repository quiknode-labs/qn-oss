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
    'src/graphql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
        './src/graphql/QNCodegenPlugin',
      ],
      config: {
        exportFragmentSpreadSubTypes: true,
        inlineFragmentTypes: 'combine',
        fragmentMasking: false,
      },
    },
    'src/graphql/fragmentMatcher.ts': {
      plugins: ['fragment-matcher'],
    },
  },
};

export default config;
