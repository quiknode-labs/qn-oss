import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getTokenMetadataByContractAddress', () => {
  it('fetches token metadata with a contract', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTokenMetadataByContractAddress',
        recordIfMissing: false,
      },
      async () => {
        const data = await core.client.qn_getTokenMetadataByContractAddress({
          contract: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "contractAddress": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            "decimals": "18",
            "genesisBlock": "7605604",
            "genesisTransaction": "0x730627aaf76922ef8a46fcf511f088c4f613872a5e4821d382f28511b15e58d1",
            "name": "Matic Token",
            "symbol": "MATIC",
          }
        `);
      }
    );
  });

  it('throws an error when no contract is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_getTokenMetadataByContractAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contract: Required"`
    );
  });

  it('throws an error when invalid contract is provided', async () => {
    const input: any = {
      contract: '0x12345678',
    };
    await expect(
      core.client.qn_getTokenMetadataByContractAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contract: String must contain exactly 42 character(s), contract: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_getTokenMetadataByContractAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contract: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
