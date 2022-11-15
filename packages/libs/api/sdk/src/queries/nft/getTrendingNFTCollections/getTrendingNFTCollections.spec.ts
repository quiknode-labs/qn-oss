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
              address: '0x81e1966a2b4b3f41057446d07c675cc686894ca2',
              isVerified: false,
              circulatingSupply: 10000,
              name: 'Cangster - Genesis Collection',
              symbol: 'CANG',
              stats: {
                average: 0.003645816582914573,
                ceiling: 0.003,
                floor: 0.0028,
                totalSales: 398,
                volume: 1.451035,
              },
            },
            {
              address: '0xecd9837673d4c10f5d61a3e7b81c12aefa0b472b',
              isVerified: false,
              circulatingSupply: 3916,
              name: 'Alma X Jack Irving - Odyssey',
              symbol: 'ODSY',
              stats: {
                average: 0.015156367346938775,
                ceiling: 0.0184,
                floor: 0.0165,
                totalSales: 98,
                volume: 1.485324,
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
              address: '0x31d45de84fde2fb36575085e05754a4932dd5170',
              isVerified: true,
              circulatingSupply: 9885,
              name: 'Rare Apepe YC',
              symbol: 'RAYC',
              stats: {
                average: 0.18124595454545456,
                ceiling: 0.18,
                floor: 0.1037,
                totalSales: 88,
                volume: 15.949644,
              },
            },
            {
              address: '0xb54420149dbe2d5b2186a3e6dc6fc9d1a58316d4',
              isVerified: false,
              circulatingSupply: 9993,
              name: 'Tokyo Rebels',
              symbol: 'REBEL',
              stats: {
                average: 0.012760140845070423,
                ceiling: 0.0135,
                floor: 0.0135,
                totalSales: 71,
                volume: 0.90597,
              },
            },
          ],
        });
      }
    );
  });
});
