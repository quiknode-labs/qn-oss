import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('nfts.getByContractAddress', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByContractAddress-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByContractAddress({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [
                {
                  name: 'Background',
                  value: 'Yellow',
                },
                {
                  name: 'Glaze',
                  value: 'Caramel',
                },
                {
                  name: 'Eyes',
                  value: 'Sunglasses',
                },
                {
                  name: 'Base',
                  value: 'Donut Body',
                },
                {
                  name: 'Accessory',
                  value: 'Yellow Pouch',
                },
                {
                  name: 'Headgear',
                  value: 'Pink Horns',
                },
              ],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: 'https://loopyland.club/collection/donut/619',
              metadata: {
                name: 'Loopy Donut #619',
                image:
                  'ipfs://QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/619.png',
                sha256:
                  'fb1c0837f55e1a234fbe760746ff5a5a8561a0c312576759e4ae7af8c2376942',
                attributes: [
                  {
                    value: 'Yellow',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Donut Body',
                    trait_type: 'Base',
                  },
                  {
                    value: 'Caramel',
                    trait_type: 'Glaze',
                  },
                  {
                    value: 'Pink Horns',
                    trait_type: 'Headgear',
                  },
                  {
                    value: 'Sunglasses',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Yellow Pouch',
                    trait_type: 'Accessory',
                  },
                ],
                external_url: 'https://loopyland.club/collection/donut/619',
              },
              name: 'Loopy Donut #619',
              tokenId: 619,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 609,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          standard: 'ERC721',
        });
      }
    );
  });

  it('can iterate tokens', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByContractAddress-iterates',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.nfts.getByContractAddress({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });
        const data2 = await api.nfts.getByContractAddress({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
          after: data1?.pageInfo?.endCursor,
        });
        const data3 = await api.nfts.getByContractAddress({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
          before: data2?.pageInfo?.startCursor,
        });
        const expectedResponse1 = {
          results: [
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [
                {
                  name: 'Background',
                  value: 'Yellow',
                },
                {
                  name: 'Glaze',
                  value: 'Caramel',
                },
                {
                  name: 'Eyes',
                  value: 'Sunglasses',
                },
                {
                  name: 'Base',
                  value: 'Donut Body',
                },
                {
                  name: 'Accessory',
                  value: 'Yellow Pouch',
                },
                {
                  name: 'Headgear',
                  value: 'Pink Horns',
                },
              ],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: 'https://loopyland.club/collection/donut/619',
              metadata: {
                name: 'Loopy Donut #619',
                image:
                  'ipfs://QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/619.png',
                sha256:
                  'fb1c0837f55e1a234fbe760746ff5a5a8561a0c312576759e4ae7af8c2376942',
                attributes: [
                  {
                    value: 'Yellow',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Donut Body',
                    trait_type: 'Base',
                  },
                  {
                    value: 'Caramel',
                    trait_type: 'Glaze',
                  },
                  {
                    value: 'Pink Horns',
                    trait_type: 'Headgear',
                  },
                  {
                    value: 'Sunglasses',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Yellow Pouch',
                    trait_type: 'Accessory',
                  },
                ],
                external_url: 'https://loopyland.club/collection/donut/619',
              },
              name: 'Loopy Donut #619',
              tokenId: 619,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 609,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          standard: 'ERC721',
        };
        expect(data1).toStrictEqual(expectedResponse1);
        expect(data2).toStrictEqual({
          results: [
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 611,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
            {
              __typename: 'ERC721NFT',
              animationUrl: null,
              attributes: [],
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 613,
              wallet: {
                address: '0x8e570ee755974de773ae0149ea4e3da3f622094c',
                ensName: null,
              },
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
          standard: 'ERC721',
        });
        expect(data3).toStrictEqual(expectedResponse1);
      }
    );
  });

  it('can handle no response', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByContractAddress-null',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByContractAddress({
          contractAddress: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [],
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
          },
          standard: null,
        });
      }
    );
  });

  it('throws error with no params', async () => {
    const input: any = {};
    await expect(api.nfts.getByContractAddress(input)).rejects.toThrow(
      /contractAddress: Required/
    );
  });

  it('throws error with invalid contract address param', async () => {
    const input: any = {
      contractAddress: '0x123',
    };
    await expect(api.nfts.getByContractAddress(input)).rejects.toThrow(
      /contractAddress: Not a valid address/
    );
  });

  it('throws error with invalid param', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(api.nfts.getByContractAddress(input)).rejects.toThrow(
      /Unrecognized key\(s\) in object: 'foo'/
    );
  });
});
