import styled from 'styled-components';
import { infograph } from './contact';

export const PaymentContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 80px 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	line-height: 1.6rem;

	i,
	em {
		font-style: italic;
	}

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		position: relative;
	}

	h2,
	h3,
	label {
		font-weight: 500;
	}

	a {
		color: rgb(${({ theme }) => theme.primary});
	}

	h3 {
		position: relative;
		padding-left: 20px;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	.intro {
		p {
			padding-top: 10px;
		}
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			left: 130px;
			top: 0px;
		}
	}

	.messageForm {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;

		form {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 10px;

			.actions {
				display: flex;
				justify-content: flex-start;
				flex-flow: row wrap;
				gap: 10px;
			}

			.payment {
				span {
					display: flex;
					justify-content: start;
					label {
						padding: 5px 10px;
						background: rgb(${({ theme }) => theme.inner});
						width: 150px;
						border-radius: 5px;
						position: relative;
						padding-left: 35px;

						:checked {
							background: rebeccapurple;
						}
					}

					input {
						position: absolute;
						left: 15px;
						top: 11px;
					}
				}

				@media screen and (max-width: 480px) {
					place-items: center;
				}
			}

			section {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 12px;

				@media screen and (max-width: 480px) {
					grid-template-columns: 1fr;
				}

				div {
					display: flex;
					justify-content: flex-start;
					flex-flow: column wrap;
					gap: 5px;
				}
			}

			span {
				font-size: 0.9rem;
				font-weight: 500;
			}

			h3 {
				color: rgb(${({ theme }) => theme.primary});
				padding-top: 12px;
			}

			button {
				width: fit-content;
			}

			input[type='text'],
			input[type='number'],
			input[type='email'],
			textarea {
				border: 2px solid rgb(${({ theme }) => theme.primary});
				border-radius: 5px;
				padding: 5px;
				resize: none;
				background: rgb(${({ theme }) => theme.inner});
				width: 100%;

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

	.infograph {
		${() => infograph}

		div {
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});

			svg {
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}
`;
