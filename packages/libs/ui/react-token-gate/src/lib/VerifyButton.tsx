interface VerifyButtonProps {
  startVerification: () => void;
  buttonPrompt: string;
}

function VerifyButton({ startVerification, buttonPrompt }: VerifyButtonProps) {
  return (
    <button className="p-4 text-3xl" onClick={startVerification}>
      {buttonPrompt}
    </button>
  );
}

export default VerifyButton;
