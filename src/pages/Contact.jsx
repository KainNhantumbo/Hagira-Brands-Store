import { ContactContainer } from '../styles/contact';
import { BiSend, BiMessageCheck, BiHelpCircle, BiAlarm } from 'react-icons/bi';
import Button from '../components/Button';

const Contact = () => {
	return (
		<ContactContainer>
			<section>
				<h1>
					Contacto <BiMessageCheck />{' '}
				</h1>
				<h2>Esteja sempre ligado.</h2>
				<p>
					Por favor use uma das formas de contacto descritas abaixo ou use o
					formulário de contacto abaixo se tiver questões de sobre os nossos
					produtos e serviços.
				</p>
			</section>
			<div className='contacts'>
				<h3>E-mail</h3>
				<span>
					<a href='http://mail.google.com/hagira-brands@gmail.com'>
						hagira-brands@gmail.com
					</a>
				</span>
				<h3>Endereço</h3>
				<address>Matola, São Damaso - Maputo, Moçambique.</address>
			</div>
			<article>
				<h1>Formulário de Contacto</h1>
				<form>
					<label htmlFor='assunto'>Assunto</label>
					<input type='text' name='assunto' />
					<label htmlFor='message'>Mensagem</label>
					<textarea name='message' id='message' cols='30' rows='10'></textarea>
				</form>
				<div>
					<Button text={'Enviar formulário'} icon={<BiSend />} />
				</div>
			</article>
			<section className='infograph'>
				<div>
					<BiHelpCircle />
					<h3>Tem alguma questão?</h3>
					<p>
						Veja a nossa <a href='/support'>seção de suporte</a>, onde você
						poderá encontrar respostas de perguntas comuns sobre como usar a
						nossa plataforma.
					</p>
				</div>
				<div>
					<BiAlarm />
					<h3>Horários de serviço</h3>
					<p>Segunda à sábado, das 9 horas da manhã às 17 horas.</p>
				</div>
			</section>
		</ContactContainer>
	);
};

export default Contact;
