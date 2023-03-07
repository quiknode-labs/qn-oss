import {
  TokenGate,
  useTokenGate,
} from '../../../../../libs/ui/react-token-gate/src';

function GatedContent() {
  const isVerified = useTokenGate();

  return (
    <>
      {isVerified && <div>Verified</div>}
      <TokenGate buttonPrompt={'Verify Ownership'} appElement={'#root'} />
    </>
  );
}

export default GatedContent;
