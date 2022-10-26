import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getContractEventLogs', () => {
  it('executes correctly with all types', async () => {
    await withPolly(
      { recordingName: 'query-getContractEventLogs-alltypes' },
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
                blockNumber: 15832459,
                type: 'TRANSFER',
                fromAddress: '0xc0df18d3c0dff4580a96c1a2f046c9dcca7aa704',
                toAddress: '0x8252df1d8b29057d1afe3062bf5a64d503152bc8',
                estimatedConfirmedAt: '2022-10-26T13:10:47.000Z',
                transactionHash:
                  '0x8a8de0aeb429dda58b357d6e68ebf15ba45cc7e430967ac4a6984f0dacfe9cb1',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '20898',
                },
              },
              {
                blockNumber: 15832456,
                type: 'ORDER',
                fromAddress: '0x32c8b7563e69b57ef29d1c44616bc340848174fd',
                toAddress: '0x42f61c5f5504807b18e9ba30a6535848627b7a5b',
                estimatedConfirmedAt: '2022-10-26T13:10:11.000Z',
                transactionHash:
                  '0x891d2be2509da6e01e36cd13ae164f4788c20e95e624e77bf7d8ca048592a914',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '14008',
                },
                marketplace: 'OPENSEA',
                priceInEth: 15,
              },
            ],
          },
        });
      }
    );
  });

  it('executes correctly with one type', async () => {
    await withPolly(
      { recordingName: 'query-getContractEventLogs-onetype' },
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
      { recordingName: 'query-getContractEventLogs-default' },
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
                blockNumber: 15832459,
                type: 'TRANSFER',
                fromAddress: '0xc0df18d3c0dff4580a96c1a2f046c9dcca7aa704',
                toAddress: '0x8252df1d8b29057d1afe3062bf5a64d503152bc8',
                estimatedConfirmedAt: '2022-10-26T13:10:47.000Z',
                transactionHash:
                  '0x8a8de0aeb429dda58b357d6e68ebf15ba45cc7e430967ac4a6984f0dacfe9cb1',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '20898',
                },
              },
              {
                blockNumber: 15832456,
                type: 'ORDER',
                fromAddress: '0x32c8b7563e69b57ef29d1c44616bc340848174fd',
                toAddress: '0x42f61c5f5504807b18e9ba30a6535848627b7a5b',
                estimatedConfirmedAt: '2022-10-26T13:10:11.000Z',
                transactionHash:
                  '0x891d2be2509da6e01e36cd13ae164f4788c20e95e624e77bf7d8ca048592a914',
                token: {
                  contract: {
                    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
                  },
                  tokenId: '14008',
                },
                marketplace: 'OPENSEA',
                priceInEth: 15,
              },
            ],
          },
        });
      }
    );
  });

  it('can iterate logs', async () => {
    await withPolly(
      { recordingName: 'query-getContractEventLogs-iterate' },
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
                blockNumber: 15819560,
                type: 'ORDER',
                fromAddress: '0x3082a2dd0028231423a5fb470407a89c024b308d',
                toAddress: '0x3f64317f0ed628bce5575892f96d9cd52f1c30ba',
                estimatedConfirmedAt: '2022-10-24T17:52:47.000Z',
                transactionHash:
                  '0xaeb625b739248780d60250eb76fbce3a3a494c0e64a61d3636ad4575106fdc92',
                token: {
                  contract: {
                    address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                  },
                  tokenId: '6531',
                },
                marketplace: 'OPENSEA',
                priceInEth: 0.01,
              },
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
            ],
          },
        });
      }
    );
  });

  it('can handle null response', async () => {
    await withPolly(
      { recordingName: 'query-getContractEventLogs-null' },
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
