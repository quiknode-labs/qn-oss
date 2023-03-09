import styled from 'styled-components';
interface VerifyButtonProps {
  startVerification: () => void;
  buttonPrompt: string;
}

const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* Semantic/Shadow/2 */

  box-shadow: 0px 2px 4px rgba(16, 21, 27, 0.05),
    0px 1px 3px rgba(16, 21, 27, 0.05);
  border-radius: 8px;
  background: #10151b;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
  margin: 0.5em;
  padding: 0.7em 1.5em;
  cursor: pointer;
`;

function VerifyButton({ startVerification, buttonPrompt }: VerifyButtonProps) {
  return (
    <Button className="" onClick={startVerification}>
      {buttonPrompt}
    </Button>
  );
}

export default VerifyButton;
