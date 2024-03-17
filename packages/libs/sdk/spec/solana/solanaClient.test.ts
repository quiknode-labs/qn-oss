import { solana } from './client';
import { Transaction, Keypair } from '@solana/web3.js';
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

  it('should call solana sendSmartTransaction', async () => {
    await withPolly(
      {
        recordingName: 'solana-client-sendSmartTransaction',
      },
      async () => {
        const transaction = new Transaction();
        const keyPair = Keypair.fromSecretKey(
          new Uint8Array([
            130, 116, 86, 249, 242, 108, 166, 19, 25, 227, 239, 208, 22, 150,
            37, 135, 84, 53, 70, 45, 157, 16, 240, 233, 200, 163, 11, 93, 165,
            225, 199, 93, 132, 17, 199, 50, 81, 22, 117, 194, 161, 238, 140, 6,
            87, 103, 78, 85, 31, 214, 174, 121, 253, 229, 38, 9, 14, 5, 241, 29,
            190, 218, 99, 40,
          ])
        );
        const feeLevel = 'medium';
        await expect(
          solana.sendSmartTransaction(transaction, keyPair, feeLevel)
        ).resolves.toMatchInlineSnapshot(
          `"dbW8AT3NwaUxEwM9VND16EJeeD8ecusCm3rD8GgVYZdrnFd1WzSydTQDMdzLLYcPJ1nhUFpGwtsZRjAyNruowmp"`
        );
      }
    );
  });
});
