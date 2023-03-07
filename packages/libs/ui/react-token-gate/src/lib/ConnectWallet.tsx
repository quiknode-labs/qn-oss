interface ConnectWalletProps {
  connectWallet: () => void;
  closeModal: () => void;
  waitingForConnectWallet: boolean;
}

function ConnectWallet({
  connectWallet,
  closeModal,
  waitingForConnectWallet,
}: ConnectWalletProps) {
  return (
    <>
      <h2>Connect Wallet</h2>
      <button onClick={connectWallet}>Coinbase Wallet</button>
      <button onClick={connectWallet}>Wallet Connect</button>
      <button onClick={connectWallet}>MetaMask</button>
      <button onClick={closeModal}>close</button>
      {waitingForConnectWallet && <p>Waiting for wallet connection...</p>}
    </>
  );
}

export default ConnectWallet;
