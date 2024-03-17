import { Solana, SolanaClientArgs } from '../../src';

const solanaOpts: SolanaClientArgs = {
  endpointUrl:
    process.env['QUICKNODE_SOLANA_ENDPOINT_URL'] ||
    'thisisnotanendpoint.example.com',
};

export const solana = new Solana(solanaOpts);
