# QuickNode OSS Repository

[QuickNode](https://www.quicknode.com/)'s open-source monorepo. This is a collection of our open-source tools that enable developers to use QuickNode services and facilitate blockchain development.

## Packages

- [QuickNode SDK](./packages/libs/sdk/README.md): Framework agnostic library that serves as a wrapper to QuickNode's APIs, currently supports [the QuickNode GraphQL API](https://docs.quicknode.com/docs/graphql/getting-started).
- [Token Gate](./packages/libs/ui/token-gate): A React library for conditionally showing parts of your application based on NFT ownership
- [nft-react-hooks](./packages/libs/ui/nft-react-hooks/README.md): React hook library that serves as a wrapper to the [icy.tools GraphQL API](https://developers.icy.tools).

## Apps

- [QuickNode SDK example app](./packages/apps/examples/sdk-api/)
- [nft-react-hooks example](./packages/apps/examples/nft-react-hooks)
