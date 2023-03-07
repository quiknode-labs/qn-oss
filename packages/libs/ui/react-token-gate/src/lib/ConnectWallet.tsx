interface ConnectWalletProps {
  connectWallet: () => void;
  closeModal: () => void;
}

function ConnectWallet({ connectWallet, closeModal }: ConnectWalletProps) {
  return (
    <>
      <h2>Connect Wallet</h2>
      <button onClick={connectWallet}>Coinbase Wallet</button>
      <button onClick={connectWallet}>Wallet Connect</button>
      <button onClick={connectWallet}>MetaMask</button>
      <button onClick={closeModal}>close</button>
    </>
  );
}

export default ConnectWallet;
