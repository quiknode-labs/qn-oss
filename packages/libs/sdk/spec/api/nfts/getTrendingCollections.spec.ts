import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('getTrendingCollections', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getTrendingCollections-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getTrendingCollections({
          first: 2,
        });

        expect(data).toStrictEqual({
          results: [
            {
              address: '0x6339e5e072086621540d0362c4e3cea0d643e114',
              baseTokenUri: null,
              circulatingSupply: 15984,
              description: '"Scapepe"\n24 x 72 px',
              externalUrl: null,
              image: [
                {
                  height: 100,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 1200,
                },
              ],
              name: 'Opepen Edition',
              openseaMetadata: {
                isHidden: false,
                isVerified: true,
                unsafeSlug: 'opepen-edition',
              },
              symbol: 'OPEPEN',
              totalSupply: null,
              twitterUsername: 'jackbutcher',
            },
            {
              address: '0x9980b3aa61114b07a7604ffdc7c7d04bb6d8d735',
              baseTokenUri: null,
              circulatingSupply: null,
              description:
                'Walt’s Vault is a magical, hand-crafted collection that brings a new character and a nostalgic art form to life on the blockchain. Harkening back to the 1930s, the magic and storytelling of that time will be reflected in every way our community experiences the ownership of their characters. This collection pushes what is possible in the space and NFT’s as a whole.\n\nWe believe art and a little magic can still go a long way in this space.\n',
              externalUrl: 'https://waltsvault.xyz/',
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 1200,
                },
              ],
              name: 'Walts Vault',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'waltsvault-official',
              },
              symbol: 'WV',
              totalSupply: null,
              twitterUsername: 'WaltsVault_NFT',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });
      }
    );
  });

  it('can iterate and paginate through tokens', async () => {
    await withPolly(
      {
        recordingName: 'query-getTrendingCollections-iterate',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.nfts.getTrendingCollections({
          first: 2,
        });

        const data2 = await api.nfts.getTrendingCollections({
          first: 2,
          after: data1.pageInfo.endCursor,
        });

        expect(data1).toStrictEqual({
          results: [
            {
              address: '0x6339e5e072086621540d0362c4e3cea0d643e114',
              baseTokenUri: null,
              circulatingSupply: 15984,
              description: '"Scapepe"\n24 x 72 px',
              externalUrl: null,
              image: [
                {
                  height: 100,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/jpeg',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/token-images/ee6cf86adfa826df0b5c5a270be352545ba478e9',
                  width: 1200,
                },
              ],
              name: 'Opepen Edition',
              openseaMetadata: {
                isHidden: false,
                isVerified: true,
                unsafeSlug: 'opepen-edition',
              },
              symbol: 'OPEPEN',
              totalSupply: null,
              twitterUsername: 'jackbutcher',
            },
            {
              address: '0x9980b3aa61114b07a7604ffdc7c7d04bb6d8d735',
              baseTokenUri: null,
              circulatingSupply: null,
              description:
                'Walt’s Vault is a magical, hand-crafted collection that brings a new character and a nostalgic art form to life on the blockchain. Harkening back to the 1930s, the magic and storytelling of that time will be reflected in every way our community experiences the ownership of their characters. This collection pushes what is possible in the space and NFT’s as a whole.\n\nWe believe art and a little magic can still go a long way in this space.\n',
              externalUrl: 'https://waltsvault.xyz/',
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 1200,
                },
              ],
              name: 'Walts Vault',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'waltsvault-official',
              },
              symbol: 'WV',
              totalSupply: null,
              twitterUsername: 'WaltsVault_NFT',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });

        expect(data2).toStrictEqual({
          results: [
            {
              address: '0x4ebb2384cc1e86f578e37f2057b336b9027cb95a',
              baseTokenUri: null,
              circulatingSupply: null,
              description:
                "Introducing World App, the first wallet for the Worldcoin ecosystem.\n\nIt’s designed by TFH to be simple, and you can use it to authenticate with World ID to prove you’re a real person, get your Worldcoin tokens and send digital money anywhere.\n\nWe're excited to celebrate this milestone with the Worldcoin community.",
              externalUrl: null,
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/token-images/3ca97d13395840dfb8cb5aaa8cc1c5835d9af691',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/token-images/3ca97d13395840dfb8cb5aaa8cc1c5835d9af691',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/token-images/3ca97d13395840dfb8cb5aaa8cc1c5835d9af691',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/token-images/3ca97d13395840dfb8cb5aaa8cc1c5835d9af691',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/token-images/3ca97d13395840dfb8cb5aaa8cc1c5835d9af691',
                  width: 1200,
                },
              ],
              name: 'Introducing World App',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'world-app',
              },
              symbol: 'WLDAPP',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0x9980b3aa61114b07a7604ffdc7c7d04bb6d8d735',
              baseTokenUri: null,
              circulatingSupply: null,
              description:
                'Walt’s Vault is a magical, hand-crafted collection that brings a new character and a nostalgic art form to life on the blockchain. Harkening back to the 1930s, the magic and storytelling of that time will be reflected in every way our community experiences the ownership of their characters. This collection pushes what is possible in the space and NFT’s as a whole.\n\nWe believe art and a little magic can still go a long way in this space.\n',
              externalUrl: 'https://waltsvault.xyz/',
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/9aaf7cc545a889d8b593505583835f4370ff370d',
                  width: 1200,
                },
              ],
              name: 'Walts Vault',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'waltsvault-official',
              },
              symbol: 'WV',
              totalSupply: null,
              twitterUsername: 'WaltsVault_NFT',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
        });
      }
    );
  });
});
