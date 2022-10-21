import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTEventLogs', () => {
  it('executes correctly with all types', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventLogs-alltypes',
        recordIfMissing: true,
      },
      async () => {
        const { data } = await client.nft.getNFTEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          tokenId: '100',
          first: 2,
          types: ['MINT', 'ORDER', 'TRANSFER'],
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '100',
            contract: {
              address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            },
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15409149,
                type: 'ORDER',
                fromAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                toAddress: '0x2ae7668a2e0b2aa0377288a017558ed12d259335',
                estimatedConfirmedAt: '2022-08-25T12:41:08.000Z',
                transactionHash:
                  '0x24841172fafb9f9b07fba0b4e4e5b51e0424f22871f5d2f44f55190452ed8936',
                marketplace: 'OPENSEA',
                priceInEth: 14.69,
              },
              {
                blockNumber: 15171194,
                type: 'TRANSFER',
                fromAddress: '0x828b292daefaa119c021af635879d9629177391b',
                toAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                estimatedConfirmedAt: '2022-07-19T05:32:18.000Z',
                transactionHash:
                  '0x8e16a2be5bb08dc1a5c78edbbed89739aaa81f5d459b4ed5e6b5a6eac1756fd1',
              },
            ],
          },
        });
      }
    );
  });
  it('executes correctly with one type', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventLogs-onetype',
        recordIfMissing: true,
      },
      async () => {
        const { data } = await client.nft.getNFTEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          tokenId: '100',
          types: ['MINT'],
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '100',
            contract: {
              address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            },
            logsPageInfo: {
              hasNextPage: false,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjI0',
            },
            logs: [
              {
                blockNumber: 13117233,
                type: 'MINT',
                fromAddress: '0x0000000000000000000000000000000000000000',
                toAddress: '0x5e92a45225c3925b6180b8672a3cf5dd75bcc4a1',
                estimatedConfirmedAt: '2021-08-29T00:45:27.000Z',
                transactionHash:
                  '0xf93a29f670b97370b6e180c958da47b96ba3455ceb479d9d803919405c18ef1f',
              },
            ],
          },
        });
      }
    );
  });
  it('executes correctly with default types', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventLogs-notypes',
        recordIfMissing: true,
      },
      async () => {
        const { data } = await client.nft.getNFTEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          tokenId: '100',
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '100',
            contract: {
              address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            },
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15409149,
                type: 'ORDER',
                fromAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                toAddress: '0x2ae7668a2e0b2aa0377288a017558ed12d259335',
                estimatedConfirmedAt: '2022-08-25T12:41:08.000Z',
                transactionHash:
                  '0x24841172fafb9f9b07fba0b4e4e5b51e0424f22871f5d2f44f55190452ed8936',
                marketplace: 'OPENSEA',
                priceInEth: 14.69,
              },
              {
                blockNumber: 15171194,
                type: 'TRANSFER',
                fromAddress: '0x828b292daefaa119c021af635879d9629177391b',
                toAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                estimatedConfirmedAt: '2022-07-19T05:32:18.000Z',
                transactionHash:
                  '0x8e16a2be5bb08dc1a5c78edbbed89739aaa81f5d459b4ed5e6b5a6eac1756fd1',
              },
            ],
          },
        });
      }
    );
  });
  it('can iterate logs', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventLogs-iterate',
        recordIfMissing: true,
      },
      async () => {
        const { data: firstResponse } = await client.nft.getNFTEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          tokenId: '100',
        });
        const { data: secondResponse } = await client.nft.getNFTEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          tokenId: '100',
          after: 'YXJyYXljb25uZWN0aW9uOjE=',
        });

        expect(firstResponse).toStrictEqual({
          token: {
            tokenId: '100',
            contract: {
              address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            },
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15409149,
                type: 'ORDER',
                fromAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                toAddress: '0x2ae7668a2e0b2aa0377288a017558ed12d259335',
                estimatedConfirmedAt: '2022-08-25T12:41:08.000Z',
                transactionHash:
                  '0x24841172fafb9f9b07fba0b4e4e5b51e0424f22871f5d2f44f55190452ed8936',
                marketplace: 'OPENSEA',
                priceInEth: 14.69,
              },
              {
                blockNumber: 15171194,
                type: 'TRANSFER',
                fromAddress: '0x828b292daefaa119c021af635879d9629177391b',
                toAddress: '0x3452072f31bf2243f1293884a6c5d8df2726a7e8',
                estimatedConfirmedAt: '2022-07-19T05:32:18.000Z',
                transactionHash:
                  '0x8e16a2be5bb08dc1a5c78edbbed89739aaa81f5d459b4ed5e6b5a6eac1756fd1',
              },
            ],
          },
        });
        expect(secondResponse).toStrictEqual({
          token: {
            tokenId: '100',
            contract: {
              address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            },
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
            },
            logs: [
              {
                blockNumber: 14958026,
                type: 'TRANSFER',
                fromAddress: '0xb642f99a3868b9d83bd56b603fb1fd68b392a0c2',
                toAddress: '0x828b292daefaa119c021af635879d9629177391b',
                estimatedConfirmedAt: '2022-06-13T20:51:15.000Z',
                transactionHash:
                  '0x875e30d1353bba50e47722a8c1a38b709deeaf0622e6d13d08762b33c3cbeab8',
              },
              {
                blockNumber: 14954381,
                type: 'TRANSFER',
                fromAddress: '0x69f37e419bd1457d2a25ed3f5d418169caae8d1f',
                toAddress: '0x5f6ac80cdb9e87f3cfa6a90e5140b9a16a361d5c',
                estimatedConfirmedAt: '2022-06-13T05:51:47.000Z',
                transactionHash:
                  '0x47232dc8864cc2d8dc0849fe6c036e9f6401a1912ba8c5c8ebf07d08c58910eb',
              },
            ],
          },
        });
      }
    );
  });
  it('can handle null response', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventLogs-null',
        recordIfMissing: true,
      },
      async () => {
        const { data } = await client.nft.getNFTEventLogs({
          address: '0x11111111111110thisisnotanaddress01111111',
          first: 2,
          tokenId: '100',
        });

        expect(data).toStrictEqual({
          token: null,
        });
      }
    );
  });
});
