import styled from 'styled-components';
import ConnectWalletButton from './ConnectWalletButton';
import DeniedIcon from './icons/DeniedIcon';
import GreenCheckIcon from './icons/GreenCheckIcon';
import { TextBox, BoldText, RegularText } from './sharedStyles';
import { WALLET_PROVIDERS } from './types';

interface VerifiedStatusProps {
  walletProvider: WALLET_PROVIDERS;
  closeModal: () => void;
  verified: boolean;
  walletAddress: string;
}

const FinishButton = styled.button`
  background: #10151b;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 4px rgba(16, 21, 27, 0.05),
    0px 1px 3px rgba(16, 21, 27, 0.05);
  border-radius: 8px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 16px;
  cursor: pointer;
`;

function VerifiedStatus({
  walletProvider,
  closeModal,
  verified,
  walletAddress,
}: VerifiedStatusProps) {
  const topText = verified
    ? 'You can now access this page'
    : "You don't have access this page";
  const bodyText = verified
    ? 'Your NFT will give you exclusive access to content on this page.'
    : 'You need to own the required NFT to access this page.';
  return (
    <>
      <TextBox>
        <BoldText>{topText}</BoldText>
        <RegularText>{bodyText}</RegularText>
      </TextBox>
      <ConnectWalletButton
        walletName={walletProvider}
        text={walletAddress}
        RightIcon={verified ? GreenCheckIcon : DeniedIcon}
        hoverable={false}
      />
      <FinishButton onClick={closeModal}>
        {verified ? 'Finish' : 'Back'}
      </FinishButton>
    </>
  );
}

export default VerifiedStatus;
