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
              address: '0xebcf83bde8e82708bfc027b2c32412283b6c23ff',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Scroto Schizos',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'SCHIZO',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0x0c9663115b36fa95d18e71d59054117bcb0342ef',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'XTREME PIXELS',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'XPIX',
              totalSupply: null,
              twitterUsername: null,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: false,
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
        const data3 = await api.nfts.getTrendingCollections({
          first: 2,
          before: data2.pageInfo.startCursor,
        });

        const expectedResponse1 = {
          results: [
            {
              address: '0xebcf83bde8e82708bfc027b2c32412283b6c23ff',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Scroto Schizos',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'SCHIZO',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0x0c9663115b36fa95d18e71d59054117bcb0342ef',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'XTREME PIXELS',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'XPIX',
              totalSupply: null,
              twitterUsername: null,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        };
        expect(data1).toStrictEqual(expectedResponse1);
        expect(data2).toStrictEqual({
          results: [
            {
              address: '0x0c9663115b36fa95d18e71d59054117bcb0342ef',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'XTREME PIXELS',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'XPIX',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0xd2a713c0f0953ccbffd93c86534624de5940e62e',
              baseTokenUri: null,
              circulatingSupply: 4275,
              description:
                '“memes and deth about crypto street art” is a MAD cc0 movement and a brand new artistic experimentations brought to you by Streetlab x niftyjutsu & frens\n\neach MAD piece can be used as a currency to take part in auctions hosted on streetlab.io\n\nfind out more on https://streetlab.io/ and https://linktr.ee/niftyjutsu',
              externalUrl: 'https://streetlab.io/mad',
              image: [
                {
                  height: 100,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 1200,
                },
              ],
              name: 'MAD about crypto street-art',
              openseaMetadata: {
                isHidden: false,
                isVerified: true,
                unsafeSlug: 'mad-about-crypto-street-art',
              },
              symbol: 'MAD',
              totalSupply: null,
              twitterUsername: 'Streetlab_io',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: false,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
        });
        expect(data3).toStrictEqual({
          results: [
            {
              address: '0x0c9663115b36fa95d18e71d59054117bcb0342ef',
              baseTokenUri: null,
              circulatingSupply: null,
              description: null,
              externalUrl: null,
              image: null,
              name: 'XTREME PIXELS',
              openseaMetadata: {
                isHidden: null,
                isVerified: null,
                unsafeSlug: null,
              },
              symbol: 'XPIX',
              totalSupply: null,
              twitterUsername: null,
            },
            {
              address: '0xd2a713c0f0953ccbffd93c86534624de5940e62e',
              baseTokenUri: null,
              circulatingSupply: 4275,
              description:
                '“memes and deth about crypto street art” is a MAD cc0 movement and a brand new artistic experimentations brought to you by Streetlab x niftyjutsu & frens\n\neach MAD piece can be used as a currency to take part in auctions hosted on streetlab.io\n\nfind out more on https://streetlab.io/ and https://linktr.ee/niftyjutsu',
              externalUrl: 'https://streetlab.io/mad',
              image: [
                {
                  height: 100,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/xs/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 100,
                },
                {
                  height: 200,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/sm/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 200,
                },
                {
                  height: 400,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/md/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 400,
                },
                {
                  height: 800,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/lg/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 800,
                },
                {
                  height: 1200,
                  mimeType: 'image/gif',
                  url: 'https://images.quicknode.workers.dev/xl/catalog/unprocessed/chains/ethereum-mainnet/collection-images/7b87102c59bbe7cefdcb37d78d7e93f2030a308d',
                  width: 1200,
                },
              ],
              name: 'MAD about crypto street-art',
              openseaMetadata: {
                isHidden: false,
                isVerified: true,
                unsafeSlug: 'mad-about-crypto-street-art',
              },
              symbol: 'MAD',
              totalSupply: null,
              twitterUsername: 'Streetlab_io',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
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
