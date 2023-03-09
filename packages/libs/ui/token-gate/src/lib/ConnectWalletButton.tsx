import styled, { css } from 'styled-components';
import ArrowRightIcon from './icons/ArrowRightIcon';
import CoinbaseWalletIcon from './icons/CoinbaseWalletIcon';
import MetaMaskIcon from './icons/MetaMaskIcon';
import { WALLET_PROVIDERS } from './types';
interface ConnectWalletButtonProps {
  walletName: WALLET_PROVIDERS;
  connectWallet?: () => void;
  setWalletProvider?: (value: WALLET_PROVIDERS) => void;
  text: string;
  RightIcon?: any;
  hoverable?: boolean;
}

type WalletButtonProps = {
  hoverable?: boolean;
};

const WalletButton = styled.button<WalletButtonProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid rgba(16, 21, 27, 0.12);
  border-radius: 8px;
  text-align: center;
  padding: 12px 16px;
  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        background: rgba(16, 21, 27, 0.06);
      }
      cursor: pointer;
    `}
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
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding: auto;
`;

function ConnectWalletButton({
  walletName,
  setWalletProvider,
  connectWallet = () => null,
  text,
  RightIcon = ArrowRightIcon,
  hoverable = true,
}: ConnectWalletButtonProps) {
  function onButtonClick() {
    if (setWalletProvider) {
      setWalletProvider(walletName);
    }
    connectWallet();
  }

  function getIcon(wallet: WALLET_PROVIDERS) {
    switch (wallet) {
      case WALLET_PROVIDERS.METAMASK:
        return MetaMaskIcon;
      case WALLET_PROVIDERS.COINBASE:
        return CoinbaseWalletIcon;
      default:
        return CoinbaseWalletIcon;
    }
  }
  const Icon = getIcon(walletName);

  return (
    <WalletButton onClick={onButtonClick} hoverable={hoverable}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <WalletButtonText>{text}</WalletButtonText>
      <ArrowRightContainer>
        <RightIcon />
      </ArrowRightContainer>
    </WalletButton>
  );
}

export default ConnectWalletButton;
