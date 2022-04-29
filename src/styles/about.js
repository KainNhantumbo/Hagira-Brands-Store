import styled from 'styled-components';

export const AboutContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	line-height: 1.6rem;

	i {
		font-style: italic;
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
`;
