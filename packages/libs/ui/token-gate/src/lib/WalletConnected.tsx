import { useEffect, useState } from 'react';
import { OWNERSHIP_STATUS, WALLET_PROVIDERS } from './types';
import SignatureStatus from './SignatureStatus';
import VerifiedStatus from './VerifiedStatus';
import { SizeMe } from 'react-sizeme';
import { BREAKPOINT } from './utils';

interface WalletConnectedProps {
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  closeModal: () => void;
  checkOwnership: () => Promise<void>;
  walletProvider: WALLET_PROVIDERS;
  walletAddress: string;
}

function WalletConnected({
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
  walletProvider,
  closeModal,
  walletAddress,
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
      <SizeMe>
        {({ size: { width } }) => (
          <SignatureStatus
            walletProvider={walletProvider}
            text={
              (width || 0) > BREAKPOINT
                ? 'Awaiting signature...'
                : 'Awaiting...'
            }
          />
        )}
      </SizeMe>
    );
  }

  if (ownershipStatus === OWNERSHIP_STATUS.SIGNED) {
    return (
      <SizeMe>
        {({ size: { width } }) => (
          <SignatureStatus
            walletProvider={walletProvider}
            text={
              (width || 0) > BREAKPOINT
                ? 'Verifying ownership status...'
                : 'Verifying...'
            }
          />
        )}
      </SizeMe>
    );
  }

  if (ownershipStatus === OWNERSHIP_STATUS.VERIFIED) {
    return (
      <VerifiedStatus
        walletAddress={walletAddress}
        walletProvider={walletProvider}
        closeModal={closeModal}
        verified={true}
      />
    );
  }

  if (ownershipStatus === OWNERSHIP_STATUS.DENIED) {
    return (
      <VerifiedStatus
        walletAddress={walletAddress}
        walletProvider={walletProvider}
        closeModal={closeModal}
        verified={false}
      />
    );
  }

  // Should never hit here
  return <>Something went wrong!</>;
}

export default WalletConnected;
