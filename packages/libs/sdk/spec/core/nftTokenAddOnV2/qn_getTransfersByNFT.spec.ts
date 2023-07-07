import { QNCoreClient } from '../../../src';
import withPolly from '../../testSetup/pollyTestSetup';
import { createCoreTestClient } from '../client';

let coreClient: QNCoreClient;
beforeAll(async () => {
  coreClient = await createCoreTestClient();
});

describe('client.qn_getTransfersByNFT', () => {
  it('fetches transfers by NFT with collection and collectionTokenId', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTransfersByNFT',
        recordIfMissing: true,
      },
      async () => {
        const data = await coreClient.qn_getTransfersByNFT({
          collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          collectionTokenId: '1',
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "collection": "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
            "pageNumber": 1,
            "totalItems": 1,
            "totalPages": 1,
            "transfers": Array [
              Object {
                "blockNumber": 13148789,
                "date": "2021-09-02T21:40:27.000Z",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0xb3cfbf8dc8f5d2f6607d8d8e251f7aae62a5d10a",
                "txHash": "0xe46fff4f7353c6c9a07c2bbf9eb89733237c62ec037c7dfe77947cd5e94aad90",
              },
            ],
          }
        `);
      }
    );
  });

  it('fetches transfers by NFT over multiple pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTransfersByNFT-multiplePages',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await coreClient.qn_getTransfersByNFT({
          collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          collectionTokenId: '400',
          page: 1,
          perPage: 1,
        });
        expect(data1).toMatchInlineSnapshot(`
          Object {
            "collection": "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
            "pageNumber": 1,
            "totalItems": 2,
            "totalPages": 2,
            "transfers": Array [
              Object {
                "blockNumber": 13149960,
                "date": "2021-09-03T02:03:48.000Z",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1d7b274335500aa8e4d30d00fb25250668d75023",
                "txHash": "0xaacbbe3ec7997b8bdbe81c93fedc202734dc5609173ba98915e4a6828c7b1359",
              },
            ],
          }
        `);

        const data2 = await coreClient.qn_getTransfersByNFT({
          collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          collectionTokenId: '400',
          page: 2,
          perPage: 1,
        });
        expect(data2).toMatchInlineSnapshot(`
          Object {
            "collection": "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
            "pageNumber": 2,
            "totalItems": 2,
            "totalPages": 2,
            "transfers": Array [
              Object {
                "blockNumber": 13430296,
                "date": "2021-10-16T17:05:53.000Z",
                "from": "0x1d7b274335500aa8e4d30d00fb25250668d75023",
                "to": "0xaf4b2be614272ad87b8b6946b2661c241b9ea592",
                "txHash": "0x86743fb5a57c118232f64316d3336c20aa161c1a3705c1998d2d817bd3b06f67",
              },
            ],
          }
        `);
      }
    );
  });

  it('throws an error when no collection is provided', async () => {
    const input: any = {
      collectionTokenId: '1',
    };
    await expect(
      coreClient.qn_getTransfersByNFT(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collection: Required"`
    );
  });

  it('throws an error when no collectionTokenId is provided', async () => {
    const input: any = {
      collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    };
    await expect(
      coreClient.qn_getTransfersByNFT(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collectionTokenId: Required"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      coreClient.qn_getTransfersByNFT(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collection: Required, collectionTokenId: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
