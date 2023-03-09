import styled from 'styled-components';
import StarsIcon from './icons/StarsIcon';
interface VerifyButtonProps {
  startVerification: () => void;
  buttonPrompt: string;
}

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* Semantic/Shadow/2 */

  box-shadow: 0px 2px 4px rgba(16, 21, 27, 0.05),
    0px 1px 3px rgba(16, 21, 27, 0.05);
  border-radius: 8px;
  background: #10151b;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin: 8px;
  padding: 8px 16px;
  cursor: pointer;
`;

const ButtonText = styled.div`
  margin: 0 8px;
`;

function VerifyButton({ startVerification, buttonPrompt }: VerifyButtonProps) {
  return (
    <Button className="" onClick={startVerification}>
      <StarsIcon />
      <ButtonText>{buttonPrompt}</ButtonText>
    </Button>
  );
}

export default VerifyButton;
