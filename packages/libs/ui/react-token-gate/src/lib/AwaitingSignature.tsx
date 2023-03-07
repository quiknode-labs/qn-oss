interface AwaitingSignatureProps {
  closeModal: () => void;
}

function AwaitingSignature({ closeModal }: AwaitingSignatureProps) {
  return (
    <>
      <h2>Verify NFT Ownership</h2>
      <p>
        This signature will verify that you are the owner of this wallet
        address.
      </p>
      <p>
        You will not submit any transactions or give access to any funds by
        signing this message.
      </p>
      <p>Loading...</p>
      <button onClick={closeModal}>close</button>
    </>
  );
}

export default AwaitingSignature;
