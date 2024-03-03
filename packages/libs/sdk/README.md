# QuickNode SDK

A SDK from [QuickNode](https://www.quicknode.com/) making it easy for developers to interact with QuickNode's services.

QuickNode's SDK is a JavaScript and TypeScript framework-agnostic library that supports both CommonJS and ES module systems.

> :grey_question: We want to hear from you! Please take a few minutes to fill out our [QuickNode SDK feedback form](https://forms.gle/vWFXDDjEUySjWUof6) and let us know what you currently think about the SDK. This helps us further improve the SDK.

[![Coverage Status](https://coveralls.io/repos/github/quiknode-labs/qn-oss/badge.svg?branch=main)](https://coveralls.io/github/quiknode-labs/qn-oss?branch=main)
[![npm](https://img.shields.io/npm/dm/@quicknode/sdk)](https://www.npmjs.com/package/@quicknode/sdk)
[![npm](https://img.shields.io/npm/v/@quicknode/sdk?color=g)](https://www.npmjs.com/package/@quicknode/sdk)
![Maintenance](https://img.shields.io/maintenance/yes/2023?color=g)
[![License](https://img.shields.io/npm/l/@quicknode/sdk?color=g)](https://github.com/quiknode-labs/qn-oss/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)](https://github.com/quiknode-labs/qn-oss/issues)
[![Discord](https://img.shields.io/discord/880505845090250794?color=g)](https://discord.gg/DkdgEqE)

<br>

## Getting Started

### Installation

- Requires Node.js v16 or higher
- `npm install @quicknode/sdk` or `yarn add @quicknode/sdk`

<br>

### Quickstart

```ts
import Core from '@quicknode/sdk/core';

const core = new Core({ endpointUrl: 'replaceme' });

const blockNumber = core.client.getBlockNumber().then((response) => console.log(response));
```

Full example app implementation [here](https://github.com/quiknode-labs/qn-oss/tree/main/packages/apps/examples/sdk-api)

<br>

## Documentation

Please see [the official QuickNode SDK documentation](https://www.quicknode.com/docs/quicknode-sdk/getting-started) for the full documentation of SDK functions.

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
