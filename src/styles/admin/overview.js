import styled from 'styled-components';
import { propagateFlex } from './messages';

export const OverviewContainer = styled.section`
	min-height: 100vh;

	.upper {
		${() => propagateFlex}
		gap: 10px;
		max-width: 670px;

		h1 {
			position: relative;
			line-height: 0;
			padding-bottom: 12px;

			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 150px;
				top: -14px;

				@media screen and (max-width: 305px) {
				}
			}
		}
	}

	.infograph {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media screen and (max-width: 590px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 460px) {
			grid-template-columns: repeat(1, 1fr);
		}

		div {
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			max-width: 300px;
			padding: 15px 30px 15px 30px;
			border-radius: 5px;
			position: relative;
			
			h3 {
				padding: 0;
				padding-right: 20px;
				line-height: 1.6rem;
			}

			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				right: 10px;
				top: 10px;
				color: rgb(${({ theme }) => theme.primary});
			}

			p {
				font-size: 2.5rem;
				padding-top: 5px;
			}
		}
	}
`;
