import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_verifyNFTsOwner', () => {
  it('verifies NFT ownership with a wallet and contracts', async () => {
    await withPolly(
      {
        recordingName: 'core-qnVerifyNFTsOwner',
        recordIfMissing: true,
      },
      async () => {
        const data = await core.client.qn_verifyNFTsOwner({
          wallet: '0x91b51c173a4bdaa1a60e234fc3f705a16d228740',
          contracts: [
            '0x2106c00ac7da0a3430ae667879139e832307aeaa:3643',
            '0xd07dc4262bcdbf85190c01c996b4c06a461d2430:133803',
          ],
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "assets": Array [
              "0x2106c00ac7da0a3430ae667879139e832307aeaa:3643",
              "0xd07dc4262bcdbf85190c01c996b4c06a461d2430:133803",
            ],
            "owner": "0x91b51c173a4bdaa1a60e234fc3f705a16d228740",
          }
        `);
      }
    );
  });

  it('throws an error when no wallet is provided', async () => {
    const input: any = {
      contracts: ['0x2106c00ac7da0a3430ae667879139e832307aeaa:3643'],
    };
    await expect(
      core.client.qn_verifyNFTsOwner(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required"`
    );
  });

  it('throws an error when no contracts are provided', async () => {
    const input: any = {
      wallet: '0x91b51c173a4bdaa1a60e234fc3f705a16d228740',
    };
    await expect(
      core.client.qn_verifyNFTsOwner(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contracts: Required"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_verifyNFTsOwner(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required, contracts: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
