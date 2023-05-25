# QuickNode SDK

> :warning: **This is an alpha release** This release is not feature-complete or production-ready yet and only meant as a technical preview. The API could break in subsequent alpha and beta releases until the 1.0.0 release is finalized.

An SDK from [QuickNode](https://www.quicknode.com/) making it easy for developers to interact with the blockchain.

Currently supports getting started with [QuickNode GraphQL API](https://www.quicknode.com/graph-api) in a blink!

[![npm](https://img.shields.io/npm/dm/@quicknode/sdk)](https://www.npmjs.com/package/@quicknode/sdk)
[![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)](https://www.npmjs.com/package/@quicknode/sdk)
![Maintenance](https://img.shields.io/maintenance/yes/2022?color=g)
[![License](https://img.shields.io/npm/l/@quicknode/sdk?color=g)](https://github.com/quiknode-labs/qn-oss/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)](https://github.com/quiknode-labs/qn-oss/issues)
[![Discord](https://img.shields.io/discord/880505845090250794?color=g)](https://discord.gg/DkdgEqE)

## Getting Started

### Installation

- Requires Node.js v16 or higher
- `npm install @quicknode/sdk` or `yarn add @quicknode/sdk`

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({ graphApiKey: 'my-api-key' });

qn.nfts
  .getByWallet({
    address: 'quicknode.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

Full example app implementation [here](https://github.com/quiknode-labs/qn-oss/tree/main/packages/apps/examples/sdk-api)

## Providing a config object to the client

Sign up for a [QuickNode](https://www.quicknode.com/) account to use the multi-chain [QuickNode GraphQL API](https://www.quicknode.com/graph-api) API key in the SDK.

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
  defaultChain: 'ethereum',
});
```

A `defaultChain` can be set to set the chain for all calls. Currently we support:

- `ethereum` Ethereum Mainnet
- `ethereumSepolia` Ethereum Sepolia
- `polygon` Polygon Mainnet

The `defaultChain` in the initializer can be overridden with the `chain` argument in functions.

If no `defaultChain` is passed into the initializer or a `chain` argument to a function,`ethereum` is used by default.

### Client config API

| Property     | Values | Description                                | Example  |
| ------------ | ------ | ------------------------------------------ | -------- |
| graphApiKey  | string | The QuickNode GraphQL API Key              | abcd1234 |
| defaultChain | string | The default chain to use for all functions | polygon  |

<br>

## Methods

### nfts.getByWallet

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                                         | Example                            |
| -------- | ------ | -------- | --------------------------------------------------- | ---------------------------------- |
| address  | string | ✅       | Wallet address or ENS domain                        | quicknode.eth                      |
| first    | number | ❌       | Number of results to return                         | 10                                 |
| after    | string | ❌       | Return results after end cursor                     | YXJyYXljb25uZWN0aW9uOjUwNQ=        |
| chain    | string | ❌       | Blockchain name                                     | polygon                            |
| filter   | object | ❌       | An object with the optional filters for the request | { contractAddressIn: ["0x00..."] } |

`filter` Parameters

| Argument          | Values | Description                        | Example                                        |
| ----------------- | ------ | ---------------------------------- | ---------------------------------------------- |
| contractAddressIn | Array  | An array of NFT contract addresses | ["0x2106C00Ac7dA0A3430aE667879139E832307AeAa"] |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getByWallet({
    address: '0x51ABa267A6e8e1E76B44183a73E881D73A102F26',
    first: 5,
  })
  .then((response) => console.log(response));

// can pass in ENS domain
qn.nfts
  .getByWallet({
    address: 'quicknode.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getTrendingCollections

Returns trending NFT Collections

| Argument | Values | Required | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| first    | number | ❌       | Number of results to return     | 10                          |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain name                 | polygon                     |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getTrendingCollections({
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getByContractAddress

Returns NFTs by contract address. The response differs based on if they are an ERC721 or ERC1155 standard.

| Argument        | Values | Required | Description                     | Example                                    |
| --------------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address            | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| first           | number | ❌       | Number of results to return     | 10                                         |
| after           | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain           | string | ❌       | Blockchain name                 | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getByContractAddress({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getNFTDetails

Returns the details for a specified NFT

| Argument        | Values | Required | Description          | Example                                    |
| --------------- | ------ | -------- | -------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId         | string | ✅       | NFT Token ID         | 1                                          |
| chain           | string | ❌       | Blockchain name      | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getNFTDetails({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    tokenId: '1',
  })
  .then((response) => console.log(response));
```

### nfts.getCollectionDetails

Returns the details for an NFT Collection

| Argument        | Values | Required | Description          | Example                                    |
| --------------- | ------ | -------- | -------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| chain           | string | ❌       | Blockchain name      | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';
const qn = new QuickNode.API({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getCollectionDetails({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
  })
  .then((response) => console.log(response));
```

### nfts.getCollectionEvents

Returns the events for an NFT Collection

| Argument        | Values | Required | Description                     | Example                                    |
| --------------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address            | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| chain           | string | ❌       | Blockchain name                 | polygon                                    |
| first           | number | ❌       | Number of results to return     | 10                                         |
| after           | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getCollectionEvents({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nfts.getNFTEvents

Returns the events for a specific NFT

| Argument        | Values | Required | Description                     | Example                                    |
| --------------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address            | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId         | string | ✅       | NFT Token ID                    | 1                                          |
| chain           | string | ❌       | Blockchain name                 | polygon                                    |
| first           | number | ❌       | Number of results to return     | 10                                         |
| after           | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.nfts
  .getNFTEvents({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    tokenId: '1',
  })
  .then((response) => console.log(response));
```

### tokens.getBalancesByWallet

Returns ERC20 token balances for a wallet

| Argument | Values | Required | Description                     | Example                                    |
| -------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| address  | string | ✅       | Wallet address or ENS domain    | 0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17 |
| first    | number | ❌       | Number of results to return     | 10                                         |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain    | string | ❌       | Blockchain name                 | polygon                                    |

```ts
const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.tokens
  .getBalancesByWallet({
    address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
    first: 5,
  })
  .then((response) => console.log(response));

// Can pass in ENS domain
qn.tokens
  .getBalancesByWallet({
    address: 'quicknode.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

### contracts.getDetails

Get the details and ABI for a contract address

| Argument        | Values | Required | Description      | Example                                    |
| --------------- | ------ | -------- | ---------------- | ------------------------------------------ |
| contractAddress | string | ✅       | contract address | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| chain           | string | ❌       | Blockchain name  | polygon                                    |

```ts
import QuickNode, { gql } from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.contracts
  .getDetails({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
  })
  .then((response) => console.log(response));
```

### graphApiClient.query

A way to send GraphQL queries directly to the [QuickNode GraphQL API](https://www.quicknode.com/graph-api). `graphApiClient` is an [Urql client](https://formidable.com/open-source/urql/docs/api/core/#client) instance configured to use QuickNode's Graph API. For more information about the query structure, see the [Graph API documentation](https://docs.quicknode.com/docs/graphql/getting-started/)

```ts
import QuickNode, { gql } from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

const query = gql`
  query ($contractAddress: String!) {
    ethereum {
      collection(contractAddress: $contractAddress) {
        address
        name
        symbol
        totalSupply
      }
    }
  }
`;
const variables = {
  contractAddress: '0x2106c00ac7da0a3430ae667879139e832307aeaa',
};

qn.graphApiClient.query({ query, variables }).then(({ data }) => console.log(data));
```

## Pagination

For functions that support pagination, use the `first` property to specify the amount of results to return.

The returned `data.tokensPageInfo.endCursor` property in the response can be used to access subsequent results. This value can be passed in to the `after` property and will return the results after that `endCursor`.

`hasNextPage` can be used to determine the end of the results, where it will be `false`.

For example, if a response contains:

```json
{
  "results": [],
  "pageInfo": {
    "endCursor": "T2Zmc2V0Q29ubmVjdGlvbjox",
    "hasNextPage": true,
    "hasPreviousPage": false,
    "startCursor": "T2Zmc2V0Q29ubmVjdGlvbjow"
  }
}
```

calling the following will get the next page of results

```typescript
qn.nfts.getByWallet({
  address: 'quicknode.eth',
  first: 5,
  after: 'T2Zmc2V0Q29ubmVjdGlvbjox',
});
```

# Contributing corner

## Issues

Please submit any questions, issues, or feedback as an [issue in Github](https://github.com/quiknode-labs/qn-oss/issues).

## Development

We recommend using the example application to develop

1. cd `packages/apps/examples/sdk-api` from `qn-oss` monorepo root
2. `cp .env.example .env` and add api key
3. `nx serve apps-examples-sdk-api`
4. Then you can send requests to the API, for example: `curl http://localhost:3333/api/nftsByAddress/0xbc08dadccc79c00587d7e6a75bb68ff5fd30f9e0`

## Running tests

Run `nx test libs-sdk` to execute the tests via [Jest](https://jestjs.io).

API responses are recorded using [polly.js](https://github.com/Netflix/pollyjs). You can re-record live requests by passing in an API key, copy `.env.test.example` to `.env.test` and fill out with your API key.

## Running lint

Run `nx lint libs-sdk` to execute the lint via [ESLint](https://eslint.org/).

## Generate graphql codegen typings

Generate graphql typings via [Codegen](https://www.the-guild.dev/graphql/codegen).

1. navigate to `packages/libs/sdk` from `qn-oss` monorepo root
1. `cp .env.example .env` and add api key
1. run `yarn run codegen`
