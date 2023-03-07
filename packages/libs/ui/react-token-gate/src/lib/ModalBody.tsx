import WalletConnected from './WalletConnected';
import { OWNERSHIP_STATUS } from './types';

interface ModalBodyProps {
  walletConnected: boolean;
  connectWallet: () => void;
  closeModal: () => void;
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
}

function ModalBody({
  walletConnected,
  connectWallet,
  closeModal,
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
}: ModalBodyProps) {
  if (walletConnected)
    return (
      <WalletConnected
        {...{
          validateWallet,
          ownershipStatus,
          setOwnershipStatus,
        }}
      />
    );

  return (
    <>
      <h2>Connect Wallet</h2>
      <div>Connect your wallet here</div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={closeModal}>close</button>
    </>
  );
}

export default ModalBody;
