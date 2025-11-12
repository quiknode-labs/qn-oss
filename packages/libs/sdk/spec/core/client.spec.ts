import { Core, CoreArguments } from '../../src';
import { polygon } from 'viem/chains';
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
      },
      async () => {
        await expect(
          core.client.getBlockNumber()
        ).resolves.toMatchInlineSnapshot(`23784444n`);
      }
    );
  });

  it('errors when the add-on is not installed', async () => {
    await expect(
      core.client.qn_fetchNFTs({
        wallet: '0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6',
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"NFT And Token RPC API V2 is not set as enabled. Please ensure the addon is enabled on your QuickNode endpoint and enable nftTokenV2 in the Core configuration argument"`
    );
  });

  it('can derive the correct network from URL', () => {
    let endpoint = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-mainnet.quiknode.pro/abcd/',
    });
    let chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Arbitrum One');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-goerli.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Arbitrum Goerli');

    endpoint = new Core({
      endpointUrl:
        'https://some-cool-name.avalanche-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Avalanche');

    endpoint = new Core({
      endpointUrl:
        'https://some-cool-name.avalanche-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Avalanche Fuji');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.base-goerli.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Base Goerli');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.bsc.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('BNB Smart Chain');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.bsc-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('BNB Smart Chain Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.celo-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Celo');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.fantom.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Fantom');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.xdai.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Gnosis');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.ethereum-goerli.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Goerli');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.harmony-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Harmony One');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Ethereum');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.optimism.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('OP Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.optimism-goerli.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Optimism Goerli');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.matic.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.matic-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon Mumbai');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.zkevm-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon zkEVM');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.zkevm-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon zkEVM Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.ethereum-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Arbitrum Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.arbitrum-nova.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Arbitrum Nova');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.base-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Base');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.base-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Base Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.bera-artio.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Berachain Artio');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.blast-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Blast');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.blast-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Blast Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.cyber-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Cyber');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.cyber-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Cyber Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.gnosis.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Gnosis');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.ethereum-holesky.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Holesky');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.mantle-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Mantle');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.mantle-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Mantle Sepolia Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.optimism-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('OP Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.polygon.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.scroll-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Scroll');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.scroll-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Scroll Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.matic-amoy.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon Amoy');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.sei-pacific.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Sei Network');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.sei-arctic.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Sei Devnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.0g-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('0G Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.0g-galileo.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('0G Galileo Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.abstract-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Abstract Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.abstract-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Abstract');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.b3-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('B3');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.b3-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('B3 Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.flare-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Flare Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.flare-coston2.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Flare Testnet Coston2');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.gravity-alpham.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Gravity Alpha Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.hemi-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Hemi Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.hemi-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Hemi');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.hype-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Hyperliquid EVM Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.imx-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Immutable zkEVM Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.imx-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Immutable zkEVM');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.ink-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Ink');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.ink-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Ink Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.joc-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Japan Open Chain Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.kaia-kairos.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Kairos Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.kaia-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Kaia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.linea-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Linea Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.monad-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Monad Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.morph-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Morph');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.nomina-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Nomina');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.peaq-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Peaq');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.plasma-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Plasma Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.plasma-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Plasma');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.soneium-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Soneium Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.sonic-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Sonic');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.story-aeneid.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Story Aeneid');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.story-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Story');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.unichain-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Unichain');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.unichain-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Unichain Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.vana-moksha.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Vana Moksha Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.vana-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Vana');

    endpoint = new Core({
      endpointUrl:
        'https://some-cool-name.worldchain-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('World Chain');

    endpoint = new Core({
      endpointUrl:
        'https://some-cool-name.worldchain-sepolia.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('World Chain Sepolia');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.xai-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Xai Mainnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.xai-testnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Xai Testnet');

    endpoint = new Core({
      endpointUrl: 'https://some-cool-name.xlayer-mainnet.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('X Layer Mainnet');
  });

  it('can derive network name from discover endpoints', () => {
    let endpoint = new Core({
      endpointUrl: 'https://some-cool-name.discover.quiknode.pro/abcd/',
    });
    let chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Ethereum');

    endpoint = new Core({
      endpointUrl:
        'https://some-cool-name.ethereum-sepolia.discover.quiknode.pro/abcd/',
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Sepolia');
  });

  it('throws an error with an invalid URL', () => {
    expect(() => {
      new Core({
        endpointUrl: 'not.even.close.to.a.real.url.pro',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"Endpoint URL is not in a valid QuickNode URL format. Please check the URL and try again"`
    );
    expect(() => {
      new Core({
        endpointUrl: '.quiknode.pro',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"Endpoint URL is not in a valid QuickNode URL format. Please check the URL and try again"`
    );
    expect(() => {
      new Core({
        endpointUrl: '.discover.quiknode.pro',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"Endpoint URL is not in a valid QuickNode URL format. Please check the URL and try again"`
    );
    expect(() => {
      new Core({
        endpointUrl: 'discover.quiknode.pro',
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
    expect(() => {
      new Core({
        endpointUrl:
          'https://some-cool-name.solana-mainnet.discover.quiknode.pro/abcd/',
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `"The chain for endpoint URL https://some-cool-name.solana-mainnet.discover.quiknode.pro/abcd/ is not currently supported by the QuickNode SDK."`
    );
  });

  it('can pass in a viem chain', () => {
    let endpoint = new Core({
      endpointUrl: 'https://some-cool-name.matic.quiknode.pro/abcd/',
      chain: polygon,
    });
    let chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon');

    // testing custom name for DNS masking
    endpoint = new Core({
      endpointUrl: 'https://mycustomdomain.example.com/',
      chain: polygon,
    });
    chainName = endpoint.client.chain?.name;
    expect(chainName).toEqual('Polygon');
  });
});
