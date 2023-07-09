import { type Client } from 'viem';
import { ZodType } from 'zod';
import { type QNCoreClientConfig } from '../../coreTypes';
import { formatErrors } from '../../../lib/validation/ValidateInput';
import { checkAddOnEnabled } from '../shared/helpers';
import {
  type NFTAndTokenSchema,
  type NFTAndTokenActions,
} from './types/action';
import {
  type QNFetchNFTInput,
  type QNFetchNFTResult,
  type QNFetchNFTMethod,
  qnFetchNFTInputSchema,
} from './types/qn_fetchNFTs';
import {
  type QNFetchNFTCollectionDetailsMethod,
  type QNFetchNFTCollectionDetailsInput,
  type QNFetchNFTCollectionDetailsResult,
  qnFetchNFTCollectionDetailsInputSchema,
} from './types/qn_fetchNFTCollectionDetails';
import {
  type QNFetchNFTsByCollectionMethod,
  type QNFetchNFTsByCollectionInput,
  type QNFetchNFTsByCollectionResult,
  qnFetchNFTsByCollectionInputSchema,
} from './types/qn_fetchNFTsByCollection';
import {
  type QNGetTransfersByNFTMethod,
  type QNGetTransfersByNFTInput,
  type QNGetTransfersByNFTResult,
  qnGetTransfersByNFTInputSchema,
} from './types/qn_getTransfersByNFT';
import {
  type QNVerifyNFTsByOwnerMethod,
  type QNVerifyNFTsOwnerInput,
  type QNVerifyNFTsOwnerResult,
  qnVerifyNFTsOwnerInputSchema,
} from './types/qn_verifyNFTsOwner';
import {
  type QNGetTokenMetadataByCAMethod,
  type QNGetTokenMetadataByCAInput,
  type QNGetTokenMetadataByCAResult,
  qnGetTokenMetadataByCAInputSchema,
} from './types/qn_getTokenMetadataByContractAddress';
import {
  type QNGetTokenMetadataBySymbolMethod,
  type QNGetTokenMetadataBySymbolInput,
  type QNGetTokenMetadataBySymbolResult,
  qnGetTokenMetadataBySymbolInputSchema,
} from './types/qn_getTokenMetadataBySymbol';
import {
  type QNGetTransactionsByAddressMethod,
  type QNGetTransactionsByAddressInput,
  type QNGetTransactionsByAddressResult,
  qnGetTransactionsByAddressInputSchema,
} from './types/qn_getTransactionsByAddress';
import {
  type QNGetWalletTokenBalanceMethod,
  type QNGetWalletTokenBalanceInput,
  type QNGetWalletTokenBalanceResult,
  qnGetWalletTokenBalanceInputSchema,
} from './types/qn_getWalletTokenBalance';
import {
  type QNGetWalletTokenTransactionsMethod,
  type QNGetWalletTokenTransactionsInput,
  type QNGetWalletTokenTransactionsResult,
  qnGetWalletTokenTransactionsInputSchema,
} from './types/qn_getWalletTokenTransactions';

function nftAndTokenValidator(
  config: QNCoreClientConfig,
  schema: ZodType<unknown>,
  args: unknown
) {
  checkAddOnEnabled(
    config.addOns.nftTokenV2,
    'NFT And Token RPC API V2',
    'nftTokenV2'
  );

  // Uses zod to validate schema at runtime
  const validation = schema.safeParse(args);
  if (!validation.success) {
    const formattedErrors = formatErrors(validation.error);
    if (formattedErrors) throw formattedErrors;
  }
}

