import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('getNFTDetails', () => {
  it('executes correctly', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-base', recordIfMissing: true },
      async () => {
        const data = await api.nfts.getNFTDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1',
        });
        expect(data).toStrictEqual({
          nft: {
            animationUrl: null,
            collectionSlug: null,
            contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            description: null,
            externalUrl: 'https://loopyland.club/collection/donut/1',
            metadata: {
              name: 'Loopy Donut #1',
              image:
                'ipfs://QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/1.png',
              sha256:
                '15e8c8ddee6cf329e87def3e9a15f51a57f212245576096aa0e01336b5c2367e',
              attributes: [
                {
                  value: 'Jade',
                  trait_type: 'Background',
                },
                {
                  value: 'Donut Body',
                  trait_type: 'Base',
                },
                {
                  value: 'Starcandy',
                  trait_type: 'Glaze',
                },
                {
                  value: 'Quinn',
                  trait_type: 'Headgear',
                },
                {
                  value: 'Cool',
                  trait_type: 'Eyes',
                },
                {
                  value: 'Gold Teeth',
                  trait_type: 'Mouth',
                },
              ],
              external_url: 'https://loopyland.club/collection/donut/1',
            },
            name: 'Loopy Donut #1',
            tokenId: 1,
            wallet: {
              address: '0xb3cfbf8dc8f5d2f6607d8d8e251f7aae62a5d10a',
              ensName: null,
            },
          },
        });
      }
    );
  });

  it('handles missing address', async () => {
    withPolly(
      { recordingName: 'query-getNFTDetails-missing', recordIfMissing: true },
      async () => {
        const data = await api.nfts.getNFTDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307aaaa',
          tokenId: '1',
        });
        expect(data).toStrictEqual({ nft: null });
      }
    );
  });

  it('throws error with no params', async () => {
    const input: any = {};
    await expect(api.nfts.getNFTDetails(input)).rejects.toThrow(
      /contractAddress: Required/
    );
  });

  it('throws error with no contract address', async () => {
    const input: any = { tokenId: '1' };
    await expect(api.nfts.getNFTDetails(input)).rejects.toThrow(
      /contractAddress: Required/
    );
  });

  it('throws error with no token id', async () => {
    const input: any = { contractAddress: '0x123' };
    await expect(api.nfts.getNFTDetails(input)).rejects.toThrow(
      /tokenId: Required/
    );
  });

  it('throws error with invalid param', async () => {
    const input: any = {
      foo: 'bar',
      contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
      tokenId: '1',
    };
    await expect(api.nfts.getNFTDetails(input)).rejects.toThrow(
      /Unrecognized key\(s\) in object: 'foo'/
    );
  });
});
