import styled from 'styled-components';

interface ConnectWalletButtonProps {
  connectWallet: () => void;
  text: string;
}

function ConnectWalletButton({
  connectWallet,
  text,
}: ConnectWalletButtonProps) {
  const WalletButton = styled.button`
    gap: 12px;
    width: 80%;
    height: auto;
    background: #ffffff;
    border: 1px solid rgba(16, 21, 27, 0.12);
    border-radius: 8px;
    text-align: center;
    margin: 0.5em auto;
    cursor: pointer;
  `;

  const WalletButtonText = styled.div`
    margin: 0.5em auto;
    font-size: 20px;
    line-height: 24px;
  `;

  return (
    <WalletButton onClick={connectWallet}>
      <WalletButtonText>{text}</WalletButtonText>
    </WalletButton>
  );
}

export default ConnectWalletButton;
