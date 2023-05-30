import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const transactions = apiClient.transactions;

describe('transactions.search', () => {
  it('should return transactions by block number', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactionsByBlockNumber-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.search({
          filter: {
            blockNumber: {
              eq: 17372301,
            },
          },
          first: 2,
        });
        expect(data).toStrictEqual({
          results: [
            {
              blockNumber: 17372301,
              blockTimestamp: '2023-05-30T14:21:11.000Z',
              contractAddress: null,
              fromAddress: '0x8cf5ae056e4029f2d998052f626d53e7b161942c',
              cumulativeGasUsed: 16418794,
              effectiveGasPrice: 55370275845,
              gas: 242038,
              gasPrice: 55370275845,
              gasUsed: 177426,
              hash: '0x8884236413759979b5af00e99b8a618c6724905fc19406fab43dd2826d0fc7ea',
              maxFeePerGas: 76617261425,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0xe592427a0aece92de3edee1f18e0157c05861564',
              type: '0x2',
              input:
                '0x414bf389000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000bddf903f43dc7d9801f3f0034ba306169074ef8e0000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000008cf5ae056e4029f2d998052f626d53e7b161942c0000000000000000000000000000000000000000000000000000000064760d470000000000000000000000000000000000000000000000001bc16d674ec8000000000000000000000000000000000000000000036672c7b262b1643f13ac65510000000000000000000000000000000000000000000000000000000000000000',
              transactionIndex: 204,
              value: '2000000000000000000',
            },
            {
              blockNumber: 17372301,
              blockTimestamp: '2023-05-30T14:21:11.000Z',
              contractAddress: null,
              fromAddress: '0xad3deeec83072b5345be4afc579d5cc2156d9df4',
              cumulativeGasUsed: 16241368,
              effectiveGasPrice: 55370275845,
              gas: 46521,
              gasPrice: 55370275845,
              gasUsed: 46521,
              hash: '0x98b4e772e072448a91363acb3f90761b9e443aaae502bf151f50712f04beecb9',
              maxFeePerGas: 67251366685,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0xc12c55e70cb491b884b36d2c47bbff750ed8944c',
              type: '0x2',
              input:
                '0x095ea7b3000000000000000000000000000000000022d473030f116ddee9f6b43ac78ba3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              transactionIndex: 203,
              value: 0,
            },
            {
              blockNumber: 17372301,
              blockTimestamp: '2023-05-30T14:21:11.000Z',
              contractAddress: null,
              fromAddress: '0x3c0d49e8d4e2125d4c789d58eb43a6ebaa14e269',
              cumulativeGasUsed: 16194847,
              effectiveGasPrice: 55370275845,
              gas: 30069,
              gasPrice: 55370275845,
              gasUsed: 30069,
              hash: '0xfdfd10dd389fc2b5a7484aabbbc46aa2eae9677b187aa606ecd5ec54081fe705',
              maxFeePerGas: 76617261425,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0xf7168c8abb0ff80116413a8d95396bbdc318a3ff',
              type: '0x2',
              input:
                '0x095ea7b3000000000000000000000000000000000022d473030f116ddee9f6b43ac78ba3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
              transactionIndex: 202,
              value: 0,
            },
            {
              blockNumber: 17372301,
              blockTimestamp: '2023-05-30T14:21:11.000Z',
              contractAddress: null,
              fromAddress: '0x7db3d080de992b1e2d6dbb4517362c26979a2770',
              cumulativeGasUsed: 16164778,
              effectiveGasPrice: 55370275845,
              gas: 75671,
              gasPrice: 55370275845,
              gasUsed: 75671,
              hash: '0xccb24a3cc202b42cf6f236faeb70c75219bb87227547f14eb4a5e71b18f719d0',
              maxFeePerGas: 76617261425,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0x932261f9fc8da46c4a22e31b45c4de60623848bf',
              type: '0x2',
              input: '0x1249c58b0021fb3f',
              transactionIndex: 201,
              value: 0,
            },
            {
              blockNumber: 17372301,
              blockTimestamp: '2023-05-30T14:21:11.000Z',
              contractAddress: null,
              fromAddress: '0xc9a20e3c79fd09d838e535e1766d9459a7da21de',
              cumulativeGasUsed: 16089107,
              effectiveGasPrice: 55370275845,
              gas: 21000,
              gasPrice: 55370275845,
              gasUsed: 21000,
              hash: '0x277c5f8244535f4e2606adf67e77fb0d1d6440e4e1ed6250a15f0c5353d2ef57',
              maxFeePerGas: 76617261425,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0x3845b38ab4ae96965b8300d89d6ad27d1c3e2732',
              type: '0x2',
              input: '0x',
              transactionIndex: 200,
              value: '35418092496519000',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjo0',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
        });
      }
    );
  });

  it('should return transactions by timestamp', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactionsByTimestamp-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.search({
          filter: {
            timestamp: {
              gt: '2021-05-30T14:21:10.000Z',
              lt: '2023-05-30T14:23:11.000Z',
            },
          },
          first: 2,
        });
        console.log(data);
        expect(data).toEqual({});
      }
    );
  });
});
