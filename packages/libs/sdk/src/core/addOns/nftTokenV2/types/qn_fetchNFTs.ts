import { z } from 'zod';
import { type SimplifyType } from '../../../../../src/api/utils/helpers';
import { isEvmAddress } from '../../../../lib/validation/validators';
import { RpcNftAsset } from './shared';

export const qnFetchNFTInputSchema = z
  .object({
    wallet: isEvmAddress,
    contracts: z.array(isEvmAddress).nullish(),
    page: z.number().positive().nullish(),
    perPage: z.number().positive().nullish(),
    omitFields: z.array(z.string()).nullish(),
  })
  .strict();

export type QNFetchNFTInput = z.infer<typeof qnFetchNFTInputSchema>;

type QNFetchNFTsResult = {
  owner: string;
  assets: RpcNftAsset[];
  totalPages: number;
  totalItems: number;
  pageNumber: number;
};

export type QNFetchNFTsResponse = QNFetchNFTsResult[];

export type QNFetchNFTMethod = {
  Method: 'qn_fetchNFTs';
  Parameters: [QNFetchNFTInput];
  ReturnType: SimplifyType<QNFetchNFTsResponse>;
};
