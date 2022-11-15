import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTsByWalletAndContracts', () => {
  it('can query one contract', async () => {
    await withPolly(
      {
        recordingName: 'query-NFTbyWalletAndContract-base',
      },
      async () => {
        const { data } = await client.nft.getNFTsByWalletAndContracts({
          address: '0x13928eB9A86c8278a45B6fF2935c7730b58AC675',
          contracts: ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'],
          first: 2,
        });

        expect(data).toStrictEqual({
          wallet: {
            ensName: 'bitcoinpirate.eth',
            address: '0x13928eb9a86c8278a45b6ff2935c7730b58ac675',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            tokens: [
              {
                tokenId: '1228',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
              {
                tokenId: '3251',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
            ],
          },
        });
      }
    );
  });

  it('can query multiple contracts', async () => {
    await withPolly(
      {
        recordingName: 'query-NFTbyWalletAndContract-multiple',
      },
      async () => {
        const { data } = await client.nft.getNFTsByWalletAndContracts({
          address: '0x13928eB9A86c8278a45B6fF2935c7730b58AC675',
          contracts: [
            '0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623',
            '0xbCe3781ae7Ca1a5e050Bd9C4c77369867eBc307e',
          ],
          first: 2,
        });

        expect(data).toStrictEqual({
          wallet: {
            ensName: 'bitcoinpirate.eth',
            address: '0x13928eb9a86c8278a45b6ff2935c7730b58ac675',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            tokens: [
              {
                tokenId: '3232',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/tokens/3232',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/tokens/3232',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/tokens/3232',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/tokens/3232',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/tokens/3232',
                  },
                ],
                contract: {
                  address: '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623',
                  symbol: 'BAKC',
                  name: 'Bored Ape Kennel Club',
                },
              },
              {
                tokenId: '5701',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e/tokens/2ff9f9a9eb0fff372aad027f988fa9a9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e/tokens/2ff9f9a9eb0fff372aad027f988fa9a9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e/tokens/2ff9f9a9eb0fff372aad027f988fa9a9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e/tokens/2ff9f9a9eb0fff372aad027f988fa9a9',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e/tokens/2ff9f9a9eb0fff372aad027f988fa9a9',
                  },
                ],
                contract: {
                  address: '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e',
                  symbol: 'GOBLIN',
                  name: 'goblintown.wtf',
                },
              },
            ],
          },
        });
      }
    );
  });

  it('can iterate results', async () => {
    await withPolly(
      {
        recordingName: 'query-NFTByWalletAndContract-iterate',
      },
      async () => {
        const { data: firstResult } =
          await client.nft.getNFTsByWalletAndContracts({
            address: '0x13928eB9A86c8278a45B6fF2935c7730b58AC675',
            contracts: ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'],
            first: 2,
          });

        const { data: secondResult } =
          await client.nft.getNFTsByWalletAndContracts({
            address: '0x13928eB9A86c8278a45B6fF2935c7730b58AC675',
            contracts: ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'],
            first: 2,
            after: 'YXJyYXljb25uZWN0aW9uOjE=',
          });

        expect(firstResult).toStrictEqual({
          wallet: {
            ensName: 'bitcoinpirate.eth',
            address: '0x13928eb9a86c8278a45b6ff2935c7730b58ac675',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            },
            tokens: [
              {
                tokenId: '1228',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x5e14097daeb9b91c4354e2280dfba01c68e3e103/tokens/30d546b7162ee7c963a4f051cad3bdbd',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
              {
                tokenId: '3251',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/86938965731fff75183f1b8971248e14',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
            ],
          },
        });

        expect(secondResult).toStrictEqual({
          wallet: {
            ensName: 'bitcoinpirate.eth',
            address: '0x13928eb9a86c8278a45b6ff2935c7730b58ac675',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
            },
            tokens: [
              {
                tokenId: '4086',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/25a8122729f304311451af588e0678cf',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/25a8122729f304311451af588e0678cf',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/25a8122729f304311451af588e0678cf',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/25a8122729f304311451af588e0678cf',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/25a8122729f304311451af588e0678cf',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
              {
                tokenId: '3805',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/88e34821a77117e80a81b797b07c04c3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/88e34821a77117e80a81b797b07c04c3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/88e34821a77117e80a81b797b07c04c3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/88e34821a77117e80a81b797b07c04c3',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/tokens/88e34821a77117e80a81b797b07c04c3',
                  },
                ],
                contract: {
                  address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  symbol: 'BAYC',
                  name: 'Bored Ape Yacht Club',
                },
              },
            ],
          },
        });
      }
    );
  });

  it('can handle null result', async () => {
    await withPolly(
      {
        recordingName: 'query-getByWalletAndContract-null',
      },
      async () => {
        const { data } = await client.nft.getNFTsByWalletAndContracts({
          address: '0x11111111111110thisisnotanaddress01111111',
          contracts: ['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'],
          first: 2,
        });

        expect(data).toStrictEqual({
          wallet: null,
        });
      }
    );
  });
});
