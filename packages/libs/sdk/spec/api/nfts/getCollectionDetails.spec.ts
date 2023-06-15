import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('getCollectionDetails', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getCollectionDetails-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getCollectionDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
        });
        expect(data).toStrictEqual({
          collection: {
            address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            bannerImage: null,
            baseTokenUri:
              'ipfs://QmZrvjYcwZ4P5DMiY4Gv9T8W1Pf7DuLpqc6JSdmKxG3n6h/',
            circulatingSupply: 9999,
            contract: {
              address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              isVerified: true,
              name: 'Loopy Donuts',
              symbol: 'DONUT',
              supportedErcInterfaces: ['165', '721'],
            },
            description: null,
            externalUrl: 'https://loopyland.club',
            image: null,
            name: 'Loopy Donuts',
            ohlcvChart: [
              {
                average: 0.01,
                close: 0.01,
                count: 1,
                high: 0.01,
                low: 0.01,
                open: 0.01,
                volume: 0.01,
                timestamp: '2023-04-27T09:20:00.000Z',
              },
            ],
            openseaMetadata: {
              isHidden: false,
              isVerified: false,
              unsafeSlug: 'loopy-donuts',
            },
            slug: null,
            symbol: 'DONUT',
            totalSupply: 10000,
            twitterUsername: 'Loopy_Donuts',
          },
        });
      }
    );
  });

  it('handles non-existent contract address', async () => {
    await withPolly(
      {
        recordingName: 'query-getCollectionDetails-incorrect-input',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.nfts.getCollectionDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307aaaa',
        });
        expect(data).toStrictEqual({
          collection: null,
        });
      }
    );
  });

  it('throws error on missing contract address', async () => {
    await expect(
      //@ts-ignore
      api.nfts.getCollectionDetails({})
    ).rejects.toThrow(/contractAddress: Required/);
  });

  it('throws error on invalid contract address', async () => {
    await expect(
      api.nfts.getCollectionDetails({
        contractAddress: '0x123',
      })
    ).rejects.toThrow(/contractAddress: Not a valid address/);
  });

  it('throws error on invalid param', async () => {
    await expect(
      api.nfts.getCollectionDetails({
        // @ts-ignore
        foo: 'bar',
      })
    ).rejects.toThrow(/Unrecognized key\(s\) in object: 'foo'/);
  });
});
