import { type SimplifyType } from '../../../../../src/api/utils/helpers';
import { z } from 'zod';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';

export const qnVerifyNFTsOwnerInputSchema = z
  .object({
    wallet: isEvmAddress,
    contracts: z.array(z.string()), // TODO: make this enforce the address:id format
  })
  .strict();

export type QNVerifyNFTsOwnerInput = z.infer<
  typeof qnVerifyNFTsOwnerInputSchema
>;

export type QNVerifyNFTsOwnerResult = {
  owner: string;
  assets: string[];
};

export type QNVerifyNFTsByOwnerMethod = {
  Method: 'qn_verifyNFTsOwner';
  Parameters: [QNVerifyNFTsOwnerInput];
  ReturnType: SimplifyType<QNVerifyNFTsOwnerResult>;
};
