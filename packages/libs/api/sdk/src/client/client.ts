import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';
import { CustomApolloClient } from './customApolloClient';
import generatedIntrospection from '../graphql/fragmentMatcher';
import {
  EthMainnetChainConfig,
  PolygonMainnetChainConfig,
} from './chainConfigs';

export interface QuickNodeSDKArguments {
  qnApiKey?: string;
  additionalHeaders?: Record<string, string>;
}

const QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS =
  /**
   * @todo set unified config util
   */
  process.env['QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS'] === 'true'
    ? true
    : false;

const httpLink = new HttpLink({
  uri: process.env['NX_GRAPHQL_API_URI'] || 'https://api.quicknode.com/graphql',
  fetch,
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
      'QuickNode SDK warning: rate limit reached, head over to https://quicknode.com to upgrade your account'
    );
  }
});

export class QuickNodeSDK {
  readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  private customApolloClient: CustomApolloClient;
  readonly qnApiKey?: string;
  readonly ethereum: EthMainnetChainConfig;
  readonly polygon: PolygonMainnetChainConfig;

  constructor({ qnApiKey, additionalHeaders }: QuickNodeSDKArguments = {}) {
    console.log({ qnApiKey });
    if (!qnApiKey && !QUICKNODE_GRAPHQL_CLIENT_SUPPRESS_WARNINGS) {
      console.warn(
        'QuickNode SDK warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://www.quicknode.com/'
      );
    }

    this.qnApiKey = qnApiKey;
    this.apolloClient = this.createApolloClient({
      qnApiKey,
      additionalHeaders,
    });
    this.customApolloClient = new CustomApolloClient(this.apolloClient);
    this.ethereum = new EthMainnetChainConfig({
      customApolloClient: this.customApolloClient,
    });
    this.polygon = new PolygonMainnetChainConfig({
      customApolloClient: this.customApolloClient,
    });
  }

  private createApolloClient({
    qnApiKey,
    additionalHeaders,
  }: QuickNodeSDKArguments): ApolloClient<NormalizedCacheObject> {
    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...{ 'x-api-key': qnApiKey },
          ...additionalHeaders,
        },
      };
    });

    // TODO - add type policies
    const cacheStructure = new InMemoryCache({
      possibleTypes: generatedIntrospection.possibleTypes,
      typePolicies: {},
    });

    const rawClient = new ApolloClient({
      link: from([authLink, errorLink, httpLink]),
      cache: cacheStructure,
    });
    return rawClient;
  }
}
