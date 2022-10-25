![npm](https://img.shields.io/npm/dm/@quicknode/sdk)
![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)
![Maintenance](https://img.shields.io/maintenance/yes/2022?color=g)
![NPM](https://img.shields.io/npm/l/@quicknode/sdk?color=g)
![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)
![Discord](https://img.shields.io/discord/880505845090250794?color=g)

# QuickNode SDK

Currently has support for getting started with [Icy Tools GraphQL API](https://developers.icy.tools/) in a blink!

## Quick Start

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

Full example implementation [here](https://github.com/quiknode-labs/qn-oss/tree/main/packages/apps/examples/nft-sdk)

## Providing a config object to the client

> :warning: This client (and the underlying API) can be used without an icyApiKey, but its usage will be heavily rate limited, intended for trial and development purposes only.

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK({
  icyApiKey: 'my-api-key', // which is obtained by signing up on https://developers.icy.tools/
});
```

### Client config API

| Property  | Values | Example                            |
| --------- | ------ | ---------------------------------- |
| icyApiKey | string | 1c1t00ls-4p10-k3y0-lu21-43405e3310 |

<br>

## Methods

### nft.getNFTsByWalletENS

| Argument | Values | Optional | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| ensName  | string | ❌       | Wallet ENS address              | vitalik.eth                 |
| first    | number | ✅       | Number of results to return     | 10                          |
| after    | string | ✅       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nft.getNFTsByWalletAddress

| Argument | Values | Optional | Description                     | Example                                    |
| -------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| address  | string | ❌       | Wallet address                  | 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 |
| first    | number | ✅       | Number of results to return     | 10                                         |
| after    | string | ✅       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWalletAddress({
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nft.getNFTsByContractAddress

| Argument | Values | Optional | Description                     | Example                                    |
| -------- | ------ | -------- | ------------------------------- | ------------------------------------------ |
| address  | string | ❌       | Contract address of NFT         | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| first    | number | ✅       | Number of results to return     | 10                                         |
| after    | string | ✅       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByContractAddress({
    address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nft.getCollectionDetails

| Argument | Values | Optional | Description             | Example                                    |
| -------- | ------ | -------- | ----------------------- | ------------------------------------------ |
| address  | string | ❌       | Contract address of NFT | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getCollectionDetails({
    address: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
  })
  .then((response) => console.log(response));
```

### nft.getNFTEventLogs

| Argument | Values | Optional | Description                                                                       | Example                                    |
| -------- | ------ | -------- | --------------------------------------------------------------------------------- | ------------------------------------------ |
| address  | string | ❌       | Contract address of NFT                                                           | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId  | string | ❌       | NFT ID                                                                            | 100                                        |
| types    | array  | ✅       | An array of event types 'TRANSFER', 'ORDER', and/or 'MINT'. Defaults to all types | ['TRANSFER', 'ORDER', 'MINT]               |
| first    | number | ✅       | Number of results to return                                                       | 10                                         |
| after    | string | ✅       | Return results after end cursor                                                   | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTEventLogs({
    address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
    tokenId: '100',
    types: ['TRANSFER', 'ORDER'],
  })
  .then((response) => console.log(response));
```

### nft.getNFTDetails

Returns the details for a single NFT
| Argument | Values | Optional | Description | Example |
| --------------- | ------ | -------- | --------------------------------- | ------------------------------------------ |
| contractAddress | string | ❌ | Contract address of NFT Collection | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| tokenId | string | ❌ | NFT ID | 5020 |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTDetails({
    contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
    tokenId: '400',
  })
  .then((response) => console.log(response));
```

### nft.getContractEventLogs

Returns the log events for a NFT contract

| Argument | Values | Optional | Description                                                                       | Example                                    |
| -------- | ------ | -------- | --------------------------------------------------------------------------------- | ------------------------------------------ |
| address  | string | ❌       | Contract address of NFT                                                           | 0x2106C00Ac7dA0A3430aE667879139E832307AeAa |
| types    | array  | ✅       | An array of event types 'TRANSFER', 'ORDER', and/or 'MINT'. Defaults to all types | ['TRANSFER', 'ORDER', 'MINT]               |
| first    | number | ✅       | Number of results to return                                                       | 10                                         |
| after    | string | ✅       | Return results after end cursor                                                   | YXJyYXljb25uZWN0aW9uOjUwNQ=                |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getContractEventLogs({
    address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
    types: ['TRANSFER', 'ORDER'],
  })
  .then((response) => console.log(response));
```

### nft.getNFTsByWalletAndContracts

Gets NFTs from specified collections held by a wallet

| Argument  | Values           | Optional | Description                     | Example                                        |
| --------- | ---------------- | -------- | ------------------------------- | ---------------------------------------------- |
| address   | string           | ❌       | Wallet address                  | 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045     |
| contracts | array of strings | ❌       | NFT contract addresses          | ['0xba30e5f9bb24caa003e9f2f0497ad287fdf95623'] |
| first     | number           | ✅       | Number of results to return     | 10                                             |
| after     | string           | ✅       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ=                    |

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWalletAndContracts({
    address: '0x13928eb9a86c8278a45b6ff2935c7730b58ac675',
    contracts: [
      '0xba30e5f9bb24caa003e9f2f0497ad287fdf95623',
      '0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e',
    ],
  })
  .then((response) => console.log(response));
```

## Pagination

For functions that support pagination, use the `first` property to specify the amount of results to return.

The returned `data.tokensPageInfo.endCursor` property in the response can be used to access subsequent results. This value can be passed in to the `after` property and will return the results after that `endCursor`.

`hasNextPage` can be used to determine the end of the results, where it will be `false`.

For example, if a response contains:

```json
"data": {
  "tokensPageInfo": {
    "hasNextPage": true,
    "endCursor": 'YXJyYXljb25uZWN0aW9uOlk='
  }
}
```

calling the following will get the next page of results

```typescript
client.nft.getNFTsByWalletENS({
  ensName: 'vitalik.eth',
  first: 5,
  after: 'YXJyYXljb25uZWN0aW9uOlk=', // from data.tokensPageInfo.endCursor in response
});
```

# Contributing corner

## Building

Run `nx build libs-api-sdk` to build the library.

## Running unit tests

Run `nx test libs-api-sdk` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint libs-api-sdk` to execute the lint via [ESLint](https://eslint.org/).
