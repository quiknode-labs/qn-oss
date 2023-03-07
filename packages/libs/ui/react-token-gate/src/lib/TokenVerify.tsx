import { useState } from 'react';
import { createGlobalstate, useGlobalState } from 'state-pool';
import VerificationModal from './VerificationModal';

export interface TokenGateProps {
  buttonPrompt: string;
}

const verification = createGlobalstate<boolean>(false);

export function TokenGate({ buttonPrompt }: TokenGateProps) {
  const [_verified, setVerified] = useGlobalState<boolean>(verification);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function processVerification() {
    setModalIsOpen(true);
    cacheValidation();
  }

  function cacheValidation() {
    console.log('HERHE');
    // DO THE VALIDATION HERE
    setVerified(validateWallet());

    // Replace with address
  }

  function validateWallet() {
    return true;
  }

  return (
    <>
      <VerificationModal isOpen={modalIsOpen} />
      <button onClick={() => processVerification()}>{buttonPrompt}</button>
    </>
  );
}

export function useTokenGate(): boolean {
  const [verified] = useGlobalState<boolean>(verification);

  return verified;
}
