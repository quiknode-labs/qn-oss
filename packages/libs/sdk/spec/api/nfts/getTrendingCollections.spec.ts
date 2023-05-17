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
              address: '0x6609e542e0626bc3fc2110f0ead172030fbe97ab',
              baseTokenUri: null,
              circulatingSupply: 10987,
              description: null,
              externalUrl: null,
              image: null,
              name: 'This Artwork Is Subject To Change',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'this-artwork-is-subject-to-change',
              },
              symbol: 'TAISTC',
              totalSupply: null,
              twitterUsername: null,
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
              address: '0x6609e542e0626bc3fc2110f0ead172030fbe97ab',
              baseTokenUri: null,
              circulatingSupply: 10987,
              description: null,
              externalUrl: null,
              image: null,
              name: 'This Artwork Is Subject To Change',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'this-artwork-is-subject-to-change',
              },
              symbol: 'TAISTC',
              totalSupply: null,
              twitterUsername: null,
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
              address: '0x4b15a9c28034dc83db40cd810001427d3bd7163d',
              baseTokenUri: null,
              circulatingSupply: 26213,
              description:
                'The HV-MTL (Heavy Metal) collection is made up of 30,000 Mechs derived from 8 different Power Source types. Beginning March 15, 2023, eligible Sewer Passes can be burned to summon a Power Source that will reveal an Evo 1 Mech. Evo 1 holders can participate in future minigame sets with their Evo 1s to unlock additional HV-MTL evolution stages.',
              externalUrl: 'https://mdvmm.xyz/',
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/d99eebb276327d1656cd551ec300d75367e5dca7',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/d99eebb276327d1656cd551ec300d75367e5dca7',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/d99eebb276327d1656cd551ec300d75367e5dca7',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/d99eebb276327d1656cd551ec300d75367e5dca7',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/d99eebb276327d1656cd551ec300d75367e5dca7',
                  width: 1200,
                },
              ],
              name: 'HV-MTL',
              openseaMetadata: {
                isHidden: false,
                isVerified: true,
                unsafeSlug: 'hv-mtl',
              },
              symbol: 'HV-MTL',
              totalSupply: null,
              twitterUsername: 'BoredApeYC',
            },
            {
              address: '0x884ba86faa29745b6c40b7098567a393e91335cf',
              baseTokenUri: null,
              circulatingSupply: 9999,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Saved Souls',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'saved-souls-1',
              },
              symbol: 'SS',
              totalSupply: null,
              twitterUsername: null,
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
