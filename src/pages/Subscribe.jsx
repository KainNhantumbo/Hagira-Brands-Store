import { ErrorPageContainer } from '../styles/errorPage';
import { BiPaperPlane, BiHomeCircle } from 'react-icons/bi';
import Button from '../components/Button';

const Subscribe = () => {
	return (
		<ErrorPageContainer>
			<BiPaperPlane id='bugSVG' />
			<div>
				<h1>Subscreveu com sucesso!</h1>
				<p>Obrigado por fazer parte da nossa comunidade.</p>
				<p>Fique atento às novidades em breve...</p>
			</div>
			<a href='/'>
				<Button icon={<BiHomeCircle />} text={'Voltar para a página inicial'} />
			</a>
		</ErrorPageContainer>
	);
};

export default Subscribe;
