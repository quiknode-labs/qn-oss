import { solana } from './client';
import withPolly from '../testSetup/pollyTestSetup';

describe('solana client', () => {
  it('should call basic solana functions', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-basic-function',
      },
      async () => {
        await expect(
          solana.connection.getSlot()
        ).resolves.toMatchInlineSnapshot(`254810311`);
      }
    );
  });

  it('should call fetchEstimatePriorityFees', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-fetchEstimatePriorityFees',
        recordIfMissing: true,
      },
      async () => {
        await expect(solana.fetchEstimatePriorityFees()).resolves
          .toMatchInlineSnapshot(`
          Object {
            "id": 1,
            "jsonrpc": "2.0",
            "result": Object {
              "context": Object {
                "slot": 308116293,
              },
              "per_compute_unit": Object {
                "extreme": 16000000,
                "high": 1803944,
                "low": 10000,
                "medium": 200000,
                "percentiles": Object {
                  "0": 0,
                  "10": 1,
                  "100": 2000000000,
                  "15": 3,
                  "20": 1000,
                  "25": 10000,
                  "30": 22124,
                  "35": 62500,
                  "40": 100000,
                  "45": 100000,
                  "5": 1,
                  "50": 200000,
                  "55": 419487,
                  "60": 742357,
                  "65": 1000000,
                  "70": 1200000,
                  "75": 1803944,
                  "80": 3152278,
                  "85": 6706233,
                  "90": 16000000,
                  "95": 20000000,
                },
              },
              "per_transaction": Object {
                "extreme": 1000000000000,
                "high": 199999950000,
                "low": 300000000,
                "medium": 17635743000,
                "percentiles": Object {
                  "0": 1000,
                  "10": 600000,
                  "100": 200000000000000,
                  "15": 10000000,
                  "20": 200000000,
                  "25": 300000000,
                  "30": 1375000000,
                  "35": 2940140000,
                  "40": 7000000000,
                  "45": 10000000000,
                  "5": 130000,
                  "50": 17635743000,
                  "55": 24882600000,
                  "60": 40793750000,
                  "65": 57852000000,
                  "70": 99999992448,
                  "75": 199999950000,
                  "80": 341941698000,
                  "85": 500000038616,
                  "90": 1000000000000,
                  "95": 3000000000000,
                },
              },
              "recommended": 6706233,
            },
          }
        `);
      }
    );
  });
});
