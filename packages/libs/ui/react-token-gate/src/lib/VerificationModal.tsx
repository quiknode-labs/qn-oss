import { useState } from 'react';
import Modal from 'react-modal';
import ModalBody from './ModalBody';
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
