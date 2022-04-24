import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100vw;
	margin: 20px 10px;
	margin-top: 80px;
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	gap: 10px;

	article {
		width: 70vw;

		h2 {
			font-weight: 500;
			margin-bottom: 12px;
		}

		.products {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: auto;
			gap: 20px;
		}

		.product {
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			border-radius: 10px;
			display: flex;
			justify-items: flex-start;
			flex-direction: column;
			gap: 15px;
			width: 210px;
			padding-bottom: 10px;

			:hover {
				box-shadow: 0 0 10px 1px rgb(${({ theme }) => theme.shadows});
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
				gap: 10px;

				h3 {
					font-weight: 500;
				}

				div {
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					gap: 5px;

					.price {
						font-weight: 500;
					}

					.type {
					}
				}
			}
		}
	}
`;
