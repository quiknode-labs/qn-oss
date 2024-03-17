import { Solana, SolanaClientArgs } from '../../src';

const solanaOpts: SolanaClientArgs = {
  endpointUrl:
    process.env['QUICKNODE_SOLANA_ENDPOINT_URL'] ||
    'https://thisisnotanendpoint.example.com',
};

export const solana = new Solana(solanaOpts);
