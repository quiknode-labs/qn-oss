import styled from 'styled-components';
interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 2em;
`;

function ModalBody({ children }: ModalBodyProps) {
  return <ModalBodyStyled>{children}</ModalBodyStyled>;
}

export default ModalBody;
