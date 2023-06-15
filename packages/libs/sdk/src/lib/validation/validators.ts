import { z, ZodTypeAny } from 'zod';
import {
  isContractStandard,
  isMarketplace,
  isTokenTransferType,
} from './codegenDerivedValidators';
import { supportedChains } from '../../api/types/chains';
import { isValidENSAddress } from '../../api/utils/isValidENSAddress';

export const isEvmAddress = z
  .string()
  .length(42) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Not a valid address');

export const isENSAddress = z.string().refine((val) => isValidENSAddress(val));

export const isEvmTransactionHash = z
  .string()
  .length(66) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{64}$/, 'Not a valid transaction hash');

export const supportedChainInput = z
  .object({
    chain: z.enum(supportedChains).nullish(),
  })
  .strict();

function fullFilters<T extends ZodTypeAny>(baseType: T) {
  return z
    .object({
      eq: baseType.nullish(),
      gt: baseType.nullish(),
      gte: baseType.nullish(),
      in: z.array(baseType).nullish(),
      lt: baseType.nullish(),
      lte: baseType.nullish(),
      notIn: z.array(baseType).nullish(),
    })
    .strict();
}

function limitedFilters<T extends ZodTypeAny>(baseType: T) {
  return z
    .object({
      eq: baseType.nullish(),
      in: z.array(baseType).nullish(),
      notIn: z.array(baseType).nullish(),
    })
    .strict();
}

export const tokenEventFilters = z
  .object({
    blockNumber: fullFilters(z.number().positive()).nullish(),
    contractAddress: limitedFilters(isEvmAddress).nullish(),
    contractStandard: limitedFilters(isContractStandard).nullish(),
    fromAddress: limitedFilters(isEvmAddress).nullish(),
    marketplace: limitedFilters(isMarketplace).nullish(),
    timestamp: fullFilters(z.string().datetime({ offset: true })).nullish(), // TODO: check if this matches the graph API standard
    toAddress: limitedFilters(isEvmAddress).nullish(),
    transactionHash: limitedFilters(isEvmTransactionHash).nullish(),
    type: limitedFilters(isTokenTransferType).nullish(),
    walletAddress: limitedFilters(isEvmAddress).nullish(),
  })
  .strict();

export const transactionFilters = z
  .object({
    blockNumber: fullFilters(z.number().positive()).nullish(),
    fromAddress: isEvmAddress.nullish(),
    timestamp: fullFilters(z.string().datetime({ offset: true })).nullish(), // TODO: check if this matches the graph API standard
    toAddress: isEvmAddress.nullish(),
  })
  .strict();

export const gasPriceFilters = z
  .object({
    blockNumber: fullFilters(z.number().positive()).nullish(),
  })
  .strict();

export const paginationParams = z
  .object({
    before: z.string().nullish(),
    after: z.string().nullish(),
    first: z.number().positive().nullish(),
  })
  .strict();

export const baseEventsInput = z
  .object({
    filter: tokenEventFilters.nullish(),
  })
  .merge(paginationParams)
  .strict();

export const baseTransactionsInput = z
  .object({
    filter: transactionFilters.optional(),
  })
  .merge(paginationParams)
  .strict();
