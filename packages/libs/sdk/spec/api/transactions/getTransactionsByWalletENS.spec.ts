import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const transactions = apiClient.transactions;

describe('transactions.getByWallet with ENS', () => {
  it('should return a list of transactions for a given ENS', async () => {
    await withPolly(
      {
        recordingName: 'query-getTransactionsByWalletENS-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.getByWallet({
          address: 'quicknode.eth',
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 17166949,
              blockTimestamp: '2023-05-01T15:44:59.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 14548638,
              effectiveGasPrice: 93579328585,
              gas: 120884,
              gasPrice: 93579328585,
              gasUsed: 114517,
              hash: '0x13a680b3899614265b0602569e592dafe4763f0acc9976d153b89abe8f646d5a',
              maxFeePerGas: 128897036677,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0x9d90669665607f08005cae4a7098143f554c59ef',
              type: '0x2',
              input:
                '0xefef39a10000000000000000000000000000000000000000000000000000000000000003',
              transactionIndex: 137,
              value: 2331000000000000,
            },
            {
              blockNumber: 16802538,
              blockTimestamp: '2023-03-11T04:41:59.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 10533549,
              effectiveGasPrice: 156237127273,
              gas: 554053,
              gasPrice: 156237127273,
              gasUsed: 378201,
              hash: '0xa5f3d56cf9cb43ea80e66eab9e49b5e6513f16b4d33ba67a74998ceb7644b4ed',
              maxFeePerGas: 166786393569,
              maxPriorityFeePerGas: 80496045,
              toAddress: '0x881d40237659c251811cec9c364ef91dc08d300c',
              type: '0x2',
              input:
                '0x5f5755290000000000000000000000000000000000000000000000000000000000000080000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000136f6e65496e6368563546656544796e616d6963000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000910835a1f0000000000000000000000000000000000000000000000014fc4b1cf4fa9777b0000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000030e3a1f5715e66e000000000000000000000000f326e4de8f66a0bdc0970b79e0924e33c79f1915000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000004c812aa3caf0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e000000000000000000000000074de5d4fcbf63e00296fd95d33236b97940166310000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000152bb746db60e11e00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032a00000000000000000000000000000000000000000000030c0002f60002ac00a007e5c0d200000000000000000000000000000000000000000000028800024c00011c4330e6bcb55f45af6a2895fadbd644ced981bfa825cb00000000000000000000000000000000000000000000000130a365be03a6715f002424b31a0c0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fffd8963efd1fc6a506488495d951d5263988d2500000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4851204a585e0f7c18e2c414221d6402652d5e0990e5f87f39c581f595b53c5cb19bd0b3f8da6c935e2ca000a4a5dcbcdf0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002ebe19aa2e29c8acadb14be3e7de153b0141e2aa0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004101c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200042e1a7d4d000000000000000000000000000000000000000000000000000000000000000000a0f2fa6b66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000015d356046e0a24c7e0000000000000000000c336b1b0fe17bc0611111111254eeb25477b68fb85ed929f73a96058200000000000000000000000000000000000000000000ab4991fe000000000000000000000000000000000000000000000000e5',
              transactionIndex: 88,
              value: 0,
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

  it('can paginate through the results', async () => {
    await withPolly(
      {
        recordingName: 'query-getTransactionsByWalletENS-pagination',
        recordIfMissing: true,
      },
      async () => {
        const transactionss1 = await transactions.getByWallet({
          address: 'quicknode.eth',
          first: 2,
        });
        const transactionss2 = await transactions.getByWallet({
          address: 'quicknode.eth',
          first: 2,
          after: transactionss1.pageInfo.endCursor,
        });
        const transactionss3 = await transactions.getByWallet({
          address: 'quicknode.eth',
          first: 2,
          before: transactionss2.pageInfo.startCursor,
        });
        const expectedResponse1 = {
          results: [
            {
              blockNumber: 17166949,
              blockTimestamp: '2023-05-01T15:44:59.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 14548638,
              effectiveGasPrice: 93579328585,
              gas: 120884,
              gasPrice: 93579328585,
              gasUsed: 114517,
              hash: '0x13a680b3899614265b0602569e592dafe4763f0acc9976d153b89abe8f646d5a',
              maxFeePerGas: 128897036677,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0x9d90669665607f08005cae4a7098143f554c59ef',
              type: '0x2',
              input:
                '0xefef39a10000000000000000000000000000000000000000000000000000000000000003',
              transactionIndex: 137,
              value: 2331000000000000,
            },
            {
              blockNumber: 16802538,
              blockTimestamp: '2023-03-11T04:41:59.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 10533549,
              effectiveGasPrice: 156237127273,
              gas: 554053,
              gasPrice: 156237127273,
              gasUsed: 378201,
              hash: '0xa5f3d56cf9cb43ea80e66eab9e49b5e6513f16b4d33ba67a74998ceb7644b4ed',
              maxFeePerGas: 166786393569,
              maxPriorityFeePerGas: 80496045,
              toAddress: '0x881d40237659c251811cec9c364ef91dc08d300c',
              type: '0x2',
              input:
                '0x5f5755290000000000000000000000000000000000000000000000000000000000000080000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000136f6e65496e6368563546656544796e616d6963000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000910835a1f0000000000000000000000000000000000000000000000014fc4b1cf4fa9777b0000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000030e3a1f5715e66e000000000000000000000000f326e4de8f66a0bdc0970b79e0924e33c79f1915000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000004c812aa3caf0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e000000000000000000000000074de5d4fcbf63e00296fd95d33236b97940166310000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000152bb746db60e11e00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032a00000000000000000000000000000000000000000000030c0002f60002ac00a007e5c0d200000000000000000000000000000000000000000000028800024c00011c4330e6bcb55f45af6a2895fadbd644ced981bfa825cb00000000000000000000000000000000000000000000000130a365be03a6715f002424b31a0c0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fffd8963efd1fc6a506488495d951d5263988d2500000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4851204a585e0f7c18e2c414221d6402652d5e0990e5f87f39c581f595b53c5cb19bd0b3f8da6c935e2ca000a4a5dcbcdf0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000002ebe19aa2e29c8acadb14be3e7de153b0141e2aa0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004101c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200042e1a7d4d000000000000000000000000000000000000000000000000000000000000000000a0f2fa6b66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000015d356046e0a24c7e0000000000000000000c336b1b0fe17bc0611111111254eeb25477b68fb85ed929f73a96058200000000000000000000000000000000000000000000ab4991fe000000000000000000000000000000000000000000000000e5',
              transactionIndex: 88,
              value: 0,
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
        expect(transactionss1).toStrictEqual(expectedResponse1);
        expect(transactionss2).toStrictEqual({
          results: [
            {
              blockNumber: 16802475,
              blockTimestamp: '2023-03-11T04:29:11.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 7359668,
              effectiveGasPrice: 175288459405,
              gas: 1123600,
              gasPrice: 175288459405,
              gasUsed: 319314,
              hash: '0x085b9cbd223b08e6e5aa2280039be6890cfd3965cb8ace8284684efba71714f2',
              maxFeePerGas: 299700206508,
              maxPriorityFeePerGas: 300000000,
              toAddress: '0x881d40237659c251811cec9c364ef91dc08d300c',
              type: '0x2',
              input:
                '0x5f5755290000000000000000000000000000000000000000000000000000000000000080000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000136f6e65496e6368563546656544796e616d69630000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000910835a1f00000000000000000000000000000000000000000000000154333b544e52b35c0000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000031076df6a8bbe78000000000000000000000000f326e4de8f66a0bdc0970b79e0924e33c79f19150000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000038812aa3caf0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000007122db0ebe4eb9b434a9f2ffe6760bc03bfbd0e000000000000000000000000074de5d4fcbf63e00296fd95d33236b97940166310000000000000000000000000000000000000000000000000000000910835a1f000000000000000000000000000000000000000000000001573401be9d23546b000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f70000000000000000000000000000000000000000000001d90001c300017900a007e5c0d20000000000000000000000000000000000000001550001190000ca0000b05120debf20617708857ebe4f679508e7b7863a8a8eeea0b86991c6218b36c1d19d4a2e9eb0ce3606eb480044a6417ed600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008677f46060020d6bdbf78dac17f958d2ee523a2206206994597c13d831ec702a0000000000000000000000000000000000000000000000001573401be9d23546bee63c1e50011b815efb8f581194ae79006d24e0d814b7697f6dac17f958d2ee523a2206206994597c13d831ec74101c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200042e1a7d4d000000000000000000000000000000000000000000000000000000000000000000a0f2fa6b66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000015e35117422f507c60000000000000000000c2fcdb920a734c0611111111254eeb25477b68fb85ed929f73a960582000000000000000000ab4991fe0000000000000000000000000000000000000000000000006a',
              transactionIndex: 84,
              value: 0,
            },
            {
              blockNumber: 16802475,
              blockTimestamp: '2023-03-11T04:29:11.000Z',
              contractAddress: null,
              fromAddress: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
              cumulativeGasUsed: 6860020,
              effectiveGasPrice: 175288459405,
              gas: 91140,
              gasPrice: 175288459405,
              gasUsed: 60311,
              hash: '0xa8062120f3356e90b356f95abbb519624af97211f0e2bc846bc1d3dcbd4b410a',
              maxFeePerGas: 299700206508,
              maxPriorityFeePerGas: 300000000,
              toAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              type: '0x2',
              input:
                '0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              transactionIndex: 82,
              value: 0,
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
        expect(transactionss3).toStrictEqual(expectedResponse1);
      }
    );
  });

  it('can return empty results for a non-existent address', async () => {
    await withPolly(
      {
        recordingName: 'query-getTransactionsByWalletAddress-empty',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.getByWallet({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c8aaaa',
          first: 2,
        });
        expect(data).toStrictEqual({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c8aaaa',
          ensName: '',
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
