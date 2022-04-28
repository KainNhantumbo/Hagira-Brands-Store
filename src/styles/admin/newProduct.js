import styled from 'styled-components';

export const NewProductContainer = styled.section`
	padding-left: 10px;

	section {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;
		max-width: 670px;

		h1 {
			position: relative;
      line-height: 0;
      padding-bottom: 12px;
      
			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 220px;
				top: -15px;
			}
		}

		form {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 20px;

			div {
				display: flex;
				justify-content: flex-start;
				flex-flow: row wrap;
				gap: 25px;
				align-items: center;
			}

			span {
				font-size: 0.9rem;
				font-weight: 500;
			}

			button {
				width: fit-content;
			}

			input,
			select,
			textarea {
				border: 2px solid rgb(${({ theme }) => theme.primary});
				border-radius: 5px;
				padding: 5px;
				resize: none;
				background: rgb(${({ theme }) => theme.inner});

				::placeholder {
					font-size: 1rem;
					font-style: italic;
				}

				:focus {
					box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
					border: 2px solid rgb(${({ theme }) => theme.primary});
					outline-color: rgb(${({ theme }) => theme.primary});
				}
			}
		}
	}
`;
