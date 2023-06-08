import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';
import e from 'express';

const api = apiClient;

describe('events.getByNFT', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTEvents-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1263',
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
              blockNumber: 13156479,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-04T02:14:32.000Z',
              toAddress: '0x10fa1c188eca954419a85112f975155f717ad8ea',
              transactionHash:
                '0x3dc4e2baf115d582443d074292c28b7e856b29f4f06b40a699f7f20cc791c086',
              transferIndex: 363,
              type: 'MINT',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: false,
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
        recordingName: 'query-getNFTEvents-iterate',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1518',
          first: 2,
        });
        const data2 = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1518',
          first: 2,
          after: data1?.pageInfo?.endCursor,
        });
        const data3 = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1518',
          first: 2,
          before: data2?.pageInfo?.startCursor,
        });
        const expectedResponse1 = {
          results: [
            {
              blockNumber: 13158918,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-04T11:29:13.000Z',
              toAddress: '0x4036b344e3efe9af30cd179ecb9a54a792c164d8',
              transactionHash:
                '0x93399fe3ae06883aa4dd05340a3fa3c3c93150b5a0541211d595d6165a04d5d4',
              transferIndex: 208,
              type: 'MINT',
              tokenQuantity: 1,
            },
            {
              blockNumber: 13363089,
              fromAddress: '0x7ab5fbb6f543fb7d9664bf115badcb857d3139df',
              timestamp: '2021-10-06T03:41:19.000Z',
              toAddress: '0x1ce99932fd278e00911814dc4bd403e1293d8ed2',
              transactionHash:
                '0x59c6f447e77e2d804331fefa2143729d1eca6ba40ab0b54b9097c52185d8b5a1',
              transferIndex: 182,
              type: 'SALE',
              marketplace: 'OPENSEA',
              receivedTokenContractAddress:
                '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              receivedTokenId: null,
              sentTokenId: 1518,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        };
        expect(data1).toStrictEqual(expectedResponse1);
        expect(data2).toStrictEqual({
          results: [
            {
              blockNumber: 13355777,
              fromAddress: '0x4036b344e3efe9af30cd179ecb9a54a792c164d8',
              timestamp: '2021-10-05T00:15:56.000Z',
              toAddress: '0x7ab5fbb6f543fb7d9664bf115badcb857d3139df',
              transactionHash:
                '0x3de6fab59c49b2b9b4bb9710bba764ea7a0d63d897f061ed0b2e3ed14c800ca3',
              transferIndex: 102,
              type: 'SALE',
              marketplace: 'OPENSEA',
              receivedTokenContractAddress:
                '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              receivedTokenId: null,
              sentTokenId: 1518,
            },
            {
              blockNumber: 17162646,
              fromAddress: '0x1ce99932fd278e00911814dc4bd403e1293d8ed2',
              timestamp: '2023-05-01T01:13:11.000Z',
              toAddress: '0x130f0002b4cf5e67adf4c7147ac80abee7b3fe0a',
              transactionHash:
                '0x5a518611101abe7b87130666ea0ac1a78b367c9c357ba5b343a24e09c0bacc60',
              transferIndex: 178,
              type: 'TRANSFER',
              tokenId: 1518,
              contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: false,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
        });
        expect(data3).toStrictEqual(expectedResponse1);
      }
    );
  });

  it('can handle no results', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTEvents-no-results',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307aaaa',
          tokenId: '103240319',
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

  it('can filter events', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTEvents-filter',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByNFT({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1518',
          first: 2,
          filter: {
            blockNumber: {
              eq: 13158918,
            },
          },
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 13158918,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2021-09-04T11:29:13.000Z',
              toAddress: '0x4036b344e3efe9af30cd179ecb9a54a792c164d8',
              transactionHash:
                '0x93399fe3ae06883aa4dd05340a3fa3c3c93150b5a0541211d595d6165a04d5d4',
              transferIndex: 208,
              type: 'MINT',
              tokenQuantity: 1,
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });
      }
    );
  });
});
