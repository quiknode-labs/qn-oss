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
        <h2>Connect Wallet</h2>
        <button onClick={connectWallet}>Coinbase Wallet</button>
        <button onClick={connectWallet}>MetaMask</button>
        {false &&
          walletConnectProjectId && ( // TODO: add wallet connect
            <button onClick={connectToWalletConnect}>Wallet Connect</button>
          )}
        <button onClick={closeModal}>close</button>
        {waitingForConnectWallet && <p>Waiting for wallet connection...</p>}
      </>
    );
  } else {
    return (
      <>
        <h2>Connect Wallet</h2>
        <p>
          Please install a wallet to continue. We recommend{' '}
          <a href="https://www.coinbase.com/wallet">Coinbase Wallet</a>.
        </p>
        <button onClick={closeModal}>close</button>
      </>
    );
  }
}

export default ConnectWallet;
