import { apiClient } from '../client';
import withPolly from '../../testSetup/pollyTestSetup';
import { gql } from '@apollo/client';

const api = apiClient;

describe('graphApiClient.query', () => {
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
                address
                name
                symbol
                totalSupply
              }
            }
          }
        `;

        const data = await api.graphApiClient.query({ query });
        expect(data).toStrictEqual({
          data: {
            ethereum: {
              __typename: 'EVMSchemaType',
              collection: {
                __typename: 'ERC721Collection',
                address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
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

  it('executes correctly with variables', async () => {
    await withPolly(
      {
        recordingName: 'query-graphQuery-variables',
        recordIfMissing: true,
      },
      async () => {
        const query = gql`
          query ($contractAddress: String!) {
            ethereum {
              collection(contractAddress: $contractAddress) {
                address
                name
                symbol
                totalSupply
              }
            }
          }
        `;
        const variables = {
          contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
        };
        const data = await api.graphApiClient.query({ query, variables });
        expect(data).toStrictEqual({
          data: {
            ethereum: {
              __typename: 'EVMSchemaType',
              collection: {
                __typename: 'ERC721Collection',
                address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
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
                address
                name
                notafieldshoulderror
              }
            }
          }
        `;

        await expect(
          async () => await api.graphApiClient.query({ query })
        ).rejects.toThrowError();
      }
    );
  });
});
