import styled from 'styled-components';
interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  const ModalBodyStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    padding: 2em;
  `;
  return <ModalBodyStyled>{children}</ModalBodyStyled>;
}

export default ModalBody;
