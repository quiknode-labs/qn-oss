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
  checkOwnership: () => Promise<void>;
  waitingForConnectWallet: boolean;
}

function ModalBody({
  walletConnected,
  connectWallet,
  closeModal,
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
  waitingForConnectWallet,
}: ModalBodyProps) {
  if (walletConnected) {
    return (
      <WalletConnected
        {...{
          validateWallet,
          ownershipStatus,
          setOwnershipStatus,
          closeModal,
          checkOwnership,
        }}
      />
    );
  }

  return (
    <ConnectWallet
      {...{ connectWallet, closeModal, waitingForConnectWallet }}
    />
  );
}

export default ModalBody;
