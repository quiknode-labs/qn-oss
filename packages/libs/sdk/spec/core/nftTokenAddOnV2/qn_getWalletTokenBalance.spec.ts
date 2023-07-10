import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getWalletTokenBalance', () => {
  it('fetches wallet token balance with a wallet address', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenBalance',
        recordIfMissing: true,
      },
      async () => {
        const data = await core.client.qn_getWalletTokenBalance({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "result": Array [
              Object {
                "address": "0x009e9d89bfaaf0d539450e7b8908703011704993",
                "decimals": "6",
                "name": "APE/ETH",
                "quantityIn": "3289000000",
                "quantityOut": "0",
                "symbol": "claim at [apepool.org]",
                "totalBalance": "3289000000",
              },
            ],
            "totalItems": 84,
            "totalPages": 84,
          }
        `);
      }
    );
  });

  it('fetches wallet token balance with a wallet address and contracts', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenBalance-withContracts',
        recordIfMissing: true,
      },
      async () => {
        const data = await core.client.qn_getWalletTokenBalance({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contracts: ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'],
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "result": Array [
              Object {
                "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
                "decimals": "18",
                "name": "Uniswap",
                "quantityIn": "38991442340000000000",
                "quantityOut": "0",
                "symbol": "UNI",
                "totalBalance": "38991442340000000000",
              },
            ],
            "totalItems": 1,
            "totalPages": 1,
          }
        `);
      }
    );
  });

  it('fetches wallet token balance iterating over two pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenBalance-pagination',
        recordIfMissing: true,
      },
      async () => {
        let data = await core.client.qn_getWalletTokenBalance({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 1,
          page: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "result": Array [
              Object {
                "address": "0x009e9d89bfaaf0d539450e7b8908703011704993",
                "decimals": "6",
                "name": "APE/ETH",
                "quantityIn": "3289000000",
                "quantityOut": "0",
                "symbol": "claim at [apepool.org]",
                "totalBalance": "3289000000",
              },
            ],
            "totalItems": 84,
            "totalPages": 84,
          }
        `);

        data = await core.client.qn_getWalletTokenBalance({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 1,
          page: 2,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 2,
            "result": Array [
              Object {
                "address": "0x02ba9b528425f9de08f961b88a10b03be8b8b998",
                "decimals": "18",
                "name": "MASQ",
                "quantityIn": "12000000000000000000000",
                "quantityOut": "0",
                "symbol": "MASQ",
                "totalBalance": "12000000000000000000000",
              },
            ],
            "totalItems": 84,
            "totalPages": 84,
          }
        `);
      }
    );
  });

  it('throws an error when no wallet address is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_getWalletTokenBalance(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required"`
    );
  });

  it('throws an error when invalid wallet address is provided', async () => {
    const input: any = {
      wallet: 'invalidwalletaddress',
    };
    await expect(
      core.client.qn_getWalletTokenBalance(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: String must contain exactly 42 character(s), wallet: Invalid input: must start with \\"0x\\", wallet: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_getWalletTokenBalance(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
