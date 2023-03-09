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
      width: '600px',
      border: '1px solid #D3D6DC',
      borderRadius: '16px',
      background: '#F8F8F8',
      padding: '0px',
      display: 'flex',
      justifyContent: 'space-between',
      filter:
        'drop-shadow(0px 4px 32px rgba(16, 21, 27, 0.05)) drop-shadow(0px 4px 8px rgba(16, 21, 27, 0.05)) drop-shadow(0px 1px 3px rgba(16, 21, 27, 0.05))',
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
        }}
      />
    </Modal>
  );
}

export default VerificationModal;
