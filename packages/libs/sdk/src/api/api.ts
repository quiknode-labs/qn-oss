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
import { NftsController } from './controllers/nfts';
import { ChainName } from './types/chains';
import { DEFAULT_CHAIN } from './utils/constants';

export interface ApiArguments {
  gqlApiKey?: string;
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
    } else if (serverError?.result?.['errors']?.length > 0) {
      serverError.result['errors']?.forEach((error: any) => {
        console.error(
          '\nSomething went wrong! This is likely a bug. Please file an issue at https://github.com/quiknode-labs/qn-oss/issues'
        );
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
  private gqlApiKey?: string;
  private additionalHeaders?: Record<string, string>;
  readonly defaultChain: ChainName;
  readonly nfts: NftsController;

  constructor({
    gqlApiKey,
    additionalHeaders,
    defaultChain,
  }: ApiArguments = {}) {
    if (!gqlApiKey) {
      console.warn(
        'QuickNode SDK warning: no apiKey provided. Access with no apiKey is heavily rate limited and intended for development use only. For higher rate limits or production usage, create an account on https://www.quicknode.com/'
      );
    }

    this.gqlApiKey = gqlApiKey;
    this.additionalHeaders = additionalHeaders;
    this.apolloClient = this.createApolloClient();
    this.customApolloClient = new CustomApolloClient(this.apolloClient);
    this.defaultChain = defaultChain || DEFAULT_CHAIN;
    this.nfts = new NftsController(this.customApolloClient, this.defaultChain);
  }

  private createApolloClient(): ApolloClient<NormalizedCacheObject> {
    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          ...{ 'x-api-key': this.gqlApiKey },
          ...this.additionalHeaders,
        },
      };
    });

    const cacheStructure = new InMemoryCache({
      possibleTypes: generatedPossibleTypes.possibleTypes,
      typePolicies: {
        NFT: {
          keyFields: ['contractAddress', 'tokenId'],
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
