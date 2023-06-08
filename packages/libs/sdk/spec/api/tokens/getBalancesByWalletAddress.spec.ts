import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';

const tokens = apiClient.tokens;

describe('tokens.getBalancesByWallet with address', () => {
  it('should return a list of token balances for a given address', async () => {
    await withPolly(
      {
        recordingName: 'query-getTokenBalancesByWalletAddress-base',
        recordIfMissing: true,
      },
      async () => {
        const balances = await tokens.getBalancesByWallet({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          first: 2,
        });
        expect(balances).toStrictEqual({
          results: [
            {
              totalBalance: '35546774534000000000000000',
              address: '0x3b484b82567a09e2588a13d54d032153f0c0aee0',
              decimals: 18,
              name: 'SOS',
              symbol: 'SOS',
            },
            {
              totalBalance: '2500000000000000000000000',
              address: '0x69f9045d02cf274c5af4bc4ee3d8f936697071c6',
              decimals: 18,
              name: 'Luna Community Refund (terraluna.claims)',
              symbol: 'Luna Community Refund (terraluna.claims)',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        });
      }
    );
  });

  it('can paginate through the results', async () => {
    await withPolly(
      {
        recordingName: 'query-getTokenBalancesByWalletAddress-pagination',
        recordIfMissing: true,
      },
      async () => {
        const balances1 = await tokens.getBalancesByWallet({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          first: 2,
        });
        const balances2 = await tokens.getBalancesByWallet({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          first: 2,
          after: balances1.pageInfo.endCursor,
        });
        const balances3 = await tokens.getBalancesByWallet({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          first: 2,
          before: balances2.pageInfo.startCursor,
        });
        const expectedResponse1 = {
          results: [
            {
              totalBalance: '35546774534000000000000000',
              address: '0x3b484b82567a09e2588a13d54d032153f0c0aee0',
              decimals: 18,
              name: 'SOS',
              symbol: 'SOS',
            },
            {
              totalBalance: '2500000000000000000000000',
              address: '0x69f9045d02cf274c5af4bc4ee3d8f936697071c6',
              decimals: 18,
              name: 'Luna Community Refund (terraluna.claims)',
              symbol: 'Luna Community Refund (terraluna.claims)',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjox',
            hasNextPage: true,
            hasPreviousPage: false,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjow',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        };
        expect(balances1).toStrictEqual(expectedResponse1);
        expect(balances2).toStrictEqual({
          results: [
            {
              totalBalance: '300000000000000000000000',
              address: '0xc85e0474068dba5b49450c26879541ee6cc94554',
              decimals: 18,
              name: 'KyDy.org',
              symbol: 'KyDy.org',
            },
            {
              totalBalance: '242321000000000000000000',
              address: '0x4af9ab04615cb91e2ee8cbedb43fb52ed205041b',
              decimals: 18,
              name: 'KHEX.net',
              symbol: 'KHEX.net',
            },
          ],
          pageInfo: {
            endCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoz',
            hasNextPage: true,
            hasPreviousPage: true,
            startCursor: 'T2Zmc2V0Q29ubmVjdGlvbjoy',
          },
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
          ensName: 'quicknode.eth',
        });
        expect(balances3).toStrictEqual(expectedResponse1);
      }
    );
  });

  it('can return empty results for non-existant wallet', async () => {
    await withPolly(
      {
        recordingName: 'query-getTokenBalancesByWalletAddress-empty',
        recordIfMissing: true,
      },
      async () => {
        const balances = await tokens.getBalancesByWallet({
          address: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c8aaaa',
          first: 2,
        });
        expect(balances).toStrictEqual({
          address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c8aaaa',
          ensName: '',
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
          },
          results: [],
        });
      }
    );
  });
});
