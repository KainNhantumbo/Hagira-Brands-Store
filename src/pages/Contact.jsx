import { ContactContainer } from '../styles/contact';
import {
	BiSend,
	BiMessageCheck,
	BiHelpCircle,
	BiAlarm,
	BiEnvelope,
	BiDirections,
} from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import Button from '../components/Button';
import React, { useState } from 'react';

const Contact = () => {
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);

  const [errorStyles, setErrorStyles] = useState({});

	return (
		<ContactContainer>
			<section className='intro'>
				<h1>
					Contacto <BiMessageCheck />{' '}
				</h1>
				<h2>Esteja sempre ligado.</h2>
				<p>
					Por favor use uma das formas de contacto descritas abaixo ou use o
					<strong> formulário</strong> de contacto mais abaixo se tiver questões
					de sobre os nossos produtos e serviços.
				</p>
			</section>
			<div className='contacts'>
				<h3>
					<BiEnvelope />
					<span>E-mail</span>
				</h3>
				<span>
					<a href='http://mail.google.com/hagira-brands@gmail.com'>
						hagira-brands@gmail.com
					</a>
				</span>
				<h3>
					<BiDirections />
					<span>Endereço</span>
				</h3>
				<address>Matola, São Damaso - Maputo, Moçambique.</address>
			</div>
			<article className='messageForm'>
				<h1>
					Formulário <MdMessage />{' '}
				</h1>
				<form>
					<label htmlFor='assunto'>Assunto</label>
					<input
						type='text'
						name='assunto'
						placeholder='Digite o assunto aqui...'
					/>
					<label htmlFor='message'>Mensagem</label>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						placeholder='Escreva a sua mensagem aqui...'
					></textarea>
					<label htmlFor='email'>O seu email</label>
					<input type='text' name='email' placeholder='E-mail' />
					<span style={errorStyles} >{messageStatus}</span>
				</form>
				<div>
					<Button text={'Enviar'} icon={<BiSend />} />
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
