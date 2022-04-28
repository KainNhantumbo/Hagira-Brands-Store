import styled from 'styled-components';

export const ComunicateContainer = styled.section`
	padding-left: 10px;
	.messageForm {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;
		max-width: 670px;

		h1 {
			position: relative;
			line-height: 0;
			padding-bottom: 12px;

			@media screen and (max-width: 370px) {
				font-size: 1.3rem;
			}

			svg {
				position: absolute;
				width: 25px;
				height: 25px;
				left: 260px;
				top: -15px;
				@media screen and (max-width: 370px) {
					left: 165px;
				}
			}
		}

		form {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 10px;

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
