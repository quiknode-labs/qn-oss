

# QuickNode OSS Repository

## What is this 

### Nx workspace
#### libs & apps

### scripting shorthand

```bash
yarn build:lib:nft:hooks
```
```bash
yarn serve:app:nft:hooks
```

## Packages

### nft-react-hooks

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

##### useWalletNFTs

```ts
  const { nfts, loading, isSearchValid } = useWalletNFTs({
      address: '0x....',
      ensName: 'vitalk.eth',
  });
```


- `args: Args`
  ```ts
    interface AddressArgs {
      address: string;
    }

    interface EnsArgs {
      ensName: string;
    }

    type Args = AddressArgs | EnsArgs;
  ```

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


## Deploying
1. Update version in library package.json file 
1. Run tests
1. [Login to npmjs.com](https://docs.npmjs.com/cli/v8/commands/npm-adduser)
1. `yarn pub:lib:nft:hooks`

