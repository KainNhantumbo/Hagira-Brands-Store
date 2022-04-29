import styled from 'styled-components';
import { infograph } from './contact';

export const SupportContainer = styled.main`
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

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	.intro {
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			left: 130px;
			top: 0px;
		}
	}

	.content {
	}

	.infograph {
		${() => infograph}

		div {
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.backgroundAlt});

			.svg {
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}
`;
