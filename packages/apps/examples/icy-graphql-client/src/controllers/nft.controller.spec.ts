import request from 'supertest';
import withPolly from '../../testSetup/pollyTestSetup';
import { app } from '../app';

describe('nft controller', () => {
  it('works', async () => {
    await withPolly({ recordingName: 'query-getNFTsByWallet' }, async () => {
      const response = await request(app)
        .get('/api/nftsByEns/vitalik.eth')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toStrictEqual({
        data: {
          wallet: {
            __typename: 'Wallet',
            ensName: 'vitalik.eth',
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            tokens: {
              __typename: 'TokenConnection',
              pageInfo: {
                __typename: 'PageInfo',
                hasNextPage: true,
                endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              },
              edges: [
                {
                  __typename: 'TokenEdge',
                  node: {
                    __typename: 'ERC721Token',
                    tokenId: '3859',
                    images: [
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xs/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/sm/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/md/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/lg/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xl/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                      },
                    ],
                    contract: {
                      __typename: 'ERC721Contract',
                      address: '0xaa462106da447c0440a4be29614c19387a59a331',
                      symbol: 'ENSMAXIS',
                      name: 'ENS Maxis',
                    },
                  },
                },
                {
                  __typename: 'TokenEdge',
                  node: {
                    __typename: 'ERC721Token',
                    tokenId: '481',
                    images: [
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xs/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/sm/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/md/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/lg/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xl/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                      },
                    ],
                    contract: {
                      __typename: 'ERC721Contract',
                      address: '0x22871b977aae43d44fe50df03f632134c3e3e490',
                      symbol: 'UFPC',
                      name: 'UDID Network Genesis Pass Card',
                    },
                  },
                },
                {
                  __typename: 'TokenEdge',
                  node: {
                    __typename: 'ERC721Token',
                    tokenId: '9',
                    images: [],
                    contract: {
                      __typename: 'ERC721Contract',
                      address: '0x04c87b76b73ed706d4aac567e3adccb994591b1b',
                      symbol: 'A3S',
                      name: 'A3S Protocol (Ethereum)',
                    },
                  },
                },
                {
                  __typename: 'TokenEdge',
                  node: {
                    __typename: 'ERC721Token',
                    tokenId: '1598',
                    images: [
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xs/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/sm/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/md/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/lg/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                      },
                      {
                        __typename: 'TokenImage',
                        url: 'https://images.icytools.workers.dev/xl/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                      },
                    ],
                    contract: {
                      __typename: 'ERC721Contract',
                      address: '0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8',
                      symbol: 'DKNZA',
                      name: 'Dickenzas',
                    },
                  },
                },
                {
                  __typename: 'TokenEdge',
                  node: {
                    __typename: 'ERC721Token',
                    tokenId: '3224',
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
                    contract: {
                      __typename: 'ERC721Contract',
                      address: '0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d',
                      symbol: 'BF',
                      name: 'Best Friend - OfficaI',
                    },
                  },
                },
              ],
            },
          },
        },
        loading: false,
        networkStatus: 7,
      });
    });
  });
});
