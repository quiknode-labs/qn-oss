import styled from 'styled-components';
interface ModalHeaderProps {
  text: string;
  closeModal: () => void;
}

const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px 32px;
  border-bottom: 1px solid #d3d6dc;
`;
const CloseButton = styled.div`
  cursor: pointer;
  padding: 0em 0.5em;
`;
const HeaderText = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 32px;
`;

function ModalHeader({ text, closeModal }: ModalHeaderProps) {
  return (
    <ModalHeaderStyled>
      <HeaderText>{text}</HeaderText>
      <div>
        <CloseButton onClick={closeModal}>x</CloseButton>
      </div>
    </ModalHeaderStyled>
  );
}

export default ModalHeader;
