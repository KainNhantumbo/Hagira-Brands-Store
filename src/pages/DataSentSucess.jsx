import { ErrorPageContainer } from '../styles/errorPage';
import { BiCheckCircle, BiChevronLeft } from 'react-icons/bi';
import Button from '../components/Button';

const DataSentSucess = () => {
	return (
		<ErrorPageContainer>
			<BiCheckCircle id='bugSVG' />
			<div>
				<h1>Dados enviados com sucesso!</h1>
				<p>
					Por favor, aguarde enquanto processamos a sua mensagem. Entraremos em
					contacto em breve...
				</p>
			</div>

			<Button
				icon={<BiChevronLeft />}
				text={'Voltar para a página anterior'}
				event={(e) => {
					window.history.back();
				}}
			/>
		</ErrorPageContainer>
	);
};

export default DataSentSucess;
