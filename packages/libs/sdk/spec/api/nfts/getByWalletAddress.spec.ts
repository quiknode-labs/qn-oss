import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('getNFTsByWallet with address', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc1eab49cf9d2e23e43bcf23b36b2be14fc2f8838',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 330,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId:
                '50685890871471191256342199015362929537282628462001704949203871531598631920212',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
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
        const data1 = await api.nfts.getByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          first: 2,
        });
        const data2 = await api.nfts.getByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          first: 2,
          after: data1?.pageInfo?.endCursor,
        });
        const data3 = await api.nfts.getByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          first: 2,
          before: data2?.pageInfo?.startCursor,
        });
        const expectedResponse1 = {
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0xc1eab49cf9d2e23e43bcf23b36b2be14fc2f8838',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId: 330,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
              description: null,
              externalUrl: null,
              metadata: {},
              name: null,
              tokenId:
                '50685890871471191256342199015362929537282628462001704949203871531598631920212',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        };
        expect(data1).toStrictEqual(expectedResponse1);
        expect(data2).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
              description: null,
              externalUrl: null,
              metadata: {},
              name: 'digitalocean.eth',
              tokenId:
                '45129967949081731569091423139781563774511698358506968857407543276477264770298',
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
              description: null,
              externalUrl: null,
              metadata: {},
              name: 'quiknode.eth',
              tokenId:
                '98453072125691236847907277006096675934546424915169266808462253681542364422529',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        });
        expect(data3).toStrictEqual(expectedResponse1);
      }
    );
  });

  it('can handle a non-existent wallet address', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-null',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWallet({
          address: '0x2106C00Ac7dA0A3430aE667879139E832307bbbb',
          first: 2,
        });
        expect(data).toStrictEqual({
          address: '0x2106c00ac7da0a3430ae667879139e832307bbbb',
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

  it('can handle an existing but empty wallet', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-empty',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getByWallet({
          address: '0xce1e62f71bc7d7bb593ec2540e62c870dc7187bc',
          first: 2,
        });
        expect(data).toStrictEqual({
          address: '0xce1e62f71bc7d7bb593ec2540e62c870dc7187bc',
          ensName: 'foo.eth',
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
        const data = await api.nfts.getByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
          first: 2,
          filter: {
            contractAddressIn: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
          },
        });
        expect(data).toStrictEqual({
          results: [
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: 'https://loopyland.club/collection/donut/3972',
              metadata: {},
              name: 'Loopy Donut #3972',
              tokenId: 3972,
            },
            {
              animationUrl: null,
              collectionSlug: null,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              description: null,
              externalUrl: 'https://loopyland.club/collection/donut/9925',
              metadata: {
                name: 'Loopy Donut #9925',
                image:
                  'ipfs://QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/9925.png',
                sha256:
                  'd805065cdc4b76e3881e229ee1dfb548d87bfe49c6543e3e95d51467afc8c268',
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
                    value: 'Pink Candy',
                    trait_type: 'Glaze',
                  },
                  {
                    value: 'Japanese',
                    trait_type: 'Headgear',
                  },
                  {
                    value: 'Cool',
                    trait_type: 'Eyes',
                  },
                  {
                    value: 'Yellow Pouch',
                    trait_type: 'Accessory',
                  },
                ],
                external_url: 'https://loopyland.club/collection/donut/9925',
              },
              name: 'Loopy Donut #9925',
              tokenId: 9925,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        });
      }
    );
  });

  it('throws an error with no params passed', async () => {
    await expect(
      // @ts-ignore
      api.nfts.getByWallet({})
    ).rejects.toThrow(/address: Invalid input/);
  });

  it('throws an error with an invalid wallet address', async () => {
    await expect(
      api.nfts.getByWallet({
        address: '0x123',
      })
    ).rejects.toThrow(/address: Invalid input/);
  });

  it('throws an error with an invalid filter value', async () => {
    await expect(
      api.nfts.getByWallet({
        address: 'quicknode.eth',
        filter: {
          // @ts-ignore
          contractAddressIn: ['0x123'],
        },
      })
    ).rejects.toThrow(/filter,contractAddressIn,0: Not a valid address/);
  });

  it('throws an error with an invalid filter param', async () => {
    await expect(
      api.nfts.getByWallet({
        address: 'quicknode.eth',
        filter: {
          // @ts-ignore
          foo: 'bar',
        },
      })
    ).rejects.toThrow(/filter: Unrecognized key\(s\) in object: 'foo'/);
  });
});
