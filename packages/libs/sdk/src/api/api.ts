import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client';
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
  const errorsArray: any[] = [];

  if (graphQLErrors) {
    graphQLErrors.map((error) => {
      if (error?.message) errorsArray.push('Error message: ' + error.message);
      if (error?.extensions) errorsArray.push(JSON.stringify(error.extensions));
      if (error?.originalError)
        errorsArray.push('Error stack:' + error?.originalError?.stack);
    });
  }

  if (networkError && 'statusCode' in networkError) {
    const serverError = networkError as ServerError;

    if (serverError.statusCode === 429) {
      errorsArray.push('QuickNode SDK warning: rate limit reached');
    } else if (
      hasOwnProperty(serverError.result, 'errors') &&
      Array.isArray(serverError.result['errors']) &&
      serverError?.result?.['errors']?.length > 0
    ) {
      serverError.result['errors']?.forEach((error: any) => {
        if (error?.message) errorsArray.push('Error message: ' + error.message);
        if (error?.extensions)
          errorsArray.push(JSON.stringify(error.extensions));
        if (error?.originalError)
          errorsArray.push('Error stack:' + error?.originalError?.stack);
      });
    } else {
      errorsArray.push('Something went wrong!');
      errorsArray.push('Error message: ' + serverError?.message);
    }
  }

  console.error(errorsArray.join('\n'));
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
      typePolicies: {
        EVMSchemaType: {
          // Always merge EVMSchemaType objects
          // Added because of warning: "Cache data may be lost when replacing the ethereum field of a Query object."
          merge: true,
        },
        NFT: {
          keyFields: ['contractAddress', 'tokenId'],
        },
        Collection: {
          keyFields: ['address'],
        },
        Contract: {
          keyFields: ['address'],
        },
        TokenEvent: {
          keyFields: ['transactionHash', 'transferIndex'],
        },
        Transaction: {
          keyFields: ['hash'],
        },
        TrendingCollection: {
          keyFields: ['collection', ['address']],
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
