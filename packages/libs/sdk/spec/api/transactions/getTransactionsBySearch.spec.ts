import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const transactions = apiClient.transactions;

describe('transactions.search', () => {
  it('should return transactions by block number', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactions-ByBlockNumber',
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

  it('should return transactions by timestamp', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactions-ByTimestamp',
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
        expect(data).toEqual({
          results: [
            {
              blockNumber: 17372310,
              blockTimestamp: '2023-05-30T14:22:59.000Z',
              contractAddress: null,
              fromAddress: '0x1f9090aae28b8a3dceadf281b0f12828e676c326',
              cumulativeGasUsed: 15348985,
              effectiveGasPrice: 54132430864,
              gas: 21000,
              gasPrice: 54132430864,
              gasUsed: 21000,
              hash: '0xd47121833a3f1e5f6539be2f269c9795ccdac1555d75f685601c061d5d9b35e3',
              maxFeePerGas: 54132430864,
              maxPriorityFeePerGas: 0,
              toAddress: '0x4675c7e5baafbffbca748158becba61ef3b0a263',
              type: '0x2',
              input: '0x',
              transactionIndex: 183,
              value: '181451934506814654',
            },
            {
              blockNumber: 17372310,
              blockTimestamp: '2023-05-30T14:22:59.000Z',
              contractAddress: null,
              fromAddress: '0x41407a3c41da7970d30a0343cda8b9db70c145fb',
              cumulativeGasUsed: 15327985,
              effectiveGasPrice: 54226430864,
              gas: 91029,
              gasPrice: 54226430864,
              gasUsed: 90457,
              hash: '0x1461c414bdb2b45df682ab7f0d77a246fb96d97ece2e427879cf2c8ff7277610',
              maxFeePerGas: 54644485825,
              maxPriorityFeePerGas: 94000000,
              toAddress: '0xb85eeb713b876a25f16604887cc6b8997ef1b9dd',
              type: '0x2',
              input:
                '0xae0b51df00000000000000000000000000000000000000000000000000000000000081c500000000000000000000000000000000000000000000003635c9adc5dea0000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000011bc75ec9b9933be00976e0080cfaa45fd4895ed71cf23c0170af978b2d7e0d0c9e49275b647697acc4ccd522b7ec59162b6350f6a375d9733e482174ddf5430842729eebdbf35b5137338fa16b4b0f53bb66e2246cd82196add0d6af7a044c7aa21e577e670a665aaabf84e45ae1ba0d359d353b9ba6e695099e00879870a0842a5a48ef35a4bc1580a72c1f0c75cdd13ffeb1b735f8d87d9cfe2fa8581506ab229fc3d9b02cab3e3239e36b19f2361ea7bfa2d51dc3321bc57cd9938c5319c695fc2dc132adfdb689612fee350d05e4b6e25f2646a8ff85ce67cfdb70b591540b4ccc56a2407eed31d245d7af0319d9601bb5569199a05004596ee3294d90cc4aaf795d1be5271c8205ca8a3985249db26af74b8c7433349dcfea4efd459cfc3014fb90e3e2ef92cbb72847a294db9d8143c1dd49f3481cf3842d635497930c167b2569d5fdfe6354883900e9bfd9af3aec205ea10971c514e519030812742b0345411211641cc949814576a1261a71025cc76d7c6723fe15746047cc522d34eec516acb1604b6302e96801e98009de357a8959b602eb03a83792a773c54a1f4a0bb3a631cde787ffa7133ae4f3692b77e4ef82c477cb5ee659aa956fa10aec4e49020b1c43756f31ea0cc1b24b6784b01353ac65cf9f0600e31587824e1ca223399db8cbc2692d6f0cf9ba99017cdea1986ac74cca043cce1586c6b033afc7f078d340c391a4eac27dad4692f95bcf9ca1745036d96cde8fc596ce2306e8809',
              transactionIndex: 182,
              value: 0,
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

  it('should return transactions by block number and address', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactions-ByBlockNumberAndFromAddress',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.search({
          filter: {
            blockNumber: {
              eq: 17372310,
            },
            fromAddress: '0x41407a3c41da7970d30a0343cda8b9db70c145fb',
          },
        });
        expect(data).toEqual({
          results: [
            {
              blockNumber: 17372310,
              blockTimestamp: '2023-05-30T14:22:59.000Z',
              contractAddress: null,
              fromAddress: '0x41407a3c41da7970d30a0343cda8b9db70c145fb',
              cumulativeGasUsed: 15327985,
              effectiveGasPrice: 54226430864,
              gas: 91029,
              gasPrice: 54226430864,
              gasUsed: 90457,
              hash: '0x1461c414bdb2b45df682ab7f0d77a246fb96d97ece2e427879cf2c8ff7277610',
              maxFeePerGas: 54644485825,
              maxPriorityFeePerGas: 94000000,
              toAddress: '0xb85eeb713b876a25f16604887cc6b8997ef1b9dd',
              type: '0x2',
              input:
                '0xae0b51df00000000000000000000000000000000000000000000000000000000000081c500000000000000000000000000000000000000000000003635c9adc5dea0000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000011bc75ec9b9933be00976e0080cfaa45fd4895ed71cf23c0170af978b2d7e0d0c9e49275b647697acc4ccd522b7ec59162b6350f6a375d9733e482174ddf5430842729eebdbf35b5137338fa16b4b0f53bb66e2246cd82196add0d6af7a044c7aa21e577e670a665aaabf84e45ae1ba0d359d353b9ba6e695099e00879870a0842a5a48ef35a4bc1580a72c1f0c75cdd13ffeb1b735f8d87d9cfe2fa8581506ab229fc3d9b02cab3e3239e36b19f2361ea7bfa2d51dc3321bc57cd9938c5319c695fc2dc132adfdb689612fee350d05e4b6e25f2646a8ff85ce67cfdb70b591540b4ccc56a2407eed31d245d7af0319d9601bb5569199a05004596ee3294d90cc4aaf795d1be5271c8205ca8a3985249db26af74b8c7433349dcfea4efd459cfc3014fb90e3e2ef92cbb72847a294db9d8143c1dd49f3481cf3842d635497930c167b2569d5fdfe6354883900e9bfd9af3aec205ea10971c514e519030812742b0345411211641cc949814576a1261a71025cc76d7c6723fe15746047cc522d34eec516acb1604b6302e96801e98009de357a8959b602eb03a83792a773c54a1f4a0bb3a631cde787ffa7133ae4f3692b77e4ef82c477cb5ee659aa956fa10aec4e49020b1c43756f31ea0cc1b24b6784b01353ac65cf9f0600e31587824e1ca223399db8cbc2692d6f0cf9ba99017cdea1986ac74cca043cce1586c6b033afc7f078d340c391a4eac27dad4692f95bcf9ca1745036d96cde8fc596ce2306e8809',
              transactionIndex: 182,
              value: 0,
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

  it('should return transactions with empty filter', async () => {
    await withPolly(
      {
        recordingName: 'query-searchTransactions-emptyFilter',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.search({ filter: {}, first: 2 });
        expect(data).toEqual({
          results: [
            {
              blockNumber: 17372631,
              blockTimestamp: '2023-05-30T15:28:47.000Z',
              contractAddress: null,
              fromAddress: '0x6ec9a8e956d6187929b817e5048b0efef26806a8',
              cumulativeGasUsed: 11924285,
              effectiveGasPrice: 55272671394,
              gas: 215932,
              gasPrice: 55272671394,
              gasUsed: 143829,
              hash: '0x01ce201ba00d9ee6f0848577c1e040e4f6716b41c208fba5e02871d43442d0ea',
              maxFeePerGas: 76126733036,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
              type: '0x2',
              input:
                '0xf305d719000000000000000000000000b22c05cedbf879a661fcc566b5a759d005cf7b4c0000000000000000000000000000000000000000000005ede20f01a4598000000000000000000000000000000000000000000000000005e64b2b1764ced000000000000000000000000000000000000000000000000000000f376f5f9c76ac850000000000000000000000006ec9a8e956d6187929b817e5048b0efef26806a80000000000000000000000000000000000000000000000000000000064761d13',
              transactionIndex: 147,
              value: '1101977377613672850',
            },
            {
              blockNumber: 17372631,
              blockTimestamp: '2023-05-30T15:28:47.000Z',
              contractAddress: null,
              fromAddress: '0x710bda329b2a6224e4b44833de30f38e7f81d564',
              cumulativeGasUsed: 11780456,
              effectiveGasPrice: 55272671394,
              gas: 500000,
              gasPrice: 55272671394,
              gasUsed: 115459,
              hash: '0x04682b3813c5ddf5d3ce6cd46183b0c0556317f12871b9eeb841ee210a7d42fa',
              maxFeePerGas: 115145055704,
              maxPriorityFeePerGas: 100000000,
              toAddress: '0xb8901acb165ed027e32754e0ffe830802919727f',
              type: '0x2',
              input:
                '0x23c452cd0000000000000000000000001e822acf0739b664eec5067df3963e37a45413f800000000000000000000000000000000000000000000000001982049a05360ba882713f61b7f733bcef401a6e6b6ef964d4384707a71f247c40176cd5b6664d6000000000000000000000000000000000000000000000000001c533144a8083b',
              transactionIndex: 146,
              value: 0,
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
});