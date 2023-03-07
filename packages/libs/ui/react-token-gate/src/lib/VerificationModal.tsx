import { useState } from 'react';
import Modal from 'react-modal';
import ModalBody from './ModalBody';
import { OWNERSHIP_STATUS } from './types';
import { sleep } from './utils';

interface VerificationModalProps {
  isOpen: boolean;
  appElement: string;
  closeModal: () => void;
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  checkOwnership: () => Promise<void>;
}

function VerificationModal({
  isOpen,
  appElement,
  closeModal,
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
}: VerificationModalProps) {
  // Sets the root app element for the modal
  // see https://reactcommunity.org/react-modal/accessibility/
  Modal.setAppElement(appElement);

  const [walletConnected, setWalletConnected] = useState(false);
  const [waitingForConnectWallet, setWaitingForConnectWallet] = useState(false);

  async function connectWallet() {
    // Connect wallet here

    setWaitingForConnectWallet(true);
    try {
      await sleep();
    } catch (e) {
      console.error(e);
    } finally {
      setWaitingForConnectWallet(false);
      setWalletConnected(true);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //style={customStyles}
      contentLabel="token-gating-modal"
    >
      <button onClick={closeModal}>x</button>
      <ModalBody
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
