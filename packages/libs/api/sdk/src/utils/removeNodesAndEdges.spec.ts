import { removeNodesAndEdges } from './removeNodesAndEdges';

describe('removeNodesAndEdges', () => {
  it('prunes response data correctly', () => {
    const testResponseData = {
      wallet: {
        tokens: {
          pageInfo: {
            hasNextPage: true,
          },
          edges: [
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
              node: {
                contract: {
                  address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
              node: {
                contract: {
                  address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
              node: {
                contract: {
                  address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
              node: {
                contract: {
                  address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
                },
              },
            },
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              node: {
                contract: {
                  address: '0x7946c4bededc2ab98e1682c55505093c88624c02',
                },
              },
            },
          ],
        },
      },
    };

    const prunedResponse = removeNodesAndEdges(testResponseData);
    expect(prunedResponse).toStrictEqual({
      wallet: {
        tokens: [
          {
            contract: {
              address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
            },
          },
          {
            contract: {
              address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
            },
          },
          {
            contract: {
              address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
            },
          },
          {
            contract: {
              address: '0x968b6210cafb39ddf70d08afdbf092b35542f25c',
            },
          },
          {
            contract: {
              address: '0x7946c4bededc2ab98e1682c55505093c88624c02',
            },
          },
        ],
        tokensPageInfo: {
          hasNextPage: true,
        },
      },
    });
  });
});
