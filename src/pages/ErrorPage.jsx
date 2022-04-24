import { ErrorPageContainer } from '../styles/errorPage';
import Button from '../components/Button';
import { BiBug, BiHome } from 'react-icons/bi';

const ErrorPage = () => {
	return (
		<ErrorPageContainer>
			<BiBug id='bugSVG'/>
			<div>
				<h1>Oops! Algo deu errado...</h1>
				<p>Página não encontrada.</p>
				<p>(código de erro: 404)</p>
			</div>
			<a href='/'>
				<Button
					icon={<BiHome />}
					text={'Voltar para a página inicial'}
				/>
			</a>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
