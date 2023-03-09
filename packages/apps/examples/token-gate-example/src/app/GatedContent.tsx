import { Link } from 'react-router-dom';
import { useTokenGate } from '@quicknode/token-gate';

function GatedContent() {
  const isVerified = useTokenGate();

  return (
    <div className="hero-text">
      {isVerified ? (
        <div>
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
        </div>
      ) : (
        <div>Only Loopy Donut hodlers can view what is hidden here</div>
      )}
    </div>
  );
}

export default GatedContent;
