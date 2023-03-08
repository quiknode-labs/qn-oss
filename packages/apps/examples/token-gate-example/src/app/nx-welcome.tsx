import GatedContent from './GatedContent';
import { TokenGate } from '../../../../../libs/ui/token-gate/src';

export function NxWelcome() {
  return (
    <>
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
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
