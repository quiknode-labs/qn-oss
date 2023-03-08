import styled from 'styled-components';
interface ModalHeaderProps {
  text: string;
  closeModal: () => void;
}

function ModalHeader({ text, closeModal }: ModalHeaderProps) {
  const ModalHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5em 0em;
  `;
  const CloseButton = styled.div`
    cursor: pointer;
    padding: 0em 0.5em;
  `;
  const HeaderText = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  `;

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
