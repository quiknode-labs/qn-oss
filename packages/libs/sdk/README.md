# QuickNode SDK

> :warning: **This is an beta release** This release is not production-ready yet and only meant as a technical preview. The API could break in subsequent beta releases until the 1.0.0 release is finalized.

A SDK from [QuickNode](https://www.quicknode.com/) making it easy for developers to interact with QuickNode's services.

QuickNode's SDK is a JavaScript and TypeScript framework-agnostic library that supports both CommonJS and ES module systems.

Currently the SDK makes it even easier to use the [QuickNode Graph API](https://www.quicknode.com/graph-api) to query market insights, trading data, transactions by wallets and contracts, cached NFT images, and more!

> :grey_question: We want to hear from you! Please take a few minutes to fill out our [QuickNode SDK feedback form](https://forms.gle/vWFXDDjEUySjWUof6) and let us know what you currently think about the SDK. This helps us further improve the SDK.

[![Coverage Status](https://coveralls.io/repos/github/quiknode-labs/qn-oss/badge.svg?branch=main)](https://coveralls.io/github/quiknode-labs/qn-oss?branch=main)
[![npm](https://img.shields.io/npm/dm/@quicknode/sdk)](https://www.npmjs.com/package/@quicknode/sdk)
[![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)](https://www.npmjs.com/package/@quicknode/sdk)
![Maintenance](https://img.shields.io/maintenance/yes/2023?color=g)
[![License](https://img.shields.io/npm/l/@quicknode/sdk?color=g)](https://github.com/quiknode-labs/qn-oss/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)](https://github.com/quiknode-labs/qn-oss/issues)
[![Discord](https://img.shields.io/discord/880505845090250794?color=g)](https://discord.gg/DkdgEqE)

<br>

- [QuickNode SDK](#quicknode-sdk)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Quickstart](#quickstart)
  - [API functions](#api-functions)
    - [Configuration](#configuration)
    - [Configuration Arguments](#configuration-arguments)
    - [nfts.getByWallet](#nftsgetbywallet)
    - [nfts.getTrendingCollections](#nftsgettrendingcollections)
    - [nfts.getByContractAddress](#nftsgetbycontractaddress)
    - [nfts.getNFTDetails](#nftsgetnftdetails)
    - [nfts.getCollectionDetails](#nftsgetcollectiondetails)
    - [tokens.getBalancesByWallet](#tokensgetbalancesbywallet)
    - [contracts.getDetails](#contractsgetdetails)
    - [transactions.getByWallet](#transactionsgetbywallet)
    - [transactions.getAll](#transactionsgetall)
    - [transactions.getByHash](#transactionsgetbyhash)
    - [events.getByContract](#eventsgetbycontract)
    - [events.getByNFTCollection](#eventsgetbynftcollection)
    - [events.getByNFT](#eventsgetbynft)
    - [events.getAll](#eventsgetall)
    - [utils.getGasPrices](#utilsgetgasprices)
    - [graphApiClient.query](#graphapiclientquery)
  - [Filters](#filters)
    - [Token Event Filters](#token-event-filters)
  - [Pagination](#pagination)
  - [Contributing corner](#contributing-corner)
    - [Issues](#issues)
    - [Development](#development)
    - [Running tests](#running-tests)
    - [Running linting](#running-linting)
    - [Generate graphql codegen typings](#generate-graphql-codegen-typings)

<br>

## Getting Started

### Installation

- Requires Node.js v16 or higher
- `npm install @quicknode/sdk` or `yarn add @quicknode/sdk`

<br>

### Quickstart

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

<br>

## API functions

These functions return data from the powerful [QuickNode Graph API](https://www.quicknode.com/graph-api), making it even easier to use.

<br>

### Configuration

Sign up for a [QuickNode](https://www.quicknode.com/) account to use the multi-chain [QuickNode Graph API](https://www.quicknode.com/graph-api) API key in the SDK. The API functions in the SDK (and the underlying Graph API) can be used without an API key, but its usage will be heavily rate limited, intended for trial and development purposes only. For more information, please see [QuickNode's Graph API documentation](https://docs.quicknode.com/docs/graphql/getting-started/)

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

<br>

### Configuration Arguments

| Property     | Values | Required | Description                                                         | Example  |
| ------------ | ------ | -------- | ------------------------------------------------------------------- | -------- |
| graphApiKey  | string | ❌       | The QuickNode GraphQL API Key                                       | abcd1234 |
| defaultChain | string | ❌       | The default chain to use for all functions (defaults to `ethereum`) | polygon  |

<br>

### nfts.getByWallet

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                                         | Example                            |
| -------- | ------ | -------- | --------------------------------------------------- | ---------------------------------- |
| address  | string | ✅       | Wallet address or ENS domain                        | quicknode.eth                      |
| first    | number | ❌       | Number of results to return                         | 10                                 |
| before   | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow           |
| after    | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=        |
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

<br>

### nfts.getTrendingCollections

Returns trending NFT Collections

| Argument | Values | Required | Description                  | Example                     |
| -------- | ------ | -------- | ---------------------------- | --------------------------- |
| first    | number | ❌       | Number of results to return  | 10                          |
| before   | string | ❌       | Return results before cursor | T2Zmc2V0Q29ubmVjdGlvbjow    |
| after    | string | ❌       | Return results after cursor  | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain name              | polygon                     |

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

<br>

### nfts.getByContractAddress

Returns NFTs by contract address. The response differs based on if they are an ERC721 or ERC1155 standard.

| Argument        | Values | Required | Description                  | Example                                    |
| --------------- | ------ | -------- | ---------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address         | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| first           | number | ❌       | Number of results to return  | 10                                         |
| before          | string | ❌       | Return results before cursor | T2Zmc2V0Q29ubmVjdGlvbjow                   |
| after           | string | ❌       | Return results after cursor  | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain           | string | ❌       | Blockchain name              | polygon                                    |

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

<br>

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

<br>

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

<br>

### tokens.getBalancesByWallet

Returns ERC20 token balances for a wallet

| Argument | Values | Required | Description                  | Example                                    |
| -------- | ------ | -------- | ---------------------------- | ------------------------------------------ |
| address  | string | ✅       | Wallet address or ENS domain | 0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17 |
| first    | number | ❌       | Number of results to return  | 10                                         |
| before   | string | ❌       | Return results before cursor | T2Zmc2V0Q29ubmVjdGlvbjow                   |
| after    | string | ❌       | Return results after cursor  | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain    | string | ❌       | Blockchain name              | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';

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

<br>

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

<br>

### transactions.getByWallet

Returns transactions for a wallet

| Argument | Values | Required | Description                  | Example                                    |
| -------- | ------ | -------- | ---------------------------- | ------------------------------------------ |
| address  | string | ✅       | Wallet address or ENS domain | 0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17 |
| first    | number | ❌       | Number of results to return  | 10                                         |
| before   | string | ❌       | Return results before cursor | T2Zmc2V0Q29ubmVjdGlvbjow                   |
| after    | string | ❌       | Return results after cursor  | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| chain    | string | ❌       | Blockchain name              | polygon                                    |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.transactions
  .getByWallet({
    address: '0xd10e24685c7cdd3cd3baaa86b09c92be28c834b6',
    first: 5,
  })
  .then((response) => console.log(response));

// Can pass in ENS domain
qn.transactions
  .getByWallet({
    address: 'quicknode.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

<br>

### transactions.getAll

Returns transactions filtered by search parameters

| Argument | Values | Required | Description                                         | Example                         |
| -------- | ------ | -------- | --------------------------------------------------- | ------------------------------- |
| first    | number | ❌       | Number of results to return                         | 10                              |
| before   | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow        |
| after    | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=     |
| chain    | string | ❌       | Blockchain name                                     | polygon                         |
| filter   | object | ✅       | An object with the optional filters for the request | { blockNumber: { eq: 123456 } } |

`filter` Parameters

| Argument    | Values | Description                                                                                      | Example                                                   |
| ----------- | ------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| fromAddress | string | Filter transactions sent from address                                                            | fromAddress: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6" |
| toAddress   | string | Filter transactions sent to address                                                              | toAddress: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6"   |
| blockNumber | object | An object with any combination of `eq`, `gt`, `gte`, `in`, `lt`, or `lte`                        | { lt: 17343891, gt: 17343881 }                            |
| timestamp   | object | An object with any combination of `eq`, `gt`, `gte`, `in`, `lt`, or `lte` with a valid timestamp | { lt: "2022-12-03T10:15:30Z" }                            |

_timestamp can be a date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-time format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar._

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

// Use the filters
qn.transactions
  .getAll({
    filter: {
      blockNumber: {
        eq: 17372310,
      },
      fromAddress: '0x41407a3c41da7970d30a0343cda8b9db70c145fb',
    },
  })
  .then((response) => console.log(response));

// Filters can be left blank to get the latest data
qn.transactions.getAll({ filter: {}, first: 5 }).then((response) => console.log(response));
```

<br>

### transactions.getByHash

Returns transaction information by transaction hash

| Argument | Values | Required | Description             | Example                                                            |
| -------- | ------ | -------- | ----------------------- | ------------------------------------------------------------------ |
| hash     | string | ✅       | Hash of the transaction | 0x1aa26d1d542b414dd2e2d1aa6f8d8e128e2a45bc4a04c24232207221914389bf |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.transactions
  .getByHash({
    hash: '0x1aa26d1d542b414dd2e2d1aa6f8d8e128e2a45bc4a04c24232207221914389bf',
  })
  .then((response) => console.log(response));
```

<br>

### events.getByContract

Returns events by contract address

| Argument | Values | Required | Description                                         | Example                         |
| -------- | ------ | -------- | --------------------------------------------------- | ------------------------------- |
| first    | number | ❌       | Number of results to return                         | 10                              |
| before   | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow        |
| after    | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=     |
| chain    | string | ❌       | Blockchain name                                     | polygon                         |
| filter   | object | ❌       | An object with the optional filters for the request | { blockNumber: { eq: 123456 } } |

`filter` Parameters

Please see the [Token Event Filters section](#token-event-filters) for all options

```typescript
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.events
  .getByContract({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
  })
  .then((response) => console.log(response));

// Using filters
qn.events
  .getByContract({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    filter: {
      fromAddress: {
        eq: '0x10fa1c188eca954419a85112f975155f717ad8ea',
      },
      type: {
        in: ['TRANSFER'],
      },
    }
  })
  .then((response) => console.log(response));
`
```

<br>

### events.getByNFTCollection

Returns the events for an NFT Collection

| Argument        | Values | Required | Description                                         | Example                                    |
| --------------- | ------ | -------- | --------------------------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address                                | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| chain           | string | ❌       | Blockchain name                                     | polygon                                    |
| first           | number | ❌       | Number of results to return                         | 10                                         |
| before          | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow                   |
| after           | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| filter          | object | ❌       | An object with the optional filters for the request | { blockNumber: { eq: 123456 } }            |

`filter` Parameters

Please see the [Token Event Filters section](#token-event-filters) for all options

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.events
  .getByNFTCollection({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
  })
  .then((response) => console.log(response));

// Can pass in filters
qn.events
  .getByNftCollection({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
    filter: {
      type: {
        eq: 'TRANSFER',
      },
    },
  })
  .then((response) => console.log(response));
```

<br>

### events.getByNFT

Returns the events for a specific NFT

| Argument        | Values | Required | Description                                         | Example                                    |
| --------------- | ------ | -------- | --------------------------------------------------- | ------------------------------------------ |
| contractAddress | string | ✅       | NFT contract address                                | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId         | string | ✅       | NFT Token ID                                        | 1                                          |
| chain           | string | ❌       | Blockchain name                                     | polygon                                    |
| first           | number | ❌       | Number of results to return                         | 10                                         |
| before          | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow                   |
| after           | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=                |
| filter          | object | ❌       | An object with the optional filters for the request | { blockNumber: { eq: 123456 } }            |

`filter` Parameters

Please see the [Token Event Filters section](#token-event-filters) for all options

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

qn.events
  .getByNFT({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    tokenId: '1',
  })
  .then((response) => console.log(response));

qn.events
  .getByNFT({
    contractAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    tokenId: '1',
    filter: {
      type: {
        eq: 'TRANSFER',
      },
    },
  })
  .then((response) => console.log(response));
```

<br>

### events.getAll

Returns events filtered by search parameters

| Argument | Values | Required | Description                                         | Example                         |
| -------- | ------ | -------- | --------------------------------------------------- | ------------------------------- |
| chain    | string | ❌       | Blockchain name                                     | polygon                         |
| first    | number | ❌       | Number of results to return                         | 10                              |
| before   | string | ❌       | Return results before cursor                        | T2Zmc2V0Q29ubmVjdGlvbjow        |
| after    | string | ❌       | Return results after cursor                         | YXJyYXljb25uZWN0aW9uOjUwNQ=     |
| filter   | object | ❌       | An object with the optional filters for the request | { blockNumber: { eq: 123456 } } |

`filter` Parameters

Please see the [Token Event Filters section](#token-event-filters) for all options

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

// Use filters to get specific events
qn.events
  .getAll({
    first: 2,
    filter: {
      blockNumber: {
        eq: 17414768,
      },
      toAddress: {
        eq: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
      },
    },
  })
  .then((response) => console.log(response));

// Filters can be left blank to get the latest data
qn.events.getAll({}).then((response) => console.log(response));
```

<br>

### utils.getGasPrices

Returns historical gas prices by block number. Defaults to returning values in wei.

| Argument     | Values  | Required | Description                                         | Example                           |
| ------------ | ------- | -------- | --------------------------------------------------- | --------------------------------- |
| chain        | string  | ❌       | Blockchain name                                     | polygon                           |
| returnInGwei | boolean | ❌       | Return gas values in Gwei                           | true                              |
| filter       | object  | ❌       | An object with the optional filters for the request | { blockNumber: { eq: 17343891 } } |

`filter` Parameters

| Argument    | Values | Description                                                               | Example                        |
| ----------- | ------ | ------------------------------------------------------------------------- | ------------------------------ |
| blockNumber | object | An object with any combination of `eq`, `gt`, `gte`, `in`, `lt`, or `lte` | { lt: 17343891, gt: 17343881 } |

```ts
import QuickNode from '@quicknode/sdk';

const qn = new QuickNode.API({
  graphApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
});

// Get the latest data
qn.utils.getGasPrices({}).then((response) => console.log(response));

// Get filtered data
qn.utils
  .getGasPrices({
    filter: {
      blockNumber: {
        eq: 17343891,
      },
    },
  })
  .then((response) => console.log(response));
```

<br>

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

<br>

## Filters

Some filters are shared between queries

<br>

### Token Event Filters

| Argument         | Values | Description                                                                                                                 | Example                                                                      |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| blockNumber      | object | An object with any combination of `eq`, `gt`, `gte`, `in`, `lt`, or `lte`                                                   | { lt: 17343891, gt: 17343881 }                                               |
| contractAddress  | object | A contract address with `eq`, `in`, or `notIn`                                                                              | { eq: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" }                         |
| contractStandard | object | A valid contract standard `ERC20`, `ERC721`, `ERC1155` with `eq`, `in`, or `notIn`                                          | { eq: "ERC20" }                                                              |
| fromAddress      | object | Filter events sent from address with `eq`, `in`, or `notIn`                                                                 | { eq: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6" }                         |
| marketplace      | object | `BLUR`, `CRYPTOPUNKS`, `LOOKSRARE`, `NIFTY_GATEWAY`, `OPENSEA`, `SEAPORT`, `X2Y2`, `ZEROX` with with `eq`, `in`, or `notIn` | { eq: "OPENSEA" }                                                            |
| timestamp        | object | An object with any combination of `eq`, `gt`, `gte`, `in`, `lt`, or `lte` with a valid timestamp                            | { lt: "2022-12-03T10:15:30Z" }                                               |
| toAddress        | object | Filter events sent to address with `eq`, `in`, or `notIn`                                                                   | { eq: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6" }                         |
| transactionHash  | object | A transaction hash with with `eq`, `in`, or `notIn`                                                                         | { eq: "0xdd652cfd936f7a22ab217a69c1f4356a6d15a4c8d61e30d87a4cd8abca30046f" } |
| type             | object | `TRANSFER`, `MINT`, `SALE`, `SWAP`, or `BURN` with `eq`, `in`, or `notIn`                                                   | { in: ["TRANSFER", "MINT"] }                                                 |
| walletAddress    | object | A valid wallet address with `eq`, `in`, or `notIn`                                                                          | { eq: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6" }                         |

_timestamp can be a date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-time format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar._

<br>

## Pagination

For functions that support pagination, use the `first` property to specify the amount of results to return.

The returned `data.tokensPageInfo.endCursor` property in the response can be used to access subsequent results. This value can be passed in to the `after` property and will return the results after that `endCursor`.

`hasNextPage` can be used to determine the end of the results, where it will be `false`.

For example, if a response contains:

```json
{
  "results": [...],
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
  after: 'T2Zmc2V0Q29ubmVjdGlvbjox', // Using the endCursor
});
```

You can do the same with `before` and return the results before the specified cursor if `hasPreviousPage` is true

For example, if the response contains the following:

```json
{
  "results": [...],
  "pageInfo": {
    "endCursor": "T2Zmc2V0Q29ubmVjdGlvbjo2",
    "hasNextPage": true,
    "hasPreviousPage": true,
    "startCursor": "T2Zmc2V0Q29ubmVjdGlvbjoy"
  }
}
```

calling the following will get the previous page of results

```typescript
qn.nfts.getByWallet({
  address: 'quicknode.eth',
  before: 'T2Zmc2V0Q29ubmVjdGlvbjoy', // Using the startCursor
});
```

<br>

## Contributing corner

### Issues

Please submit any issues or feature requests as an [issue in Github](https://github.com/quiknode-labs/qn-oss/issues).

<br>

### Development

We recommend using the example application to develop

1. In `qn-oss` monorepo root directory, run `yarn install`
1. cd `packages/apps/examples/sdk-api` from `qn-oss` monorepo root
1. `cp .env.example .env` and add api key
1. `nx serve apps-examples-sdk-api`
1. Then you can send requests to the API, for example: `curl http://localhost:3333/api/nftsByAddress/0xbc08dadccc79c00587d7e6a75bb68ff5fd30f9e0`

<br>

### Running tests

Run `nx test libs-sdk` to execute the tests via [Jest](https://jestjs.io).

API responses are recorded using [polly.js](https://github.com/Netflix/pollyjs). You can re-record live requests by passing in an API key, copy `.env.test.example` to `.env.test` and fill out with your API key.

<br>

### Running linting

Run `nx lint libs-sdk` to execute the lint via [ESLint](https://eslint.org/).

<br>

### Generate graphql codegen typings

Generate graphql typings via [Codegen](https://www.the-guild.dev/graphql/codegen).

1. navigate to `packages/libs/sdk` from `qn-oss` monorepo root
1. `cp .env.example .env` and add api key
1. run `yarn run codegen`
