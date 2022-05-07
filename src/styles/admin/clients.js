import styled from 'styled-components';
import { propagateFlex } from './messages';

export const ClientsContainer = styled.section`
	min-height: 100vh;
	line-height: 1.2rem;

	h3 {
		position: relative;
		padding-left: 20px;
		font-weight: 500;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 14px;
			height: 14px;
			top: 2px;
			left: 0;
		}
	}

	.upper {
		${() => propagateFlex}
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
				left: 140px;
				top: -15px;
			}
		}
	}

	.modal-container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 3300;
		padding: 90px 10px;
		background: rgba(${({ theme }) => theme.background}, 0.5);
		backdrop-filter: blur(10px);
		display: grid;
		place-content: center;
		place-items: center;

		.message-previewer {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.background});
			padding: 10px 15px;
			max-width: 550px;
			border-radius: 5px;
			margin: 0 auto;
			${() => propagateFlex}
			gap: 25px;
			max-height: 550px;
			overflow-y: auto;
			position: relative;

			.advice-info {
				display: flex;
				justify-items: center;
				flex-direction: column;
				align-items: center;
				gap: 15px;

				svg {
					width: 45px;
					height: 45px;
					color: rgb(${({ theme }) => theme.secondary});
				}
			}

			.actions {
				${() => propagateFlex}
				gap: 15px;
				flex-flow: row wrap;
				justify-content: space-evenly;
				justify-items: center;
				span {
					padding: 0;
					pointer-events: none;
				}
				button {
					width: 40%;
				}
			}
		}
	}

	.payments {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		gap: 10px;

		@media screen and (max-width: 850px) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: center;
			justify-items: center;
			justify-content: center;
			gap: 25px 15px;
		}

		@media screen and (max-width: 695px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 495px) {
			grid-template-columns: 1fr;
		}

		li {
			display: flex;
			justify-content: space-between;
			gap: 8px;
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 5px;
			padding: 10px;
			width: fit-content;

			:hover {
				box-shadow: 0 0 10px 1px rgb(${({ theme }) => theme.shadows});
				transition: all 200ms ease-in-out;
			}

			@media screen and (max-width: 850px) {
				flex-direction: column;
				align-items: center;
			}

			.common {
				display: flex;
				justify-content: space-evenly;
				flex-flow: column wrap;
				gap: 10px;
				min-width: 150px;

				.date {
					text-align: center;
				}

				button {
					span {
						pointer-events: none;
					}
				}
			}

			.buttons {
				flex-flow: row wrap;
				align-items: center;

				button {
					:hover {
						box-shadow: 0 0 10px 1px rgb(${({ theme }) => theme.shadows});
						transition: all 200ms ease-in-out;
					}
				}
				@media screen and (max-width: 850px) {
					span,
					button {
						width: 100%;
					}
				}
			}
		}
	}
`;
