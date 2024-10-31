import { Blockhash } from "@solana/web3.js-v2";

export const DEFAULTS_V2 = {
    PLACEHOLDER_BLOCKHASH: {
        blockhash: '11111111111111111111111111111111' as Blockhash,
        lastValidBlockHeight: 0n as bigint,
    } as const,
} as const;
