import styled from 'styled-components';

export const AppContainer = styled.section`
  section {
    z-index: 3000;
    position: fixed;
    bottom: 20px;
    left: 0;
    
    display: grid;
    place-content: center;
    width: 100%;
    height: 10vh;

    div {
      background: rgba(${({ theme }) => theme.backgroundAlt}, .8);
      backdrop-filter: blur(10px);
      box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
      padding: 10px 20px;
      border-radius: 3px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 10px;

      a {
        color: rgb(${({ theme }) => theme.primary});
      }
    }
	}
`;
