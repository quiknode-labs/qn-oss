import { QNInvalidEndpointUrl, QNChainNotSupported } from '../lib/errors';
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  baseGoerli,
  bsc,
  bscTestnet,
  celo,
  fantom,
  gnosis,
  goerli,
  harmonyOne,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  sepolia,
  Chain,
} from 'viem/chains';
import { ValueOf } from '../lib/types';

const qnNetworkToViemChain: Record<string, Chain> = {
  'arbitrum-mainnet': arbitrum,
  'arbitrum-goerli': arbitrumGoerli,
  'avalanche-mainnet': avalanche,
  'avalanche-testnet': avalancheFuji,
  'base-goerli': baseGoerli,
  ['bsc']: bsc,
  'bsc-testnet': bscTestnet,
  'celo-mainnet': celo,
  ['fantom']: fantom,
  ['xdai']: gnosis,
  'ethereum-goerli': goerli,
  'harmony-mainnet': harmonyOne,
  'ethereum-mainnet': mainnet, // The URL doesn't actually contain this
  ['optimism']: optimism,
  'optimism-goerli': optimismGoerli,
  ['matic']: polygon,
  'matic-testnet': polygonMumbai,
  'zkevm-mainnet': polygonZkEvm,
  'zkevm-testnet': polygonZkEvmTestnet,
  'ethereum-sepolia': sepolia,
};

function networkNameFromEndpoint(endpointUrl: string): string {
  try {
    const parsedUrl = new URL(endpointUrl);
    const hostnameParts = parsedUrl.hostname.split('.');
    const networkName =
      hostnameParts.length > 3 ? hostnameParts[1] : 'ethereum-mainnet';
    return networkName;
  } catch (e) {
    throw new QNInvalidEndpointUrl();
  }
}

export function deriveNetworkFromUrl(
  endpointUrl: string
): ValueOf<typeof qnNetworkToViemChain> {
  const networkName = networkNameFromEndpoint(endpointUrl);
  const viemNetwork = qnNetworkToViemChain[networkName];
  if (viemNetwork) return viemNetwork;
  throw new QNChainNotSupported(endpointUrl);
}
