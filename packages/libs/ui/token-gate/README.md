# Token Gate

A [React](https://reactjs.org/) library for conditionally showing parts of your application based on NFT ownership, using [QuickNode](https://www.quicknode.com/)'s [Token and NFT API v2 bundle](https://marketplace.quicknode.com/add-on/token-and-nft-api-v2-bundle).

## QuickStart

1. Sign up for an endpoint at https://www.quicknode.com/ and add the [Token and NFT API v2 bundle](https://marketplace.quicknode.com/add-on/token-and-nft-api-v2-bundle). Check [the official add-on page](https://marketplace.quicknode.com/add-on/token-and-nft-api-v2-bundle) for an up-to-date list of supported chains and networks.
1. Import the library

```javascript
import { TokenGate } from '@quicknode/token-gate';
```

1. Set up the token gate button with your QuickNode endpoint URL and NFT contract address

```jsx
<TokenGate
  buttonPrompt={'Verify NFT Ownership'} // What shows on the Verify button
  appElement={'#root'} // the root of your React application
  quicknodeUrl={'https://my-cool-name.mainnet.quiknode.pro/myauthtoken/'} // Your QN endpoint
  nftContractAddress={'0x2106C00Ac7dA0A3430aE667879139E832307AeAa'} // The NFT you would like to gate
/>
```

1. Use the hook anywhere in your application as a conditional anywhere in you application

```javascript
import { useTokenGate } from '@quicknode/token-gate';

const isVerified = useTokenGate();
```

## Examples

1. You can use this hook with [react-router](https://reactrouter.com/en/main) to gate routes in your application

```jsx
import { Navigate } from 'react-router-dom';
import { useTokenGate } from '@quicknode/token-gate';

const TokenGatedRoute = ({ children }: { children: any }) => {
  const isVerifed = useTokenGate();

  if (!isVerifed) {
    // Navigate back to the homepage
    return <Navigate to="/" replace />;
  }

  return children;
};

// Use the TokenGatedRoute in the Routes
<Routes>
  <Route
    path="/my-protected-page"
    element={
      <TokenGatedRoute>
        <MyProtectedContent />
      </TokenGatedRoute>
    }
  />
</Routes>;
```

## Caveats

This is a client-side library, meaning the "hidden" parts of your application will likely still be avaible in the source code of your application.

We would love to discuss a more comprehensive gating approach involving a backend library, feel free to file an issue in [our OSS repo](https://github.com/quiknode-labs/qn-oss/issues) if you would like to discuss a use-case.

## Contributing

Feel free to [file an issue](https://github.com/quiknode-labs/qn-oss/issues) with any bug reports or feature requests.
