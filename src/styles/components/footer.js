import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100vw;
	height: min-content;
	display: grid;
	grid-template-columns: repeat(2, 1fr) 1.5fr;
	position: relative;

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

	::before {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		width: 100vw;
		height: 5px;
		background: rgba(${({ theme }) => theme.primary}, 0.8);
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

			button {
				font-size: 1rem;
				border-radius: 5px;
				cursor: pointer;
				span, svg {
					pointer-events: none;
				}
				:hover {
					box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
				}
			}

			div {
				display: flex;
				gap: 5px;
				justify-content: flex-start;
				flex-flow: row nowrap;

				input {
					border: 2px solid rgb(${({ theme }) => theme.primary});
					border-radius: 5px;
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
