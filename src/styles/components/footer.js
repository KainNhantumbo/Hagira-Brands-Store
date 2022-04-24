import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100vw;
	height: min-content;
	display: grid;
	grid-template-columns: repeat(3, 1fr) 1.5fr;

	gap: 30px 20px;
	padding: 20px;
	background: rgb(${({ theme }) => theme.secondary});
	color: rgb(${({ theme }) => theme.text});

	@media screen and (max-width: 810px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 485px) {
		grid-template-columns: 1fr;
	}

	section {
		h2 {
			font-weight: 500;
			font-size: 1.2rem;
			line-height: 2.2rem;
		}

		li {
			line-height: 1.6rem;
			:hover {
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}

	.newsletter {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 12px;

		p {
			line-height: 1.2rem;
		}

		label {
			font-weight: 500;
		}

		section {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 15px;

			div {
				display: flex;
				gap: 5px;
				justify-content: flex-start;
				flex-flow: row nowrap;

				button {
					font-size: 1rem;
					:hover {
						background: rgb(${({ theme }) => theme.shadows});
					}
				}

				input {
					border: 2px solid rgb(${({ theme }) => theme.primary});
					border-radius: 3px;
					padding: 5px;

					@media screen and (max-width: 305px) {
						width: 175px;
					}

					::placeholder {
						font-size: 1rem;
					}

					:focus {
						box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
						border: 2px solid rgb(${({ theme }) => theme.primary});
						outline-color: rgb(${({ theme }) => theme.primary});
					}
				}
			}
		}
	}

	.copyright {
		text-transform: uppercase;
		font-weight: 500;
		font-size: 0.8rem;
		letter-spacing: 1px;
		grid-column: 1/3;
		
		@media screen and (max-width: 485px) {
			grid-column: 1/1;
		}
	}
`;
