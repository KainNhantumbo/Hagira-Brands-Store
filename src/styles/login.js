import styled from 'styled-components';

export const LoginContainer = styled.main`
	width: 100%;
	height: 60vh;
	margin: 0 auto;
	margin-top: 90px;
	padding: 0 10px;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	.welcome-msg {
		h1 {
			font-weight: 500;
			font-size: 1.8rem;
		}

		p {
			font-style: italic;
		}
	}

	form {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 5px;

		label {
			font-size: 1.1rem;
			font-weight: 500;
			position: relative;
			padding-bottom: 2px;

			span {
				padding-left: 25px;
			}

			svg {
				position: absolute;
				width: 20px;
				height: 20px;
				top: -2px;
				left: 0;
				color: rgb(${({ theme }) => theme.secondary});
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
`;
