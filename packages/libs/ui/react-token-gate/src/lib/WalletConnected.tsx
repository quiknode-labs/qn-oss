import { useEffect, useState } from 'react';
import { OWNERSHIP_STATUS } from './types';
import AwaitingSignature from './AwaitingSignature';

interface WalletConnectedProps {
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  closeModal: () => void;
  checkOwnership: () => Promise<void>;
}

function WalletConnected({
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  closeModal,
  checkOwnership,
}: WalletConnectedProps) {
  const [loadingOwnership, setLoadingOwnership] = useState(false);

  useEffect(() => {
    if (ownershipStatus === OWNERSHIP_STATUS.NULL) {
      setOwnershipStatus(OWNERSHIP_STATUS.AWAITING);
      (async () => {
        await validateWallet();
      })();
    }
  }, [ownershipStatus]);

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
  }, [ownershipStatus]);

  if (ownershipStatus === OWNERSHIP_STATUS.NULL) {
    return <>Loading...</>;
  }
  if (ownershipStatus === OWNERSHIP_STATUS.AWAITING) {
    return <AwaitingSignature closeModal={closeModal} />;
  }

  if (ownershipStatus === OWNERSHIP_STATUS.SIGNED) {
    return <>Checking status...</>;
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
