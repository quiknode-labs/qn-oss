import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('events.getAll', () => {
  it('should return latest data with no filters', async () => {
    await withPolly(
      {
        recordingName: 'query-getAllEvents-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getAll({
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 17436511,
              fromAddress: '0x5a082a69f4c0dda3b8142ae93ab3b659905ed6c1',
              timestamp: '2023-06-08T15:38:23.000Z',
              toAddress: '0x9c143da2f408042137362c154484fa57dcd24c30',
              transactionHash:
                '0x54ab7978ced97d3602ab1a3bd18cec40de5be7d05051f64d2803b7207863c73c',
              transferIndex: 0,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0x26ee9f83c61193ea6b636001b1550cd0edf6ebad',
              tokenQuantity: '9968341450515928569671613',
            },
            {
              blockNumber: 17436511,
              fromAddress: '0x9c143da2f408042137362c154484fa57dcd24c30',
              timestamp: '2023-06-08T15:38:23.000Z',
              toAddress: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
              transactionHash:
                '0x54ab7978ced97d3602ab1a3bd18cec40de5be7d05051f64d2803b7207863c73c',
              transferIndex: 2,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '42853010875962186',
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

  it('should paginate correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getAllEvents-pagination',
        recordIfMissing: true,
      },
      async () => {
        const data1 = await api.events.getAll({
          first: 2,
          filter: {
            blockNumber: {
              eq: 17414768,
            },
          },
        });
        const data2 = await api.events.getAll({
          after: data1.pageInfo.endCursor,
          first: 2,
          filter: {
            blockNumber: {
              eq: 17414768,
            },
          },
        });
        const data3 = await api.events.getAll({
          before: data2.pageInfo.startCursor,
          first: 2,
          filter: {
            blockNumber: {
              eq: 17414768,
            },
          },
        });

        const expectedResponse1 = {
          results: [
            {
              blockNumber: 17414768,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0x47505a23b6ad20da63d10f7db6bc17c588736e7a',
              transactionHash:
                '0x78eefe79e7c28f5587e9a899ac4f56ded6d1299a713af20eb5010bce6cfe72f5',
              transferIndex: 0,
              type: 'MINT',
              tokenQuantity: '1024000000000000000000',
            },
            {
              blockNumber: 17414768,
              fromAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              transactionHash:
                '0xdb83a6553a34eb22b064028fa8d8c8a03ef1c393fa85831d3035b32da71b2f2d',
              transferIndex: 2,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '1000000000000000000',
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
              blockNumber: 17414768,
              fromAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0x19f0265a2537bbd2e3196a4d193f491e505634ea',
              transactionHash:
                '0xdb83a6553a34eb22b064028fa8d8c8a03ef1c393fa85831d3035b32da71b2f2d',
              transferIndex: 3,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '1000000000000000000',
            },
            {
              blockNumber: 17414768,
              fromAddress: '0x19f0265a2537bbd2e3196a4d193f491e505634ea',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0x3aad7cbbb2ab50946436215b19202c42e9156fa4',
              transactionHash:
                '0xdb83a6553a34eb22b064028fa8d8c8a03ef1c393fa85831d3035b32da71b2f2d',
              transferIndex: 4,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0x3aad7cbbb2ab50946436215b19202c42e9156fa4',
              tokenQuantity: '232275773783811856125173',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
        });
        expect(data3).toStrictEqual(expectedResponse1);
      }
    );
  });
  it('should filter by blockNumber', async () => {
    await withPolly(
      {
        recordingName: 'query-getAllEvents-filter-blockNumber',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getAll({
          first: 2,
          filter: {
            blockNumber: {
              eq: 17414768,
            },
          },
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 17414768,
              fromAddress: '0x0000000000000000000000000000000000000000',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0x47505a23b6ad20da63d10f7db6bc17c588736e7a',
              transactionHash:
                '0x78eefe79e7c28f5587e9a899ac4f56ded6d1299a713af20eb5010bce6cfe72f5',
              transferIndex: 0,
              type: 'MINT',
              tokenQuantity: '1024000000000000000000',
            },
            {
              blockNumber: 17414768,
              fromAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              transactionHash:
                '0xdb83a6553a34eb22b064028fa8d8c8a03ef1c393fa85831d3035b32da71b2f2d',
              transferIndex: 2,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '1000000000000000000',
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

  it('can use multiple filters', async () => {
    await withPolly(
      {
        recordingName: 'query-getAllEvents-filter-multiple',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getAll({
          first: 2,
          filter: {
            blockNumber: {
              eq: 17414768,
            },
            toAddress: {
              eq: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
            },
          },
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 17414768,
              fromAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              transactionHash:
                '0xdb83a6553a34eb22b064028fa8d8c8a03ef1c393fa85831d3035b32da71b2f2d',
              transferIndex: 2,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '1000000000000000000',
            },
            {
              blockNumber: 17414768,
              fromAddress: '0x963f4bb20fbf3d04e84e4c3821ff482fd3444bd8',
              timestamp: '2023-06-05T13:59:47.000Z',
              toAddress: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
              transactionHash:
                '0x1a03fb5dcffbe89ff7a2646b55beeb0389f00bc2d65d2b1d9c57b41684d25c1c',
              transferIndex: 24,
              type: 'TRANSFER',
              tokenId: null,
              contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              tokenQuantity: '68219257687334563',
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

  it('throws error if blockNumber filter is invalid', async () => {
    await expect(
      api.events.getAll({
        first: 2,
        filter: {
          blockNumber: {
            eq: -1,
          },
        },
      })
    ).rejects.toThrowError(/Number must be greater than 0/);
  });

  it('throws error if transactionHash filter is invalid', async () => {
    await expect(
      api.events.getAll({
        first: 2,
        filter: {
          transactionHash: {
            eq: '0xZzZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          },
        },
      })
    ).rejects.toThrowError(/Not a valid transaction hash/);
  });

  it('throws an error if there is an invalid param', async () => {
    const input = {
      first: 2,
      invalidParam: 'hi',
    };
    await expect(api.events.getAll(input)).rejects.toThrowError(
      /Unrecognized key\(s\) in object: 'invalidParam'/
    );
  });

  it('throws an error if there is an invalid param in filter', async () => {
    const input: any = {
      first: 2,
      filter: {
        invalidParam: 'hi',
      },
    };
    await expect(api.events.getAll(input)).rejects.toThrowError(
      /filter: Unrecognized key\(s\) in object: 'invalidParam'/
    );
  });

  it('throws an error if there is an invalid operator in filter', async () => {
    const input: any = {
      first: 2,
      filter: {
        blockNumber: {
          notAnOperator: 11111,
        },
      },
    };
    await expect(api.events.getAll(input)).rejects.toThrowError(
      /filter,blockNumber: Unrecognized key\(s\) in object: 'notAnOperator'/
    );
  });
});
