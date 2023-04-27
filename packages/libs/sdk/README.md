# QuickNode SDK

An SDK from [QuickNode](https://www.quicknode.com/) making it easy for developers to interact with the blockchain.

Currently supports getting started with [Icy Tools GraphQL API](https://developers.icy.tools/) in a blink!

[![npm](https://img.shields.io/npm/dm/@quicknode/sdk)](https://www.npmjs.com/package/@quicknode/sdk)
[![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)](https://www.npmjs.com/package/@quicknode/sdk)
![Maintenance](https://img.shields.io/maintenance/yes/2022?color=g)
[![License](https://img.shields.io/npm/l/@quicknode/sdk?color=g)](https://github.com/quiknode-labs/qn-oss/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)](https://github.com/quiknode-labs/qn-oss/issues)
[![Discord](https://img.shields.io/discord/880505845090250794?color=g)](https://discord.gg/DkdgEqE)

## Quick Start

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK({ gqlApiKey: 'my-api-key' });

client.nft
  .getAllByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

Full example app implementation [here](https://github.com/quiknode-labs/qn-oss/tree/main/packages/apps/examples/nft-sdk)

## Providing a config object to the client

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK({
  gqlApiKey: 'my-api-key', // which is obtained by signing up on https://www.quicknode.com/signup
  defaultChain: 'polygon',
});
```

### Client config API

| Property     | Values | Description                                | Example     |
| ------------ | ------ | ------------------------------------------ | ----------- |
| gqlApiKey    | string | The QuickNode GraphQL API Key              | QN_abcd1234 |
| defaultChain | string | The default chain to use for all functions | polygon     |

<br>

## Methods

### nft.getAllByWalletENS

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| ensName  | string | ✅       | Wallet ENS address              | vitalik.eth                 |
| first    | number | ❌       | Number of results to return     | 10                          |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain chain name           | polygon                     |

```ts
import QuickNode from '@quicknode/sdk';

const client = new QuickNode();

client.api.nft
  .getAllByWalletENS({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

### nft.getAllByWalletAddress

Returns NFTs owned by a wallet

| Argument | Values | Required | Description                     | Example                     |
| -------- | ------ | -------- | ------------------------------- | --------------------------- |
| address  | string | ✅       | Wallet address                  | vitalik.eth                 |
| first    | number | ❌       | Number of results to return     | 10                          |
| after    | string | ❌       | Return results after end cursor | YXJyYXljb25uZWN0aW9uOjUwNQ= |
| chain    | string | ❌       | Blockchain chain name           | polygon                     |

```ts
import QuickNode from '@quicknode/sdk';

const client = new QuickNode();

client.nft
  .getAllByWalletAddress({
    address: '0x3C6aEFF92b4B35C2e1b196B57d0f8FFB56884A17',
    first: 5,
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
client.nft.getAllByWalletENS({
  ensName: 'vitalik.eth',
  first: 5,
  after: 'YXJyYXljb25uZWN0aW9uOlk=',
});
```

# Contributing corner

## Issues

Please submit any questions, issues, or feedback as an [issue in Github](https://github.com/quiknode-labs/qn-oss/issues).

## Development

We recommend using the example application to develop

1. cd `packages/apps/examples/sdk-api`
2. `cp .env.example .env` and add api key
3. `nx serve apps-examples-sdk-api`
4. Then you can send requests to the API, for example: `curl http://localhost:3333/api/nftsByAddress/0xbc08dadccc79c00587d7e6a75bb68ff5fd30f9e0`

## Running unit tests

Run `nx test libs-sdk` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint libs-sdk` to execute the lint via [ESLint](https://eslint.org/).

## Generate graphql codegen typings

Generate graphql typings via [Codegen](https://www.the-guild.dev/graphql/codegen).

1. cd `packages/libs/sdk`
2. add a `graphqlHeaders.json` with any authorization headers you want to pass to graphql API
3. run `yarn run codegen`
