import { z } from 'zod';

export const isEvmAddress = z
  .string()
  .length(42) // Using built-in function for better error messages
  .startsWith('0x') // Using built-in function for better error messages
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Not a valid address');

export const rpcPaginationParams = z
  .object({
    perPage: z.number().positive().nullish(),
    page: z.number().positive().nullish(),
  })
  .strict();
