import { z, ZodTypeAny } from 'zod';
import {
  isContractStandard,
  isMarketplace,
  isTokenTransferType,
} from './codegenDerivedValidators';
import { supportedChains } from '../../api/types/chains';

export const isEvmAddress = z
  .string()
  .length(42) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Not a valid address');

export const isEvmTransactionHash = z
  .string()
  .length(66) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{64}$/, 'Not a valid transaction hash');

export const supportedChainInput = z.object({
  chain: z.enum(supportedChains).nullish(),
});

function fullFilters(baseType: ZodTypeAny) {
  return z.object({
    eq: baseType.nullish(),
    gt: baseType.nullish(),
    gte: baseType.nullish(),
    in: z.array(baseType).nullish(),
    lt: baseType.nullish(),
    lte: baseType.nullish(),
    notIn: z.array(baseType).nullish(),
  });
}

function limitedFilters(baseType: ZodTypeAny) {
  return z.object({
    eq: baseType.nullish(),
    in: z.array(baseType).nullish(),
    notIn: z.array(baseType).nullish(),
  });
}

export const tokenEventFilters = z.object({
  blockNumber: fullFilters(z.string()).nullish(),
  contractAddress: limitedFilters(isEvmAddress).nullish(),
  contractStandard: limitedFilters(isContractStandard).nullish(),
  fromAddress: limitedFilters(isEvmAddress).nullish(),
  marketplace: limitedFilters(isMarketplace).nullish(),
  timestamp: fullFilters(z.string().datetime()).nullish(), // TODO: check if this matches the graph API standard
  toAddress: limitedFilters(isEvmAddress).nullish(),
  transactionHash: limitedFilters(isEvmTransactionHash).nullish(),
  type: limitedFilters(isTokenTransferType).nullish(),
  walletAddress: limitedFilters(isEvmAddress).nullish(),
});
