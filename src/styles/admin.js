import styled from 'styled-components';

export const AdminContainer = styled.main`
	width: 100vw;
	min-height: 70vh;
	padding: 80px 0;
	position: relative;

	article {
    margin-left: 170px;
    padding: 0 20px;
	}

	aside {
		width: fit-content;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		padding: 80px 0;
		box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
		background-color: rgba(${({ theme }) => theme.background}, 0.8);
		backdrop-filter: blur(10px);
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 15px;

		div {
			height: 40px;
			padding: 10px;
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			margin: 0 10px;
			border-radius: 5px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			position: relative;

			@media screen and (max-width: 920px) {
				width: 34px;
			}

			:hover {
				color: rgb(${({ theme }) => theme.primary});
			}

			svg {
				position: absolute;
				left: 7px;
				top: 10px;
				width: 20px;
				height: 20px;
			}

			:hover {
				box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
				transition: all 200ms ease-out;
			}

			span {
				padding-left: 25px;
				font-weight: 500;

				@media screen and (max-width: 920px) {
					display: none;
				}
			}
		}
	}
`;
