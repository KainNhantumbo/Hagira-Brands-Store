import styled from 'styled-components';
import { infograph } from './contact';

export const ProductContainer = styled.main`
	width: 100%;
	max-width: 1250px;
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
		padding-left: 25px;
		font-size: 1.1rem;
		color: rgb(${({ theme }) => theme.primary});

		@media screen and (max-width: 380px) {
			font-size: 1rem;
		}

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	h5 {
		position: relative;
		padding-left: 20px;

		svg {
			color: rgb(${({ theme }) => theme.font});
			position: absolute;
			width: 16px;
			height: 16px;
			top: 3.5px;
			left: -2px;
		}
	}

	.product-intro {
		display: flex;
		justify-content: center;
		flex-flow: column nowrap;
		align-content: center;
		align-items: center;
		justify-items: center;

		@media screen and (max-width: 350px) {
			h1 {
				font-size: 1.2rem;
			}
			span {
				font-size: 0.9rem;

				@media screen and (max-width: 305px) {
					font-size: 0.8rem;
				}
			}
		}
	}

	.product-container {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		justify-items: center;
		gap: 20px;

		@media screen and (max-width: 675px) {
			grid-template-columns: 1fr;
			padding: 0 10px;
		}
	}

	.product-image {
		max-width: 350px;
		display: flex;
		flex-flow: column nowrap;
		gap: 10px;

		@media screen and (max-width: 345px) {
			h2 {
				display: none;
			}
		}
		

		figcaption {
			@media screen and (max-width: 350px) {
				font-size: 0.9rem;
			}
			@media screen and (max-width: 305px) {
				display: none;
			}
		}

		@media screen and (max-width: 675px) {
			width: 60%;
		}

		img {
			box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
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
					width: 24px;
					height: 24px;
					display: grid;
					place-content: center;

					@media screen and (max-width: 325px) {
						width: 20px;
						height: 20px;
					}

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
					gap: 5px;
					background: rgb(${({ theme }) => theme.backgroundAlt});
					padding: 3px 10px;
					border-radius: 5px;
					border-bottom: 1px solid rgb(${({ theme }) => theme.inner});
				}
			}
		}

		.advice {
			font-size: .9rem;
			font-weight: 500;
		}
	}
`;
