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

## Pagination

For functions that support pagination, use the `first` property to specify the amount of results to return.

The returned `data.tokensPageInfo.endCursor` property in the response can be used to access subsequent results. This value can be passed in to the `after` property and will return the results after that `endCursor`.

`hasNextPage` can be used to determine the end of the results, where it will be `false`.

For example, if a response contains:

```
"data: {
  "tokensPageInfo": {
    "hasNextPage": true,
    "endCursor": 'YXJyYXljb25uZWN0aW9uOlk='
    }
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
