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
import { IcyGraphQLClient } from './icyGraphQLClient';

export interface IcyClientArguments {
  apiKey?: string;
}

const ICY_GRAPHQL_CLIENT_SUPPRESS_WARNINGS =
  /**
   * @todo set unified config util
   */
  // @ts-ignore
  process.env.ICY_GRAPHQL_CLIENT_SUPPRESS_WARNINGS === 'true' ? true : false;

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
    !ICY_GRAPHQL_CLIENT_SUPPRESS_WARNINGS
  ) {
    console.warn(
      'Rate limit reached, head over to https://developers.icy.tools/ to upgrade your account'
    );
  }
});

export class IcyGraphQLSDK {
  readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  readonly icyClient: IcyGraphQLClient;
  readonly apiKey?: string;
  readonly nft: NFTQueries;

  constructor({ apiKey }: IcyClientArguments = {}) {
    if (!apiKey && !ICY_GRAPHQL_CLIENT_SUPPRESS_WARNINGS) {
      console.warn(
        'icy-graphql-client warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://developers.icy.tools/'
      );
    }

    this.apiKey = apiKey;
    this.apolloClient = this.createApolloClient({ apiKey });
    this.icyClient = new IcyGraphQLClient(this.apolloClient);
    this.nft = new NFTQueries(this.icyClient);
  }

  private createApolloClient({
    apiKey,
  }: IcyClientArguments): ApolloClient<NormalizedCacheObject> {
    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...(apiKey && { 'x-api-key': apiKey }),
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
