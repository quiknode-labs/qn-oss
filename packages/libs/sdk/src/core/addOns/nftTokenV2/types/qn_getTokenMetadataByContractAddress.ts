import { z } from 'zod';
import { isEvmAddress } from '../../../../lib/validation/validators';
import { type SimplifyType } from '../../../../../src/api/utils/helpers';
import { RPCTokenMetadata } from './shared';

export const qnGetTokenMetadataByCAInputSchema = z
  .object({
    contract: isEvmAddress,
  })
  .strict();

export type QNGetTokenMetadataByCAInput = z.infer<
  typeof qnGetTokenMetadataByCAInputSchema
>;

export type QNGetTokenMetadataByCAResult = RPCTokenMetadata[];

export type QNGetTokenMetadataByCAMethod = {
  Method: 'qn_getTokenMetadataByContractAddress';
  Parameters: [QNGetTokenMetadataByCAInput];
  ReturnType: SimplifyType<QNGetTokenMetadataByCAResult>;
};
