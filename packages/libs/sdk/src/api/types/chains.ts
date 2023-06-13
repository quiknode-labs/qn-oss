import { z } from 'zod';

export const supportedChains = [
  'ethereum',
  'polygon',
  'ethereumSepolia',
] as const;

// Infer the type from the array
export type ChainName = (typeof supportedChains)[number];

export const supportedChainInput = z.object({
  chain: z.enum(supportedChains).optional(),
});
