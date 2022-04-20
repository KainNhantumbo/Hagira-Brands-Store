import styled from 'styled-components';

export const ButtonContainer = styled.button`
	padding: 7px 10px;
	background: rgb(${({ theme }) => theme.primary});
	border-style: none;
	border: none;
	border-radius: 3px;
	position: relative;
	z-index: 0;
	
	:hover {
		background-color: rgb(${({ theme }) => theme.secondary});
		transition: all 200ms ease-out;
	}

	svg {
		position: absolute;
		width: 15px;
		height: 15px;
		left: 3px;
		top: 9px;
		color: rgb(${({ theme }) => theme.text});
	}

	span {
		font-weight: 400;
		color: rgb(${({ theme }) => theme.text});
		padding-left: 12px;
	}
`;
