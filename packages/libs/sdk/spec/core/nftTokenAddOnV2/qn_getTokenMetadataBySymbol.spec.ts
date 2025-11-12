import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getTokenMetadataBySymbol', () => {
  it('fetches token metadata with a symbol', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTokenMetadataBySymbol',
      },
      async () => {
        const data = await core.client.qn_getTokenMetadataBySymbol({
          symbol: 'WETH',
          perPage: 1,
        });
        expect(data).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "tokens": Array [
              Object {
                "contractAddress": "0x32d222e1f6386b3df7065d639870be0ef76d3599",
                "decimals": "18",
                "genesisBlock": null,
                "genesisTransaction": null,
                "name": "Wrapped Ether",
                "symbol": "WETH",
              },
            ],
            "totalItems": 742,
            "totalPages": 742,
          }
        `);
      }
    );
  });

  it('throws an error when no symbol is provided', async () => {
    const input: any = {};
    await expect(
      core.client.qn_getTokenMetadataBySymbol(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: symbol: Required"`
    );
  });

  it('throws an error when invalid params are provided', async () => {
    const input: any = {
      foo: 'bar',
    };
    await expect(
      core.client.qn_getTokenMetadataBySymbol(input)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"QuickNode SDK Input Validation Error: symbol: Required, Unrecognized key(s) in object: 'foo'"`
    );
  });

  it('fetches token metadata iterating over two pages', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTokenMetadataBySymbol-pagination',
      },
      async () => {
        const dataPage1 = await core.client.qn_getTokenMetadataBySymbol({
          symbol: 'WETH',
          page: 1,
          perPage: 1,
        });
        expect(dataPage1).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 1,
            "tokens": Array [
              Object {
                "contractAddress": "0x32d222e1f6386b3df7065d639870be0ef76d3599",
                "decimals": "18",
                "genesisBlock": null,
                "genesisTransaction": null,
                "name": "Wrapped Ether",
                "symbol": "WETH",
              },
            ],
            "totalItems": 742,
            "totalPages": 742,
          }
        `);

        const dataPage2 = await core.client.qn_getTokenMetadataBySymbol({
          symbol: 'WETH',
          page: 2,
          perPage: 1,
        });
        expect(dataPage2).toMatchInlineSnapshot(`
          Object {
            "pageNumber": 2,
            "tokens": Array [
              Object {
                "contractAddress": "0xe0b469cb3eda0ece9e425cfeda4df986a55ea9f8",
                "decimals": "18",
                "genesisBlock": "16925720",
                "genesisTransaction": "0x3a2bd9de44ec0d17295e1b5d7eeabbe119d2fb7113423e234667b0ec977f778f",
                "name": "Wrapped ETH",
                "symbol": "WETH",
              },
            ],
            "totalItems": 742,
            "totalPages": 742,
          }
        `);
      }
    );
  });
});
