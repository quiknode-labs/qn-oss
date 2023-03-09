import ConnectWalletButton from './ConnectWalletButton';
import styled from 'styled-components';
import CoinbaseWalletIcon from './CoinbaseWalletIcon';

interface ConnectWalletProps {
  connectWallet: () => void;
  closeModal: () => void;
  waitingForConnectWallet: boolean;
  connectToWalletConnect: () => void;
  walletConnectProjectId: string | undefined;
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BoldText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;
const RegularText = styled.div`
  // TODO: figure out why this color is not working
  color: '#58626D';
  font-size: 14px;
  font-weight: 300;
`;

function ConnectWallet({
  connectWallet,
  closeModal,
  waitingForConnectWallet,
  connectToWalletConnect,
  walletConnectProjectId,
}: ConnectWalletProps) {
  if ((window as any).ethereum) {
    return (
      <>
        <TextBox>
          <BoldText>Connect your wallet to continue</BoldText>
          <RegularText>
            Don't have a wallet yet?{' '}
            <a href="https://www.coinbase.com/wallet" target="_blank">
              Create a wallet
            </a>{' '}
            to continue
          </RegularText>
        </TextBox>
        <ButtonGroup>
          <ConnectWalletButton
            connectWallet={connectWallet}
            text={'Coinbase Wallet'}
            Icon={CoinbaseWalletIcon}
          />
          <ConnectWalletButton
            connectWallet={connectWallet}
            text={'Coinbase Wallet'}
            Icon={CoinbaseWalletIcon}
          />
          <ConnectWalletButton
            connectWallet={connectWallet}
            text={'Coinbase Wallet'}
            Icon={CoinbaseWalletIcon}
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
