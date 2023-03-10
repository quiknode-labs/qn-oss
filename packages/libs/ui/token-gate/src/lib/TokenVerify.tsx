import { useEffect, useState } from 'react';
import VerificationModal from './VerificationModal';
import VerifyButton from './VerifyButton';
import { createGlobalState } from 'react-hooks-global-state';
import { OWNERSHIP_STATUS } from './types';
import { ethers, JsonRpcProvider } from 'ethers';

export interface TokenGateProps {
  buttonPrompt?: string;
  appElement: string;
  quicknodeUrl: string;
  nftContractAddress: string;
}

// Using this global state to persist the verification state between page navigation
// TODO: Can we do this with a localstorage or a cookie in a secure way?
// that can't be faked by non-nft holders with an expiration?
// TODO: Can we use redux here?
const initialState = { fullyVerified: false, isModalOpen: false };
const { useGlobalState } = createGlobalState<{
  fullyVerified: boolean;
  isModalOpen: boolean;
}>(initialState);

export function TokenGate({
  buttonPrompt = 'Verify NFT Ownership',
  appElement,
  nftContractAddress,
  quicknodeUrl,
}: TokenGateProps) {
  const browserProvider = new ethers.BrowserProvider((window as any).ethereum);
  const qnProvider = new JsonRpcProvider(quicknodeUrl);
  // fullyVerified is for when they have fully gone through the verification process and own the NFT
  // This is meant to be used by the hook to determine if they should be gated or not
  const [fullyVerified, setFullyVerified] = useGlobalState('fullyVerified');
  // ownershipStatus is for if the various states of checking ownership, used internally to show
  // the correct messages in the modal
  const [ownershipStatus, setOwnershipStatus] = useState<OWNERSHIP_STATUS>(
    OWNERSHIP_STATUS.NULL
  );
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [waitingForConnectWallet, setWaitingForConnectWallet] =
    useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
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

  async function connectWallet() {
    // Should be blocked from getting here by not being able to click the button if wallet not installed
    if (!(window as any).ethereum) {
      return false;
    }

    setWaitingForConnectWallet(true);
    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts?.length > 0) {
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setWaitingForConnectWallet(false);
    }

    return true;
  }

  async function validateWallet() {
    const signer = await browserProvider.getSigner();
    // TODO: make message customizable
    const message =
      'This message is used to verify your wallet ownership.\n\nSigning this message will not make any transactions.';
    await signer.signMessage(message);
    // TODO: Store the hashed message, and re-verify hash instead of having to ask wallet to sign each time
    // https://github.com/ethers-io/ethers.js/issues/447
    setOwnershipStatus(OWNERSHIP_STATUS.SIGNED);
  }

  async function checkOwnership() {
    try {
      const verified = await checkWalletForNFT();
      if (verified) {
        setOwnershipStatus(OWNERSHIP_STATUS.VERIFIED);
        setFullyVerified(true);
      } else {
        setOwnershipStatus(OWNERSHIP_STATUS.DENIED);
        setFullyVerified(false);
      }
    } catch (e) {
      console.error(e);
      // TODO: make an error handler status
      setOwnershipStatus(OWNERSHIP_STATUS.DENIED);
    }
  }

  async function checkWalletForNFT(): Promise<boolean> {
    const data = await qnProvider.send('qn_fetchNFTs', [
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        wallet: walletAddress.toLowerCase(),
        contracts: [nftContractAddress.toLowerCase()],
      },
    ]);
    const { assets: walletAssets } = data;

    if (walletAssets.length > 0) {
      const { collectionAddress } = walletAssets[0];
      if (
        collectionAddress.toLowerCase() === nftContractAddress.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
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
        connectWallet={connectWallet}
        waitingForConnectWallet={waitingForConnectWallet}
        walletConnected={walletConnected}
        walletAddress={walletAddress || ''}
      />
      {!fullyVerified && (
        <VerifyButton
          startVerification={startVerification}
          buttonPrompt={buttonPrompt}
        />
      )}
    </>
  );
}

export function useTokenGate(): boolean {
  const [fullyVerified] = useGlobalState('fullyVerified');

  return fullyVerified;
}
