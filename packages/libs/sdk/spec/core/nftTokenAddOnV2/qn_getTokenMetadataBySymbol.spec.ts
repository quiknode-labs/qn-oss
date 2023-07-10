import withPolly from '../../testSetup/pollyTestSetup';
import { core } from '../client';

describe('client.qn_getTokenMetadataBySymbol', () => {
  it('fetches token metadata with a symbol', async () => {
    await withPolly(
      {
        recordingName: 'core-qnGetTokenMetadataBySymbol',
        recordIfMissing: true,
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
                "contractAddress": "0x526f0603a845e4c324d5c40888f109f1c3633828",
                "decimals": "18",
                "genesisBlock": "17447077",
                "genesisTransaction": "0x5a741eae0996c754b9c57ed0c4bff266360ae5ffb50420e1ac56b9ee1c0f50d5",
                "name": "WETH",
                "symbol": "WETH",
              },
            ],
            "totalItems": 122,
            "totalPages": 122,
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
        recordIfMissing: true,
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
                "contractAddress": "0x526f0603a845e4c324d5c40888f109f1c3633828",
                "decimals": "18",
                "genesisBlock": "17447077",
                "genesisTransaction": "0x5a741eae0996c754b9c57ed0c4bff266360ae5ffb50420e1ac56b9ee1c0f50d5",
                "name": "WETH",
                "symbol": "WETH",
              },
            ],
            "totalItems": 122,
            "totalPages": 122,
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
                "contractAddress": "0x9ca936be17ba328efdaead3df5e661f6889a9400",
                "decimals": "18",
                "genesisBlock": "14485068",
                "genesisTransaction": "0xaf93e7499413102511cf3932e8c8c0d8634153d094374e59a610e78c2a49ac0b",
                "name": "Wrapped Ether",
                "symbol": "WETH",
              },
            ],
            "totalItems": 122,
            "totalPages": 122,
          }
        `);
      }
    );
  });
});
