import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

describe('nfts.verifyOwnership', () => {
  describe('returns true', () => {
    it('when the user owns the NFT', async () => {
      await withPolly(
        { recordingName: 'verifyNFTOwnerSingleNFTTrue', recordIfMissing: true },
        async () => {
          const data = await apiClient.nfts.verifyOwnership({
            address: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
            nfts: [
              { contractAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D' },
            ],
          });
          expect(data).toBe(true);
        }
      );
    });
    it('when the user owns the NFT by ensName', async () => {
      await withPolly(
        {
          recordingName: 'verifyNFTOwnerSingleNFTENSTrue',
          recordIfMissing: true,
        },
        async () => {
          const data = await apiClient.nfts.verifyOwnership({
            address: 'quicknode.eth',
            nfts: [
              { contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa' },
            ],
          });
          expect(data).toBe(true);
        }
      );
    });
    it('when multiple addresses are passed in and owner owns one', async () => {
      await withPolly(
        {
          recordingName: 'verifyNFTOwnerMultipleNFTTrue',
          recordIfMissing: true,
        },
        async () => {
          const data = await apiClient.nfts.verifyOwnership({
            address: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
            nfts: [
              {
                contractAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
              },
              {
                contractAddress: '0xd774557b647330C91Bf44cfEAB205095f7E6c367',
              },
            ],
          });
          expect(data).toBe(true);
        }
      );
    });
  });

  describe('returns false', () => {
    it('when the user does not own the NFT', async () => {
      await withPolly(
        {
          recordingName: 'verifyNFTOwnerSingleNFTFalse',
          recordIfMissing: true,
        },
        async () => {
          const data = await apiClient.nfts.verifyOwnership({
            address: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
            nfts: [
              {
                contractAddress: '0xd774557b647330C91Bf44cfEAB205095f7E6c367',
              },
            ],
          });
          expect(data).toBe(false);
        }
      );
    });
    it('when multiple addresses are passed in and owner does not own one', async () => {
      await withPolly(
        {
          recordingName: 'verifyNFTOwnerMultipleNFTFalse',
          recordIfMissing: true,
        },
        async () => {
          const data = await apiClient.nfts.verifyOwnership({
            address: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
            nfts: [
              {
                contractAddress: '0xd774557b647330C91Bf44cfEAB205095f7E6c367',
              },
              {
                contractAddress: '0x4BB08998a697d0db666783Ba5B56E85B33ba262f',
              },
            ],
          });
          expect(data).toBe(false);
        }
      );
    });

    it('when no contract addresses are passed in', async () => {
      await withPolly(
        {
          recordingName: 'verifyNFTOwnerNoContractAddresses',
          recordIfMissing: true,
        },
        async () => {
          const input: any = {
            address: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
            nfts: [{ contractAddress: '' }],
          };
          await expect(
            apiClient.nfts.verifyOwnership(input)
          ).rejects.toThrowError(
            /,contractAddress: String must contain exactly 42 character/
          );
        }
      );
    });
  });
  describe('throws an error', () => {
    it('with an invalid address param', async () => {
      const input: any = {
        address: '0x123',
        nfts: [
          { contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa' },
        ],
      };
      await expect(apiClient.nfts.verifyOwnership(input)).rejects.toThrow(
        /address: Invalid input/
      );
    });

    it('with an invalid nft param', async () => {
      const input: any = {
        address: 'quicknode.eth',
        nfts: [{ contractAddress: '0x123' }],
      };
      await expect(apiClient.nfts.verifyOwnership(input)).rejects.toThrow(
        /contractAddress: String must contain exactly 42 character/
      );
    });
  });
});
