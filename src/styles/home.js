import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100vw;
	min-height: 100vh;
	margin-top: 80px;
	margin-bottom: 50px;
	display: flex;
	flex-flow: column nowrap;
	gap: 30px;

	article {
		margin: 0 10px;
		h2 {
			font-weight: 500;
			margin-bottom: 12px;
		}

		.products {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			justify-items: center;
			gap: 20px 12px;

			@media screen and (max-width: 1180px) {
				grid-template-columns: repeat(4, 1fr);
			}
			@media screen and (max-width: 930px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media screen and (max-width: 695px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media screen and (max-width: 480px) {
				grid-template-columns: 1fr;
			}
		}

		.product {
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 10px;
			display: flex;
			justify-items: flex-start;
			flex-direction: column;
			gap: 15px;
			width: 210px;
			padding-bottom: 10px;
			cursor: pointer;

			:hover {
				box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
				transition: 200ms ease-out;
			}

			img {
				width: 210px;
				height: 220px;
				border-radius: 10px 10px 0 0;
				object-fit: cover;
			}

			.details-product {
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				font-weight: 400;
				font-size: 0.9rem;
				padding: 3px 8px;
				gap: 12px;

				h3 {
					font-weight: 500;
					user-select: none;
				}

				div {
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					gap: 8px;

					span {
						padding-left: 20px;
						position: relative;

						svg {
							position: absolute;
							left: 0;
							top: -2px;
							width: 18px;
							height: 18px;
							color: rgb(${({ theme }) => theme.primary});
						}
					}

					.price {
						font-weight: 500;
						svg {
							color: rgb(${({ theme }) => theme.secondary});
						}
					}
				}
			}
		}
	}
`;
