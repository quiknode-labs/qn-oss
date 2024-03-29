import { z } from 'zod';
import { isEvmAddress } from '../../../../lib/validation/validators';
import { type SimplifyType } from '../../../../lib/types';

export const qnFetchNFTCollectionDetailsInputSchema = z
  .object({
    contracts: z.array(isEvmAddress),
  })
  .strict();

export type QNFetchNFTCollectionDetailsInput = z.infer<
  typeof qnFetchNFTCollectionDetailsInputSchema
>;

type RPCNftCollectionDetails = {
  name: string;
  address: string;
  description: string;
  erc1155: boolean;
  erc721: boolean;
  totalSupply: number;
  circulatingSupply: number;
  genesisBlock: number | null;
  genesisTransaction: string | null;
};

export type QNFetchNFTCollectionDetailsResult = RPCNftCollectionDetails[];

export type QNFetchNFTCollectionDetailsMethod = {
  Method: 'qn_fetchNFTCollectionDetails';
  Parameters: [QNFetchNFTCollectionDetailsInput];
  ReturnType: SimplifyType<QNFetchNFTCollectionDetailsResult>;
};
