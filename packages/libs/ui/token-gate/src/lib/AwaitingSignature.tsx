interface AwaitingSignatureProps {
  closeModal: () => void;
}

function AwaitingSignature({ closeModal }: AwaitingSignatureProps) {
  return (
    <>
      <div>
        This signature will verify that you are the owner of this wallet
        address.
      </div>
      <div>
        You will not submit any transactions or give access to any funds by
        signing this message.
      </div>
      <em>Awaiting Signature...</em>
    </>
  );
}

export default AwaitingSignature;
