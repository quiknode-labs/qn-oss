import { Link } from 'react-router-dom';
import {
  TokenGate,
  useTokenGate,
} from '../../../../../libs/ui/react-token-gate/src';

function GatedContent() {
  const isVerified = useTokenGate();

  return (
    <>
      {isVerified ? (
        <>
          <div>✅ Verified.</div>
          <br />
          <div>
            ❗️ This is the content you were missing out on! But you as a Loopy
            Donut hodler get to see it!
          </div>
          <br />
          <div>
            🤯 Amazing! You verified that you own a Loopy Donut on-chain and now
            you can see this here content.
          </div>
          <br />
          <div>🌎 What an amazing world we live in!</div>
          <br />
          <div>
            😢 Imagine not having a loopy donut and missing out on this.
          </div>
          <br />
          <div>
            🔐 Now try to navigate to the
            <Link to="/loopypage"> Loopy Donut fan club protected page, </Link>
            which you can only see because you are a verified Loopy Donut owner!
          </div>
          <br />
        </>
      ) : (
        <div>Only Loopy Donut hodlers can view what is hidden here</div>
      )}
      <TokenGate
        buttonPrompt={'Verify NFT Ownership'}
        appElement={'#root'}
        quicknodeUrl={process.env['NX_QUICKNODE_URL'] as string}
        nftContractAddress={'0x2106C00Ac7dA0A3430aE667879139E832307AeAa'}
      />
    </>
  );
}

export default GatedContent;
