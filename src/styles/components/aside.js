import styled from 'styled-components';

export const AsideContainer = styled.aside`
	width: 30%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 25px;

	section {
		ul {
			display: flex;
			justify-content: flex-start;
			flex-flow: row wrap;
			gap: 15px;

			.tags {
				span {
					padding: 2px 8px;
					border-radius: 12px;
					font-size: 0.9rem;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.secondary});

					:hover {
						background: rgb(${({ theme }) => theme.primary});
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

				:focus {
					box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
					border: 2px solid rgb(${({ theme }) => theme.primary});
					outline-color: rgb(${({ theme }) => theme.primary});
				}
			}
		}
	}
`;
