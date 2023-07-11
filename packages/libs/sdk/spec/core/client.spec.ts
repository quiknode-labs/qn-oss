import { Core, CoreArguments } from '../../src';
import withPolly from '../testSetup/pollyTestSetup';

const coreOpts: CoreArguments = {
  // This endpoint URL hostname has to match what is recorded locally with what is on CI. In github actions,
  // we can put a invalidated auth token since we filter it out with polly.
  endpointUrl:
    process.env['QUICKNODE_ENDPOINT_URL'] || 'thisisnotanendpoint.example.com',
  config: {
    addOns: { nftTokenV2: false },
  },
};
const core = new Core(coreOpts);

describe('core client', () => {
  it('can call base viem functions', async () => {
    await withPolly(
      {
        recordingName: 'core-client-viem-basic-function',
        recordIfMissing: true,
      },
      async () => {
        await expect(
          core.client.getBlockNumber()
        ).resolves.toMatchInlineSnapshot(`17667183n`);
      }
    );
  });

  it('errors when the add-on is not installed', async () => {
    await expect(
      core.client.qn_fetchNFTs({
        wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"NFT And Token RPC API V2 is not set as enabled. Please ensure the addon is enabled on both your QuickNode endpoint and enable nftTokenV2 in the Core configuration argument"`
    );
  });

  it('can derive the correct network from URL', () => {
    // Arbitrum mainnet
    let ethCore = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-mainnet.quiknode.pro/abcd/',
    });
    let chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Arbitrum One');

    // Arbitrum Goerli
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-goerli.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Arbitrum Goerli');

    // Avalanche mainnet
    ethCore = new Core({
      endpointUrl:
        'https://some-cool-name.avalanche-mainnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Avalanche');

    // Avalanche Fuji testnet
    ethCore = new Core({
      endpointUrl:
        'https://some-cool-name.avalanche-testnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Avalanche Fuji');

    // Base Goerli
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.base-goerli.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Base Goerli');

    // BSC
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.bsc.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('BNB Smart Chain');

    // BSC Testnet
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.bsc-testnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Binance Smart Chain Testnet');

    // Celo mainnet
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.celo-mainnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Celo');

    // Fantom
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.fantom.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Fantom');

    // Gnosis (xDai)
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.xdai.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Gnosis');

    // Ethereum Goerli
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.ethereum-goerli.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Goerli');

    // Harmony One
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.harmony-mainnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Harmony One');

    // Ethereum mainnet
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Ethereum');

    // Optimism
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.optimism.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Optimism');

    // Optimism Goerli
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.optimism-goerli.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Optimism Goerli');

    // Polygon (Matic)
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.matic.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Polygon');

    // Polygon Mumbai
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.matic-testnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Polygon Mumbai');

    // Polygon ZkEvm
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.zkevm-mainnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Polygon zkEVM');

    // Polygon ZkEvm Testnet
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.zkevm-testnet.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Polygon zkEVM Testnet');

    // Ethereum Sepolia
    ethCore = new Core({
      endpointUrl: 'https://some-cool-name.ethereum-sepolia.quiknode.pro/abcd/',
    });
    chainName = ethCore.client.chain?.name;
    expect(chainName).toEqual('Sepolia');
  });

  it('throws an error with an invalid URL', () => {
    expect(() => {
      new Core({
        endpointUrl: 'notevenclosetoaurl',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"Endpoint URL is not in a valid QuickNode URL format. Please check the URL and try again"`
    );
  });

  it('throws an error with an unsupported network', () => {
    expect(() => {
      new Core({
        endpointUrl: 'https://some-cool-name.solana-mainnet.quiknode.pro/abcd/',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"The chain for endpoint URL https://some-cool-name.solana-mainnet.quiknode.pro/abcd/ is not currently supported by the QuickNode SDK."`
    );
  });
});
