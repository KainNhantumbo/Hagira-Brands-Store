import styled from 'styled-components';

export const AboutContainer = styled.main`
	width: 100%;
	max-width: 850px;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-flow: column wrap;
	gap: 10px;

	line-height: 1.6rem;

	div {
		display: flex;
		flex-flow: row wrap;
		gap: 30px;

    @media screen and (max-width: 780px) {
      flex-direction: column;
      justify-content: center;
      align-content: center;
      place-items: center;
    }
	}

	i {
		font-style: italic;
	}

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		position: relative;

		svg {
			position: absolute;
			left: 90px;
			top: -2px;
			width: 30px;
			height: 30px;
		}
	}

	a {
		color: rgb(${({ theme }) => theme.primary});
	}

	h2,
	h3,
	label {
		font-weight: 500;
	}

	h3 {
		position: relative;
		padding-left: 20px;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	.image-container {
		img {
			max-width: 300px;
			width: 100%;
			border-radius: 10px;

      @media screen and (max-width: 780px) {
        max-width: 280px;
        
      }
		}
	}

	.about-content {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;
		max-width: 420px;

		p {
			text-align: justify;
		}
	}
`;
