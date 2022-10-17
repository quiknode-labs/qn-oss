import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTsByContractAddress', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByContractAddress-base',
      },
      async () => {
        const { data } = await client.nft.getNFTsByContractAddress({
          address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 5,
        });
        expect(data).toStrictEqual({
          contract: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            isVerified: false,
            tokenStandard: 'ERC721',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
            },
            tokens: [
              {
                tokenId: '0',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '1',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '2',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '3',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '4',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
            ],
            circulatingSupply: 9999,
            name: 'Loopy Donuts',
            symbol: 'DONUT',
          },
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
        const { data: firstResponse } =
          await client.nft.getNFTsByContractAddress({
            address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
            first: 5,
          });
        const { data: secondResponse } =
          await client.nft.getNFTsByContractAddress({
            address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
            first: 5,
            after: firstResponse?.contract?.tokensPageInfo.endCursor,
          });

        expect(firstResponse).toStrictEqual({
          contract: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            isVerified: false,
            tokenStandard: 'ERC721',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
            },
            tokens: [
              {
                tokenId: '0',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/cde9e40e50b3116d97f157a4772f470b',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '1',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/0e948cdb828f70766c55131598a3f83d',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '2',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '3',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/3',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '4',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
            ],
            circulatingSupply: 9999,
            name: 'Loopy Donuts',
            symbol: 'DONUT',
          },
        });

        expect(secondResponse).toStrictEqual({
          contract: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            isVerified: false,
            tokenStandard: 'ERC721',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
            },
            tokens: [
              {
                tokenId: '4',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/4',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '5',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/5',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '6',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/6',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '7',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/7',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/7',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/7',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/7',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/7',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '8',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2503fc848d7b76fb1a23fd49608b7bd3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2503fc848d7b76fb1a23fd49608b7bd3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2503fc848d7b76fb1a23fd49608b7bd3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2503fc848d7b76fb1a23fd49608b7bd3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/2503fc848d7b76fb1a23fd49608b7bd3',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
              {
                tokenId: '9',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x2106c00ac7da0a3430ae667879139e832307aeaa/tokens/9',
                  },
                ],
                contract: {
                  address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
                },
              },
            ],
            circulatingSupply: 9999,
            name: 'Loopy Donuts',
            symbol: 'DONUT',
          },
        });
      }
    );
  });
});
