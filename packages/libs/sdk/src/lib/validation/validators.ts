import { z, ZodTypeAny } from 'zod';
import { CodegenContractStandard } from '../../api/graphql/generatedTypes';

export const isEvmAddress = z
  .string()
  .length(42) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Not a valid ethereum address');

function fullOperators(baseType: ZodTypeAny) {
  return z.object({
    eq: baseType.optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    in: z.array(z.string()).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    notIn: z.array(z.string()).optional(),
  });
}

// Define your values as an array with a 'const' assertion
const contractStandards = ['ERC20', 'ERC721', 'ERC1155'] as const;

// get all values in contractStandards
type DerivedContractStandards = (typeof contractStandards)[number];

type IsEqual<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;
type AssertEqual<T, U> = IsEqual<T, U> extends true ? true : never;
type _assertion = AssertEqual<
  DerivedContractStandards,
  CodegenContractStandard
>;
const _test: _assertion = true;

// Define your Zod enum using the array
const contractStandardSchema = z.enum(contractStandards);

function limitedOperators(baseType: ZodTypeAny) {
  return z.object({
    eq: z.string().optional(),
    in: z.array(z.string()).optional(),
    notIn: z.array(z.string()).optional(),
  });
}

const tokenEventFilters = z.object({
  blockNumber: fullOperators(z.string()).optional(),
  contractAddress: limitedOperators(isEvmAddress).optional(),
  contractStandard: limitedOperators(contractStandardSchema).optional(),
  fromAddress: stringLimitedOperators.optional(),
  marketplace: stringLimitedOperators.optional(),
  timestamp: stringFullOperators.optional(),
  toAddress: stringLimitedOperators.optional(),
  transactionHash: stringLimitedOperators.optional(),
  type: stringLimitedOperators.optional(),
  walletAddress: stringLimitedOperators.optional(),
});
