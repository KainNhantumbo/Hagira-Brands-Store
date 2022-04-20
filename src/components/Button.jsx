import { ButtonContainer } from '../styles/components/button';

const Button = ({ text, icon }) => {
	return (
		<ButtonContainer>
			{icon}
			<span>{text}</span>
		</ButtonContainer>
	);
};

export default Button;
