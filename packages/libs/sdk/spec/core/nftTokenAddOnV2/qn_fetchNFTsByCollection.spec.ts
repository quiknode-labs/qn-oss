import { QNCoreClient } from '../../../src';
import withPolly from '../../testSetup/pollyTestSetup';
import { createCoreTestClient } from '../client';

let coreClient: QNCoreClient;
beforeAll(async () => {
  coreClient = await createCoreTestClient();
});

describe('client.qn_fetchNFTsByCollection', () => {
  it('fetches collection details with just collection param', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTsByCollection-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await coreClient.qn_fetchNFTsByCollection({
          collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "collection": "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
            "pageNumber": 1,
            "tokens": Array [
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
                "collectionName": "Loopy Donuts",
                "collectionTokenId": "0",
                "description": "",
                "imageUrl": "https://quicknode.mypinata.cloud/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/0.png",
                "name": "Loopy Donut #0",
                "network": "MAINNET",
                "traits": Array [
                  Object {
                    "trait_type": "Background",
                    "value": "Pink",
                  },
                  Object {
                    "trait_type": "Base",
                    "value": "Donut Body",
                  },
                  Object {
                    "trait_type": "Glaze",
                    "value": "Caramel",
                  },
                  Object {
                    "trait_type": "Headgear",
                    "value": "Liberty",
                  },
                  Object {
                    "trait_type": "Eyes",
                    "value": "Pretty Please",
                  },
                  Object {
                    "trait_type": "Accessory",
                    "value": "Arrow",
                  },
                ],
              },
            ],
            "totalItems": 10000,
            "totalPages": 10000,
          }
        `);
      }
    );
  });

  it('fetches collection details with collection and tokens param', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTsByCollection-withtokens',
        recordIfMissing: true,
      },
      async () => {
        const data = await coreClient.qn_fetchNFTsByCollection({
          collection: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokens: ['0'],
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "collection": "0x2106C00Ac7dA0A3430aE667879139E832307AeAa",
            "pageNumber": 1,
            "tokens": Array [
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
                "collectionName": "Loopy Donuts",
                "collectionTokenId": "0",
                "description": "",
                "imageUrl": "https://quicknode.mypinata.cloud/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/0.png",
                "name": "Loopy Donut #0",
                "network": "MAINNET",
                "traits": Array [
                  Object {
                    "trait_type": "Background",
                    "value": "Pink",
                  },
                  Object {
                    "trait_type": "Base",
                    "value": "Donut Body",
                  },
                  Object {
                    "trait_type": "Glaze",
                    "value": "Caramel",
                  },
                  Object {
                    "trait_type": "Headgear",
                    "value": "Liberty",
                  },
                  Object {
                    "trait_type": "Eyes",
                    "value": "Pretty Please",
                  },
                  Object {
                    "trait_type": "Accessory",
                    "value": "Arrow",
                  },
                ],
              },
            ],
            "totalItems": 1,
            "totalPages": 1,
          }
        `);
      }
    );
  });

  it('throws an error when no collection is provided', async () => {
    const input: any = {};
    await expect(
      coreClient.qn_fetchNFTsByCollection(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collection: Required"`
    );
  });
  it('throws an error when collection is invalid', async () => {
    await expect(
      coreClient.qn_fetchNFTsByCollection({
        collection: '123',
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collection: String must contain exactly 42 character(s), collection: Invalid input: must start with \\"0x\\", collection: Not a valid address"`
    );
  });
  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      coreClient.qn_fetchNFTsByCollection(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: collection: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
