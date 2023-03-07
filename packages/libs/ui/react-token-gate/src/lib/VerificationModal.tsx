import Modal from 'react-modal';

interface VerificationModalProps {
  isOpen: boolean;
  appElement: any;
  closeModal: () => void;
}

function VerificationModal({
  isOpen,
  appElement,
  closeModal,
}: VerificationModalProps) {
  Modal.setAppElement(appElement);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //style={customStyles}
      //contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <div>I am a modal</div>
      <form>Something is happening!</form>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
}

export default VerificationModal;
