import { ErrorPageContainer } from '../styles/errorPage';
import Button from '../components/Button';
import { BiBug } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<ErrorPageContainer>
			<BiBug />
			<div>
				<h1>Oops! Algo deu errado...</h1>
				<p>Página não encontrada.</p>
				<p>(código de erro: 404)</p>
			</div>
			<Button text={'Voltar para a página inicial.'} />
		</ErrorPageContainer>
	);
};

export default ErrorPage;
