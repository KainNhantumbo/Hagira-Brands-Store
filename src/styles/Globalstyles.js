import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {    
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', Montserrat, Poppins, 'PT Sans';
  }

  span, label {
    user-select: none;
  }

  body {
    color: rgb(${({ theme }) => theme.font});
    position: relative;
    background: rgb(${({ theme }) => theme.background});
  }

  #rounded {
		border-radius: 15px;
    font-weight: 400;
	}

  ::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 5px;
    background: rgb(${({ theme }) => theme.background});
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: rgba(${({ theme }) => theme.text}, .5);
  }
`;
