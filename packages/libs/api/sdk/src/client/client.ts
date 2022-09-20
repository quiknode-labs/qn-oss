import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { NFTQueries } from '../queries/nft/nftQueries';
import { CustomGraphQLClient } from './CustomGraphqlClient';

export interface QuickNodeSDKArguments {
  icyApiKey?: string;
}

const QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS =
  /**
   * @todo set unified config util
   */
  // @ts-ignore
  process.env.QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS === 'true'
    ? true
    : false;

const httpLink = new HttpLink({
  uri: 'https://graphql.icy.tools/graphql',
});

const errorLink = onError(({ networkError }) => {
  if (
    /**
     * @todo fix this type by overriding
     */
    // @ts-ignore typing is not correct from apollo client, statusCode can be included in networkError
    networkError?.statusCode === 429 &&
    !QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS
  ) {
    console.warn(
      'QuickNode SDK warning: rate limit reached, head over to https://developers.icy.tools/ to upgrade your account'
    );
  }
});

export class QuickNodeSDK {
  readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  private CustomGraphQLClient: CustomGraphQLClient;
  readonly icyApiKey?: string;
  readonly nft: NFTQueries;

  constructor({ icyApiKey }: QuickNodeSDKArguments = {}) {
    if (!icyApiKey && !QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS) {
      console.warn(
        'QuickNode SDK warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://developers.icy.tools/'
      );
    }

    this.icyApiKey = icyApiKey;
    this.apolloClient = this.createApolloClient({ icyApiKey });
    this.CustomGraphQLClient = new CustomGraphQLClient(this.apolloClient);
    this.nft = new NFTQueries(this.CustomGraphQLClient);
  }

  private createApolloClient({
    icyApiKey,
  }: QuickNodeSDKArguments): ApolloClient<NormalizedCacheObject> {
    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...(icyApiKey && { 'x-api-key': icyApiKey }),
        },
      };
    });

    const cacheStructure = new InMemoryCache({
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
    });

    const rawClient = new ApolloClient({
      link: from([authLink, errorLink, httpLink]),
      cache: cacheStructure,
    });
    return rawClient;
  }
}
