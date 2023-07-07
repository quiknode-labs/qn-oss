import { z } from 'zod';
import { RPCTokenMetadata } from './shared';
import { rpcPaginationParams } from '../../../../lib/validation/validators';

export const qnGetTokenMetadataBySymbolInputSchema = z
  .object({
    symbol: z.string(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNGetTokenMetadataBySymbolInput = z.infer<
  typeof qnGetTokenMetadataBySymbolInputSchema
>;

export type QNGetTokenMetadataBySymbolResult = {
  tokens: RPCTokenMetadata[];
};

export type QNGetTokenMetadataBySymbolMethod = {
  Method: 'qn_getTokenMetadataBySymbol';
  Parameters: [QNGetTokenMetadataBySymbolInput];
  ReturnType: QNGetTokenMetadataBySymbolResult;
};
