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
    // Should be blocked from getting here by not being able to click the button if wallet not installed
    if (!(window as any).ethereum) {
      return false;
    }

    setWaitingForConnectWallet(true);
    try {
      // TODO: Can we check correct network and ask to switch if on incorrect one here?
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      setWalletConnected(true);
    } catch (e) {
      console.error(e);
    } finally {
      setWaitingForConnectWallet(false);
    }

    return true;
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
