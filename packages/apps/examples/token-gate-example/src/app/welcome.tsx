import GatedContent from './GatedContent';
import { TokenGate } from '@quicknode/token-gate';

export function Welcome() {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome to Loopy Donuts Club 🍩
          </h1>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <GatedContent />
            <TokenGate
              buttonPrompt={'Verify NFT Ownership'}
              appElement={'#root'}
              quicknodeUrl={process.env['NX_QUICKNODE_URL'] as string}
              nftContractAddress={
                '0x2106C00Ac7dA0A3430aE667879139E832307AeAa'
                //'0x749c0e2BcF944D40dD4A64b58fca24b8Df23F8f3' //Polygon ethermail
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
