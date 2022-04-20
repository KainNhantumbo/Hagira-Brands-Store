import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {    
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, 'PT Sans', Montserrat;
  }

  span, label {
    user-select: none;
  }

  body {
    color: rgb(${({ theme }) => theme.font});
    padding-top: 3.8em;
    position: relative;
    background: rgb(${({ theme }) => theme.background});
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
