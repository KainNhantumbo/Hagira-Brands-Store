import { ContactContainer } from '../styles/contact';
import {
	BiSend,
	BiMessageCheck,
	BiHelpCircle,
	BiAlarm,
	BiEnvelope,
	BiMap,
} from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import Button from '../components/Button';
import React, { useState } from 'react';

const Contact = () => {
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);
	const [errorStyles, setErrorStyles] = useState({});
	const [messageContent, setMessageContent] = useState('');
	const [messageEmail, setMessageEmail] = useState('');
	const [messageSubject, setMessageSubject] = useState('');

	const formDataHandler = (e) => {
		e.preventDefault();
		const formData = {};

		// checks the message subject, if not present, advices the user about it
		if (!messageSubject) {
			setMessageStatus(() => 'Por favor, descreva o assunto da sua mensagem.');
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			formData.subject = messageSubject;
			setMessageStatus(
				() => 'Receberá a sua resposta em seu email assim que possível.'
			);
			setErrorStyles(() => ({}));
			console.log(formData.subject);
		}

		// checks the message user email, if not present, advices the user about it
		if (!messageContent) {
			setMessageStatus(
				() => 'Por favor, escreva uma mensagem antes de enviar o formulário.'
			);
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			formData.message = messageContent;
			setMessageStatus(
				() => 'Receberá a sua resposta em seu email assim que possível.'
			);
			setErrorStyles(() => ({}));
		}

		// checks the message subject, if not preset, advices the user about it
		if (!messageEmail) {
			setMessageStatus(
				() => 'Por favor, digite o seu e-mail antes de enviar o formulário.'
			);
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else if (
			messageEmail.includes('@') === false ||
			messageEmail.includes('.') === false
		) {
			setMessageStatus(() => 'Por favor, digite o seu e-mail correctamente.');
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			formData.senderEmail = messageEmail;
      setMessageStatus(
				() => 'Receberá a sua resposta em seu email assim que possível.'
			);
			setErrorStyles(() => ({}));
		}

		window.location.assign('/data-sent')
	};

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
					<a target='_blank' href='mailto:hagira-brands@gmail.com'>
						hagira-brands@gmail.com
					</a>
				</span>
				<h3>
					<BiMap />
					<span>Endereço</span>
				</h3>
				<address>Matola, São Damaso - Maputo, Moçambique.</address>
			</div>
			<article className='messageForm'>
				<h1>
					Formulário <MdMessage />{' '}
				</h1>
				<form onSubmit={formDataHandler}>
					<label htmlFor='assunto'>Assunto</label>
					<input
						type='text'
						id='assunto'
						placeholder='Digite o assunto aqui...'
						onChange={(e) => setMessageSubject(e.target.value)}
					/>
					<label htmlFor='message'>Mensagem</label>
					<textarea
						id='message'
						cols='30'
						rows='10'
						placeholder='Escreva a sua mensagem aqui...'
						onChange={(e) => setMessageContent(e.target.value)}
					></textarea>
					<label htmlFor='email'>O seu email</label>
					<input
						type='text'
						id='email'
						placeholder='E-mail'
						onChange={(e) => setMessageEmail(e.target.value)}
					/>
					<span style={errorStyles}>{messageStatus}</span>
					<Button type={'submit'} text={'Enviar mensagem'} icon={<BiSend />} />
				</form>
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
