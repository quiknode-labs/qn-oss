import { apiClient } from './client';
import withPolly from '../testSetup/pollyTestSetup';

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
              address: '0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab',
              baseTokenUri: null,
              circulatingSupply: 53054,
              description: null,
              externalUrl: 'https://emblem.pro',
              image: null,
              name: 'Emblem Vault [Ethereum]',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'emblem-vault',
              },
              symbol: 'Emblem.pro',
              totalSupply: 30140,
              twitterUsername: 'emblemvault',
            },
            {
              address: '0x88f753c48008b938dd7f78751d3106d04ee432e3',
              baseTokenUri: null,
              circulatingSupply: 888,
              description: null,
              externalUrl: null,
              image: null,
              name: 'Alpha Gardeners Pass',
              openseaMetadata: {
                isHidden: false,
                isVerified: false,
                unsafeSlug: 'alpha-gardeners-pass',
              },
              symbol: 'AGP',
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

  // Write a test to checking that it can iterate and paginate through tokens
  describe('it can iterate and paginate through tokens', () => {
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
                address: '0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab',
                baseTokenUri: null,
                circulatingSupply: 53054,
                description: null,
                externalUrl: 'https://emblem.pro',
                image: null,
                name: 'Emblem Vault [Ethereum]',
                openseaMetadata: {
                  isHidden: false,
                  isVerified: false,
                  unsafeSlug: 'emblem-vault',
                },
                symbol: 'Emblem.pro',
                totalSupply: 30140,
                twitterUsername: 'emblemvault',
              },
              {
                address: '0x88f753c48008b938dd7f78751d3106d04ee432e3',
                baseTokenUri: null,
                circulatingSupply: 888,
                description: null,
                externalUrl: null,
                image: null,
                name: 'Alpha Gardeners Pass',
                openseaMetadata: {
                  isHidden: false,
                  isVerified: false,
                  unsafeSlug: 'alpha-gardeners-pass',
                },
                symbol: 'AGP',
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
                address: '0x47f3a38990ca12e39255e959f7d97fbe5906afd4',
                baseTokenUri:
                  'https://ipfs.icy.tools/ipfs/QmbXhUWYY5VQY1TJY67fRy9xr1wW4BQMtv6a8wHZK3qLzg',
                circulatingSupply: 9999,
                description: null,
                externalUrl: 'https://www.apereunion.xyz/#/',
                image: null,
                name: 'Ape Reunion',
                openseaMetadata: {
                  isHidden: false,
                  isVerified: true,
                  unsafeSlug: 'apereunion',
                },
                symbol: 'APE_REUNION',
                totalSupply: 10000,
                twitterUsername: 'ApeReunion',
              },
              {
                address: '0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab',
                baseTokenUri: null,
                circulatingSupply: 53054,
                description: null,
                externalUrl: 'https://emblem.pro',
                image: null,
                name: 'Emblem Vault [Ethereum]',
                openseaMetadata: {
                  isHidden: false,
                  isVerified: false,
                  unsafeSlug: 'emblem-vault',
                },
                symbol: 'Emblem.pro',
                totalSupply: 30140,
                twitterUsername: 'emblemvault',
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
});
