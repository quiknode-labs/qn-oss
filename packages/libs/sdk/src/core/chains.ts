import { QNInvalidEndpointUrl, QNChainNotSupported } from '../lib/errors';
import {
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  arbitrumNova,
  avalanche,
  avalancheFuji,
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
  holesky,
  harmonyOne,
  immutableZkEvm,
  immutableZkEvmTestnet,
  linea,
  mainnet,
  mantle,
  mantleSepoliaTestnet,
  optimism,
  optimismGoerli,
  optimismSepolia,
  polygon,
  polygonMumbai,
  polygonAmoy,
  polygonZkEvm,
  polygonZkEvmTestnet,
  sepolia,
  scroll,
  scrollSepolia,
  sei,
  seiDevnet,
  xLayer,
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
  'flare-mainnet': flare,
  'flare-coston2': flareTestnet,
  'imx-testnet': immutableZkEvmTestnet,
  'imx-mainnet': immutableZkEvm,
  'linea-mainnet': linea,
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
