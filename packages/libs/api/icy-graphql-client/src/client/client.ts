import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getNFTsRawQuery } from '../queries/getNFTsByWallet/getNFTsByWallet';

export interface IcyClientArguments {
  apiKey?: string;
}

const httpLink = new HttpLink({
  uri: 'https://graphql.icy.tools/graphql',
});

const errorLink = onError(({ networkError }) => {
  if (
    /**
     * @todo fix this type by overriding
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore typing is not correct from apollo client, statusCode can be included in networkError
    networkError?.statusCode === 429
  ) {
    console.warn(
      'Rate limit reached, head over to https://developers.icy.tools/ to upgrade your account'
    );
  }
});

export const IcyGraphQLClient = ({ apiKey }: IcyClientArguments = {}) => {
  if (!apiKey) {
    console.warn(
      'icy-graphql-client warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://developers.icy.tools/'
    );
  }

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        ...(apiKey && { 'x-api-key': apiKey }),
      },
    };
  });

  const rawClient = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        ERC721Token: {
          keyFields: ['tokenId', 'contract', ['address']],
        },
        ERC721Contract: {
          keyFields: ['address'],
        },
        Wallet: {
          keyFields: ['address'],
        },
      },
    }),
  });

  return {
    rawClient,
    getNFTsByWallet: (variables: any) =>
      rawClient.query({ query: getNFTsRawQuery, variables }),
  };
};
