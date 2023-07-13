import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_fetchNFTCollectionDetails', () => {
  it('fetches NFT collection details with contracts', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTCollectionDetails',
        recordIfMissing: false,
      },
      async () => {
        const data = await core.client.qn_fetchNFTCollectionDetails({
          contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
        });
        expect(data).toMatchInlineSnapshot(`
          Array [
            Object {
              "address": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
              "circulatingSupply": 9988,
              "description": "Loopy Donuts",
              "erc1155": false,
              "erc721": true,
              "genesisBlock": 13145256,
              "genesisTransaction": "0xcd0d897674123c1859c406b4e14f8a1a6dd5b8b8161bc7563d012e950a26301d",
              "name": "Loopy Donuts",
              "totalSupply": 10000,
            },
          ]
        `);
      }
    );
  });

  it('throws an error when no collection is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_fetchNFTCollectionDetails(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contracts: Required"`
    );
  });

  it('throws an error when collection is invalid', async () => {
    await expect(
      core.client.qn_fetchNFTCollectionDetails({
        contracts: ['hi'],
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contracts,0: String must contain exactly 42 character(s), contracts,0: Invalid input: must start with \\"0x\\", contracts,0: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_fetchNFTCollectionDetails(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: contracts: Required"`
    );
  });
});
