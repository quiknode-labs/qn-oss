import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';
import { gql } from '@apollo/client/core';

const api = apiClient;

describe('utils.graphQuery', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-graphQuery-base',
        recordIfMissing: true,
      },
      async () => {
        const query = gql`
          query {
            ethereum {
              collection(
                contractAddress: "0x2106c00ac7da0a3430ae667879139e832307aeaa"
              ) {
                name
                symbol
                totalSupply
              }
            }
          }
        `;

        const data = await api.utils.graphQuery(query);
        expect(data).toStrictEqual({
          data: {
            ethereum: {
              __typename: 'EVMSchemaType',
              collection: {
                __typename: 'ERC721Collection',
                name: 'Loopy Donuts',
                symbol: 'DONUT',
                totalSupply: 10000,
              },
            },
          },
          loading: false,
          networkStatus: 7,
        });
      }
    );
  });

  it('handles failed requests', async () => {
    await withPolly(
      {
        recordingName: 'query-graphQuery-fail',
        recordIfMissing: true,
        recordFailedRequests: true,
      },
      async () => {
        const query = gql`
          query {
            ethereum {
              collection(
                contractAddress: "0x2106c00ac7da0a3430ae667879139e832307aeaa"
              ) {
                name
                notafieldshoulderror
              }
            }
          }
        `;

        expect(
          async () => await api.utils.graphQuery(query)
        ).rejects.toThrowError();
      }
    );
  });
});
