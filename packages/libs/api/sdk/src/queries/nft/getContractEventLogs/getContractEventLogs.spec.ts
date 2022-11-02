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

        expect(data).toStrictEqual({
          contract: {
            address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
            logsPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            logs: [
              {
                blockNumber: 15884184,
                type: 'TRANSFER',
                fromAddress: '0x86c994904dd138bdc8462ac06edd919ad70fe575',
                toAddress: '0x330d8d19c19776a3d0e84f44e9a1d4ad73c088ff',
                estimatedConfirmedAt: '2022-11-02T18:40:11.000Z',
                transactionHash:
                  '0x8f52ed690de664d9ac19dc129d6baa875a67e7e6cac70c7a32ef241daa8e195f',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '29121',
                },
              },
              {
                blockNumber: 15884167,
                type: 'TRANSFER',
                fromAddress: '0xb6674e0f123652ff18fa10ce2eca886fc60e07e4',
                toAddress: '0x0f732cd6a97330f7c5fb4f41199f1bf1229ed179',
                estimatedConfirmedAt: '2022-11-02T18:36:47.000Z',
                transactionHash:
                  '0x8779a8056cd2066f0a0f69f11541dc7b8f360e63074725c45b5f009d11159f48',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '3090',
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
                blockNumber: 15884230,
                type: 'TRANSFER',
                fromAddress: '0x82bbcac5a8b81368a4a96f0265cb40e46020a1e1',
                toAddress: '0x8252df1d8b29057d1afe3062bf5a64d503152bc8',
                estimatedConfirmedAt: '2022-11-02T18:49:35.000Z',
                transactionHash:
                  '0x64bff7d35b9ca0e18e759979eb14aec6732c6a988bdd80b62925b0cf1e3b4619',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '17361',
                },
              },
              {
                blockNumber: 15884184,
                type: 'TRANSFER',
                fromAddress: '0x86c994904dd138bdc8462ac06edd919ad70fe575',
                toAddress: '0x330d8d19c19776a3d0e84f44e9a1d4ad73c088ff',
                estimatedConfirmedAt: '2022-11-02T18:40:11.000Z',
                transactionHash:
                  '0x8f52ed690de664d9ac19dc129d6baa875a67e7e6cac70c7a32ef241daa8e195f',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '29121',
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
              {
                blockNumber: 15877166,
                type: 'TRANSFER',
                fromAddress: '0x560fd50fbeaa6180302c07e11d16f842f5a53053',
                toAddress: '0xae3ec1aee72aaad27f4465195abb011ddd2d2621',
                estimatedConfirmedAt: '2022-11-01T19:07:59.000Z',
                transactionHash:
                  '0x80170c8916dbf10007e496f684c17c19acb92b9aa92c8d2ebccebd5356a97447',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '9727',
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
                blockNumber: 15875814,
                type: 'ORDER',
                fromAddress: '0x3ddb69473881a8f0c73419293519994c14603b12',
                toAddress: '0x823969a8d456a594e80aac9df050a50ada374091',
                estimatedConfirmedAt: '2022-11-01T14:36:35.000Z',
                transactionHash:
                  '0xf5d2d640f30cefcfb01c67eeb9c9237db77cdf1ddf6177616cc8dc5a29646717',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '1254',
                },
                marketplace: 'OPENSEA',
                priceInEth: 0.0099,
              },
              {
                blockNumber: 15852043,
                type: 'TRANSFER',
                fromAddress: '0x1298ea1e151d84c4a1629d6bd2813666c1c2f86c',
                toAddress: '0x8ae57a027c63fca8070d1bf38622321de8004c67',
                estimatedConfirmedAt: '2022-10-29T06:51:35.000Z',
                transactionHash:
                  '0x84a5a4cc8a3e66c8ddb60641c5392ee154d1490933bd6f367dfd3232def45f00',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '8913',
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
