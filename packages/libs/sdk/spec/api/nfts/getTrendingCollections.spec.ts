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
              address: '0xbe9371326f91345777b04394448c23e2bfeaa826',
              baseTokenUri:
                'ipfs://bafybeihqqmdxzslqafnqasuawlxk32n4qhg5rhshku7dkhlaz2bm5zamyq/',
              circulatingSupply: 89453,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Gemesis',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'gemesis-4',
              },
              symbol: 'OSP',
              totalSupply: null,
              twitterUsername: null,
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
              address: '0xbe9371326f91345777b04394448c23e2bfeaa826',
              baseTokenUri:
                'ipfs://bafybeihqqmdxzslqafnqasuawlxk32n4qhg5rhshku7dkhlaz2bm5zamyq/',
              circulatingSupply: 89453,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Gemesis',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'gemesis-4',
              },
              symbol: 'OSP',
              totalSupply: null,
              twitterUsername: null,
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
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });

        expect(data2).toStrictEqual({
          results: [
            {
              address: '0x20d93d65ada7ee46235f95f5995ae5c5dc5ac44c',
              baseTokenUri: '',
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'IllegalMemes',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'MEMES',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0xd79e4cc964e5a2c1e400fe5a8488c71d9fd9847e',
              baseTokenUri: null,
              circulatingSupply: 7776,
              description:
                'DenDekaDen is a community-driven narrative franchise launched between Strata and Toei Animation.\nWith Kyoto as its stage, DenDekaDen introduces a modern legend that connects Japan and the world in new ways,\ninterweaving Japanese traditions and mythologies with the digital world of blockchain, empowered by community participation. \n\nSpirit Key Avatars are avatars (PFPs) representing believers of the 7 DenDekaDen deities. \nHolders may customize certain attributes and equip relics to their avatars.\nBound by our shared beliefs, we, the circle of creators, curators, and believers are here to write a new chapter.\n\nOur beliefs create gods.\nDo you believe?',
              externalUrl: 'https://www.dendekaden.com/',
              image: [
                {
                  height: 100,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/5f3d21c48038d18df90fe0fa53aea4a285bd4119',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/5f3d21c48038d18df90fe0fa53aea4a285bd4119',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/5f3d21c48038d18df90fe0fa53aea4a285bd4119',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/5f3d21c48038d18df90fe0fa53aea4a285bd4119',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/png',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/5f3d21c48038d18df90fe0fa53aea4a285bd4119',
                  width: 1200,
                },
              ],
              name: 'DenDekaDen Spirit Key Avatars',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'dendekaden-spirit-key-avatar',
              },
              symbol: '$KEY',
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

  it('can return no results', async () => {
    await withPolly(
      {
        recordingName: 'query-getTrendingCollections-no-results',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getTrendingCollections({
          first: 0,
        });
        expect(data).toStrictEqual({
          results: [],
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
          },
        });
      }
    );
  });
});
