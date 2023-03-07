import { useState } from 'react';
import Modal from 'react-modal';

interface VerificationModalProps {
  isOpen: boolean;
}

function VerificationModal({ isOpen }: VerificationModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      //style={customStyles}
      //contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>Something is happening!</form>
    </Modal>
  );
}

export default VerificationModal;
