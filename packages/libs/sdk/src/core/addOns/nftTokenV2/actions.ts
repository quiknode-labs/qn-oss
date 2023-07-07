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
  type QNFetchNFTsResponse,
  type QNFetchNFTMethod,
  qnFetchNFTInputSchema,
} from './types/qn_fetchNFTs';
import {
  QNFetchNFTCollectionDetailsMethod,
  QNFetchNFTCollectionDetailsInput,
  QNFetchNFTCollectionDetailsResponse,
  qnFetchNFTCollectionDetailsInputSchema,
} from './types/qn_fetchNFTCollectionDetails';
import {
  QNFetchNFTsByCollectionMethod,
  QNFetchNFTsByCollectionInput,
  QNFetchNFTsByCollectionResult,
  qnFetchNFTsByCollectionInputSchema,
} from './types/qn_fetchNFTsByCollection';
import {
  QNGetTransfersByNFTMethod,
  QNGetTransfersByNFTInput,
  QNGetTransfersByNFTResult,
  qnGetTransfersByNFTInputSchema,
} from './types/qn_getTransfersByNFT';
import {
  QNVerifyNFTsByOwnerMethod,
  QNVerifyNFTsOwnerInput,
  QNVerifyNFTsOwnerResult,
  qnVerifyNFTsOwnerInputSchema,
} from './types/qn_verifyNFTsOwner';
import { nextTick } from 'process';

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
  ): Promise<QNFetchNFTCollectionDetailsResponse> {
    nftAndTokenValidator(config, qnFetchNFTCollectionDetailsInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      {
        method: 'qn_fetchNFTCollectionDetails';
        params: QNFetchNFTCollectionDetailsMethod['Parameters'];
      },
      QNFetchNFTCollectionDetailsResponse
    >({
      method: 'qn_fetchNFTCollectionDetails',
      params: [args],
    });
    return response;
  },

  async qn_fetchNFTs(args: QNFetchNFTInput): Promise<QNFetchNFTsResponse> {
    nftAndTokenValidator(config, qnFetchNFTInputSchema, args);
    const response = await client.request<
      NFTAndTokenSchema,
      { method: 'qn_fetchNFTs'; params: QNFetchNFTMethod['Parameters'] },
      QNFetchNFTsResponse
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
});
