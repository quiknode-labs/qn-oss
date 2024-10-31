import QuickNode from './client';
import Core from './core';
import { Solana, SolanaClientFactory } from './solana';
import * as viem from 'viem';
// eslint-disable-next-line @nx/enforce-module-boundaries
import * as solanaWeb3 from '@solana/web3.js';

export { Core, viem, Solana, solanaWeb3, SolanaClientFactory };

export * from './core/exportedTypes';
export * from './solana/v1';
export * from './solana/v2';
export * from './solana/shared';
export * from './lib/errors';

export default QuickNode;
