import Modal from 'react-modal';
import ModalContent from './ModalContent';
import { OWNERSHIP_STATUS } from './types';

interface VerificationModalProps {
  isOpen: boolean;
  appElement: string;
  closeModal: () => void;
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  checkOwnership: () => Promise<void>;
  connectWallet: () => void;
  walletConnected: boolean;
  waitingForConnectWallet: boolean;
  connectToWalletConnect: () => void;
  walletConnectProjectId: string | undefined;
}

function VerificationModal({
  isOpen,
  appElement,
  closeModal,
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
  connectWallet,
  walletConnected,
  waitingForConnectWallet,
  connectToWalletConnect,
  walletConnectProjectId,
}: VerificationModalProps) {
  // Sets the root app element for the modal
  // see https://reactcommunity.org/react-modal/accessibility/
  Modal.setAppElement(appElement);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '60%',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="token-gating-modal"
    >
      <ModalContent
        {...{
          connectWallet,
          closeModal,
          walletConnected,
          validateWallet,
          ownershipStatus,
          setOwnershipStatus,
          waitingForConnectWallet,
          checkOwnership,
          connectToWalletConnect,
          walletConnectProjectId,
        }}
      />
    </Modal>
  );
}

export default VerificationModal;
