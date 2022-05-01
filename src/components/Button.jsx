import { ButtonContainer } from '../styles/components/button';

const Button = ({ text, icon, id, event, type, disabled_state }) => {
	return (
		<ButtonContainer {...disabled_state} type={type} onClick={event} id={id}>
			{icon}
			<span>{text}</span>
		</ButtonContainer>
	);
};

export default Button;
