import { useState } from 'react';
import VerificationModal from './VerificationModal';
import { createGlobalState } from 'react-hooks-global-state';
import { sleep } from './utils';
import { OWNERSHIP_STATUS } from './types';
import { JsonRpcProvider } from 'ethers';

export interface TokenGateProps {
  buttonPrompt: string;
  appElement: string;
  quicknodeUrl: string;
}

// Using this global state to persist the verification state between page navigation
// TODO: Can we do this with a localstorage or a cookie in a secure way?
// TODO: Can we use redux here?
// that can't be faked by non-nft holders with an expiration?
const initialState = { fullyVerified: false, isModalOpen: false };
const { useGlobalState } = createGlobalState<{
  fullyVerified: boolean;
  isModalOpen: boolean;
}>(initialState);

export function TokenGate({
  buttonPrompt,
  appElement,
  quicknodeUrl,
}: TokenGateProps) {
  const ethersProvider = new JsonRpcProvider(quicknodeUrl);
  // fullyVerified is for when they have fully gone through the verification process and own the NFT
  // This is meant to be used by the hook to determine if they should be gated or not
  const [fullyVerified, setFullyVerified] = useGlobalState('fullyVerified');
  // ownershipStatus is for if the various states of checking ownership, used internally to show
  // the correct messages in the modal
  const [ownershipStatus, setOwnershipStatus] = useState<OWNERSHIP_STATUS>(
    OWNERSHIP_STATUS.NULL
  );
  const [modalIsOpen, setModalIsOpen] = useGlobalState('isModalOpen');

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function startVerification() {
    openModal();
  }

  async function validateWallet() {
    const message =
      'This message was sent by URL to verify your wallet ownership.\n\nSigning this message will not make any transactions.';

    const signer = ethersProvider.getSigner();
    const signed = await signer.signMessage(message);
    if (signed) {
      setOwnershipStatus(OWNERSHIP_STATUS.SIGNED);
      checkOwnership();
    }
  }

  async function checkOwnership() {
    // actually check ownership here
    console.log('checking ownership');
    await sleep();
    setOwnershipStatus(OWNERSHIP_STATUS.VERIFIED);
    setFullyVerified(true);
  }

  return (
    <>
      <VerificationModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        appElement={appElement}
        validateWallet={validateWallet}
        checkOwnership={checkOwnership}
        ownershipStatus={ownershipStatus}
        setOwnershipStatus={setOwnershipStatus}
      />
      {!fullyVerified && (
        <button onClick={startVerification}>{buttonPrompt}</button>
      )}
    </>
  );
}

export function useTokenGate(): boolean {
  const [fullyVerified] = useGlobalState('fullyVerified');

  return fullyVerified;
}
