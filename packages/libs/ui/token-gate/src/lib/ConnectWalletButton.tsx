import styled from 'styled-components';
import ArrowRightIcon from './ArrowRightIcon';
interface ConnectWalletButtonProps {
  connectWallet: () => void;
  text: string;
  Icon: any;
}

function ConnectWalletButton({
  connectWallet,
  text,
  Icon,
}: ConnectWalletButtonProps) {
  const WalletButton = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: auto;
    background: #ffffff;
    border: 1px solid rgba(16, 21, 27, 0.12);
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    padding: 12px 16px;
    &:hover {
      background: rgba(16, 21, 27, 0.06);
    }
  `;

  const IconContainer = styled.div`
    background: #ffffff;
    border: 1px solid rgba(16, 21, 27, 0.06);
    box-shadow: 0px 4px 32px rgba(16, 21, 27, 0.05),
      0px 4px 8px rgba(16, 21, 27, 0.05), 0px 1px 3px rgba(16, 21, 27, 0.05);
    height: 24px;
    width: 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 24px;
    max-height: 24px;
  `;

  const WalletButtonText = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  `;

  const ArrowRightContainer = styled.div`
    margin-left: auto;
  `;

  return (
    <WalletButton onClick={connectWallet}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <WalletButtonText>{text}</WalletButtonText>
      <ArrowRightContainer>
        <ArrowRightIcon />
      </ArrowRightContainer>
    </WalletButton>
  );
}

export default ConnectWalletButton;
