import ConnectWalletButton from './ConnectWalletButton';
import styled from 'styled-components';
import { TextBox, BoldText, RegularText } from './sharedStyles';
import { WALLET_PROVIDERS } from './types';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface ConnectWalletProps {
  connectWallet: () => void;
  closeModal: () => void;
  waitingForConnectWallet: boolean;
  setWalletProvider: (value: WALLET_PROVIDERS) => void;
}

function ConnectWallet({
  connectWallet,
  closeModal,
  waitingForConnectWallet,
  setWalletProvider,
}: ConnectWalletProps) {
  if ((window as any).ethereum) {
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
          />
          <ConnectWalletButton
            walletName={WALLET_PROVIDERS.METAMASK}
            setWalletProvider={setWalletProvider}
            connectWallet={connectWallet}
            text={'MetaMask'}
          />
        </ButtonGroup>
        {waitingForConnectWallet && <p>Waiting for wallet connection...</p>}
      </>
    );
  } else {
    return (
      <>
        <strong>Connect Wallet</strong>
        <div>
          Please install a wallet to continue. We recommend{' '}
          <a href="https://www.coinbase.com/wallet">Coinbase Wallet</a>.
        </div>
        <button onClick={closeModal}>close</button>
      </>
    );
  }
}

export default ConnectWallet;
