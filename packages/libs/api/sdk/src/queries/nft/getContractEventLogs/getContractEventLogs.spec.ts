import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

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
          types: ['MINT', 'ORDER', 'TRANSFER'],
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
                blockNumber: 15818499,
                type: 'TRANSFER',
                fromAddress: '0xf6cbddd9c1fd75a7760937a320f1da0fac1e58b9',
                toAddress: '0xdd687258cfb63a8774738d75ae3cc13e79107026',
                estimatedConfirmedAt: '2022-10-24T14:16:59.000Z',
                transactionHash:
                  '0x66e4a48938f0772aa68f09c504c8b95b65bdde6936d9d0ad46caa4348debbb2e',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '3191',
                },
              },
              {
                blockNumber: 15818432,
                type: 'TRANSFER',
                fromAddress: '0xfb279520641bb50d7e8d6be12d790e6e4e00843e',
                toAddress: '0x8da42a17bece2d99172d04f65b6bc4ab29a492f0',
                estimatedConfirmedAt: '2022-10-24T14:02:59.000Z',
                transactionHash:
                  '0xbc520f82de2c7b6c5e75dd85d85d3174545af979e4dd0b53b78c1041801e0946',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '7414',
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
          types: ['MINT'],
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
                blockNumber: 15818499,
                type: 'TRANSFER',
                fromAddress: '0xf6cbddd9c1fd75a7760937a320f1da0fac1e58b9',
                toAddress: '0xdd687258cfb63a8774738d75ae3cc13e79107026',
                estimatedConfirmedAt: '2022-10-24T14:16:59.000Z',
                transactionHash:
                  '0x66e4a48938f0772aa68f09c504c8b95b65bdde6936d9d0ad46caa4348debbb2e',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '3191',
                },
              },
              {
                blockNumber: 15818432,
                type: 'TRANSFER',
                fromAddress: '0xfb279520641bb50d7e8d6be12d790e6e4e00843e',
                toAddress: '0x8da42a17bece2d99172d04f65b6bc4ab29a492f0',
                estimatedConfirmedAt: '2022-10-24T14:02:59.000Z',
                transactionHash:
                  '0xbc520f82de2c7b6c5e75dd85d85d3174545af979e4dd0b53b78c1041801e0946',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '7414',
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
        recordIfMissing: true,
      },
      async () => {
        const { data: firstResponse } = await client.nft.getContractEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
        });
        const { data: secondResponse } = await client.nft.getContractEventLogs({
          address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
          first: 2,
          after: 'YXJyYXljb25uZWN0aW9uOjE=',
        });
        expect(firstResponse).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15818632,
                type: 'TRANSFER',
                fromAddress: '0x8da42a17bece2d99172d04f65b6bc4ab29a492f0',
                toAddress: '0xfb279520641bb50d7e8d6be12d790e6e4e00843e',
                estimatedConfirmedAt: '2022-10-24T14:43:47.000Z',
                transactionHash:
                  '0x3b51041c150e2ac68d92f6d46fa496916f2af2f6901c1738e1165806b96f7d35',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '7414',
                },
              },
              {
                blockNumber: 15818632,
                type: 'TRANSFER',
                fromAddress: '0x3356a55019976642122b5e061e62e5eadf21936f',
                toAddress: '0xa84544d65685a56590be81dbdbcc9adfdf0246cb',
                estimatedConfirmedAt: '2022-10-24T14:43:47.000Z',
                transactionHash:
                  '0xad29b354cb23e80c5223258ab2538bbf4e484e042b112b372169a8cf84eac389',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '4782',
                },
              },
            ],
          },
        });
        expect(secondResponse).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
            },
            logs: [
              {
                blockNumber: 15818499,
                type: 'TRANSFER',
                fromAddress: '0xf6cbddd9c1fd75a7760937a320f1da0fac1e58b9',
                toAddress: '0xdd687258cfb63a8774738d75ae3cc13e79107026',
                estimatedConfirmedAt: '2022-10-24T14:16:59.000Z',
                transactionHash:
                  '0x66e4a48938f0772aa68f09c504c8b95b65bdde6936d9d0ad46caa4348debbb2e',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '3191',
                },
              },
              {
                blockNumber: 15818432,
                type: 'TRANSFER',
                fromAddress: '0xfb279520641bb50d7e8d6be12d790e6e4e00843e',
                toAddress: '0x8da42a17bece2d99172d04f65b6bc4ab29a492f0',
                estimatedConfirmedAt: '2022-10-24T14:02:59.000Z',
                transactionHash:
                  '0xbc520f82de2c7b6c5e75dd85d85d3174545af979e4dd0b53b78c1041801e0946',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '7414',
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
