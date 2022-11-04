import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';
import { LogType } from '../../../graphql/types';

const client = new QuickNodeSDK();

describe('getContractEventLogs', () => {
  it('executes correctly with all types', async () => {
    await withPolly(
      {
        recordingName: 'query-getContractEventLogs-alltypes',
      },
      async () => {
        const { data } = await client.nft.getContractEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          types: [LogType.Mint, LogType.Order, LogType.Transfer],
        });

        console.log(JSON.stringify(data));

        expect(data).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15896593,
                type: 'ORDER',
                fromAddress: '0x5f20abebe0ba11a9dc0f08e654e416bbee8979f9',
                toAddress: '0x602a20f6d1e1263d5e31ec0d22a5de0c15be36c7',
                estimatedConfirmedAt: '2022-11-04T12:16:47.000Z',
                transactionHash:
                  '0xa1b3a0587d977282e80a6cf7b020e5e7e7bb79836d6939eb07530899e6cff95f',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '29551',
                },
                marketplace: 'OPENSEA',
                priceInEth: 16,
              },
              {
                blockNumber: 15896167,
                type: 'TRANSFER',
                fromAddress: '0x3e516cf3c9d4f29fae6c1324c2414dc872fc9c09',
                toAddress: '0xf667e7bebf8c1191f646a76c3c3b6366670703bb',
                estimatedConfirmedAt: '2022-11-04T10:51:23.000Z',
                transactionHash:
                  '0xef9fe88a877005819a823779f765923a85507defe685e94c6d0eefe62e4775de',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '28586',
                },
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
        recordingName: 'query-getContractEventLogs-onetype',
      },
      async () => {
        const { data } = await client.nft.getContractEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          types: [LogType.Mint],
        });

        expect(data).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15782593,
                type: 'MINT',
                fromAddress: '0x0000000000000000000000000000000000000000',
                toAddress: '0x3c05c8c71fc3bd1e095a71f1ab58a9142b41e8ad',
                estimatedConfirmedAt: '2022-10-19T13:56:59.000Z',
                transactionHash:
                  '0x410a3d39fc380ae9f24131a78c35d16c8a7bb7a20d8cb835871d3fdb64a7e0c4',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '16227',
                },
              },
              {
                blockNumber: 15657628,
                type: 'MINT',
                fromAddress: '0x0000000000000000000000000000000000000000',
                toAddress: '0x9524b86e777c0c6e1e1afe0bb8bf931a5b81386c',
                estimatedConfirmedAt: '2022-10-02T02:59:59.000Z',
                transactionHash:
                  '0x64a195a18d501f1aafd911a64f80d990f0b5311ad8bad44c41136c69641c7cc5',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '24337',
                },
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
        recordingName: 'query-getContractEventLogs-default',
      },
      async () => {
        const { data } = await client.nft.getContractEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
        });

        expect(data).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15896593,
                type: 'ORDER',
                fromAddress: '0x5f20abebe0ba11a9dc0f08e654e416bbee8979f9',
                toAddress: '0x602a20f6d1e1263d5e31ec0d22a5de0c15be36c7',
                estimatedConfirmedAt: '2022-11-04T12:16:47.000Z',
                transactionHash:
                  '0xa1b3a0587d977282e80a6cf7b020e5e7e7bb79836d6939eb07530899e6cff95f',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '29551',
                },
                marketplace: 'OPENSEA',
                priceInEth: 16,
              },
              {
                blockNumber: 15896167,
                type: 'TRANSFER',
                fromAddress: '0x3e516cf3c9d4f29fae6c1324c2414dc872fc9c09',
                toAddress: '0xf667e7bebf8c1191f646a76c3c3b6366670703bb',
                estimatedConfirmedAt: '2022-11-04T10:51:23.000Z',
                transactionHash:
                  '0xef9fe88a877005819a823779f765923a85507defe685e94c6d0eefe62e4775de',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '28586',
                },
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
        recordingName: 'query-getContractEventLogs-iterate',
      },
      async () => {
        const { data: firstResponse } = await client.nft.getContractEventLogs({
          address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });
        const { data: secondResponse } = await client.nft.getContractEventLogs({
          address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
          after: 'YXJyYXljb25uZWN0aW9uOjE=',
        });

        expect(firstResponse).toStrictEqual({
          contract: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15891936,
                type: 'TRANSFER',
                fromAddress: '0xf22859140265c1b73ac02c5468d690f566406e3d',
                toAddress: '0x0d7087111cbbc2bc3ef1b1cfe2c418ef20b5f57a',
                estimatedConfirmedAt: '2022-11-03T20:40:59.000Z',
                transactionHash:
                  '0x5fc224365913b1a8b1ed206e8c4a83225c91217ab27edd5c9f6cc2f744113f53',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '5809',
                },
              },
              {
                blockNumber: 15891936,
                type: 'TRANSFER',
                fromAddress: '0xf22859140265c1b73ac02c5468d690f566406e3d',
                toAddress: '0x0d7087111cbbc2bc3ef1b1cfe2c418ef20b5f57a',
                estimatedConfirmedAt: '2022-11-03T20:40:59.000Z',
                transactionHash:
                  '0x5fc224365913b1a8b1ed206e8c4a83225c91217ab27edd5c9f6cc2f744113f53',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '5548',
                },
              },
            ],
          },
        });

        expect(secondResponse).toStrictEqual({
          contract: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
            },
            logs: [
              {
                blockNumber: 15890651,
                type: 'TRANSFER',
                fromAddress: '0x433c8a73bec1273561e4e2201649de12f20b7d58',
                toAddress: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
                estimatedConfirmedAt: '2022-11-03T16:21:35.000Z',
                transactionHash:
                  '0xf0237d19f93f0a9827ed8588eb77a4c8760d11b348692d1cbc1daa84fd31690c',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '6302',
                },
              },
              {
                blockNumber: 15879815,
                type: 'TRANSFER',
                fromAddress: '0x433c8a73bec1273561e4e2201649de12f20b7d58',
                toAddress: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
                estimatedConfirmedAt: '2022-11-02T04:01:23.000Z',
                transactionHash:
                  '0x7e68649dcb97ff55c93c731eabbfe85dc113fa08ce99d17d3b13c2da4e79bc0f',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '7437',
                },
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
        recordingName: 'query-getContractEventLogs-null',
      },
      async () => {
        const { data } = await client.nft.getContractEventLogs({
          address: '0x11111111111110thisisnotanaddress01111111',
          first: 2,
        });

        expect(data).toStrictEqual({
          contract: null,
        });
      }
    );
  });
});
