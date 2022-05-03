import styled from 'styled-components';
import { empty_message_styles, propagateFlex } from './messages';

export const ProductsContainer = styled.section`
	min-height: 100vh;

	.empty-message {
		${() => empty_message_styles}
	}

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
`;
