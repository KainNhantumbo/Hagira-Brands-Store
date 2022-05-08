import styled from 'styled-components';

export const SearchBarContainer = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-flow: row wrap;
	gap: 12px 5px;

	.container {
		display: flex;
		flex-flow: row wrap;
		gap: 20px;

		@media screen and (max-width: 734px) {
			flex-direction: column;
			gap: 20px;
		}

		.counter {
			justify-self: end;
			text-align: end;
		}
	}

	.sort {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;

		@media screen and (max-width: 734px) {
			flex-direction: column;
			align-items: flex-start;
		}
		select {
			width: 200px;
			height: 28px;
			border: 2px solid rgb(${({ theme }) => theme.primary});
			border-radius: 5px;
			padding: 1px;
			resize: none;
			background: rgb(${({ theme }) => theme.inner});
			font-size: 0.9rem;
			font-weight: 500;

			:focus {
				box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
				border: 2px solid rgb(${({ theme }) => theme.primary});
				outline-color: rgb(${({ theme }) => theme.primary});
			}
		}
	}

	.search {
		display: flex;
		justify-content: flex-start;
		gap: 5px;
		font-size: 0.9rem;

		svg {
			top: 12px;
		}

		button {
			padding: 0;
			width: 30px;
			display: grid;
			place-items: center;
			place-content: center;

			svg {
				position: static;
				width: 15px;
				height: 15px;
			}
		}

		input {
			width: 200px;
			height: 28px;
			border: 2px solid rgb(${({ theme }) => theme.primary});
			border-radius: 3px;
			padding: 1px 5px;

			@media screen and (max-width: 305px) {
				width: 165px;
			}

			::placeholder {
				font-weight: 500;
				color: rgb(${({ theme }) => theme.font});
			}

			:focus {
				box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
				border: 2px solid rgb(${({ theme }) => theme.primary});
				outline-color: rgb(${({ theme }) => theme.primary});
			}
		}
	}
`;
