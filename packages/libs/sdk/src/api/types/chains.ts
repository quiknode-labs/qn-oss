export const supportedChains = [
  'ethereum',
  'polygon',
  'ethereumSepolia',
] as const;

// Infer the type from the array
export type ChainName = (typeof supportedChains)[number];
