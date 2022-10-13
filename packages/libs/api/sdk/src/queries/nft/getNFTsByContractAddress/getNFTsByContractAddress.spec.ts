import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK({
  icyApiKey: 'cd100fedca484ece9deb2c17eb121aea',
});

describe('getNFTsByContractAddress', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByContractAddress-base',
        recordIfMissing: true,
        recordFailedRequests: true,
      },
      async () => {
        const { data } = await client.nft.getNFTsByContractAddress({
          address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 5,
        });
        expect(data).toStrictEqual({
          foor: 'bar',
        });
      }
    );
  });
});