export const nftAndTokenActions = (
  client: Client,
  config: QNCoreClientConfig
): NFTAndTokenActions => ({
  async qn_fetchNFTCollectionDetails(
    args: QNFetchNFTCollectionDetailsInput
  ): Promise<QNFetchNFTCollectionDetailsResult> {
    nftAndTokenValidator(config, qnFetchNFTCollectionDetailsInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_fetchNFTCollectionDetails';
        params: QNFetchNFTCollectionDetailsMethod['Parameters'];
      },
      QNFetchNFTCollectionDetailsResult
    >({
      method: 'qn_fetchNFTCollectionDetails',
      params: [args],
    });
    return response;
  },

  async qn_fetchNFTs(args: QNFetchNFTInput): Promise<QNFetchNFTResult> {
    nftAndTokenValidator(config, qnFetchNFTInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      { method: 'qn_fetchNFTs'; params: QNFetchNFTMethod['Parameters'] },
      QNFetchNFTResult
    >({
      method: 'qn_fetchNFTs',
      params: [args],
    });

    return response;
  },

  async qn_fetchNFTsByCollection(
    args: QNFetchNFTsByCollectionInput
  ): Promise<QNFetchNFTsByCollectionResult> {
    nftAndTokenValidator(config, qnFetchNFTsByCollectionInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_fetchNFTsByCollection';
        params: QNFetchNFTsByCollectionMethod['Parameters'];
      },
      QNFetchNFTsByCollectionResult
    >({
      method: 'qn_fetchNFTsByCollection',
      params: [args],
    });

    return response;
  },

  async qn_getTransfersByNFT(
    args: QNGetTransfersByNFTInput
  ): Promise<QNGetTransfersByNFTResult> {
    nftAndTokenValidator(config, qnGetTransfersByNFTInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getTransfersByNFT';
        params: QNGetTransfersByNFTMethod['Parameters'];
      },
      QNGetTransfersByNFTResult
    >({
      method: 'qn_getTransfersByNFT',
      params: [args],
    });

    return response;
  },

  async qn_verifyNFTsOwner(
    args: QNVerifyNFTsOwnerInput
  ): Promise<QNVerifyNFTsOwnerResult> {
    nftAndTokenValidator(config, qnVerifyNFTsOwnerInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_verifyNFTsOwner';
        params: QNVerifyNFTsByOwnerMethod['Parameters'];
      },
      QNVerifyNFTsOwnerResult
    >({
      method: 'qn_verifyNFTsOwner',
      params: [args],
    });

    return response;
  },

  async qn_getTokenMetadataByContractAddress(
    args: QNGetTokenMetadataByCAInput
  ): Promise<QNGetTokenMetadataByCAResult | null> {
    nftAndTokenValidator(config, qnGetTokenMetadataByCAInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getTokenMetadataByContractAddress';
        params: QNGetTokenMetadataByCAMethod['Parameters'];
      },
      QNGetTokenMetadataByCAResult
    >({
      method: 'qn_getTokenMetadataByContractAddress',
      params: [args],
    });

    return response;
  },

  async qn_getTokenMetadataBySymbol(
    args: QNGetTokenMetadataBySymbolInput
  ): Promise<QNGetTokenMetadataBySymbolResult> {
    nftAndTokenValidator(config, qnGetTokenMetadataBySymbolInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getTokenMetadataBySymbol';
        params: QNGetTokenMetadataBySymbolMethod['Parameters'];
      },
      QNGetTokenMetadataBySymbolResult
    >({
      method: 'qn_getTokenMetadataBySymbol',
      params: [args],
    });

    return response;
  },

  async qn_getTransactionsByAddress(
    args: QNGetTransactionsByAddressInput
  ): Promise<QNGetTransactionsByAddressResult> {
    nftAndTokenValidator(config, qnGetTransactionsByAddressInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getTransactionsByAddress';
        params: QNGetTransactionsByAddressMethod['Parameters'];
      },
      QNGetTransactionsByAddressResult
    >({
      method: 'qn_getTransactionsByAddress',
      params: [args],
    });

    return response;
  },

  async qn_getWalletTokenBalance(
    args: QNGetWalletTokenBalanceInput
  ): Promise<QNGetWalletTokenBalanceResult> {
    nftAndTokenValidator(config, qnGetWalletTokenBalanceInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getWalletTokenBalance';
        params: QNGetWalletTokenBalanceMethod['Parameters'];
      },
      QNGetWalletTokenBalanceResult
    >({
      method: 'qn_getWalletTokenBalance',
      params: [args],
    });
    return response;
  },

  async qn_getWalletTokenTransactions(
    args: QNGetWalletTokenTransactionsInput
  ): Promise<QNGetWalletTokenTransactionsResult> {
    nftAndTokenValidator(config, qnGetWalletTokenTransactionsInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_getWalletTokenTransactions';
        params: QNGetWalletTokenTransactionsMethod['Parameters'];
      },
      QNGetWalletTokenTransactionsResult
    >({
      method: 'qn_getWalletTokenTransactions',
      params: [args],
    });
    return response;
  },
});
