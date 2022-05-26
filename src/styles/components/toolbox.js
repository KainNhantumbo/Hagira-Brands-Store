import styled from 'styled-components';

export const ToolboxContainer = styled.aside`
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
	padding: 10px;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});

	@media screen and (max-width: 765px) {
		flex-direction: column;
	}

	input,
	select {
		width: 210px;
		height: 38px;
		border: 2px solid rgb(${({ theme }) => theme.primary});
		border-radius: 3px;
		padding: 5px;
		background: rgb(${({ theme }) => theme.inner});
		@media screen and (max-width: 305px) {
			width: 175px;
		}

		:focus {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
			border: 2px solid rgb(${({ theme }) => theme.primary});
			outline-color: rgb(${({ theme }) => theme.primary});
		}
	}

	.tags {
		display: flex;
		flex-flow: row;
		gap: 10px;
		@media screen and (max-width: 450px) {
			flex-direction: column;
			select {
				min-width: 260px;
			}
		}
	}

	section {
		.title {
			margin-bottom: 12px;
			font-weight: 500;
		}

		.search {
			display: flex;
			justify-content: flex-start;
			gap: 5px;

			svg {
				top: 12px;
			}
		}
	}
`;
