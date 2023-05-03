import { apiClient } from './client';
import withPolly from '../testSetup/pollyTestSetup';

const api = apiClient;

describe('getNFTDetails', () => {
  it('executes correctly', async () => {
    await withPolly(
      { recordingName: 'query-getNFTDetails-base', recordIfMissing: true },
      async () => {
        const data = await api.nfts.getNFTDetails({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          tokenId: '1',
        });
        console.log(JSON.stringify(data, null, 2));
        expect(data).toStrictEqual({});
      }
    );
  });
});
