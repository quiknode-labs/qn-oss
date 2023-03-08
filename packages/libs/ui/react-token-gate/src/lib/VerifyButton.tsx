import styled from 'styled-components';
interface VerifyButtonProps {
  startVerification: () => void;
  buttonPrompt: string;
}

function VerifyButton({ startVerification, buttonPrompt }: VerifyButtonProps) {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    <Button className="" onClick={startVerification}>
      {buttonPrompt}
    </Button>
  );
}

export default VerifyButton;
