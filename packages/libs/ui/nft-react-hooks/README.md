![npm peer dependency version](https://img.shields.io/npm/dependency-version/@quicknode/icy-nft-hooks/peer/react)
![npm](https://img.shields.io/npm/dm/@quicknode/icy-nft-hooks)
![npm](https://img.shields.io/npm/v/@quicknode/icy-nft-hooks?color=g)
![Maintenance](https://img.shields.io/maintenance/yes/2022?color=g)
![NPM](https://img.shields.io/npm/l/@quicknode/icy-nft-hooks?color=g)
![GitHub issues](https://img.shields.io/github/issues-raw/quiknode-labs/qn-oss?color=g)
![Discord](https://img.shields.io/discord/880505845090250794?color=g)

# nft-react-hooks

This is a react hook library that serves as a wrapper to the [icy.tools GraphQL API](https://developers.icy.tools).


#### Installation

Install the @quicknode/icy-nft-hooks package from npm

```bash
  yarn add @quicknode/icy-nft-hooks
```
or 

```bash
  npm install @quicknode/icy-nft-hooks
```

#### Usage/Examples

Start by wrapping your app in the `IcyProvider` component.

```typescript
import { IcyProvider } from '@quicknode/icy-nft-hooks';

function App() {
  return (
      <IcyProvider>
        ...
      </IcyProvider>
  );
}
```

 Passing an apiKey to the provider is initially optional, without it you'll be heavily rate limited and it is only meant for test driving our services. When you are ready to, you can sign up and get your apiKey from the [icy.tools Developer Website](https://developers.icy.tools)). Then you can forward it to the provider like:

 ```typescript
import { IcyProvider } from '@quicknode/icy-nft-hooks';

function App() {
  return (
      <IcyProvider apiKey={NFT_API_KEY}>
        ...
      </IcyProvider>
  );
}
```

Once done, just use any hook anywhere in your application.

```typescript
import { useWalletNFTs } from '@quicknode/icy-nft-hooks';

function WalletComponent({ ensName }: { ensName: string }) {
    const { nfts } = useWalletNFTs({ ensName });

    return (
        <h1>{ensName}</h1>
        <ul>
            {nfts.map((nft) => (
                <li>
                    <p>{nft.contract.symbol}#{nft.tokenId}</p>
                    <img src={nft.images[0].url} />
                </li>
            )}
        </ul>
    )
}

```
#### API Reference

##### Shared types

```ts
export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface PaginationArgs {
  first?: number;
  after?: string;
}
```

##### useWalletNFTs

```ts
  // Example
  const { nfts, loading, isSearchValid } = useWalletNFTs({
      address: '0x....',
      ensName: 'vitalk.eth',
  });
```

###### args:

- `args: Args`
  ```ts
    interface WalletNFTsQueryAddressVariables extends PaginationArgs {
      address: string;
    }

    interface WalletNFTsQueryENSVariables extends PaginationArgs {
      ensName: string;
    }

    export type WalletNFTsQueryVariables =
      | WalletNFTsQueryAddressVariables
      | WalletNFTsQueryENSVariables;
  ```

###### returns:

- `nfts: NFT[]` The list of NFTs belonging to a given wallet
    ```ts
      interface NFT {
        tokenId: string;
        contract: {
          address: string;
          symbol: string;
          name: string;
        };
        images: {
          url: string;
        }[];
      }
    ```

- `loading: boolean` The loading state of the query
- `isSearchValid: boolean` Returns true if a valid 42 char ethereum address or a valid ENS name is provided. Query will skip unless this field is true in order to preserve rate limits.
- `pageInfo: PageInfo` Used for pagination. Type declared above.


##### useTrendingCollections

```ts
  // Example
  const { collections, pageInfo } = useTrendingCollections({
    orderBy: 'SALES',
    orderDirection: 'DESC',
    timePeriod: TrendingCollectionsTimePeriod.ONE_HOUR,
    first: 5,
    after: cursor
  });
```

###### args:

- `args: Args`
  ```ts
    export interface TrendingCollectionsQueryVariables extends PaginationArgs {
      orderBy: 'SALES' | 'AVERAGE' | 'VOLUME';
      orderDirection: 'DESC' | 'ASC';
      timePeriod?: TrendingCollectionsTimePeriod;
    }

    export enum TrendingCollectionsTimePeriod {
      ONE_HOUR = 'ONE_HOUR',
      TWELVE_HOURS = 'TWELVE_HOURS',
      ONE_DAY = 'ONE_DAY',
      SEVEN_DAYS = 'SEVEN_DAYS'
    }
  ```

###### returns:

- `collections: Collection[]` The list of NFTs belonging to a given wallet
    ```ts
      export interface Collection {
        address: string;
        name: string;
        stats: {
          totalSales: number;
          average: number;
          ceiling: number;
          floor: number;
          volume: number;
        };
        symbol: number;
      }
    ```

- `loading: boolean` The loading state of the query
- `pageInfo: PageInfo` Used for pagination. Type declared above.

##### useNFTOwner

```ts
  // Example
  const { owner, loading } = useNFTOwner({
    ensName: 'mevcollector.eth',
  });
```

###### args:

- `args: Args`
  ```ts
    interface Args {
      contractAddress: string;
      tokenId: string;
    }
  ```
###### returns:

- `owner: Owner | null` The list of NFTs belonging to a given wallet
    ```ts
      interface Owner {
        address: string;
        ensName: string | null;
      }
    ```

- `loading: boolean` The loading state of the query

##### useCollection

```ts
  // Example
  const { collections, pageInfo } = useCollection({
    contractAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    includeStats: true,
  });
```

###### args:

- `args: Args`
  ```ts
    interface WithStatsArgs {
      address: string;
      includeStats: true;
    }

    interface WithoutStatsArgs {
      address: string;
      includeStats?: false;
    }

    type Args = WithStatsArgs | WithoutStatsArgs;
  ```
###### returns:

- `collection: Collection | null` The list of NFTs belonging to a given wallet
    ```ts
        export interface Collection {
          address: string;
          name: string;
          symbol: string;
          unsafeOpenseaBannerImageUrl: string | null;
          unsafeOpenseaImageUrl: string | null;
          unsafeOpenseaSlug: string | null;
        }

        export interface CollectionWithStats extends Collection {
          stats: {
          average: number | null;
          ceiling: number | null;
          floor: number | null;
          totalSales: number;
          volume: number;
          };
        }
    ```

- `loading: boolean` The loading state of the query

## Deploying
1. Update version in library package.json file 
1. Run tests
1. [Login to npmjs.com](https://docs.npmjs.com/cli/v8/commands/npm-adduser)
1. `yarn pub:lib:nft:hooks`

### scripting shorthand

```bash
yarn build:lib:nft:hooks
```
```bash
yarn serve:app:nft:hooks
```
