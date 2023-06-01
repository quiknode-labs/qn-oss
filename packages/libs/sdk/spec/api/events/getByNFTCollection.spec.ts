import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('nfts.getByNFTCollection', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByCollectionEvents-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByNFTCollection({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 13188760,
              fromAddress: '0x10fa1c188eca954419a85112f975155f717ad8ea',
              timestamp: '2021-09-09T01:59:43.000Z',
              toAddress: '0x032b7405695143334709076a574529fd02211a3e',
              transactionHash:
                '0x28de9822480129ae999ee2b8d698606357e4db41a6405bc77ebeb41a8c683522',
              transferIndex: 280,
              type: 'TRANSFER',
              tokenId: 1263,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              tokenQuantity: 1,
            },
            {
              blockNumber: 13150035,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-03T02:25:20.000Z',
              toAddress: '0x502668b661000c9035a30525362ca3aa0f726451',
              transactionHash:
                '0x5bf6a52a989748a42ccfc3f6ef6ac8981c9923b6afc294c99368dc88c07773f7',
              transferIndex: 200,
              type: 'MINT',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });
      }
    );
  });

  it('can iterate events', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByCollectionEvents-iterate',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.events.getByNFTCollection({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });
        const data2 = await api.events.getByNFTCollection({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
          after: data1?.pageInfo?.endCursor,
        });
        expect(data1).toStrictEqual({
          results: [
            {
              blockNumber: 13188760,
              fromAddress: '0x10fa1c188eca954419a85112f975155f717ad8ea',
              timestamp: '2021-09-09T01:59:43.000Z',
              toAddress: '0x032b7405695143334709076a574529fd02211a3e',
              transactionHash:
                '0x28de9822480129ae999ee2b8d698606357e4db41a6405bc77ebeb41a8c683522',
              transferIndex: 280,
              type: 'TRANSFER',
              tokenId: 1263,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              tokenQuantity: 1,
            },
            {
              blockNumber: 13150035,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-03T02:25:20.000Z',
              toAddress: '0x502668b661000c9035a30525362ca3aa0f726451',
              transactionHash:
                '0x5bf6a52a989748a42ccfc3f6ef6ac8981c9923b6afc294c99368dc88c07773f7',
              transferIndex: 200,
              type: 'MINT',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });
        expect(data2).toStrictEqual({
          results: [
            {
              blockNumber: 13150050,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-03T02:28:30.000Z',
              toAddress: '0xfbf84d500f02fb1cf2707445ecb098b87f91f4b8',
              transactionHash:
                '0xc36f8199862d04f166126574e471c5436f5be0c87fc9c1cc5e0f49def49ef719',
              transferIndex: 223,
              type: 'MINT',
              tokenQuantity: 1,
            },
            {
              blockNumber: 13150050,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-03T02:28:30.000Z',
              toAddress: '0xfbf84d500f02fb1cf2707445ecb098b87f91f4b8',
              transactionHash:
                '0xc36f8199862d04f166126574e471c5436f5be0c87fc9c1cc5e0f49def49ef719',
              transferIndex: 224,
              type: 'MINT',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
        });
      }
    );
  });

  it('can handle no results', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByCollectionEvents-no-results',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByNFTCollection({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307fake',
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
        });
      }
    );
  });
});
