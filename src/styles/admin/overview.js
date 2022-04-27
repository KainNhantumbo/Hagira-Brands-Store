import styled from 'styled-components';

export const OverviewContainer = styled.section`
.infograph {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		gap: 20px;

		div {
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			max-width: 300px;
			padding: 15px 30px 15px 30px;
			border-radius: 5px;
			position: relative;

			h3 {
				padding: 0;
			}

			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				right: 10px;
				top: 10px;
				color: rgb(${({ theme }) => theme.primary});
			}
		}
	}
`;
