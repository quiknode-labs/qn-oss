import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const api = apiClient;

describe('events.getByContract', () => {
  it('can get events by contract', async () => {
    await withPolly(
      {
        recordingName: 'query-getEventsByContract-base',
        recordIfMissing: true,
      },
      async () => {
        const data = await api.events.getByContract({
          contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          first: 2,
        });

        console.log(data);
        expect(data).toStrictEqual({});
      }
    );
  });
});
