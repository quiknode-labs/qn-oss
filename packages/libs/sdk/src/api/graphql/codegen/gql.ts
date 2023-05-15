/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query EthMainnetWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n':
    types.CodegenEthMainnetWalletNFTsByContractAddressDocument,
  '\n  query EthMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByAddressFragment\n    }\n  }\n  \n':
    types.CodegenEthMainnetWalletNFTsByAddressDocument,
  '\n  query EthMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByEnsFragment\n    }\n  }\n  \n':
    types.CodegenEthMainnetWalletNFTsByEnsDocument,
  '\n  query EthMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...CollectionEventsFragment\n    }\n  }\n  \n':
    types.CodegenEthMainnetEventsByCollectionDocument,
  '\n  query EthMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereum {\n      ...NftDetails\n    }\n  }\n  \n':
    types.CodegenEthMainnetNFTDetailsDocument,
  '\n  query EthereumMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftEventsFragment\n    }\n  }\n  \n':
    types.CodegenEthereumMainnetEventsByNftDocument,
  '\n  query EthMainnetNftCollectionDetails($contractAddress: String!) {\n    ethereum {\n      ...NftCollectionInfo\n    }\n  }\n  \n':
    types.CodegenEthMainnetNftCollectionDetailsDocument,
  '\n  query EthMainnetTrendingCollections($first: Int, $after: String) {\n    ethereum {\n      ...NftTrendingCollections\n    }\n  }\n  \n':
    types.CodegenEthMainnetTrendingCollectionsDocument,
  '\n  query EthSepoliaWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n':
    types.CodegenEthSepoliaWalletNFTsByContractAddressDocument,
  '\n  query EthSepoliaWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByAddressFragment\n    }\n  }\n  \n':
    types.CodegenEthSepoliaWalletNFTsByAddressDocument,
  '\n  query EthSepoliaWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByEnsFragment\n    }\n  }\n  \n':
    types.CodegenEthSepoliaWalletNFTsByEnsDocument,
  '\n  query EthSepoliaEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...CollectionEventsFragment\n    }\n  }\n  \n':
    types.CodegenEthSepoliaEventsByCollectionDocument,
  '\n  query EthSepoliaNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereumSepolia {\n      ...NftDetails\n    }\n  }\n  \n':
    types.CodegenEthSepoliaNFTDetailsDocument,
  '\n  query EthSepoliaEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftEventsFragment\n    }\n  }\n  \n':
    types.CodegenEthSepoliaEventsByNftDocument,
  '\nquery EthSepoliaNftCollectionDetails($contractAddress: String!) {\n  ethereumSepolia {\n      ...NftCollectionInfo\n  }\n  \n}\n':
    types.CodegenEthSepoliaNftCollectionDetailsDocument,
  '\n  query EthSepoliaTrendingCollections($first: Int, $after: String) {\n    ethereumSepolia {\n      ...NftTrendingCollections\n    }\n  }\n  \n':
    types.CodegenEthSepoliaTrendingCollectionsDocument,
  '\n  fragment ERC1155NFTNode on ERC1155NFT {\n    animationUrl\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallets {\n      edges {\n        node {\n          address\n          ensName\n        }\n      }\n    }\n  }\n':
    types.CodegenERC1155NFTNodeFragmentDoc,
  '\n  fragment ERC721NFTNode on ERC721NFT {\n    animationUrl\n    attributes {\n      name\n      value\n    }\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallet {\n      address\n      ensName\n    }\n  }\n':
    types.CodegenERC721NFTNodeFragmentDoc,
  '\n  fragment CollectionEventsFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n':
    types.CodegenCollectionEventsFragmentFragmentDoc,
  '\n  fragment NftEventsFragment on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n':
    types.CodegenNftEventsFragmentFragmentDoc,
  '\n  fragment NftCollectionInfo on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      address\n      bannerImage {\n        height\n        mimeType\n        url\n        width\n      }\n      baseTokenUri\n      circulatingSupply\n      contract {\n        address\n        isVerified\n        name\n        symbol\n        supportedErcInterfaces\n      }\n      description\n      externalUrl\n      image {\n        height\n        mimeType\n        url\n        width\n      }\n      name\n      ohlcvChart(filter: { limit: 1 }) {\n        average\n        close\n        count\n        high\n        low\n        open\n        volume\n        timestamp\n      }\n      openseaMetadata {\n        isHidden\n        isVerified\n        unsafeSlug\n      }\n      slug\n      symbol\n      totalSupply\n      twitterUsername\n    }\n  }\n':
    types.CodegenNftCollectionInfoFragmentDoc,
  '\n  fragment TrendingCollectionInfo on Collection {\n    address\n    baseTokenUri\n    circulatingSupply\n    description\n    externalUrl\n    image {\n      height\n      mimeType\n      url\n      width\n    }\n    name\n    openseaMetadata {\n      isHidden\n      isVerified\n      unsafeSlug\n    }\n    symbol\n    totalSupply\n    twitterUsername\n  }\n':
    types.CodegenTrendingCollectionInfoFragmentDoc,
  '\n  fragment WalletNFTNode on WalletNFT {\n    nft {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n    }\n  }\n':
    types.CodegenWalletNFTNodeFragmentDoc,
  '\n  fragment NftDetails on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n      ... on ERC1155NFT {\n        wallets {\n          edges {\n            node {\n              address\n              ensName\n            }\n          }\n        }\n      }\n      ... on ERC721NFT {\n        wallet {\n          address\n          ensName\n        }\n      }\n    }\n  }\n':
    types.CodegenNftDetailsFragmentDoc,
  '\n  fragment NftTrendingCollections on EVMSchemaType {\n    trendingCollections(first: $first, after: $after) {\n      pageInfo {\n        ...Pagination\n      }\n      edges {\n        node {\n          collection {\n            ...TrendingCollectionInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n':
    types.CodegenNftTrendingCollectionsFragmentDoc,
  '\n  fragment NftsByContractAddressFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      __typename\n      ... on ERC1155Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC1155NFTNode\n            }\n          }\n        }\n      }\n      ... on ERC721Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC721NFTNode\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n':
    types.CodegenNftsByContractAddressFragmentFragmentDoc,
  '\n  fragment WalletByAddressFragment on EVMSchemaType {\n    walletByAddress(address: $address) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n':
    types.CodegenWalletByAddressFragmentFragmentDoc,
  '\n  fragment WalletByEnsFragment on EVMSchemaType {\n    walletByENS(ensName: $ensName) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n':
    types.CodegenWalletByEnsFragmentFragmentDoc,
  '\n  fragment Pagination on PageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n':
    types.CodegenPaginationFragmentDoc,
  '\n  fragment TokenEventInfo on TokenEvent {\n    blockNumber\n    fromAddress\n    timestamp\n    toAddress\n    transactionHash\n    transferIndex\n    type\n    ... on TokenBurnEvent {\n      tokenId\n      tokenQuantity\n    }\n    ... on TokenTransferEvent {\n      tokenId\n      contractAddress\n      tokenQuantity\n    }\n    ... on TokenMintEvent {\n      tokenQuantity\n    }\n    ... on TokenSaleEvent {\n      marketplace\n      receivedTokenContractAddress\n      receivedTokenId\n      sentTokenId\n    }\n  }\n':
    types.CodegenTokenEventInfoFragmentDoc,
  '\n  query PolygonMainnetNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetNFTsByContractAddressDocument,
  '\n  query PolygonMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByAddressFragment\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetWalletNFTsByAddressDocument,
  '\n  query PolygonMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByEnsFragment\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetWalletNFTsByEnsDocument,
  '\n  query PolygonMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...CollectionEventsFragment\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetEventsByCollectionDocument,
  '\n  query PolygonMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    polygon {\n      ...NftDetails\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetNFTDetailsDocument,
  '\n  query PolygonMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftEventsFragment\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetEventsByNftDocument,
  '\nquery PolygonMainnetNftCollectionDetails($contractAddress: String!) {\n  polygon {\n    ...NftCollectionInfo\n  }\n  \n}\n':
    types.CodegenPolygonMainnetNftCollectionDetailsDocument,
  '\n  query PolygonMainnetTrendingCollections($first: Int, $after: String) {\n    polygon {\n      ...NftTrendingCollections\n    }\n  }\n  \n':
    types.CodegenPolygonMainnetTrendingCollectionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereum {\n      ...NftDetails\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereum {\n      ...NftDetails\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthereumMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthereumMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereum {\n      ...NftEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetNftCollectionDetails($contractAddress: String!) {\n    ethereum {\n      ...NftCollectionInfo\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetNftCollectionDetails($contractAddress: String!) {\n    ethereum {\n      ...NftCollectionInfo\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthMainnetTrendingCollections($first: Int, $after: String) {\n    ethereum {\n      ...NftTrendingCollections\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthMainnetTrendingCollections($first: Int, $after: String) {\n    ethereum {\n      ...NftTrendingCollections\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaWalletNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereumSepolia {\n      ...NftDetails\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaNFTDetails($contractAddress: String!, $tokenId: String!) {\n    ethereumSepolia {\n      ...NftDetails\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    ethereumSepolia {\n      ...NftEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nquery EthSepoliaNftCollectionDetails($contractAddress: String!) {\n  ethereumSepolia {\n      ...NftCollectionInfo\n  }\n  \n}\n'
): (typeof documents)['\nquery EthSepoliaNftCollectionDetails($contractAddress: String!) {\n  ethereumSepolia {\n      ...NftCollectionInfo\n  }\n  \n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EthSepoliaTrendingCollections($first: Int, $after: String) {\n    ethereumSepolia {\n      ...NftTrendingCollections\n    }\n  }\n  \n'
): (typeof documents)['\n  query EthSepoliaTrendingCollections($first: Int, $after: String) {\n    ethereumSepolia {\n      ...NftTrendingCollections\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ERC1155NFTNode on ERC1155NFT {\n    animationUrl\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallets {\n      edges {\n        node {\n          address\n          ensName\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment ERC1155NFTNode on ERC1155NFT {\n    animationUrl\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallets {\n      edges {\n        node {\n          address\n          ensName\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ERC721NFTNode on ERC721NFT {\n    animationUrl\n    attributes {\n      name\n      value\n    }\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallet {\n      address\n      ensName\n    }\n  }\n'
): (typeof documents)['\n  fragment ERC721NFTNode on ERC721NFT {\n    animationUrl\n    attributes {\n      name\n      value\n    }\n    collectionSlug\n    contractAddress\n    description\n    externalUrl\n    metadata\n    name\n    tokenId\n    wallet {\n      address\n      ensName\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CollectionEventsFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment CollectionEventsFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NftEventsFragment on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment NftEventsFragment on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      tokenEvents(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...TokenEventInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NftCollectionInfo on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      address\n      bannerImage {\n        height\n        mimeType\n        url\n        width\n      }\n      baseTokenUri\n      circulatingSupply\n      contract {\n        address\n        isVerified\n        name\n        symbol\n        supportedErcInterfaces\n      }\n      description\n      externalUrl\n      image {\n        height\n        mimeType\n        url\n        width\n      }\n      name\n      ohlcvChart(filter: { limit: 1 }) {\n        average\n        close\n        count\n        high\n        low\n        open\n        volume\n        timestamp\n      }\n      openseaMetadata {\n        isHidden\n        isVerified\n        unsafeSlug\n      }\n      slug\n      symbol\n      totalSupply\n      twitterUsername\n    }\n  }\n'
): (typeof documents)['\n  fragment NftCollectionInfo on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      address\n      bannerImage {\n        height\n        mimeType\n        url\n        width\n      }\n      baseTokenUri\n      circulatingSupply\n      contract {\n        address\n        isVerified\n        name\n        symbol\n        supportedErcInterfaces\n      }\n      description\n      externalUrl\n      image {\n        height\n        mimeType\n        url\n        width\n      }\n      name\n      ohlcvChart(filter: { limit: 1 }) {\n        average\n        close\n        count\n        high\n        low\n        open\n        volume\n        timestamp\n      }\n      openseaMetadata {\n        isHidden\n        isVerified\n        unsafeSlug\n      }\n      slug\n      symbol\n      totalSupply\n      twitterUsername\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment TrendingCollectionInfo on Collection {\n    address\n    baseTokenUri\n    circulatingSupply\n    description\n    externalUrl\n    image {\n      height\n      mimeType\n      url\n      width\n    }\n    name\n    openseaMetadata {\n      isHidden\n      isVerified\n      unsafeSlug\n    }\n    symbol\n    totalSupply\n    twitterUsername\n  }\n'
): (typeof documents)['\n  fragment TrendingCollectionInfo on Collection {\n    address\n    baseTokenUri\n    circulatingSupply\n    description\n    externalUrl\n    image {\n      height\n      mimeType\n      url\n      width\n    }\n    name\n    openseaMetadata {\n      isHidden\n      isVerified\n      unsafeSlug\n    }\n    symbol\n    totalSupply\n    twitterUsername\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment WalletNFTNode on WalletNFT {\n    nft {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n    }\n  }\n'
): (typeof documents)['\n  fragment WalletNFTNode on WalletNFT {\n    nft {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NftDetails on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n      ... on ERC1155NFT {\n        wallets {\n          edges {\n            node {\n              address\n              ensName\n            }\n          }\n        }\n      }\n      ... on ERC721NFT {\n        wallet {\n          address\n          ensName\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment NftDetails on EVMSchemaType {\n    nft(contractAddress: $contractAddress, tokenId: $tokenId) {\n      animationUrl\n      collectionSlug\n      contractAddress\n      description\n      externalUrl\n      metadata\n      name\n      tokenId\n      ... on ERC1155NFT {\n        wallets {\n          edges {\n            node {\n              address\n              ensName\n            }\n          }\n        }\n      }\n      ... on ERC721NFT {\n        wallet {\n          address\n          ensName\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NftTrendingCollections on EVMSchemaType {\n    trendingCollections(first: $first, after: $after) {\n      pageInfo {\n        ...Pagination\n      }\n      edges {\n        node {\n          collection {\n            ...TrendingCollectionInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment NftTrendingCollections on EVMSchemaType {\n    trendingCollections(first: $first, after: $after) {\n      pageInfo {\n        ...Pagination\n      }\n      edges {\n        node {\n          collection {\n            ...TrendingCollectionInfo\n          }\n        }\n      }\n    }\n  }\n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment NftsByContractAddressFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      __typename\n      ... on ERC1155Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC1155NFTNode\n            }\n          }\n        }\n      }\n      ... on ERC721Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC721NFTNode\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment NftsByContractAddressFragment on EVMSchemaType {\n    collection(contractAddress: $contractAddress) {\n      __typename\n      ... on ERC1155Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC1155NFTNode\n            }\n          }\n        }\n      }\n      ... on ERC721Collection {\n        nfts(first: $first, after: $after) {\n          pageInfo {\n            ...Pagination\n          }\n          edges {\n            node {\n              ...ERC721NFTNode\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment WalletByAddressFragment on EVMSchemaType {\n    walletByAddress(address: $address) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment WalletByAddressFragment on EVMSchemaType {\n    walletByAddress(address: $address) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment WalletByEnsFragment on EVMSchemaType {\n    walletByENS(ensName: $ensName) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment WalletByEnsFragment on EVMSchemaType {\n    walletByENS(ensName: $ensName) {\n      address\n      ensName\n      walletNFTs(after: $after, first: $first) {\n        pageInfo {\n          ...Pagination\n        }\n        edges {\n          node {\n            ...WalletNFTNode\n          }\n        }\n      }\n    }\n  }\n  \n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Pagination on PageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n'
): (typeof documents)['\n  fragment Pagination on PageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment TokenEventInfo on TokenEvent {\n    blockNumber\n    fromAddress\n    timestamp\n    toAddress\n    transactionHash\n    transferIndex\n    type\n    ... on TokenBurnEvent {\n      tokenId\n      tokenQuantity\n    }\n    ... on TokenTransferEvent {\n      tokenId\n      contractAddress\n      tokenQuantity\n    }\n    ... on TokenMintEvent {\n      tokenQuantity\n    }\n    ... on TokenSaleEvent {\n      marketplace\n      receivedTokenContractAddress\n      receivedTokenId\n      sentTokenId\n    }\n  }\n'
): (typeof documents)['\n  fragment TokenEventInfo on TokenEvent {\n    blockNumber\n    fromAddress\n    timestamp\n    toAddress\n    transactionHash\n    transferIndex\n    type\n    ... on TokenBurnEvent {\n      tokenId\n      tokenQuantity\n    }\n    ... on TokenTransferEvent {\n      tokenId\n      contractAddress\n      tokenQuantity\n    }\n    ... on TokenMintEvent {\n      tokenQuantity\n    }\n    ... on TokenSaleEvent {\n      marketplace\n      receivedTokenContractAddress\n      receivedTokenId\n      sentTokenId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetNFTsByContractAddress(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftsByContractAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetWalletNFTsByAddress(\n    $address: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByAddressFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetWalletNFTsByEns(\n    $ensName: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...WalletByEnsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetEventsByCollection(\n    $contractAddress: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...CollectionEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    polygon {\n      ...NftDetails\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetNFTDetails($contractAddress: String!, $tokenId: String!) {\n    polygon {\n      ...NftDetails\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftEventsFragment\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetEventsByNft(\n    $contractAddress: String!\n    $tokenId: String!\n    $after: String\n    $first: Int\n  ) {\n    polygon {\n      ...NftEventsFragment\n    }\n  }\n  \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nquery PolygonMainnetNftCollectionDetails($contractAddress: String!) {\n  polygon {\n    ...NftCollectionInfo\n  }\n  \n}\n'
): (typeof documents)['\nquery PolygonMainnetNftCollectionDetails($contractAddress: String!) {\n  polygon {\n    ...NftCollectionInfo\n  }\n  \n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PolygonMainnetTrendingCollections($first: Int, $after: String) {\n    polygon {\n      ...NftTrendingCollections\n    }\n  }\n  \n'
): (typeof documents)['\n  query PolygonMainnetTrendingCollections($first: Int, $after: String) {\n    polygon {\n      ...NftTrendingCollections\n    }\n  }\n  \n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
