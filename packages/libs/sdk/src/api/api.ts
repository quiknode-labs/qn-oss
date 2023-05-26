import fetch from 'cross-fetch';
import { CustomUrqlClient } from './graphql/customUrqlClient';
import { Client, fetchExchange } from '@urql/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Data, cacheExchange } from '@urql/exchange-graphcache';
import {
  NftsController,
  TokensController,
  UtilsController,
  ContractsController,
} from './controllers';
import { ChainName } from './types/chains';
import { DEFAULT_CHAIN } from './utils/constants';
import schema from './graphql/schema.json';
import { TransactionsController } from './controllers/transactions';

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
    this.utils = new UtilsController(this.customUrqlClient, this.defaultChain);
    this.contracts = new ContractsController(
      this.customUrqlClient,
      this.defaultChain
    );
    this.transactions = new TransactionsController(
      this.customUrqlClient,
      this.defaultChain
    );
    // Re-export the Urql client configured to use the Graph API for use with custom queries
    this.graphApiClient = this.urqlClient;
  }

  private createUrqlClient(): Client {
    const headers = { ...this.additionalHeaders };
    if (this.graphApiKey) headers['x-api-key'] = this.graphApiKey;
    const useNftKey = (data: Data) =>
      `${data['contractAddress']}:${data['tokenId']}`;
    const useAddressAsKey = (data: Data) => `${data['address']}`;
    const useTransactionHashAndIndex = (data: Data) =>
      `${data['transactionHash']}:${data['transferIndex']}`;
    const urqlCache = cacheExchange({
      schema,
      keys: {
        EVMSchemaType: () => null, // The entity has no key and no parent entity so effectively won't cache
        Collection: useAddressAsKey,
        CollectionOHLCVChart: () => null, // Entities without keys will be embedded directly on the parent entity.
        Contract: (data) => `${data['address']}`,
        ERC721NFT: useNftKey,
        ERC721Collection: useAddressAsKey,
        ERC1155NFT: useNftKey,
        ERC1155Collection: useAddressAsKey,
        GasPrice: () => null,
        NFT: useNftKey,
        NFTContract: useAddressAsKey,
        TokenAttribute: () => null,
        TokenContract: useAddressAsKey,
        TokenEvent: useTransactionHashAndIndex,
        TokenMintEvent: useTransactionHashAndIndex,
        TokenBurnEvent: useTransactionHashAndIndex,
        TokenSaleEvent: useTransactionHashAndIndex,
        TokenSwapEvent: useTransactionHashAndIndex,
        TokenTransferEvent: useTransactionHashAndIndex,
        TokenUpload: () => null,
        OpenSeaMetadata: () => null,
        Transaction: (data) => `${data['hash']}`,
        TrendingCollection: () => null,
        Wallet: (data) => `${data['address']}`,
        WalletNFT: () => null,
        WalletTokenBalance: () => null,
      },
    });

    const client = new Client({
      fetch,
      url:
        process.env['NX_GRAPHQL_API_URI'] ||
        'https://api.quicknode.com/graphql',
      exchanges: [urqlCache, fetchExchange],
      fetchOptions: () => ({ headers }),
    });

    return client;
  }
}
