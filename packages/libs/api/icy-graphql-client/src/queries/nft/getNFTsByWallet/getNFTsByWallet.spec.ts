import { IcyGraphQLSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new IcyGraphQLSDK();

describe('getNFTsByWallet', () => {
  it('executes correctly', async () => {
    await withPolly(
      { recordingName: 'query-getNFTsByWallet-base' },
      async () => {
        const { data } = await client.nft.getNFTsByWallet({
          address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
          first: 5,
        });
        expect(data).toStrictEqual({
          wallet: {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc',
                  name: 'ethkun! (onchain)',
                  symbol: 'ETHKUN',
                },
                images: [
                  {
                    url: 'https://cdn.icy.tools/collections/0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc/tokens/42c3ae934a21a3d3b05754999c8b7438.svg',
                  },
                ],
                tokenId: '1',
              },
              {
                contract: {
                  address: '0x495f1ec64467539cad047629086e3cd95459e374',
                  name: 'Big Eye Rebellion',
                  symbol: 'BER',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                ],
                tokenId: '4699',
              },
              {
                contract: {
                  address: '0xaa462106da447c0440a4be29614c19387a59a331',
                  name: 'ENS Maxis',
                  symbol: 'ENSMAXIS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                ],
                tokenId: '3859',
              },
              {
                contract: {
                  address: '0x22871b977aae43d44fe50df03f632134c3e3e490',
                  name: 'UDID Network Genesis Pass Card',
                  symbol: 'UFPC',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                ],
                tokenId: '481',
              },
              {
                contract: {
                  address: '0x04c87b76b73ed706d4aac567e3adccb994591b1b',
                  name: 'A3S Protocol (Ethereum)',
                  symbol: 'A3S',
                },
                images: [],
                tokenId: '9',
              },
            ],
            tokensPageInfo: {
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              hasNextPage: true,
            },
          },
        });
      }
    );
  });

  it('can iterate tokens', async () => {
    await withPolly(
      { recordingName: 'query-getNFTsByWallet-iterates' },
      async () => {
        const { data: firstResponse } = await client.nft.getNFTsByWallet({
          address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
          first: 5,
        });
        const { data: secondResponse } = await client.nft.getNFTsByWallet({
          address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
          first: 5,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          after: firstResponse.wallet.tokensPageInfo.endCursor,
        });
        expect(firstResponse).toStrictEqual({
          wallet: {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc',
                  name: 'ethkun! (onchain)',
                  symbol: 'ETHKUN',
                },
                images: [
                  {
                    url: 'https://cdn.icy.tools/collections/0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc/tokens/42c3ae934a21a3d3b05754999c8b7438.svg',
                  },
                ],
                tokenId: '1',
              },
              {
                contract: {
                  address: '0x495f1ec64467539cad047629086e3cd95459e374',
                  name: 'Big Eye Rebellion',
                  symbol: 'BER',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x495f1ec64467539cad047629086e3cd95459e374/tokens/bb82ed58a62328ebc63e08549ba7cc47',
                  },
                ],
                tokenId: '4699',
              },
              {
                contract: {
                  address: '0xaa462106da447c0440a4be29614c19387a59a331',
                  name: 'ENS Maxis',
                  symbol: 'ENSMAXIS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xaa462106da447c0440a4be29614c19387a59a331/tokens/35dbef27db71841cf536b1497a7f7fa5',
                  },
                ],
                tokenId: '3859',
              },
              {
                contract: {
                  address: '0x22871b977aae43d44fe50df03f632134c3e3e490',
                  name: 'UDID Network Genesis Pass Card',
                  symbol: 'UFPC',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x22871b977aae43d44fe50df03f632134c3e3e490/tokens/389a50947c165ac7db77fc8faa45472d',
                  },
                ],
                tokenId: '481',
              },
              {
                contract: {
                  address: '0x04c87b76b73ed706d4aac567e3adccb994591b1b',
                  name: 'A3S Protocol (Ethereum)',
                  symbol: 'A3S',
                },
                images: [],
                tokenId: '9',
              },
            ],
            tokensPageInfo: {
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
              hasNextPage: true,
            },
          },
        });

        expect(secondResponse).toStrictEqual({
          wallet: {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8',
                  name: 'Dickenzas',
                  symbol: 'DKNZA',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x6c0f9679de42ca516e0aaeb3a661d3acc1fc04a8/tokens/970196b9ad7dea85b9aa14f7fec1c5bb',
                  },
                ],
                tokenId: '1598',
              },
              {
                contract: {
                  address: '0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d',
                  name: 'Best Friend - OfficaI',
                  symbol: 'BF',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x7afc0d1432ccc262ff44337b9567f4ea4dfbd31d/tokens/53c5e02a7cba1cfba21d98c8b8882535',
                  },
                ],
                tokenId: '3224',
              },
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/cc1ed3bd741b5b08165c27ce91a36c9c',
                  },
                ],
                tokenId: '265000506',
              },
              {
                contract: {
                  address: '0x0631cc561618ee4fa142e502c5f5ab9fcc2aa90c',
                  name: 'Vitaliks Boner',
                  symbol: 'VBON',
                },
                images: [],
                tokenId: '87',
              },
              {
                contract: {
                  address: '0x0631cc561618ee4fa142e502c5f5ab9fcc2aa90c',
                  name: 'Vitaliks Boner',
                  symbol: 'VBON',
                },
                images: [],
                tokenId: '0',
              },
            ],
            tokensPageInfo: {
              endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
              hasNextPage: true,
            },
          },
        });
      }
    );
  });
});
