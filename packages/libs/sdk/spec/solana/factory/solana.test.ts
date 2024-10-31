import { ClientVersion, SolanaClientFactory } from '../../../src';

describe('solana client factory', () => {
    const endpointUrl = process.env['QUICKNODE_SOLANA_ENDPOINT_URL'] ||
        'https://thisisnotasolanaendpoint.example.com';

    it('should create a v1 client', () => {
        const client = SolanaClientFactory.createClient(ClientVersion.V1, {
            endpointUrl
        });
        expect(client).toBeInstanceOf(Object);
    });

    it('should create a v2 client', () => {
        const client = SolanaClientFactory.createClient(ClientVersion.V2, {
            endpointUrl
        });
        expect(client).toBeInstanceOf(Object);
    });
});

// TODO: Add more tests for all functions for both versions