import styled from 'styled-components';

export const ToolboxContainer = styled.aside`
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
	padding: 10px;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});

	@media screen and (max-width: 710px) {
		flex-direction: column;
	}

	section {
		ul {
			display: flex;
			justify-content: flex-start;
			flex-flow: row wrap;
			gap: 15px;

			.tags {
				padding: 7px 0;
				span {
					padding: 5px 8px;
					border-radius: 3px;
					font-size: 0.9rem;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.primary});

					:hover {
						background: rgb(${({ theme }) => theme.secondary});
					}
				}
			}
		}

		.title {
			margin-bottom: 12px;
			font-weight: 500;
		}

		.search {
			display: flex;
			justify-content: flex-start;
			gap: 5px;

			input {
				border: 2px solid rgb(${({ theme }) => theme.primary});
				border-radius: 3px;
				padding: 5px;

				@media screen and (max-width: 305px) {
					width: 175px;
				}

				:focus {
					box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
					border: 2px solid rgb(${({ theme }) => theme.primary});
					outline-color: rgb(${({ theme }) => theme.primary});
				}
			}
		}
	}
`;
