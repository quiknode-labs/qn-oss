import { useState } from 'react';
import WalletConnected from './WalletConnected';
import ConnectWallet from './ConnectWallet';
import { OWNERSHIP_STATUS, WALLET_PROVIDERS } from './types';
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
  walletAddress: string;
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
  walletAddress,
}: ModalContentProps) {
  const headerText = 'Verify NFT Ownership';
  const [walletProvider, setWalletProvider] = useState<WALLET_PROVIDERS>(
    WALLET_PROVIDERS.COINBASE
  );

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
                walletProvider,
                walletAddress,
              }}
            />
          ) : (
            <ConnectWallet
              {...{
                connectWallet,
                closeModal,
                waitingForConnectWallet,
                setWalletProvider,
              }}
            />
          )}
        </>
      </ModalBody>
    </ModalContentStyled>
  );
}

export default ModalContent;
