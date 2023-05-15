import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError, ErrorResponse } from '@apollo/client/link/error';
import fetch from 'cross-fetch';
import { CustomApolloClient } from './graphql/customApolloClient';
import generatedPossibleTypes from './graphql/fragmentMatcher';
import { NftsController } from './controllers';
import { ChainName } from './types/chains';
import { DEFAULT_CHAIN } from './utils/constants';
import { hasOwnProperty } from './utils/helpers';

export interface ApiArguments {
  graphApiKey?: string;
  additionalHeaders?: Record<string, string>;
  defaultChain?: ChainName;
}

const httpLink = new HttpLink({
  uri: process.env['NX_GRAPHQL_API_URI'] || 'https://api.quicknode.com/graphql',
  fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.map((error) => {
      if (error?.message) console.error('Error message:', error.message);
      if (error?.extensions) console.error(JSON.stringify(error.extensions));
    });
  }

  if (networkError && 'statusCode' in networkError) {
    const serverError = networkError as ServerError;

    if (serverError.statusCode === 429) {
      console.warn('QuickNode SDK warning: rate limit reached');
    } else if (
      hasOwnProperty(serverError.result, 'errors') &&
      Array.isArray(serverError.result['errors']) &&
      serverError?.result?.['errors']?.length > 0
    ) {
      serverError.result['errors']?.forEach((error: any) => {
        // TODO MIGRATION: See if we can not repeat errors when there are graphQLErrors along with networkErrors
        if (error?.message) console.error('Error message:', error.message);
        if (error?.extensions) console.error(JSON.stringify(error.extensions));
      });
    } else {
      console.error('Something went wrong!');
      console.error('Error message:', serverError?.message);
    }
  }
  return;
});

export class API {
  readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  private customApolloClient: CustomApolloClient;
  private graphApiKey?: string;
  private additionalHeaders?: Record<string, string>;
  readonly defaultChain: ChainName;
  readonly nfts: NftsController;
  readonly graphApiClient: ApolloClient<NormalizedCacheObject>;

  constructor({
    graphApiKey,
    additionalHeaders,
    defaultChain,
  }: ApiArguments = {}) {
    if (!graphApiKey && process.env['NODE_ENV'] !== 'test') {
      console.warn(
        'QuickNode SDK warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://www.quicknode.com/'
      );
    }

    this.graphApiKey = graphApiKey;
    this.additionalHeaders = additionalHeaders;
    this.apolloClient = this.createApolloClient();
    this.customApolloClient = new CustomApolloClient(this.apolloClient);
    this.defaultChain = defaultChain || DEFAULT_CHAIN;
    this.nfts = new NftsController(this.customApolloClient, this.defaultChain);
    // Re-export the apolloClient configured to use the Graph API for use with custom queries
    this.graphApiClient = this.apolloClient;
  }

  private createApolloClient(): ApolloClient<NormalizedCacheObject> {
    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...{ 'x-api-key': this.graphApiKey },
          ...this.additionalHeaders,
        },
      };
    });

    const cacheStructure = new InMemoryCache({
      possibleTypes: generatedPossibleTypes.possibleTypes,
      // TODO: Figure out type policies
      typePolicies: {},
    });

    const rawClient = new ApolloClient({
      link: from([authLink, errorLink, httpLink]),
      cache: cacheStructure,
    });
    return rawClient;
  }
}
