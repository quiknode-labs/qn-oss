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
  connectToWalletConnect: () => void;
  walletConnectProjectId: string | undefined;
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
  connectToWalletConnect,
  walletConnectProjectId,
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
      {...{
        walletConnectProjectId,
        connectWallet,
        connectToWalletConnect,
        closeModal,
        waitingForConnectWallet,
      }}
    />
  );
}

export default ModalBody;
