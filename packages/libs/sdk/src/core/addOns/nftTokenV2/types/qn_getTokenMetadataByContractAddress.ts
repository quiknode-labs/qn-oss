import { z } from 'zod';
import { isEvmAddress } from '../../../../lib/validation/validators';
import { type SimplifyType } from '../../../../../src/api/utils/helpers';

export const qnGetTokenMetadataByCAInputSchema = z.object({
  contract: isEvmAddress,
});

export type QNGetTokenMetadataByCAInput = z.infer<
  typeof qnGetTokenMetadataByCAInputSchema
>;

type RPCTokenMetadata = {
  name: string;
  symbol: string | null;
  contractAddress: string;
  decimals: string | null;
  genesisBlock: string | null;
  genesisTransaction: string | null;
};

export type QNGetTokenMetadataByCAResult = RPCTokenMetadata[];

export type QNGetTokenMetadataByCAMethod = {
  Method: 'qn_getTokenMetadataByContractAddress';
  Parameters: [QNGetTokenMetadataByCAInput];
  ReturnType: SimplifyType<QNGetTokenMetadataByCAResult>;
};
