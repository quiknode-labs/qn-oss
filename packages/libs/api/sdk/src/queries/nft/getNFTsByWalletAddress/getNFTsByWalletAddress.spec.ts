import { QuickNodeSDK } from 'client';
import withPolly from '../../../../testSetup/pollyTestSetup';

const client = new QuickNodeSDK();

describe('getNFTsByWalletAddress', () => {
  it('executes correctly', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-base',
      },
      async () => {
        const { data } = await client.nft.getNFTsByWalletAddress({
          address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
          first: 5,
        });
        expect(data).toStrictEqual({
          wallet: {
            ensName: 'vitalik.eth',
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
            },
            tokens: [
              {
                tokenId: '362000065',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                ],
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  symbol: 'BLOCKS',
                  name: 'Art Blocks',
                },
              },
              {
                tokenId: '45',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                ],
                contract: {
                  address: '0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd',
                  symbol: 'DJT',
                  name: 'Donald Trump - odious hero',
                },
              },
              {
                tokenId: '44',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                ],
                contract: {
                  address: '0xa186d739ca2b3022b966194004c6b01855d59571',
                  symbol: 'ATTPASS',
                  name: 'NFTPass',
                },
              },
              {
                tokenId: '279',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '280',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
            ],
          },
        });
      }
    );
  });

  it('can iterate tokens', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-iterates',
      },
      async () => {
        const { data: firstResponse } = await client.nft.getNFTsByWalletAddress(
          {
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            first: 5,
          }
        );
        const { data: secondResponse } =
          await client.nft.getNFTsByWalletAddress({
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            first: 5,
            after: firstResponse?.wallet?.tokensPageInfo.endCursor,
          });

        expect(firstResponse).toStrictEqual({
          wallet: {
            ensName: 'vitalik.eth',
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
            },
            tokens: [
              {
                tokenId: '362000065',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/tokens/4023c5992c9dbb7dc4ee4574e8b66c95',
                  },
                ],
                contract: {
                  address: '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270',
                  symbol: 'BLOCKS',
                  name: 'Art Blocks',
                },
              },
              {
                tokenId: '45',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd/tokens/338a12ab3fd22869dbd6ebae8ee47e4f',
                  },
                ],
                contract: {
                  address: '0x1b2b41bc128dc6246dfcafbb9ae3a75bd74ff6dd',
                  symbol: 'DJT',
                  name: 'Donald Trump - odious hero',
                },
              },
              {
                tokenId: '44',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xa186d739ca2b3022b966194004c6b01855d59571/tokens/f92a6ff69c45830aeb0793ae649a3cc1',
                  },
                ],
                contract: {
                  address: '0xa186d739ca2b3022b966194004c6b01855d59571',
                  symbol: 'ATTPASS',
                  name: 'NFTPass',
                },
              },
              {
                tokenId: '279',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/5bc65ff2dd8d92f224be8ba5d788e996',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '280',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/4a0cbecc26063ee087932d57f33a6d83',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
            ],
          },
        });

        expect(secondResponse).toStrictEqual({
          wallet: {
            ensName: 'vitalik.eth',
            address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
            tokensPageInfo: {
              hasNextPage: true,
              endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
            },
            tokens: [
              {
                tokenId: '281',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/2366f3b7a24528f588a62b512b3df266',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/2366f3b7a24528f588a62b512b3df266',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/2366f3b7a24528f588a62b512b3df266',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/2366f3b7a24528f588a62b512b3df266',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/2366f3b7a24528f588a62b512b3df266',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '282',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/abc7739bca57fe8853d6041c65fff870',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/abc7739bca57fe8853d6041c65fff870',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/abc7739bca57fe8853d6041c65fff870',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/abc7739bca57fe8853d6041c65fff870',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/abc7739bca57fe8853d6041c65fff870',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '283',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/9ff64e7a71b21114664ba5fd968a3e70',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/9ff64e7a71b21114664ba5fd968a3e70',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/9ff64e7a71b21114664ba5fd968a3e70',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/9ff64e7a71b21114664ba5fd968a3e70',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/9ff64e7a71b21114664ba5fd968a3e70',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '284',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/99e9d84b3feb0a272bb93bcafe77255c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/99e9d84b3feb0a272bb93bcafe77255c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/99e9d84b3feb0a272bb93bcafe77255c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/99e9d84b3feb0a272bb93bcafe77255c',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/99e9d84b3feb0a272bb93bcafe77255c',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
              {
                tokenId: '285',
                images: [
                  {
                    url: 'https://images.icytools.workers.dev/xs/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/dcd63757498476149cf640e1bb1ebda2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/sm/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/dcd63757498476149cf640e1bb1ebda2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/md/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/dcd63757498476149cf640e1bb1ebda2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/lg/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/dcd63757498476149cf640e1bb1ebda2',
                  },
                  {
                    url: 'https://images.icytools.workers.dev/xl/collections/0xc7874b10125c4c57afe8e98f77cf3b21d1bcd260/tokens/dcd63757498476149cf640e1bb1ebda2',
                  },
                ],
                contract: {
                  address: '0x2e19b9b90f683cfef669106c854a7069d95d1e3b',
                  symbol: 'REDDITQQLS',
                  name: 'Bored Reddit QQL Club',
                },
              },
            ],
          },
        });
      }
    );
  });

  it('can handle no response', async () => {
    await withPolly(
      {
        recordingName: 'query-getNFTsByWalletAddress-null',
      },
      async () => {
        const { data } = await client.nft.getNFTsByWalletAddress({
          address: '0x11111111111110thisisnotanaddress01111111',
          first: 5,
        });
        expect(data).toStrictEqual({
          wallet: null,
        });
      }
    );
  });
});
