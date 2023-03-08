import ConnectWalletButton from './ConnectWalletButton';
//import CoinbaseWalletIcon from './assets/coinbase-wallet.svg';

interface ConnectWalletProps {
  connectWallet: () => void;
  closeModal: () => void;
  waitingForConnectWallet: boolean;
  connectToWalletConnect: () => void;
  walletConnectProjectId: string | undefined;
}

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
        <strong>Connect your wallet to continue</strong>
        <div>
          Don't have a wallet yet?{' '}
          <a href="https://www.coinbase.com/wallet" target="_blank">
            Create a wallet
          </a>{' '}
          to continue
        </div>
        <ConnectWalletButton
          connectWallet={connectWallet}
          text={'Coinbase Wallet'}
        />
        <ConnectWalletButton connectWallet={connectWallet} text={'Metamask'} />
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
