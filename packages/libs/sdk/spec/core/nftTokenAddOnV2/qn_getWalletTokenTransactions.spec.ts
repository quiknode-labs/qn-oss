import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getWalletTokenTransactions', () => {
  it('fetches wallet token transactions with a valid wallet and contract address', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenTransactions',
        recordIfMissing: false,
      },
      async () => {
        const data = await core.client.qn_getWalletTokenTransactions({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "blockNumber": "16443123",
                "decimals": "18",
                "name": "Wrapped Ether",
                "quantityIn": "0",
                "quantityOut": "39750000000000000",
                "symbol": "WETH",
                "timestamp": "2023-01-19T20:05:35.000Z",
                "totalBalance": "-39750000000000000",
                "transactionHash": "0xea0103e8e6deeed812e81ff81b384faa04bb173c759b08bfa8fae89c9026d059",
              },
            ],
            "token": Object {
              "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "decimals": "18",
              "genesisBlock": null,
              "genesisTransaction": null,
              "name": "Wrapped Ether",
              "symbol": "WETH",
            },
            "totalItems": 3,
            "totalPages": 3,
          }
        `);
      }
    );
  });

  it('fetches wallet token transactions iterating over two pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenTransactions-pagination',
        recordIfMissing: false,
      },
      async () => {
        let data = await core.client.qn_getWalletTokenTransactions({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          perPage: 1,
          page: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "blockNumber": "16443123",
                "decimals": "18",
                "name": "Wrapped Ether",
                "quantityIn": "0",
                "quantityOut": "39750000000000000",
                "symbol": "WETH",
                "timestamp": "2023-01-19T20:05:35.000Z",
                "totalBalance": "-39750000000000000",
                "transactionHash": "0xea0103e8e6deeed812e81ff81b384faa04bb173c759b08bfa8fae89c9026d059",
              },
            ],
            "token": Object {
              "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "decimals": "18",
              "genesisBlock": null,
              "genesisTransaction": null,
              "name": "Wrapped Ether",
              "symbol": "WETH",
            },
            "totalItems": 3,
            "totalPages": 3,
          }
        `);

        data = await core.client.qn_getWalletTokenTransactions({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          perPage: 1,
          page: 2,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 2,
            "paginatedItems": Array [
              Object {
                "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "blockNumber": "16443123",
                "decimals": "18",
                "name": "Wrapped Ether",
                "quantityIn": "0",
                "quantityOut": "79500000000000000",
                "symbol": "WETH",
                "timestamp": "2023-01-19T20:05:35.000Z",
                "totalBalance": "-79500000000000000",
                "transactionHash": "0xea0103e8e6deeed812e81ff81b384faa04bb173c759b08bfa8fae89c9026d059",
              },
            ],
            "token": Object {
              "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
              "decimals": "18",
              "genesisBlock": null,
              "genesisTransaction": null,
              "name": "Wrapped Ether",
              "symbol": "WETH",
            },
            "totalItems": 3,
            "totalPages": 3,
          }
        `);
      }
    );
  });

  it('throws an error when no wallet address is provided', async () => {
    const input: any = {
      contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    };
    await expect(
      core.client.qn_getWalletTokenTransactions(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: Required"`
    );
  });

  it('throws an error when no contract address is provided', async () => {
    const input: any = {
      address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
    };
    await expect(
      core.client.qn_getWalletTokenTransactions(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contract: Required"`
    );
  });

  it('throws an error when invalid wallet address is provided', async () => {
    const input: any = {
      address: 'invalidwalletaddress',
      contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    };
    await expect(
      core.client.qn_getWalletTokenTransactions(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: String must contain exactly 42 character(s), address: Invalid input: must start with \\"0x\\", address: Not a valid address"`
    );
  });

  it('throws an error when invalid contract address is provided', async () => {
    const input: any = {
      address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
      contract: 'invalidcontractaddress',
    };
    await expect(
      core.client.qn_getWalletTokenTransactions(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contract: String must contain exactly 42 character(s), contract: Invalid input: must start with \\"0x\\", contract: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_getWalletTokenTransactions(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: Required, contract: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
