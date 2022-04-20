import styled from 'styled-components';

export const ButtonContainer = styled.button`
	padding: 5px 10px;
	background: rgb(${({ theme }) => theme.primary});
  bor
	svg {
	}
	span {
		font-weight: 500;
		color: rgb(${({ theme }) => theme.text});
	}
`;
