import { type SimplifyType } from '../../../../lib/types';
import { z } from 'zod';
import {
  isEvmAddress,
  rpcPaginationParams,
} from '../../../../lib/validation/validators';

export const qnGetWalletTokenBalanceInputSchema = z
  .object({
    wallet: isEvmAddress,
    contracts: z.array(isEvmAddress).nullish(),
  })
  .merge(rpcPaginationParams)
  .strict();

export type QNGetWalletTokenBalanceInput = z.infer<
  typeof qnGetWalletTokenBalanceInputSchema
>;

type RPCWalletTokenBalance = {
  quantityIn: string;
  quantityOut: string;
  name: string | null;
  symbol: string | null;
  decimals: string | null;
  address: string;
  totalBalance: string;
};
export type QNGetWalletTokenBalanceResult = {
  result: RPCWalletTokenBalance[];
  totalItems: number;
  totalPages: number;
  pageNumber: number;
};

export type QNGetWalletTokenBalanceMethod = {
  Method: 'qn_getWalletTokenBalance';
  Parameters: [QNGetWalletTokenBalanceInput];
  ReturnType: SimplifyType<QNGetWalletTokenBalanceResult>;
};
