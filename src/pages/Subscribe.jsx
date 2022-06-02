import { ErrorPageContainer } from '../styles/errorPage';
import { BiPaperPlane, BiHomeCircle } from 'react-icons/bi';
import Button from '../components/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);
	return (
		<ErrorPageContainer>
			<BiPaperPlane id='bugSVG' />
			<div>
				<h1>Subscreveu com sucesso!</h1>
				<p>Obrigado por fazer parte da nossa comunidade.</p>
				<p>Fique atento às novidades em breve...</p>
			</div>
			<Link to='/'>
				<Button icon={<BiHomeCircle />} text={'Voltar para a página inicial'} />
			</Link>
		</ErrorPageContainer>
	);
};

export default Subscribe;
