import styled from 'styled-components';
import { propagateFlex } from './messages';

export const ManageContainer = styled.section`
	min-height: 100vh;

	h3 {
		position: relative;
		padding-left: 25px;
		font-weight: 500;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: -0.5px;
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

	.reseters-container {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;

		.danger {
			color: red;
		}

		h2 {
			font-size: 1.2rem;
			font-weight: 500;
			line-height: 1.6rem;
		}

		.reseters {
			display: flex;
			flex-direction: column;
			gap: 10px;

			div {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: center;
				box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
				background: rgb(${({ theme }) => theme.backgroundAlt});
				border-radius: 5px;
				padding: 10px;
				border-radius: 5px;

				:hover {
					box-shadow: 0 0 15px 0px rgba(${({ theme }) => theme.shadows}, 0.5);
					transition: all 200ms ease-in-out;
				}

				@media screen and (max-width: 570px){
					flex-direction: column;
					gap: 20px;
				}
			}
		}
	}
`;
