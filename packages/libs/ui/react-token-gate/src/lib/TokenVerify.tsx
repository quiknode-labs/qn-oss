import { useState } from 'react';
import VerificationModal from './VerificationModal';
import { createGlobalState } from 'react-hooks-global-state';
import { sleep } from './utils';
import { OWNERSHIP_STATUS } from './types';

export interface TokenGateProps {
  buttonPrompt: string;
  appElement: string;
}

const hi = {
  id: 67,
  method: 'qn_verifyNFTsOwner',
  params: [
    {
      wallet: '0x91b51c173a4bdaa1a60e234fc3f705a16d228740',
      contracts: ['0x2106c00ac7da0a3430ae667879139e832307aeaa:3643'],
    },
  ],
};
// Using this global state to persist the verification state between page navigation
// TODO: Can we do this with a localstorage or a cookie in a secure way?
// TODO: Can we use redux here?
// that can't be faked by non-nft holders with an expiration?
const initialState = { fullyVerified: false, isModalOpen: false };
const { useGlobalState } = createGlobalState<{
  fullyVerified: boolean;
  isModalOpen: boolean;
}>(initialState);

export function TokenGate({ buttonPrompt, appElement }: TokenGateProps) {
  // fullyVerified is for when they have fully gone through the verification process and own the NFT
  // This is meant to be used by the hook to determine if they should be gated or not
  const [fullyVerified, setFullyVerified] = useGlobalState('fullyVerified');
  // ownershipStatus is for if they own the NFT or not during verification, used internally to show
  // the correct messages in the modal
  // awaiting = we haven't verified yet
  // verified = they own the NFT
  // denied = they don't own the NFT
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
    // actually ask for signature here
    console.log('validating wallet');
    await sleep();
    setOwnershipStatus(OWNERSHIP_STATUS.SIGNED);
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
