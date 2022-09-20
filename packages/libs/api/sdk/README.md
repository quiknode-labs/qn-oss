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
  .getNFTsByWallet({
    ensName: 'vitalik.eth',
    first: 5,
  })
  .then((response) => console.log(response));
```

Full example implementation [here](https://github.com/user/repo/blob/branch/other_file.md).

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

### nft.getNFTsByWallet

| Argument | Values | Optional | Example                                    |
| -------- | ------ | -------- | ------------------------------------------ |
| address  | string | ❌       | 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 |
| ensName  | string | ❌       | vitalik.eth                                |
| first    | number | ✅       | 10                                         |
| after    | string | ✅       | YXJyYXljb25uZWN0aW9uOjUwNQ==               |

On this method you can provide either address or ensName as arguments

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWallet({
    ensName: 'vitalik.eth',
    first: 5,
    after: 'YXJyYXljb25uZWN0aW9uOjUwNQ==',
  })
  .then((response) => console.log(response));
```

or

```ts
import { QuickNodeSDK } from '@quicknode/sdk';

const client = new QuickNodeSDK();

client.nft
  .getNFTsByWallet({
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    first: 5,
    after: 'YXJyYXljb25uZWN0aW9uOjUwNQ==',
  })
  .then((response) => console.log(response));
```

# Contributing corner

## Building

Run `nx build libs-api-sdk` to build the library.

## Running unit tests

Run `nx test libs-api-sdk` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint libs-api-sdk` to execute the lint via [ESLint](https://eslint.org/).
