import styled from 'styled-components';
import { empty_message_styles, propagateFlex } from './messages';

export const ProductsContainer = styled.section`
	min-height: 100vh;

	h3 {
		position: relative;
		padding-left: 18px;
		font-weight: 500;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 14px;
			height: 14px;
			top: 1px;
			left: 0;
		}
	}

	.main-container {
		display: grid;
		gap: 20px;
	}

	.empty-message {
		${() => empty_message_styles}
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
				left: 160px;
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

		h3 {
			padding: 0;
		}

		.message-previewer {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});
			padding: 20px 15px;
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
			align-items: center;
			gap: 8px;
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 5px;
			padding: 10px;
			width: 100%;

			:hover {
				box-shadow: 0 0 15px 0px rgba(${({ theme }) => theme.shadows}, 0.5);
				transition: all 200ms ease-in-out;
			}

			@media screen and (max-width: 850px) {
				flex-direction: column;
				align-items: flex-start;
				justify-content: start;
				width: fit-content;
			}

			.common {
				display: flex;
				flex-flow: column wrap;
				gap: 10px;
				width: 100%;

				button {
					span {
						pointer-events: none;
					}
				}
			}

			.buttons {
				flex-flow: row nowrap;
				align-items: center;
				justify-content: center;

				button {
					:hover {
						box-shadow: 0 0 10px 1px rgb(${({ theme }) => theme.shadows});
						transition: all 200ms ease-in-out;
					}
				}
				@media screen and (max-width: 850px) {
					flex-flow: row wrap;
					span,
					button {
						width: 100%;
					}
				}
			}
		}
	}
`;
