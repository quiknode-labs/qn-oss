import { solana } from './client';
import withPolly from '../testSetup/pollyTestSetup';

describe('solana client', () => {
  it('should call basic solana functions', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-basic-function',
        recordIfMissing: true,
      },
      async () => {
        await expect(
          solana.connection.getSlot()
        ).resolves.toMatchInlineSnapshot(`379631384`);
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
                "slot": 379629156,
              },
              "per_compute_unit": Object {
                "extreme": 4444444,
                "high": 1800000,
                "low": 10000,
                "medium": 29901,
                "percentiles": Object {
                  "0": 0,
                  "10": 100,
                  "100": 5000000000,
                  "15": 2786,
                  "20": 7740,
                  "25": 10000,
                  "30": 10000,
                  "35": 10000,
                  "40": 10000,
                  "45": 15000,
                  "5": 0,
                  "50": 29901,
                  "55": 50000,
                  "60": 200000,
                  "65": 600111,
                  "70": 720406,
                  "75": 1800000,
                  "80": 1800284,
                  "85": 2317065,
                  "90": 4444444,
                  "95": 7998076,
                },
              },
              "per_transaction": Object {
                "extreme": 39000000000,
                "high": 4708630278,
                "low": 447720000,
                "medium": 1531118160,
                "percentiles": Object {
                  "0": 4470,
                  "10": 13000000,
                  "100": 19999999950000,
                  "15": 137760000,
                  "20": 350000000,
                  "25": 447720000,
                  "30": 900000000,
                  "35": 1069204158,
                  "40": 1069366914,
                  "45": 1200000000,
                  "5": 13000000,
                  "50": 1531118160,
                  "55": 2000000000,
                  "60": 2550000000,
                  "65": 2682000000,
                  "70": 3434980824,
                  "75": 4708630278,
                  "80": 6667659400,
                  "85": 10164735000,
                  "90": 39000000000,
                  "95": 176430098688,
                },
              },
              "recommended": 2317065,
            },
          }
        `);
      }
    );
  });
});
