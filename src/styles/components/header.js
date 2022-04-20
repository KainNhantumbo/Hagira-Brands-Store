import styled from 'styled-components';

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 8vh;
	padding: 5px 10px;
	box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
	background-color: rgb(${({ theme }) => theme.background});
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	font-weight: 600;

	section {
		position: absolute;
		top: 19px;
		left: 20px;
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			top: -6px;
			left: -6px;
			color: rgb(${({ theme }) => theme.primary});
		}

		span {
			color: rgb(${({ theme }) => theme.primary});
			padding-left: 30px;
		}
		z-index: 200;
	}

	.navbar {
		padding-left: 170px;

		@media screen and (max-width: 505px) {
			.common {
				width: 180px;
				height: 100vh;
				position: absolute;
				flex-direction: column;
				top: 0px;
				left: 0px;
				background: rgb(${({ theme }) => theme.background});
				box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
				align-items: center;
				padding-top: 70px;
				gap: 0;

				li {
					width: 100%;
					padding: 20px 10px;
					display: flex;
					justify-content: center;

					:hover {
						background: rgb(${({ theme }) => theme.hover});
						transition: all 200ms ease-out;
					}
				}
			}
		}

		ul {
			div {
				display: flex;
				gap: 30px;

				.list-item {
					span {
						color: rgb(${({ theme }) => theme.font});
					}

					/* @media screen and (max-width: 505px) {
						display: none;
					} */
				}
			}

			.menu-btn {
				position: absolute;
				right: 12px;
				top: 11px;
				width: 30px;
				height: 30px;
				padding: 15px;
				border-radius: 50%;
				display: grid;
				place-content: center;

				:hover {
					background: rgb(${({ theme }) => theme.hover});
				}

				svg {
					width: 22px;
					height: 22px;
					color: rgb(${({ theme }) => theme.primary});
				}

				/* @media screen and (min-width: 505px) {
					display: none;
					color: red;
				} */
			}
		}
	}

	.actions {
		position: absolute;
		right: 10px;
		top: 10px;

		@media screen and (max-width: 505px) {
			display: none;
		}
	}
`;
