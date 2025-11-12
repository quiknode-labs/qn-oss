import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getWalletTokenTransactions', () => {
  it('fetches wallet token transactions with a valid wallet and contract address', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenTransactions',
      },
      async () => {
        const data = await core.client.qn_getWalletTokenTransactions({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contract: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "address": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
            "ensName": null,
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "blockNumber": "23256301",
                "decimalReceivedAmount": "0",
                "decimalSentAmount": "0.0000001",
                "fromAddress": "0xfdb30018891e5b03397d9f4ce8d8ec8e12150621",
                "logIndex": 325,
                "receivedAmount": "0",
                "receivedTokenContractAddress": null,
                "sentAmount": "100000000000",
                "sentTokenContractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "timestamp": "2025-08-30T20:19:35.000Z",
                "toAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "transactionHash": "0x1b54d38dc4ea15baec0e792ae7ef2f4862269717e9de4fb7cd5a48526730032b",
                "type": "TRANSFER",
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
            "totalItems": 9,
            "totalPages": 9,
          }
        `);
      }
    );
  });

  it('fetches wallet token transactions iterating over two pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetWalletTokenTransactions-pagination',
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
            "address": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
            "ensName": null,
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "blockNumber": "23256301",
                "decimalReceivedAmount": "0",
                "decimalSentAmount": "0.0000001",
                "fromAddress": "0xfdb30018891e5b03397d9f4ce8d8ec8e12150621",
                "logIndex": 325,
                "receivedAmount": "0",
                "receivedTokenContractAddress": null,
                "sentAmount": "100000000000",
                "sentTokenContractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "timestamp": "2025-08-30T20:19:35.000Z",
                "toAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "transactionHash": "0x1b54d38dc4ea15baec0e792ae7ef2f4862269717e9de4fb7cd5a48526730032b",
                "type": "TRANSFER",
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
            "totalItems": 9,
            "totalPages": 9,
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
            "address": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
            "ensName": null,
            "pageNumber": 2,
            "paginatedItems": Array [
              Object {
                "blockNumber": "19689937",
                "decimalReceivedAmount": "0",
                "decimalSentAmount": "0.07075",
                "fromAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "logIndex": 229,
                "receivedAmount": "0",
                "receivedTokenContractAddress": null,
                "sentAmount": "70750000000000000",
                "sentTokenContractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "timestamp": "2024-04-19T13:59:47.000Z",
                "toAddress": "0x4b62fa30fea125e43780dc425c2be5acb4ba743b",
                "transactionHash": "0x23ee6ff532c013e208701c56b690f64f5dd01265874a7ee56d6da1aec18d231e",
                "type": "TRANSFER",
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
            "totalItems": 9,
            "totalPages": 9,
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
