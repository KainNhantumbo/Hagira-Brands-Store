import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	margin-top: 60px;
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	gap: 10px;

	article {
		width: 70%;

		h2 {
			font-weight: 500;
			margin-bottom: 12px;
		}

    .products {
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
      gap: 20px;
    }

		.product {
      padding: 5px;
      box-shadow: 0 0 5px rgb(${({theme})=> theme.shadows});
      border-radius: 5px;

			img {
				width: 210px;
				height: 220px;
				object-fit: cover;
				border-radius: 5px;
			}

      .details-product {
        display: flex;
        flex-flow: column nowrap;

        div {
          display: flex;
          justify-content: space-between;
          flex-direction: row;

        }
      }
		}
	}
`;
