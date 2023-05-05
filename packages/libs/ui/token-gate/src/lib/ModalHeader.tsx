import styled from 'styled-components';
import CloseIcon from './icons/CloseIcon';
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
const CloseButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
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
        <CloseButtonWrapper onClick={closeModal}>
          <CloseIcon />
        </CloseButtonWrapper>
      </div>
    </ModalHeaderStyled>
  );
}

export default ModalHeader;
