import GatedContent from './GatedContent';
import { TokenGate } from '../../../../../libs/ui/react-token-gate/src';

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
                walletConnectProjectId={'61d6b9e45ae61849a3609b09627b5dbc'} // Optional
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
