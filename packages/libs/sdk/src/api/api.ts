import fetch from 'cross-fetch';
import { CustomUrqlClient } from './graphql/customUrqlClient';
import { Client, fetchExchange } from '@urql/core';

import {
  NftsController,
  TokensController,
  UtilsController,
  ContractsController,
  EventsController,
} from './controllers';
import { ChainName } from './types/chains';
import { DEFAULT_CHAIN } from './utils/constants';
import { TransactionsController } from './controllers/transactions';
import packageJson from '../../package.json';

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
  readonly utils: UtilsController;
  readonly contracts: ContractsController;
  readonly transactions: TransactionsController;
  readonly events: EventsController;
  readonly graphApiClient: Client;

  constructor({
    graphApiKey,
    additionalHeaders,
    defaultChain,
  }: ApiArguments = {}) {
    if (!graphApiKey) {
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
    this.utils = new UtilsController(this.customUrqlClient, this.defaultChain);
    this.contracts = new ContractsController(
      this.customUrqlClient,
      this.defaultChain
    );
    this.transactions = new TransactionsController(
      this.customUrqlClient,
      this.defaultChain
    );
    this.events = new EventsController(
      this.customUrqlClient,
      this.defaultChain
    );
    // Re-export the Urql client configured to use the Graph API for use with custom queries
    this.graphApiClient = this.urqlClient;
  }

  private createUrqlClient(): Client {
    const headers = { ...this.additionalHeaders };
    if (this.graphApiKey) headers['x-api-key'] = this.graphApiKey;
    headers['x-quicknode-sdk'] = 'js-sdk';
    headers['x-quicknode-sdk-version'] = packageJson?.version || 'n/a';

    const client = new Client({
      fetch,
      url:
        process.env['NX_GRAPHQL_API_URI'] ||
        'https://api.quicknode.com/graphql',
      exchanges: [fetchExchange],
      requestPolicy: 'network-only',
      fetchOptions: () => ({ headers }),
    });

    return client;
  }
}
