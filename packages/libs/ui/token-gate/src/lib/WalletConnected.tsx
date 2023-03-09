import { useEffect, useState } from 'react';
import { OWNERSHIP_STATUS, WALLET_PROVIDERS } from './types';
import SignatureStatus from './SignatureStatus';

interface WalletConnectedProps {
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  closeModal: () => void;
  checkOwnership: () => Promise<void>;
  walletProvider: WALLET_PROVIDERS;
}

function WalletConnected({
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
  walletProvider,
}: WalletConnectedProps) {
  const [loadingSignature, setLoadingSignature] = useState(false);
  const [loadingOwnership, setLoadingOwnership] = useState(false);

  useEffect(() => {
    if (ownershipStatus === OWNERSHIP_STATUS.NULL && !loadingSignature) {
      setOwnershipStatus(OWNERSHIP_STATUS.AWAITING);
      (async () => {
        setLoadingSignature(true);
        try {
          await validateWallet();
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingSignature(false);
        }
      })();
    }
  }, [ownershipStatus, loadingSignature]);

  useEffect(() => {
    if (ownershipStatus === OWNERSHIP_STATUS.SIGNED && !loadingOwnership) {
      (async () => {
        setLoadingOwnership(true);
        try {
          await checkOwnership();
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingOwnership(false);
        }
      })();
    }
  }, [ownershipStatus, loadingOwnership]);

  if (ownershipStatus === OWNERSHIP_STATUS.NULL) {
    return <>Loading...</>;
  }
  if (ownershipStatus === OWNERSHIP_STATUS.AWAITING) {
    return (
      <SignatureStatus
        walletProvider={walletProvider}
        text={'Awaiting signature...'}
      />
    );
  }

  if (ownershipStatus === OWNERSHIP_STATUS.SIGNED) {
    return (
      <SignatureStatus
        walletProvider={walletProvider}
        text={'Verifying ownership status...'}
      />
    );
  }

  if (ownershipStatus === OWNERSHIP_STATUS.VERIFIED) {
    return <>Verified! You have access to this content</>;
  }

  if (ownershipStatus === OWNERSHIP_STATUS.DENIED) {
    return (
      <>
        Denied! You do not have access to the required NFT to view this content
      </>
    );
  }

  // Should never hit here
  return <>Something went wrong!</>;
}

export default WalletConnected;
