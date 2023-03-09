import WalletConnected from './WalletConnected';
import ConnectWallet from './ConnectWallet';
import { OWNERSHIP_STATUS } from './types';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import styled from 'styled-components';

interface ModalContentProps {
  walletConnected: boolean;
  connectWallet: () => void;
  closeModal: () => void;
  validateWallet: () => Promise<void>;
  ownershipStatus: OWNERSHIP_STATUS;
  setOwnershipStatus: (value: OWNERSHIP_STATUS) => void;
  checkOwnership: () => Promise<void>;
  waitingForConnectWallet: boolean;
  connectToWalletConnect: () => void;
  walletConnectProjectId: string | undefined;
}

const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
`;

function ModalContent({
  walletConnected,
  connectWallet,
  closeModal,
  validateWallet,
  ownershipStatus,
  setOwnershipStatus,
  checkOwnership,
  waitingForConnectWallet,
  connectToWalletConnect,
  walletConnectProjectId,
}: ModalContentProps) {
  const headerText = walletConnected
    ? 'Verify NFT Ownership'
    : 'Connect Wallet';

  return (
    <ModalContentStyled>
      <ModalHeader text={headerText} closeModal={closeModal} />
      <ModalBody>
        <>
          {' '}
          {walletConnected ? (
            <WalletConnected
              {...{
                validateWallet,
                ownershipStatus,
                setOwnershipStatus,
                closeModal,
                checkOwnership,
              }}
            />
          ) : (
            <ConnectWallet
              {...{
                walletConnectProjectId,
                connectWallet,
                connectToWalletConnect,
                closeModal,
                waitingForConnectWallet,
              }}
            />
          )}
        </>
      </ModalBody>
    </ModalContentStyled>
  );
}

export default ModalContent;
