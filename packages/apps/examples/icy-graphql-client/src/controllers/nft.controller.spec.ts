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
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0xaa462106da447c0440a4be29614c19387a59a331',
                  name: 'ENS Maxis',
                  symbol: 'ENSMAXIS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                ],
                tokenId: '3859',
              },
              {
                contract: {
                  address: '0x22871b977aae43d44fe50df03f632134c3e3e490',
                  name: 'UDID Network Genesis Pass Card',
                  symbol: 'UFPC',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                ],
                tokenId: '481',
              },
              {
                contract: {
                  address: '0x04c87b76b73ed706d4aac567e3adccb994591b1b',
                  name: 'A3S Protocol (Ethereum)',
                  symbol: 'A3S',
                },
                images: [],
                tokenId: '9',
              },
              {
                contract: {
                  address: '0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8',
                  name: 'Dickenzas',
                  symbol: 'DKNZA',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                ],
                tokenId: '1598',
              },
              {
                contract: {
                  address: '0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d',
                  name: 'Best Friend - OfficaI',
                  symbol: 'BF',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                ],
                tokenId: '3224',
              },
            ],
            tokensPageInfo: {
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              hasNextPage: true,
            },
          },
        },
        loading: false,
        networkStatus: 7,
      });
    });
  });
});
