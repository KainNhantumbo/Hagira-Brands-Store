import styled from 'styled-components';

export const propagateFlex = `
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const empty_message_styles = `
	display: grid;
	margin: 0;
	padding: 0;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);
	place-content: center;
	place-items: center;
	flex-flow: column nowrap;
	grid-gap: 20px;
	padding-top: 12vh;
	line-height: 1.6rem;
	text-align: center;

	h2 {
		font-size: 1.2rem;
		font-weight: 500;
		padding-bottom: 12px;
	}

	svg {
		width: 90px;
		height: 90px;
	}
`;

export const MessagesContainer = styled.section`
	padding-left: 10px;
	position: relative;
	min-height: 100vh;

	span {
		pointer-events: none;
	}

	.empty-message {
		${() => empty_message_styles}
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

		.message-previewer {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.background});
			padding: 10px 15px;
			max-width: 550px;
			border-radius: 5px;
			margin: 0 auto;
			${() => propagateFlex}
			gap: 15px;
			max-height: 550px;
			overflow-y: auto;
			position: relative;

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

	.upper {
		${() => propagateFlex}
		gap: 10px;
		max-width: 670px;

		h1 {
			position: relative;
			line-height: 0;
			padding-bottom: 12px;
			@media screen and (max-width: 460px) {
				font-size: 1.2rem;
			}

			@media screen and (max-width: 305px) {
				font-size: 1.05rem;
			}

			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 340px;
				top: -15px;

				@media screen and (max-width: 460px) {
					left: 200px;
					width: 20px;
					height: 20px;
					top: -10px;
				}

				@media screen and (max-width: 305px) {
					left: 175px;
				}
			}
		}
	}

	.messages-container {
		display: grid;
		gap: 20px;
		padding-top: 15px;
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
		place-content: center;
		place-items: center;

		@media screen and (max-width: 1080px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (max-width: 715px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 505px) {
			grid-template-columns: 1fr;
		}

		.message {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 15px;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			padding: 10px;
			border-radius: 5px;

			:hover {
				box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
				transition: 200ms ease-out;
			}

			section {
				display: flex;
				gap: 10px;
				flex-direction: column;
				div {
					h3 {
						font-weight: 500;
						display: inline;
					}
				}
			}

			.date {
				margin: 0 auto;
				padding: 5px 10px;
				background: rgb(${({ theme }) => theme.inner});
				font-weight: 500;
				border-radius: 5px;
				font-size: 0.9rem;
			}

			button {
				span {
					padding: 0;
				}
			}
		}
	}
`;
