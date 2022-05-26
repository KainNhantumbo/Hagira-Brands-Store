import styled from 'styled-components';

export const HireContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	line-height: 1.6rem;

	em {
		font-style: italic;
	}

	p {
		padding-top: 10px;
	}

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		position: relative;
		line-height: 1.8rem;
	}

	h2,
	h3,
	label {
		font-weight: 500;
	}

	a {
		color: rgb(${({ theme }) => theme.primary});
	}

	h3 {
		position: relative;
		padding-left: 20px;
		span{
			padding-left: 5px;
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

	.contacts {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.intro {
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			left: 270px;
			top: 0px;
			@media screen and (max-width: 320px) {
				left: 210px;
			}
		}

		h1 {
			@media screen and (max-width: 320px) {
				font-size: 1.4rem;
			}
		}
	}

	.techs {
		display: flex;
		justify-content: space-evenly;
		flex-flow: row wrap;
		gap: 20px;
		font-weight: 500;

		div {
			display: grid;
			align-items: center;
			align-content: center;
			gap: 5px;

			svg {
				width: 25px;
				height: 25px;
			}
		}
	}
`;
