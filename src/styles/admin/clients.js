import styled from 'styled-components';
import { propagateFlex } from './messages';
import { empty_message_styles } from './messages';

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

	
	.empty-message {
		${() => empty_message_styles}
	}


	.main-container {
		display: grid;
		gap: 20px;
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

	.modal_info-container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 3300;
		padding: 90px 10px;
		background: rgba(${({ theme }) => theme.background}, 0.5);
		backdrop-filter: blur(10px);

		.message-previewer {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.background});
			padding: 10px 15px;
			padding-bottom: 30px;
			max-width: 550px;
			border-radius: 5px;
			margin: 0 auto;
			${() => propagateFlex}
			gap: 15px;
			max-height: 550px;
			overflow-y: auto;
			position: relative;

			.details-footer {
				display: flex;
				flex-flow: row wrap;
				gap: 12px;
				background: rgb(${({ theme }) => theme.backgroundAlt});
				width: fit-content;
				padding: 5px 8px;
				border-radius: 5px;
			}

			.reply {
				position: absolute;
				top: 10px;
				right: 10px;
				width: 30px;
				height: 30px;
				color: rgb(${({ theme }) => theme.primary});
				background: rgb(${({ theme }) => theme.inner});
				border-radius: 50%;
				padding: 5px;
				display: grid;
				place-content: center;

				:hover {
					transition: all 200ms ease-out;
					color: rgb(${({ theme }) => theme.font});
				}
			}

			h2 {
				line-height: 1.6rem;
				border-bottom: 1px solid rgb(${({ theme }) => theme.primary});
				color: rgb(${({ theme }) => theme.primary});
			}

			.headers {
				${() => propagateFlex}
				gap: 5px;
			}

			.message {
				${() => propagateFlex}
				gap: 5px;
				div {
					line-height: 1.4rem;
				}
			}

			.actions {
				${() => propagateFlex}
				gap: 5px;
				flex-flow: row wrap;
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
				align-items: center;
			}

			.common {
				display: flex;
				flex-flow: column wrap;
				gap: 10px;

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
