import styled from 'styled-components';

export const LegalContainer = styled.main`
	margin: 50px 0;
	padding: 30px;

	section {
		h1 {
			font-size: 1.8rem;
			font-weight: 500;
		}
	}

	article {
		line-height: 1.6rem;

		h2 {
			font-weight: 500;
			font-size: 1.2rem;
		}

		h3 {
			font-weight: 500;
			padding-top: 10px;
		}

		p {
			font-size: 1rem;
			padding: 10px 0;
		}

		li {
			list-style: circle;
			list-style-position: inside;
		}

		a {
			color: rgb(${({ theme }) => theme.primary});
		}
	}
`;
