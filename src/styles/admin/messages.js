import styled from 'styled-components';

const propagateFlex = `
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const MessagesContainer = styled.section`
	padding-left: 10px;
	position: relative;
	
	span {
		pointer-events: none;
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
		display: flex;
		gap: 20px;
		justify-content: flex-start;
		flex-flow: row wrap;

		.message {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 12px;
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
				border-radius: 12px;
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
