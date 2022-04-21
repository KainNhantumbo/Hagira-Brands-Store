import styled from 'styled-components';

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 8vh;
	padding: 5px 10px;
	box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
	background-color: rgb(${({ theme }) => theme.background});
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	font-weight: 600;

	section {
		position: absolute;
		top: 19px;
		left: 20px;
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			top: -6px;
			left: -6px;
			color: rgb(${({ theme }) => theme.primary});
		}

		span {
			color: rgb(${({ theme }) => theme.primary});
			padding-left: 30px;
		}
		z-index: 200;
	}

	.navbar {
		padding-left: 170px;
		display: flex;
		justify-content: flex-end;

		ul {
			span {
				color: rgb(${({ theme }) => theme.font});
			}
		}

		.actions {
			position: absolute;
			right: 10px;
			top: 10px;
		}
	}
`;
