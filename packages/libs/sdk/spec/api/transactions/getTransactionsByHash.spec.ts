import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const transactions = apiClient.transactions;

describe('transactions.getByHash', () => {
  it('should return a transaction by hash', async () => {
    await withPolly(
      {
        recordingName: 'query-transactionsByHash-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.getByHash({
          hash: '0x38c0807ee8291ed5a2089ed5a94f816f72b3180150eff8f6cf389baf1b758793',
        });

        expect(data).toStrictEqual({
          transaction: {
            blockNumber: 17386721,
            blockTimestamp: '2023-06-01T15:01:59.000Z',
            contractAddress: null,
            fromAddress: '0xdb05638a1958a778b4b19a9f12240a458af195d4',
            cumulativeGasUsed: 9302685,
            effectiveGasPrice: 44584658643,
            gas: 21000,
            gasPrice: 44584658643,
            gasUsed: 21000,
            hash: '0x38c0807ee8291ed5a2089ed5a94f816f72b3180150eff8f6cf389baf1b758793',
            maxFeePerGas: 125840257296,
            maxPriorityFeePerGas: 3500000000,
            toAddress: '0x93308cedbf191a5d46953beacec5247184340136',
            type: '0x2',
            input: '0x',
            transactionIndex: 106,
            value: '94104000000000000',
          },
        });
      }
    );
  });

  it('should return null if no transaction is found', async () => {
    await withPolly(
      {
        recordingName: 'query-transactionsByHash-not-found',
        recordIfMissing: true,
      },
      async () => {
        const data = await transactions.getByHash({
          hash: '0x38c0807ee8291ed5a2089ed5a94f816f72b3180150eff8f6cf389aaaaaaaaaaa',
        });
        expect(data).toStrictEqual({
          transaction: null,
        });
      }
    );
  });

  it('should throw an error if no hash is provided', async () => {
    await expect(
      // @ts-ignore
      transactions.getByHash({})
    ).rejects.toThrow(/hash: Required/);
  });

  it('should throw an error if an incorrect hash is provided', async () => {
    await expect(
      transactions.getByHash({
        hash: '0x123',
      })
    ).rejects.toThrow(/hash: Not a valid transaction hash/);
  });

  it('should throw an error if an incorrect param is provided', async () => {
    await expect(
      transactions.getByHash({
        // @ts-ignore
        foo: 'bar',
      })
    ).rejects.toThrowError(/Unrecognized key\(s\) in object: 'foo'/);
  });
});
