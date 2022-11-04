import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getTrendingNFTCollections', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getTrendingNFTCollections.spec-base',
      },
      async () => {
        const { data } = await client.nft.getTrendingNFTCollections({
          first: 2,
        });

        expect(data).toStrictEqual({
          trendingCollectionsPageInfo: {
            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            hasNextPage: true,
          },
          trendingCollections: [
            {
              address: '0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a',
              isVerified: true,
              circulatingSupply: 11860,
              name: 'Friendship Bracelets by Alexis André',
              symbol: 'EXPLORE',
              stats: {
                average: 0.1048982,
                ceiling: 0.23,
                floor: 0.0481,
                totalSales: 50,
                volume: 5.24491,
              },
            },
            {
              address: '0xd4bcb3ccc8f44aee5f6a9d1d5f626e885f1d0902',
              isVerified: false,
              circulatingSupply: 2495,
              name: 'Puff Genesis',
              symbol: 'PG',
              stats: {
                average: 0.04637111111111111,
                ceiling: 0.05,
                floor: 0.048,
                totalSales: 45,
                volume: 2.0867,
              },
            },
          ],
        });
      }
    );
  });

  it('can iterate tokens', async () => {
    await withPolly(
      {
        recordingName: 'query-getTrendingNFTCollections-iterates',
      },
      async () => {
        const { data: firstResponse } =
          await client.nft.getTrendingNFTCollections({
            first: 2,
          });

        const { data: secondResponse } =
          await client.nft.getTrendingNFTCollections({
            first: 2,
            after: firstResponse?.trendingCollectionsPageInfo.endCursor,
          });

        expect(secondResponse).toStrictEqual({
          trendingCollectionsPageInfo: {
            endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
            hasNextPage: true,
          },
          trendingCollections: [
            {
              address: '0x15d2c0cd69ecc78334f55f1395ca46481246aace',
              isVerified: false,
              circulatingSupply: 146,
              name: 'R.A.W | Red Astro Wars',
              symbol: 'RAW',
              stats: {
                average: 0.14423461538461538,
                ceiling: 0.155,
                floor: 0.0835,
                totalSales: 26,
                volume: 3.7501,
              },
            },
            {
              address: '0x28d33c407b81f58038300d619b501ab9f4a71b14',
              isVerified: false,
              circulatingSupply: 5097,
              name: 'Lil Hotties Official',
              symbol: 'LHT',
              stats: {
                average: 0.0458672,
                ceiling: 0.06,
                floor: 0.0384,
                totalSales: 25,
                volume: 1.14668,
              },
            },
          ],
        });
      }
    );
  });
});
