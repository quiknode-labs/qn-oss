import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('verifyNFTOwner', () => {
  it('returns true with correct owner', async () => {
    await withPolly(
      { recordingName: 'query-verifyNFTOwner-true' },
      async () => {
        const owned = await client.nft.verifyNFTOwner({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          walletAddress: '0x0381f313983B70B0e3CC07d3496146ce4BeC6EC3',
          tokenId: '7840',
        });

        expect(owned).toBe(true);
      }
    );
  });

  it('returns false with incorrect owner', async () => {
    await withPolly(
      { recordingName: 'query-verifyNFTOwner-false' },
      async () => {
        const owned = await client.nft.verifyNFTOwner({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          walletAddress: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
          tokenId: '7840',
        });

        expect(owned).toBe(false);
      }
    );
  });

  it('returns false with invalid token id and null response', async () => {
    await withPolly(
      { recordingName: 'query-verifyNFTOwner-null' },
      async () => {
        const owned = await client.nft.verifyNFTOwner({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          walletAddress: '0x0381f313983B70B0e3CC07d3496146ce4BeC6EC3',
          tokenId: '99999999999',
        });
        expect(owned).toBe(false);
      }
    );
  });
});
