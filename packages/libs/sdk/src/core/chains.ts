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
  bsc,
  bscTestnet,
  celo,
  fantom,
  gnosis,
  goerli,
  holesky,
  harmonyOne,
  mainnet,
  optimism,
  optimismGoerli,
  optimismSepolia,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  sepolia,
  scroll,
  scrollTestnet,
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
  ['bsc']: bsc,
  'bsc-testnet': bscTestnet,
  'celo-mainnet': celo,
  ['fantom']: fantom,
  ['xdai']: gnosis,
  ['gnosis']: gnosis,
  'ethereum-goerli': goerli,
  'harmony-mainnet': harmonyOne,
  [ETH_MAINNET_NETWORK]: mainnet, // The URL doesn't actually contain this
  ['optimism']: optimism,
  'optimism-goerli': optimismGoerli,
  'optimism-sepolia': optimismSepolia,
  ['matic']: polygon,
  ['polygon']: polygon,
  'scroll-mainnet': scroll,
  'scroll-testnet': scrollTestnet,
  'matic-testnet': polygonMumbai,
  'zkevm-mainnet': polygonZkEvm,
  'zkevm-testnet': polygonZkEvmTestnet,
  'ethereum-sepolia': sepolia,
  'ethereum-holesky': holesky,
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
