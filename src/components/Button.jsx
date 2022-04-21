import { ButtonContainer } from '../styles/components/button';

const Button = ({ text, icon, id }) => {
	return (
		<ButtonContainer id={id}>
			{icon}
			<span>{text}</span>
		</ButtonContainer>
	);
};

export default Button;
