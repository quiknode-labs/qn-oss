import styled from 'styled-components';

const SpinnerStyled = styled.span`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  --spinner-color: black;
  aspect-ratio: 1/1;
  border-radius: 50%;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: 16px;
  height: 16px;
  border: 2px solid #58626d;
  border-top-color: transparent;

  animation-duration: 1s;
`;

const SpinnerContainer = styled.div`
  margin: 0 auto;
  height: 24px;
  width: 24px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerStyled />
    </SpinnerContainer>
  );
}

export default Spinner;
