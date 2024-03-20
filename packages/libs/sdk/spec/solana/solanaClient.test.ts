import { solana } from './client';
import { Transaction, Keypair } from '@solana/web3.js';
import withPolly from '../testSetup/pollyTestSetup';

describe('solana client', () => {
  let keyPair: Keypair;

  beforeAll(() => {
    keyPair = Keypair.fromSecretKey(
      new Uint8Array([
        130, 116, 86, 249, 242, 108, 166, 19, 25, 227, 239, 208, 22, 150, 37,
        135, 84, 53, 70, 45, 157, 16, 240, 233, 200, 163, 11, 93, 165, 225, 199,
        93, 132, 17, 199, 50, 81, 22, 117, 194, 161, 238, 140, 6, 87, 103, 78,
        85, 31, 214, 174, 121, 253, 229, 38, 9, 14, 5, 241, 29, 190, 218, 99,
        40,
      ])
    );
  });

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

  it('should call solana sendSmartTransaction', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-sendSmartTransaction',
      },
      async () => {
        const transaction = new Transaction();
        const feeLevel = 'medium';
        await expect(
          solana.sendSmartTransaction({ transaction, keyPair, feeLevel })
        ).resolves.toMatchInlineSnapshot(
          `"51n3WTQdDFiergup4SMrS3A3mgD16mMH5DJ2Fs1v7F4AGRsnd8XQmTnfCcFcQ9JTMfb36bX2ib1mJGxJkUV75XmJ"`
        );
      }
    );
  });
  it('should call solana prepareSmartTransaction', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-prepareSmartTransaction',
      },
      async () => {
        const transaction = new Transaction();
        const feeLevel = 'medium';
        await expect(
          solana.prepareSmartTransaction({
            transaction,
            payerPublicKey: keyPair.publicKey,
            feeLevel,
          })
        ).resolves.toMatchInlineSnapshot(`
          Object {
            "feePayer": null,
            "instructions": Array [
              Object {
                "data": Array [
                  3,
                  23,
                  151,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
                "keys": Array [],
                "programId": "ComputeBudget111111111111111111111111111111",
              },
            ],
            "nonceInfo": null,
            "recentBlockhash": "2acCVCzy5dPndawWVvTYDoHWqoe4dXo1srhWQ4W5btnb",
            "signers": Array [],
          }
        `);
      }
    );
  });

  it('should call fetchEstimatePriorityFees', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-fetchEstimatePriorityFees',
      },
      async () => {
        await expect(solana.fetchEstimatePriorityFees()).resolves
          .toMatchInlineSnapshot(`
          Object {
            "id": 1,
            "jsonrpc": "2.0",
            "result": Object {
              "context": Object {
                "slot": 255150582,
              },
              "per_compute_unit": Object {
                "extreme": 630734,
                "high": 119250,
                "low": 10714,
                "medium": 35714,
                "percentiles": Object {
                  "10": 714,
                  "100": 2000000000,
                  "15": 1048,
                  "20": 2000,
                  "25": 2718,
                  "30": 4895,
                  "35": 6948,
                  "40": 10714,
                  "45": 13133,
                  "5": 100,
                  "50": 19667,
                  "55": 25541,
                  "60": 35714,
                  "65": 50000,
                  "70": 66918,
                  "75": 90000,
                  "80": 119250,
                  "85": 183005,
                  "90": 265586,
                  "95": 630734,
                },
              },
              "per_transaction": Object {
                "extreme": 886796,
                "high": 245714,
                "low": 28242,
                "medium": 95010,
                "percentiles": Object {
                  "10": 700,
                  "100": 2000000000,
                  "15": 1303,
                  "20": 3126,
                  "25": 8571,
                  "30": 12000,
                  "35": 20000,
                  "40": 28242,
                  "45": 40225,
                  "5": 0,
                  "50": 50000,
                  "55": 75019,
                  "60": 95010,
                  "65": 110000,
                  "70": 140214,
                  "75": 180511,
                  "80": 245714,
                  "85": 265450,
                  "90": 296041,
                  "95": 886796,
                },
              },
            },
          }
        `);
      }
    );
  });
});
