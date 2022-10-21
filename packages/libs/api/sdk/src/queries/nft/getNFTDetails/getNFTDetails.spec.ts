import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTDetails', () => {
  it('executes correctly with default params', async () => {
    await withPolly({ recordingName: 'query-getNFTDetails-full' }, async () => {
      const { data } = await client.nft.getNFTDetails({
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: '400',
      });
      expect(data).toStrictEqual({
        token: {
          tokenId: '400',
          attributes: [
            {
              name: 'Background',
              value: 'Yellow',
            },
            {
              name: 'Beak',
              value: 'Small',
            },
            {
              name: 'Body',
              value: 'Guardian',
            },
            {
              name: 'Eyes',
              value: 'Discerning',
            },
            {
              name: 'Feathers',
              value: 'Purple',
            },
            {
              name: 'Headwear',
              value: 'Flower',
            },
          ],
          contract: {
            address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
            isVerified: true,
            tokenStandard: 'ERC721',
            name: 'Moonbirds',
          },
          images: [
            {
              height: 100,
              mimeType: 'image/png',
              url: 'https://images.icytools.workers.dev/xs/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
              width: 100,
            },
            {
              height: 200,
              mimeType: 'image/png',
              url: 'https://images.icytools.workers.dev/sm/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
              width: 200,
            },
            {
              height: 400,
              mimeType: 'image/png',
              url: 'https://images.icytools.workers.dev/md/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
              width: 400,
            },
            {
              height: 800,
              mimeType: 'image/png',
              url: 'https://images.icytools.workers.dev/lg/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
              width: 800,
            },
            {
              height: 1200,
              mimeType: 'image/png',
              url: 'https://images.icytools.workers.dev/xl/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
              width: 1200,
            },
          ],
          name: '#400',
          symbol: null,
          metadata: {
            animation_url: null,
            background_color: null,
            description: null,
            external_url: 'https://moonbirds.xyz/',
            image: 'https://live---metadata-5covpqijaa-uc.a.run.app/images/400',
            image_data: null,
            name: '#400',
            youtube_url: null,
          },
        },
      });
    });
  });
  it('handles includeMetadata false', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-nometadata' },
      async () => {
        const { data } = await client.nft.getNFTDetails({
          contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
          tokenId: '400',
          includeMetadata: false,
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '400',
            attributes: [
              {
                name: 'Background',
                value: 'Yellow',
              },
              {
                name: 'Beak',
                value: 'Small',
              },
              {
                name: 'Body',
                value: 'Guardian',
              },
              {
                name: 'Eyes',
                value: 'Discerning',
              },
              {
                name: 'Feathers',
                value: 'Purple',
              },
              {
                name: 'Headwear',
                value: 'Flower',
              },
            ],
            contract: {
              address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
              isVerified: true,
              tokenStandard: 'ERC721',
              name: 'Moonbirds',
            },
            images: [
              {
                height: 100,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/xs/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 100,
              },
              {
                height: 200,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/sm/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 200,
              },
              {
                height: 400,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/md/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 400,
              },
              {
                height: 800,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/lg/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 800,
              },
              {
                height: 1200,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/xl/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 1200,
              },
            ],
            name: '#400',
            symbol: null,
          },
        });
      }
    );
  });
  it('handles includeImages false', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-noimages' },
      async () => {
        const { data } = await client.nft.getNFTDetails({
          contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
          tokenId: '400',
          includeImages: false,
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '400',
            attributes: [
              {
                name: 'Background',
                value: 'Yellow',
              },
              {
                name: 'Beak',
                value: 'Small',
              },
              {
                name: 'Body',
                value: 'Guardian',
              },
              {
                name: 'Eyes',
                value: 'Discerning',
              },
              {
                name: 'Feathers',
                value: 'Purple',
              },
              {
                name: 'Headwear',
                value: 'Flower',
              },
            ],
            contract: {
              address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
              isVerified: true,
              tokenStandard: 'ERC721',
              name: 'Moonbirds',
            },
            name: '#400',
            symbol: null,
            metadata: {
              animation_url: null,
              background_color: null,
              description: null,
              external_url: 'https://moonbirds.xyz/',
              image:
                'https://live---metadata-5covpqijaa-uc.a.run.app/images/400',
              image_data: null,
              name: '#400',
              youtube_url: null,
            },
          },
        });
      }
    );
  });
  it('handles includeAttributes false', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-noattributes' },
      async () => {
        const { data } = await client.nft.getNFTDetails({
          contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
          tokenId: '400',
          includeAttributes: false,
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '400',
            contract: {
              address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
              isVerified: true,
              tokenStandard: 'ERC721',
              name: 'Moonbirds',
            },
            images: [
              {
                height: 100,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/xs/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 100,
              },
              {
                height: 200,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/sm/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 200,
              },
              {
                height: 400,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/md/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 400,
              },
              {
                height: 800,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/lg/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 800,
              },
              {
                height: 1200,
                mimeType: 'image/png',
                url: 'https://images.icytools.workers.dev/xl/collections/0x23581767a106ae21c074b2276d25e5c3e136a68b/tokens/bde0877c73293c2d23da83c8e823a3fe',
                width: 1200,
              },
            ],
            name: '#400',
            symbol: null,
            metadata: {
              animation_url: null,
              background_color: null,
              description: null,
              external_url: 'https://moonbirds.xyz/',
              image:
                'https://live---metadata-5covpqijaa-uc.a.run.app/images/400',
              image_data: null,
              name: '#400',
              youtube_url: null,
            },
          },
        });
      }
    );
  });
  it('handles all include* properties as false', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-nooptional' },
      async () => {
        const { data } = await client.nft.getNFTDetails({
          contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
          tokenId: '400',
          includeAttributes: false,
          includeImages: false,
          includeMetadata: false,
        });
        expect(data).toStrictEqual({
          token: {
            tokenId: '400',
            contract: {
              address: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
              isVerified: true,
              tokenStandard: 'ERC721',
              name: 'Moonbirds',
            },
            name: '#400',
            symbol: null,
          },
        });
      }
    );
  });
  it('handles null result', async () => {
    await withPolly({ recordingName: 'query-getNFTDetails-null' }, async () => {
      const { data } = await client.nft.getNFTDetails({
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: '444444444',
      });
      expect(data).toStrictEqual({ token: null });
    });
  });
});
