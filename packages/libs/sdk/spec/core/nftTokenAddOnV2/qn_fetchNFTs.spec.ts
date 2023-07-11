import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qnFetchNFTs', () => {
  it('fetches NFTs with just a wallet', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTs',
        recordIfMissing: false,
      },
      async () => {
        const data = await core.client.qn_fetchNFTs({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          perPage: 2,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "assets": Array [
              Object {
                "chain": "ETH",
                "collectionAddress": "0xc1eab49cf9d2e23e43bcf23b36b2be14fc2f8838",
                "collectionName": "Mokens",
                "collectionTokenId": "330",
                "description": "",
                "imageUrl": "",
                "name": "",
                "network": "MAINNET",
                "traits": Array [],
              },
              Object {
                "chain": "ETH",
                "collectionAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
                "collectionName": "ENS: Ethereum Name Service",
                "collectionTokenId": "50685890871471191256342199015362929537282628462001704949203871531598631920212",
                "description": "",
                "imageUrl": "",
                "name": "",
                "network": "MAINNET",
                "traits": Array [],
              },
            ],
            "owner": "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6",
            "pageNumber": 1,
            "totalItems": 48,
            "totalPages": 24,
          }
        `);
      }
    );
  });

  it('fetches NFTs with a wallet and contracts', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTs-walletAndContracts',
        recordIfMissing: false,
      },
      async () => {
        const data = await core.client.qn_fetchNFTs({
          wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
          omitFields: ['traits'],
          perPage: 2,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "assets": Array [
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
                "collectionName": "Loopy Donuts",
                "collectionTokenId": "3972",
                "description": "",
                "imageUrl": "",
                "name": "Loopy Donut #3972",
                "network": "MAINNET",
              },
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
                "collectionName": "Loopy Donuts",
                "collectionTokenId": "9925",
                "description": "",
                "imageUrl": "https://quicknode.mypinata.cloud/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/9925.png",
                "name": "Loopy Donut #9925",
                "network": "MAINNET",
              },
            ],
            "owner": "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6",
            "pageNumber": 1,
            "totalItems": 3,
            "totalPages": 2,
          }
        `);
      }
    );
  });

  it('throws an error when no wallet is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_fetchNFTs(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required"`
    );
  });

  it('throws an error when wallet is invalid', async () => {
    const input: any = {
      wallet: '123',
    };
    await expect(
      core.client.qn_fetchNFTs(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: String must contain exactly 42 character(s), wallet: Invalid input: must start with \\"0x\\", wallet: Not a valid address"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_fetchNFTs(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: wallet: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });
});
