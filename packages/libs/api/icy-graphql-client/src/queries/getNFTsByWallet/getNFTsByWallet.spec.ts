import withPolly from '../../../testSetup/pollyTestSetup';
import { IcyGraphQLClient } from '../../client';

describe('getNFTsByWallet', () => {
  it('executes correctly', async () => {
    await withPolly({ recordingName: 'query-getNFTsByWallet' }, async () => {
      const { data } = await IcyGraphQLClient().getNFTsByWallet({
        address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
        first: 5,
      });
      expect(data).toStrictEqual({
        wallet: {
          __typename: 'Wallet',
          address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
          ensName: 'vitalik.eth',
          tokens: {
            __typename: 'TokenConnection',
            edges: [
              {
                __typename: 'TokenEdge',
                node: {
                  __typename: 'ERC721Token',
                  contract: {
                    __typename: 'ERC721Contract',
                    address: '0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d',
                    name: 'Best Friend - OfficaI',
                    symbol: 'BF',
                  },
                  images: [
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xs/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/sm/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/md/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/lg/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xl/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                    },
                  ],
                  tokenId: '3224',
                },
              },
              {
                __typename: 'TokenEdge',
                node: {
                  __typename: 'ERC721Token',
                  contract: {
                    __typename: 'ERC721Contract',
                    address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                    name: 'Art Blocks',
                    symbol: 'BLOCKS',
                  },
                  images: [
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                    },
                  ],
                  tokenId: '265000506',
                },
              },
              {
                __typename: 'TokenEdge',
                node: {
                  __typename: 'ERC721Token',
                  contract: {
                    __typename: 'ERC721Contract',
                    address: '0x0631cc561618ee4fa142e502c5f5ab9fcc2aa90c',
                    name: 'Vitaliks Boner',
                    symbol: 'VBON',
                  },
                  images: [],
                  tokenId: '87',
                },
              },
              {
                __typename: 'TokenEdge',
                node: {
                  __typename: 'ERC721Token',
                  contract: {
                    __typename: 'ERC721Contract',
                    address: '0x0631cc561618ee4fa142e502c5f5ab9fcc2aa90c',
                    name: 'Vitaliks Boner',
                    symbol: 'VBON',
                  },
                  images: [],
                  tokenId: '0',
                },
              },
              {
                __typename: 'TokenEdge',
                node: {
                  __typename: 'ERC721Token',
                  contract: {
                    __typename: 'ERC721Contract',
                    address: '0x3ceb6868bfbf99f6b76fe5bb37343c075677c698',
                    name: 'V1 Phunks',
                    symbol: 'V1PHNK',
                  },
                  images: [
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xs/collections/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698/tokens/19fb5d283ef085fa322449136a88d49e',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/sm/collections/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698/tokens/19fb5d283ef085fa322449136a88d49e',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/md/collections/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698/tokens/19fb5d283ef085fa322449136a88d49e',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/lg/collections/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698/tokens/19fb5d283ef085fa322449136a88d49e',
                    },
                    {
                      __typename: 'TokenImage',
                      url: 'https://images.icytools.workers.dev/xl/collections/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698/tokens/19fb5d283ef085fa322449136a88d49e',
                    },
                  ],
                  tokenId: '5644',
                },
              },
            ],
            pageInfo: {
              __typename: 'PageInfo',
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              hasNextPage: true,
            },
          },
        },
      });
    });
  });
});
