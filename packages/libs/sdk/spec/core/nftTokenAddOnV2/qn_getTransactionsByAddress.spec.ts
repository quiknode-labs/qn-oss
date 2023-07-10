import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getTransactionsByAddress', () => {
  it('fetches transactions with an address', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTransactionsByAddress',
        recordIfMissing: true,
      },
      async () => {
        const data = await core.client.qn_getTransactionsByAddress({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "blockNumber": "17166949",
                "blockTimestamp": "2023-05-01T15:44:59.000Z",
                "contractAddress": null,
                "fromAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "toAddress": "0x9d90669665607f08005cae4a7098143f554c59ef",
                "transactionHash": "0x13a680b3899614265b0602569e592dafe4763f0acc9976d153b89abe8f646d5a",
                "transactionIndex": 137,
                "value": "2331000000000000",
              },
            ],
            "totalItems": 516,
            "totalPages": 516,
          }
        `);
      }
    );
  });

  it('fetches transactions iterating over two pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTransactionsByAddress-pagination',
        recordIfMissing: true,
      },
      async () => {
        const dataPage1 = await core.client.qn_getTransactionsByAddress({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          page: 1,
          perPage: 1,
        });
        expect(dataPage1).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "blockNumber": "17166949",
                "blockTimestamp": "2023-05-01T15:44:59.000Z",
                "contractAddress": null,
                "fromAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "toAddress": "0x9d90669665607f08005cae4a7098143f554c59ef",
                "transactionHash": "0x13a680b3899614265b0602569e592dafe4763f0acc9976d153b89abe8f646d5a",
                "transactionIndex": 137,
                "value": "2331000000000000",
              },
            ],
            "totalItems": 516,
            "totalPages": 516,
          }
        `);

        const dataPage2 = await core.client.qn_getTransactionsByAddress({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          page: 2,
          perPage: 1,
        });
        expect(dataPage2).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 2,
            "paginatedItems": Array [
              Object {
                "blockNumber": "16802538",
                "blockTimestamp": "2023-03-11T04:41:59.000Z",
                "contractAddress": null,
                "fromAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "toAddress": "0x881d40237659c251811cec9c364ef91dc08d300c",
                "transactionHash": "0xa5f3d56cf9cb43ea80e66eab9e49b5e6513f16b4d33ba67a74998ceb7644b4ed",
                "transactionIndex": 88,
                "value": "0",
              },
            ],
            "totalItems": 516,
            "totalPages": 516,
          }
        `);
      }
    );
  });

  it('can use fromBlock and toBlock arguments', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTransactionsByAddress-fromBlock',
        recordIfMissing: true,
      },
      async () => {
        const data = await core.client.qn_getTransactionsByAddress({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 1,
          fromBlock: 16802538,
          toBlock: 17655822,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "paginatedItems": Array [
              Object {
                "blockNumber": "17166949",
                "blockTimestamp": "2023-05-01T15:44:59.000Z",
                "contractAddress": null,
                "fromAddress": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
                "toAddress": "0x9d90669665607f08005cae4a7098143f554c59ef",
                "transactionHash": "0x13a680b3899614265b0602569e592dafe4763f0acc9976d153b89abe8f646d5a",
                "transactionIndex": 137,
                "value": "2331000000000000",
              },
            ],
            "totalItems": 2,
            "totalPages": 2,
          }
        `);
      }
    );
  });

  it('throws an error when no address is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_getTransactionsByAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: Required"`
    );
  });

  it('throws an error when invalid address is provided', async () => {
    const input: any = {
      address: 'invalidaddress',
    };
    await expect(
      core.client.qn_getTransactionsByAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: String must contain exactly 42 character(s), address: Invalid input: must start with \\"0x\\", address: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_getTransactionsByAddress(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: address: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
