import { ButtonContainer } from '../styles/components/button';

const Button = ({ text, icon, id, event, type }) => {
	return (
		<ButtonContainer type={type} onClick={event} id={id}>
			{icon}
			<span>{text}</span>
		</ButtonContainer>
	);
};

export default Button;
