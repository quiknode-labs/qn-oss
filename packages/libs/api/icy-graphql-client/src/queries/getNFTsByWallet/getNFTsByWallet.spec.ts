import { IcyGraphQLClient } from '../../client';

describe('getNFTsByWallet', () => {
  it('executes correctly', async () => {
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
            {
              __typename: 'TokenEdge',
              node: {
                __typename: 'ERC721Token',
                contract: {
                  __typename: 'ERC721Contract',
                  address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
                  name: 'ENS: Ethereum Name Service',
                  symbol: null,
                },
                images: [],
                tokenId:
                  '13203599828705148470658522121824605898638494486652209121629561653987902159989',
              },
            },
            {
              __typename: 'TokenEdge',
              node: {
                __typename: 'ERC721Token',
                contract: {
                  __typename: 'ERC721Contract',
                  address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
                  name: 'ENS: Ethereum Name Service',
                  symbol: null,
                },
                images: [],
                tokenId:
                  '38466396548639678111799140699605239506115370171717208040726316773199821571564',
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
