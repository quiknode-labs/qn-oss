import { useEffect } from 'react';
import VerificationModal from './VerificationModal';
import { createGlobalState } from 'react-hooks-global-state';

export interface TokenGateProps {
  buttonPrompt: string;
  appElement: string;
}

// Using this global state to persist the verification state between page navigation
// TODO: Can we do this with a localstorage or a cookie in a secure way
// that can't be faked by non-nft holders with an expiration?
const initialState = { verified: false, isModalOpen: false };
const { useGlobalState } = createGlobalState<{
  verified: boolean;
  isModalOpen: boolean;
}>(initialState);

export function TokenGate({ buttonPrompt, appElement }: TokenGateProps) {
  const [verified, setVerified] = useGlobalState('verified');
  const [modalIsOpen, setModalIsOpen] = useGlobalState('isModalOpen');

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function processVerification() {
    console.log('Inside processVerification()');
    openModal();
    console.log(modalIsOpen);
  }

  function validateWallet() {
    return true;
  }

  useEffect(() => {
    // actually verify here
    console.log('in useEffect', modalIsOpen);
    if (modalIsOpen) {
      const validated = validateWallet();
      setVerified(validated);
    }
  }, [modalIsOpen]);

  console.log('in react body', modalIsOpen);
  return (
    <>
      <VerificationModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        appElement={appElement}
      />
      {!verified && (
        <button onClick={processVerification}>{buttonPrompt}</button>
      )}
    </>
  );
}

export function useTokenGate(): boolean {
  const [verified] = useGlobalState('verified');
  console.log(verified);

  return verified;
}
