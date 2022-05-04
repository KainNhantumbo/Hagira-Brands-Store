import styled from 'styled-components';
import { infograph } from './contact';

export const ProductContainer = styled.main`
	width: 100%;
	max-width: 1250px;
	min-width: 100vh;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	line-height: 1.6rem;

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		position: relative;
	}

	h2,
	h3,
	h5,
	em,
	label {
		font-weight: 500;
	}

	a {
		color: rgb(${({ theme }) => theme.primary});
	}

	em {
		font-style: italic;
	}

	h3,
	h2 {
		position: relative;
		padding-left: 20px;
		font-size: 1.1rem;
		color: rgb(${({ theme }) => theme.primary});

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	.product-intro {
		display: flex;
		justify-content: center;
		flex-flow: column nowrap;
		align-content: center;
		align-items: center;
		justify-items: center;
	}

	.product-container {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		justify-items: center;
		gap: 20px;
	}

	.product-image {
		max-width: 350px;
		display: flex;
		flex-flow: column nowrap;
		gap: 10px;

		img {
			border-radius: 5px;
		}
	}

	.product-body {
		display: flex;
		justify-content: flex-start;
		flex-flow: column nowrap;
		gap: 20px;

		.colors {
			i {
				display: flex;
				justify-content: flex-end;
				flex-flow: row nowrap;
				gap: 8px;
				background: none;
				border: none;

				span {
					border-radius: 50%;
					width: 28px;
					height: 28px;
					display: grid;
					place-content: center;

					svg {
						color: rgb(${({ theme }) => theme.text});
					}
				}
			}
		}

		.product-description {
			display: flex;
			flex-flow: column nowrap;
			gap: 10px;

			section {
				line-height: 1.6rem;
				background: rgb(${({ theme }) => theme.backgroundAlt});
				border-radius: 5px;
				border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
				padding: 3px 10px;
			}
		}

		.product-caracteristics,
		.product-details {
			display: flex;
			flex-flow: column nowrap;
			gap: 10px;

			section {
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				gap: 5px;

				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-flow: row nowrap;
					background: rgb(${({ theme }) => theme.backgroundAlt});
					padding: 3px 10px;
					border-radius: 5px;
					border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
				}
			}
		}
	}
`;
