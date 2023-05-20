import fetch from 'cross-fetch';
import { CustomUrqlClient } from './graphql/customUrqlClient';
import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { NftsController, TokensController } from './controllers';
import { ChainName } from './types/chains';
import { DEFAULT_CHAIN } from './utils/constants';

export interface ApiArguments {
  graphApiKey?: string;
  additionalHeaders?: Record<string, string>;
  defaultChain?: ChainName;
}

export class API {
  readonly urqlClient: Client;
  private customUrqlClient: CustomUrqlClient;
  private graphApiKey?: string;
  private additionalHeaders?: Record<string, string>;
  readonly defaultChain: ChainName;
  readonly nfts: NftsController;
  readonly tokens: TokensController;
  readonly graphApiClient: Client;

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
    this.urqlClient = this.createUrqlClient();
    this.customUrqlClient = new CustomUrqlClient(this.urqlClient);
    this.defaultChain = defaultChain || DEFAULT_CHAIN;
    this.nfts = new NftsController(this.customUrqlClient, this.defaultChain);
    this.tokens = new TokensController(
      this.customUrqlClient,
      this.defaultChain
    );
    // Re-export the apolloClient configured to use the Graph API for use with custom queries
    this.graphApiClient = this.urqlClient;
  }

  private createUrqlClient(): Client {
    const headers = { ...this.additionalHeaders };
    if (this.graphApiKey) headers['x-api-key'] = this.graphApiKey;

    const client = new Client({
      fetch,
      url:
        process.env['NX_GRAPHQL_API_URI'] ||
        'https://api.quicknode.com/graphql',
      exchanges: [cacheExchange, fetchExchange],
      fetchOptions: () => ({ headers }),
    });

    // TODO: Urql caching, possible types?

    return client;
  }
}
