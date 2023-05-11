import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('getNFTsByWalletAddress', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWalletAddress({
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc',
              description:
                'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              externalUrl: null,
              metadata: {
                name: 'Creature #9299',
                image:
                  'https://creature.mypinata.cloud/ipfs/QmeZGc1CL3eb9QJatKXTGT7ekgLMq9FyZUWckQ4oWdc53a/9299.jpg',
                attributes: [
                  {
                    value: 'Field',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Violet',
                    trait_type: 'Creature',
                  },
                  {
                    value: 'Gold Polkadots',
                    trait_type: 'Decoration',
                  },
                  {
                    value: 'Black',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Happy',
                    trait_type: 'Mouth',
                  },
                  {
                    value: 'Crush',
                    trait_type: 'Foreground',
                  },
                ],
                description:
                  'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              },
              name: 'Creature #9299',
              tokenId: 9299,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x9da9d93023d021f89bfd8d7bbb3f6e84f34883d5',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 194,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          ensName: 'shaq.eth',
        });
      }
    );
  });

  it('can iterate tokens', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-iterates',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.nfts.getByWalletAddress({
          address: '0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17',
          first: 2,
        });
        const data2 = await api.nfts.getByWalletAddress({
          address: '0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17',
          first: 2,
          after: data1?.pageInfo?.endCursor,
        });
        expect(data1).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc',
              description:
                'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              externalUrl: null,
              metadata: {
                name: 'Creature #9299',
                image:
                  'https://creature.mypinata.cloud/ipfs/QmeZGc1CL3eb9QJatKXTGT7ekgLMq9FyZUWckQ4oWdc53a/9299.jpg',
                attributes: [
                  {
                    value: 'Field',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Violet',
                    trait_type: 'Creature',
                  },
                  {
                    value: 'Gold Polkadots',
                    trait_type: 'Decoration',
                  },
                  {
                    value: 'Black',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Happy',
                    trait_type: 'Mouth',
                  },
                  {
                    value: 'Crush',
                    trait_type: 'Foreground',
                  },
                ],
                description:
                  'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              },
              name: 'Creature #9299',
              tokenId: 9299,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x9da9d93023d021f89bfd8d7bbb3f6e84f34883d5',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 194,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          ensName: 'shaq.eth',
        });
        expect(data2).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xa87be4ad36d897a58ed47e5588852abf83ff1b82',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 20000020,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x3df25f701c97f8f95590c8dd7b0ce34d61e3b590',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 2075,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          ensName: 'shaq.eth',
        });
      }
    );
  });

  it('can handle no response', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-null',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWalletAddress({
          address: '0x3C6aEFF92b4B35C2e1b196B57d0f8FFB568ABCD',
          first: 2,
        });
        expect(data).toStrictEqual({
          address: '',
          ensName: '',
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
          },
          results: [],
        });
      }
    );
  });

  it('can filter by contract addresses', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-contractAddresses',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWalletAddress({
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          first: 2,
          filter: {
            contractAddressIn: ['0xc92ceddfb8dd984a89fb494c376f9a48b999aafc'],
          },
        });
        expect(data).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc',
              description:
                'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              externalUrl: null,
              metadata: {
                name: 'Creature #9299',
                image:
                  'https://creature.mypinata.cloud/ipfs/QmeZGc1CL3eb9QJatKXTGT7ekgLMq9FyZUWckQ4oWdc53a/9299.jpg',
                attributes: [
                  {
                    value: 'Field',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Violet',
                    trait_type: 'Creature',
                  },
                  {
                    value: 'Gold Polkadots',
                    trait_type: 'Decoration',
                  },
                  {
                    value: 'Black',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Happy',
                    trait_type: 'Mouth',
                  },
                  {
                    value: 'Crush',
                    trait_type: 'Foreground',
                  },
                ],
                description:
                  'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              },
              name: 'Creature #9299',
              tokenId: 9299,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc92ceddfb8dd984a89fb494c376f9a48b999aafc',
              description:
                'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              externalUrl: null,
              metadata: {
                name: 'Creature #9018',
                image:
                  'https://creature.mypinata.cloud/ipfs/QmeZGc1CL3eb9QJatKXTGT7ekgLMq9FyZUWckQ4oWdc53a/9018.jpg',
                attributes: [
                  {
                    value: 'Scarlet',
                    trait_type: 'Background',
                  },
                  {
                    value: 'Clouds',
                    trait_type: 'Overlay',
                  },
                  {
                    value: 'Violet',
                    trait_type: 'Creature',
                  },
                  {
                    value: 'Ocean Tranteum',
                    trait_type: 'Decoration',
                  },
                  {
                    value: 'Raincoat',
                    trait_type: 'Outfit',
                  },
                  {
                    value: 'Ocean',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Happy',
                    trait_type: 'Mouth',
                  },
                  {
                    value: 'Clouds',
                    trait_type: 'Foreground',
                  },
                ],
                description:
                  'Welcome to The Creature World. You have arrived in a nearby magical dimension of love, divine intervention, and possibility. 10,000 unique Creatures are here to guide you on this journey. Follow their lead. Created with love by NYC-based artist Danny Cole. www.creature.world.',
              },
              name: 'Creature #9018',
              tokenId: 9018,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0x3c6aeff92b4b35c2e1b196b57d0f8ffb56884a17',
          ensName: 'shaq.eth',
        });
      }
    );
  });
});
