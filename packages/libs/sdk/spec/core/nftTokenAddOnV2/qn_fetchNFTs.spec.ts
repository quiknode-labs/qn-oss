import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qnFetchNFTs', () => {
  it('fetches NFTs with just a wallet', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTs',
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
                "collectionAddress": "0x0447433bd197f03be984a6053241ae8d347c5539",
                "collectionName": "LogicBots",
                "collectionTokenId": "292",
                "description": "RobotADay  
          Logic_Bot 307  
          2023/5/29

          \\"Strange Attractor\\"  
          Inspired by Track 5 from \\"Fractal Canyons\\" by LogicBeach  
           https://open.spotify.com/album/5eoRkx0N4gzc7QlzuD8fAk?si=ozuHUYvlSzmAPpdOdIhiEA",
                "imageUrl": "https://arweave.net/bnHxrwiCsP6HFLNW3XkEya_YvkPcD4usoFd3kb2zL5Q",
                "name": "307",
                "network": "MAINNET",
                "traits": Array [
                  Object {
                    "trait_type": "Artist",
                    "value": "logicbeach",
                  },
                ],
              },
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2c4e64832208db7dc0a416a2bc46428ed9de6e1f",
                "collectionName": "APE Mysterybox NFT",
                "collectionTokenId": "1",
                "description": "If you received this NFT you are the lucky owner of a APE Mysterybox NFT! Holders of the APE Mysterybox NFT can exchange this for APE rewards. For more information visit: https://apy-apecoin.com",
                "imageUrl": "https://ipfs.io/ipfs/QmQKR5TTq3honjFZNHHVGidwsPB7vAv59DYfWqzDsZZNfm",
                "name": "APE Mysterybox NFT",
                "network": "MAINNET",
                "traits": Array [],
              },
            ],
            "ensName": null,
            "owner": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
            "pageNumber": 1,
            "totalItems": 85,
            "totalPages": 43,
          }
        `);
      }
    );
  });

  it('fetches NFTs with a wallet and contracts', async () => {
    await withPolly(
      {
        recordingName: 'core-qnFetchNFTs-walletAndContracts',
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
                "collectionTokenId": "3734",
                "description": "",
                "imageUrl": "https://quicknode-content.quicknode-ipfs.com/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/3734.png",
                "name": "Loopy Donut #3734",
                "network": "MAINNET",
              },
              Object {
                "chain": "ETH",
                "collectionAddress": "0x2106c00ac7da0a3430ae667879139e832307aeaa",
                "collectionName": "Loopy Donuts",
                "collectionTokenId": "3972",
                "description": "",
                "imageUrl": "https://quicknode-content.quicknode-ipfs.com/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/3972.png",
                "name": "Loopy Donut #3972",
                "network": "MAINNET",
              },
            ],
            "ensName": null,
            "owner": "0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6",
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
