import { useEffect, useState } from 'react';
import { OWNERSHIP_STATUS } from './types';

interface WalletConnectedProps {
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
}

function WalletConnected({
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
}: WalletConnectedProps) {
  useEffect(() => {
    if (ownershipStatus === OWNERSHIP_STATUS.NULL) {
      setOwnershipStatus(OWNERSHIP_STATUS.AWAITING);
      (async () => {
        validateWallet();
      })();
    }
  }, []);

  if (ownershipStatus === OWNERSHIP_STATUS.NULL) {
    return <>Loading...</>;
  }
  if (ownershipStatus === OWNERSHIP_STATUS.AWAITING) {
    return <>Awaiting verification</>;
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
