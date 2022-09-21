import request from 'supertest';
import withPolly from '../../testSetup/pollyTestSetup';
import { app } from '../app';

describe('nft controller', () => {
  it('works', async () => {
    await withPolly({ recordingName: 'query-getNFTsByWalletENS' }, async () => {
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
                  address: '0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853',
                  name: 'Cosmic Corpse Society V2',
                  symbol: 'CCS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853/tokens/9e4260ceae4f53a5c1ee1ef2bf53dea2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853/tokens/9e4260ceae4f53a5c1ee1ef2bf53dea2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853/tokens/9e4260ceae4f53a5c1ee1ef2bf53dea2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853/tokens/9e4260ceae4f53a5c1ee1ef2bf53dea2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa1f92f70dce96c7cd32aafd93cd4bff7debdf853/tokens/9e4260ceae4f53a5c1ee1ef2bf53dea2',
                  },
                ],
                tokenId: '162',
              },
              {
                contract: {
                  address: '0x451a0d4c5f834dc45459b47e18ecdbc2b6ff5d6e',
                  name: 'Merge Your NFT',
                  symbol: 'SETMERGE',
                },
                images: [],
                tokenId: '431',
              },
              {
                contract: {
                  address: '0x451a0d4c5f834dc45459b47e18ecdbc2b6ff5d6e',
                  name: 'Merge Your NFT',
                  symbol: 'SETMERGE',
                },
                images: [],
                tokenId: '432',
              },
              {
                contract: {
                  address: '0x451a0d4c5f834dc45459b47e18ecdbc2b6ff5d6e',
                  name: 'Merge Your NFT',
                  symbol: 'SETMERGE',
                },
                images: [],
                tokenId: '433',
              },
              {
                contract: {
                  address: '0x451a0d4c5f834dc45459b47e18ecdbc2b6ff5d6e',
                  name: 'Merge Your NFT',
                  symbol: 'SETMERGE',
                },
                images: [],
                tokenId: '434',
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
