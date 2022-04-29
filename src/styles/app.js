import styled from 'styled-components';

const tops = `
  z-index: 3000;
  position: fixed;
  bottom: 20px;
  left: 0;

  display: grid;
  place-content: center;
  width: 100%;
  height: 10vh;
`;

export const AppContainer = styled.section`
	.fluent-buttons {
		${() => tops}
		left: 97vw;
		bottom: 135px;
		width: 0;
		height: 0;

		@media screen and (max-width: 690px) {
			left: 95vw;
		}
		@media screen and (max-width: 480px) {
			left: 90vw;
		}

		button {
			width: 30px;
			height: 30px;
			margin-top: 5px;
			display: grid;
      backdrop-filter: blur(10px);
			place-content: center;
			position: relative;

			svg {
				position: static;
				width: 25px;
				height: 25px;
				position: absolute;
				top: 2.5px;
				left: 3px;
			}
		}
		span {
			padding: 0;
		}
	}

	.advisor {
		${() => tops}

		div {
			background: rgba(${({ theme }) => theme.backgroundAlt}, 0.8);
			backdrop-filter: blur(10px);
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			padding: 10px 20px;
			border-radius: 3px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			gap: 10px;

			a {
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}
`;
