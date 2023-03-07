import { TokenGate } from '../../../../../libs/ui/react-token-gate/src';

function GatedContent({ isVerified }: { isVerified: any }) {
  if (isVerified) {
    return <h1>Verified</h1>;
  } else {
    return <TokenGate buttonPrompt={'Verify Ownership'} />;
  }
}

export default GatedContent;
