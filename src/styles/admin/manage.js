import styled from 'styled-components';
import { propagateFlex } from './messages';

export const ManageContainer = styled.section`
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
				left: 160px;
				top: -15px;
			}
		}
	}

	.reseters-container {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;

		.danger {
			color: red;
		}

		h2 {
			font-size: 1.2rem;
			font-weight: 500;
			line-height: 1.6rem;
		}

		.reseters {
			
		}

	}

`;
