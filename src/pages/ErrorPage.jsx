import { ErrorPageContainer } from '../styles/errorPage';
import Button from '../components/Button';
import { BiBug, BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ErrorPage = () => {
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
			<BiBug id='bugSVG' />
			<div>
				<h1>Oops! Algo deu errado...</h1>
				<p>Página não encontrada.</p>
				<p>(código de erro: 404)</p>
			</div>
			<Link to='/'>
				<Button icon={<BiHome />} text={'Voltar para a página inicial'} />
			</Link>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
