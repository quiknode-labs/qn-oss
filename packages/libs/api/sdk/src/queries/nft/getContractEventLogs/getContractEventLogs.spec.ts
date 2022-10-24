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
                blockNumber: 15804550,
                type: 'ORDER',
                fromAddress: '0x30879cf3c26a5abc9fc7fc82e39bd47dd5daeb54',
                toAddress: '0x5d4dd2ca5cba956e1b5a66dc9f7279968f9df1ac',
                estimatedConfirmedAt: '2022-10-22T15:29:59.000Z',
                transactionHash:
                  '0xe6e2d65f5cdadfd2fe1ce4a6679eb79452cac469660279f78acd037a285344f8',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '5523',
                },
                marketplace: 'OPENSEA',
                priceInEth: 0.0095,
              },
              {
                blockNumber: 15803813,
                type: 'TRANSFER',
                fromAddress: '0x76e19a5920121bcd8446ccd59518d0d9faca61d2',
                toAddress: '0x349b9f74b2805a7b7200db5f1d64a033e4833dfb',
                estimatedConfirmedAt: '2022-10-22T13:01:23.000Z',
                transactionHash:
                  '0x21aaea13cfde82951aec23c6cfc791aaa103ce4bfed543bd97872eea6e9566c2',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '8845',
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
                blockNumber: 15794055,
                type: 'TRANSFER',
                fromAddress: '0xef30fa2138a725523451688279b11216b0505e98',
                toAddress: '0xfbabf40b1c7e2f0b8aa4d69f2e0e95f31bf93ee5',
                estimatedConfirmedAt: '2022-10-21T04:20:47.000Z',
                transactionHash:
                  '0x4d637ae8e49a57b9dfe6c94bd45818d26ff52e457fd32badf9a50bc483db7c6b',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '8981',
                },
              },
              {
                blockNumber: 15790053,
                type: 'ORDER',
                fromAddress: '0xc6eab1b834647bbdc18f42d33a791fb1fac73e58',
                toAddress: '0xf4367ed4dbd13e5348b11436d3805ac8db20d9ce',
                estimatedConfirmedAt: '2022-10-20T14:58:11.000Z',
                transactionHash:
                  '0x6c509fe0c92208ac60bdf8fec20e4054005e19bc85702d6ec3d421719b0c0bb6',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '766',
                },
                marketplace: 'OPENSEA',
                priceInEth: 0.01,
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
