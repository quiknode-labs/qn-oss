import WalletConnected from './WalletConnected';
import ConnectWallet from './ConnectWallet';
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
  if (walletConnected) {
    return (
      <WalletConnected
        {...{
          validateWallet,
          ownershipStatus,
          setOwnershipStatus,
        }}
      />
    );
  }

  return <ConnectWallet {...{ connectWallet, closeModal }} />;
}

export default ModalBody;
