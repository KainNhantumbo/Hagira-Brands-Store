import styled from 'styled-components';

export const ModalContainer = styled.section`
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
`;
