import styled from 'styled-components';

export const ErrorPageContainer = styled.main`
	margin: 0 auto;
	margin-top: 120px;
  width: 100vw;
  max-width: 450px;
  height: 60vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
  svg {
    width: 50px;
    height: 50px;
  }

  div {
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    p {
      text-align: center;
      line-height: 1.6rem;
    }
  }
`;
