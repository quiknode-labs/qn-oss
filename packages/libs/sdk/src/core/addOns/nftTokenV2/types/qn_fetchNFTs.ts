import { z } from 'zod';
import { type SimplifyType } from '../../../../../src/api/utils/helpers';
import { isEvmAddress } from '../../../../lib/validation/validators';

export const qnFetchNFTInputSchema = z
  .object({
    id: z.string().nullish(),
    wallet: isEvmAddress,
    contracts: z.array(isEvmAddress),
    page: z.number().positive().nullish(),
    perPage: z.number().positive().nullish(),
    omitFields: z.array(z.string()).nullish(),
  })
  .strict();

export type QNFetchNFTInput = z.infer<typeof qnFetchNFTInputSchema>;

type NftTrait = {
  trait_type: string;
  value: string;
};

type NftAsset = {
  collectionName: string;
  collectionTokenId: string;
  collectionAddress: string;
  name: string;
  description: string;
  imageUrl: string;
  traits: NftTrait[];
  chain: string;
  network: string;
};

type QNFetchNFTsResult = {
  owner: string;
  assets: NftAsset[];
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
