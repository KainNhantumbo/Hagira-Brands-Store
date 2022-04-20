import styled from "styled-components";

export const LoginContainer = styled.main`
  form {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 350px;
    gap: 5px;
    margin: 0 auto;
    margin-top: 50px;

    label {
      font-size: 1.1rem;
      font-weight: 500;

      svg {
        
      }
    }

    input {
      border: 2px solid rgb(${({ theme }) => theme.primary});
      border-radius: 3px;
      padding: 5px;
      margin-bottom: 5px;
      
      :focus {
        box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
        border: 2px solid rgb(${({ theme }) => theme.primary});
        outline-color: rgb(${({ theme }) => theme.primary});
      }
    }

    .error {
      color: red;
      font-weight: 500;
    }

    .buttons {
      margin-top: 8px;
      z-index: 0;
      display: flex;
      justify-content: flex-start;
      gap: 8px;
    }
  }
`