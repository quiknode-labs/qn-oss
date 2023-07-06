import { z } from 'zod';
import { isEvmAddress } from '../../../../lib/validation/validators';
import { type SimplifyType } from '../../../../../src/api/utils/helpers';

export const qnFetchNFTCollectionDetailsInputSchema = z
  .object({
    contracts: z.array(isEvmAddress),
  })
  .strict();

export type QNFetchNFTCollectionDetailsInput = z.infer<
  typeof qnFetchNFTCollectionDetailsInputSchema
>;

export type NftCollectionDetailsRPCResult = {
  name: string;
  address: string;
  description: string;
  erc1155: boolean;
  erc721: boolean;
  totalSupply: number;
  circulatingSupply: number;
  genesisBlock: number;
  genesisTransaction: string;
};

export type QNFetchNFTCollectionDetailsResponse =
  NftCollectionDetailsRPCResult[];

export type QNFetchNFTCollectionDetailsMethod = {
  Method: 'qn_fetchNFTCollectionDetails';
  Parameters: [QNFetchNFTCollectionDetailsInput];
  ReturnType: SimplifyType<QNFetchNFTCollectionDetailsResponse>;
};
