import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTsByWalletENS', () => {
  it('executes correctly', async () => {
    await withPolly(
      { recordingName: 'query-getNFTsByWalletENS-base' },
      async () => {
        const { data } = await client.nft.getNFTsByWalletENS({
          ensName: 'vitalik.eth',
          first: 5,
        });
        expect(data).toStrictEqual({
          wallet: {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                ],
                tokenId: '91000115',
              },
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                ],
                tokenId: '58000001',
              },
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                ],
                tokenId: '194000131',
              },
              {
                contract: {
                  address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
                  name: 'ENS: Ethereum Name Service',
                  symbol: null,
                },
                images: [],
                tokenId:
                  '16197150600807250673512157823336438942662333680304464499387595216020302532478',
              },
              {
                contract: {
                  address: '0x1438807d452d5883b038c007e88b9ced10364f67',
                  name: 'Gutter Punks - Crypto Coven',
                  symbol: 'GPCC',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                ],
                tokenId: '3819',
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
      { recordingName: 'query-getNFTsByWalletENS-iterates' },
      async () => {
        const { data: firstResponse } = await client.nft.getNFTsByWalletENS({
          ensName: 'vitalik.eth',
          first: 5,
        });
        const { data: secondResponse } = await client.nft.getNFTsByWalletENS({
          ensName: 'vitalik.eth',
          first: 5,
          after: firstResponse?.wallet?.tokensPageInfo.endCursor,
        });
        expect(firstResponse).toStrictEqual({
          wallet: {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            ensName: 'vitalik.eth',
            tokens: [
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/d05b9d5bc7d65df64521339e5a54f808',
                  },
                ],
                tokenId: '91000115',
              },
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/8b0cb4d02dfa4d926c33a540eed881e6',
                  },
                ],
                tokenId: '58000001',
              },
              {
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  name: 'Art Blocks',
                  symbol: 'BLOCKS',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/e3f9d10c862693c41bc20f4937b4474e',
                  },
                ],
                tokenId: '194000131',
              },
              {
                contract: {
                  address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
                  name: 'ENS: Ethereum Name Service',
                  symbol: null,
                },
                images: [],
                tokenId:
                  '16197150600807250673512157823336438942662333680304464499387595216020302532478',
              },
              {
                contract: {
                  address: '0x1438807d452d5883b038c007e88b9ced10364f67',
                  name: 'Gutter Punks - Crypto Coven',
                  symbol: 'GPCC',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x1438807d452d5883b038c007e88b9ced10364f67/tokens/6f35145555c8658384f2d475eeea9aa0',
                  },
                ],
                tokenId: '3819',
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
                  address: '0xe4ab56ba8e23f0a5fb514b914e259156d5069762',
                  name: 'The Hall of Meta History',
                  symbol: 'HMH',
                },
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xe4ab56ba8e23f0a5fb514b914e259156d5069762/tokens/eabbac6d4b06d65c0955e14a395489d6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xe4ab56ba8e23f0a5fb514b914e259156d5069762/tokens/eabbac6d4b06d65c0955e14a395489d6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xe4ab56ba8e23f0a5fb514b914e259156d5069762/tokens/eabbac6d4b06d65c0955e14a395489d6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xe4ab56ba8e23f0a5fb514b914e259156d5069762/tokens/eabbac6d4b06d65c0955e14a395489d6',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xe4ab56ba8e23f0a5fb514b914e259156d5069762/tokens/eabbac6d4b06d65c0955e14a395489d6',
                  },
                ],
                tokenId: '2',
              },
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

  it('can handle no response', async () => {
    await withPolly(
      { recordingName: 'query-getNFTsByWalletENS-null' },
      async () => {
        const { data } = await client.nft.getNFTsByWalletENS({
          ensName: 'fakefakefakedoesnotexist.eth',
          first: 5,
        });
        expect(data).toStrictEqual({
          wallet: null,
        });
      }
    );
  });
});
