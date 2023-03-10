import ConnectWalletButton from './ConnectWalletButton';
import styled from 'styled-components';
import { TextBox, BoldText, RegularText } from './sharedStyles';
import { WALLET_PROVIDERS } from './types';
import ArrowRightIcon from './icons/ArrowRightIcon';
import Spinner from './icons/spinner';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface ConnectWalletProps {
  connectWallet: () => void;
  waitingForConnectWallet: boolean;
  setWalletProvider: (value: WALLET_PROVIDERS) => void;
  walletProvider: WALLET_PROVIDERS;
}

function ConnectWallet({
  connectWallet,
  waitingForConnectWallet,
  setWalletProvider,
  walletProvider,
}: ConnectWalletProps) {
  function getIcon(walletName: WALLET_PROVIDERS) {
    if (walletName === walletProvider && waitingForConnectWallet) {
      return Spinner;
    } else {
      return ArrowRightIcon;
    }
  }

  return (
    <>
      <TextBox>
        <BoldText>Connect your wallet to continue</BoldText>
        <RegularText>
          Don't have a wallet yet?{' '}
          <a
            style={{ color: '#58626d' }}
            href="https://www.coinbase.com/wallet"
            target="_blank"
            rel="noreferrer"
          >
            Create a wallet
          </a>{' '}
          to continue
        </RegularText>
      </TextBox>
      <ButtonGroup>
        <ConnectWalletButton
          walletName={WALLET_PROVIDERS.COINBASE}
          setWalletProvider={setWalletProvider}
          connectWallet={connectWallet}
          text={'Coinbase Wallet'}
          RightIcon={getIcon(WALLET_PROVIDERS.COINBASE)}
        />
        <ConnectWalletButton
          walletName={WALLET_PROVIDERS.METAMASK}
          setWalletProvider={setWalletProvider}
          connectWallet={connectWallet}
          text={'MetaMask'}
          RightIcon={getIcon(WALLET_PROVIDERS.METAMASK)}
        />
      </ButtonGroup>
    </>
  );
}

export default ConnectWallet;
