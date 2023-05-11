import { Request, Response } from 'express';
import { utils } from '../client';
import { gql } from '@qn-oss/libs/sdk';

export default {
  graphQuery: async (req: Request, res: Response) => {
    try {
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

      const result = await utils.graphQuery({ query });
      return res.status(200).send(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send({});
    }
  },
};
