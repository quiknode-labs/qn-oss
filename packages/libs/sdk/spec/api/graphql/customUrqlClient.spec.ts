import { CustomUrqlClient } from '../../../src/api/graphql/customUrqlClient';
import { gql } from '@urql/core';
import { API } from '../../../src/api/api';
import withPolly from '../../testSetup/pollyTestSetup';

describe('customUrqlClient', () => {
  const basicQuery = gql`
    query GetContractAddress($contractAddress: String!) {
      ethereum {
        contract(contractAddress: $contractAddress) {
          address
        }
      }
    }
  `;
  const badQuery = gql`
    query GetContractAddress($contractAddress: String!) {
      ethereum {
        contract(contractAddress: $contractAddress) {
          notafield
        }
      }
    }
  `;
  const api = new API();
  const client = new CustomUrqlClient(api.urqlClient);

  it('can perform a basic query', async () => {
    await withPolly(
      {
        recordingName: 'query-clientTest-basic',
        recordIfMissing: true,
      },
      async () => {
        const { data } = await client.query({
          query: basicQuery,
          variables: {
            contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
          },
        });
        expect(data).toStrictEqual({
          ethereum: {
            contract: {
              address: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
            },
          },
        });
      }
    );
  });

  it('throws an error for a bad query', async () => {
    await withPolly(
      {
        recordingName: 'query-clientTest-error',
        recordIfMissing: true,
        recordFailedRequests: true,
      },
      async () => {
        await expect(
          client.query({
            query: badQuery,
            variables: {
              contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
            },
          })
        ).rejects.toThrow();
      }
    );
  });
});
