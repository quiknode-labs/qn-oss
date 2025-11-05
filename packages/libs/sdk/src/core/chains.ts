import { QNInvalidEndpointUrl, QNChainNotSupported } from '../lib/errors';
import {
  abstract,
  abstractTestnet,
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  arbitrumNova,
  avalanche,
  avalancheFuji,
  b3,
  b3Sepolia,
  base,
  baseGoerli,
  baseSepolia,
  berachainTestnet,
  blast,
  blastSepolia,
  bsc,
  bscTestnet,
  celo,
  cyber,
  cyberTestnet,
  fantom,
  flare,
  flareTestnet,
  gnosis,
  goerli,
  gravity,
  hemi,
  hemiSepolia,
  holesky,
  harmonyOne,
  hyperliquidEvmTestnet,
  immutableZkEvm,
  immutableZkEvmTestnet,
  ink,
  inkSepolia,
  jocMainnet,
  kaia,
  kairos,
  linea,
  mainnet,
  mantle,
  mantleSepoliaTestnet,
  monadTestnet,
  morph,
  nomina,
  optimism,
  optimismGoerli,
  optimismSepolia,
  peaq,
  plasma,
  plasmaTestnet,
  polygon,
  polygonMumbai,
  polygonAmoy,
  polygonZkEvm,
  polygonZkEvmTestnet,
  scroll,
  scrollSepolia,
  sei,
  seiDevnet,
  sepolia,
  soneium,
  sonic,
  story,
  storyAeneid,
  unichain,
  unichainSepolia,
  vana,
  vanaMoksha,
  worldchain,
  worldchainSepolia,
  xai,
  xaiTestnet,
  xLayer,
  zeroGMainnet,
  zeroGTestnet,
  Chain,
} from 'viem/chains';
import { ValueOf } from '../lib/types';

const ETH_MAINNET_NETWORK = 'ethereum-mainnet';
const qnChainToViemChain: Record<string, Chain> = {
  'arbitrum-mainnet': arbitrum,
  'arbitrum-goerli': arbitrumGoerli,
  'arbitrum-sepolia': arbitrumSepolia,
  'arbitrum-nova': arbitrumNova,
  'avalanche-mainnet': avalanche,
  'avalanche-testnet': avalancheFuji,
  'base-mainnet': base,
  'base-goerli': baseGoerli,
  'base-sepolia': baseSepolia,
  'bera-artio': berachainTestnet,
  'blast-mainnet': blast,
  'blast-sepolia': blastSepolia,
  ['bsc']: bsc,
  'bsc-testnet': bscTestnet,
  'celo-mainnet': celo,
  'cyber-mainnet': cyber,
  'cyber-sepolia': cyberTestnet,
  ['fantom']: fantom,
  ['xdai']: gnosis,
  ['gnosis']: gnosis,
  'ethereum-goerli': goerli,
  'harmony-mainnet': harmonyOne,
  [ETH_MAINNET_NETWORK]: mainnet, // The URL doesn't actually contain this
  'mantle-mainnet': mantle,
  'mantle-sepolia': mantleSepoliaTestnet,
  ['optimism']: optimism,
  'optimism-goerli': optimismGoerli,
  'optimism-sepolia': optimismSepolia,
  ['matic']: polygon,
  ['polygon']: polygon,
  'scroll-mainnet': scroll,
  'scroll-testnet': scrollSepolia,
  'matic-testnet': polygonMumbai,
  'matic-amoy': polygonAmoy,
  'zkevm-mainnet': polygonZkEvm,
  'zkevm-testnet': polygonZkEvmTestnet,
  'sei-pacific': sei,
  'sei-arctic': seiDevnet,
  'ethereum-sepolia': sepolia,
  'ethereum-holesky': holesky,
  '0g-mainnet': zeroGMainnet,
  '0g-galileo': zeroGTestnet,
  'abstract-testnet': abstractTestnet,
  'abstract-mainnet': abstract,
  'b3-mainnet': b3,
  'b3-sepolia': b3Sepolia,
  'flare-mainnet': flare,
  'flare-coston2': flareTestnet,
  'gravity-alpham': gravity,
  'hemi-testnet': hemiSepolia,
  'hemi-mainnet': hemi,
  'hype-testnet': hyperliquidEvmTestnet,
  'imx-testnet': immutableZkEvmTestnet,
  'imx-mainnet': immutableZkEvm,
  'ink-mainnet': ink,
  'ink-sepolia': inkSepolia,
  'joc-mainnet': jocMainnet,
  'kaia-kairos': kairos,
  'kaia-mainnet': kaia,
  'linea-mainnet': linea,
  'monad-testnet': monadTestnet,
  'morph-mainnet': morph,
  'nomina-mainnet': nomina,
  'peaq-mainnet': peaq,
  'plasma-testnet': plasmaTestnet,
  'plasma-mainnet': plasma,
  'soneium-mainnet': soneium,
  'sonic-mainnet': sonic,
  'story-aeneid': storyAeneid,
  'story-mainnet': story,
  'unichain-mainnet': unichain,
  'unichain-sepolia': unichainSepolia,
  'vana-moksha': vanaMoksha,
  'vana-mainnet': vana,
  'worldchain-mainnet': worldchain,
  'worldchain-sepolia': worldchainSepolia,
  'xai-mainnet': xai,
  'xai-testnet': xaiTestnet,
  'xlayer-mainnet': xLayer,
};

function chainNameFromEndpoint(endpointUrl: string): string {
  let hostnameParts: string[];
  try {
    const parsedUrl = new URL(endpointUrl);
    hostnameParts = parsedUrl.hostname.split('.');
  } catch (e) {
    throw new QNInvalidEndpointUrl();
  }

  const quiknode = hostnameParts.at(-2);
  const chainOrDiscover = hostnameParts.at(-3);
  if (quiknode !== 'quiknode' || !chainOrDiscover)
    throw new QNInvalidEndpointUrl();

  const indexOfName = chainOrDiscover === 'discover' ? -4 : -3;
  const lengthOfEthereum = chainOrDiscover === 'discover' ? 4 : 3;

  if (hostnameParts.length === lengthOfEthereum) return ETH_MAINNET_NETWORK;
  const potentialChainName = hostnameParts.at(indexOfName);
  if (potentialChainName) return potentialChainName;

  throw new QNInvalidEndpointUrl();
}

export function deriveChainFromUrl(
  endpointUrl: string
): ValueOf<typeof qnChainToViemChain> {
  const chainName = chainNameFromEndpoint(endpointUrl);
  const viemChain = qnChainToViemChain[chainName];
  if (viemChain) return viemChain;
  throw new QNChainNotSupported(endpointUrl);
}
