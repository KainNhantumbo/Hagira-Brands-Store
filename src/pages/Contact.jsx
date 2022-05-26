import { ContactContainer } from '../styles/contact';
import {
	BiSend,
	BiMessageCheck,
	BiHelpCircle,
	BiAlarm,
	BiEnvelope,
	BiMap,
	MdMessage,
} from 'react-icons/all';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import { createDate } from '../modules/module-scripts';
import axios from 'axios';
import { server_url } from '../services/urls';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
	const navigate = useNavigate();
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);
	const [errorStyles, setErrorStyles] = useState({});
	const [messageContent, setMessageContent] = useState('');
	const [messageEmail, setMessageEmail] = useState('');
	const [messageSubject, setMessageSubject] = useState('');
	const [phone, setPhone] = useState('');

	const formDataHandler = (e) => {
		e.preventDefault();
		const formData = {};
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
		}

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
			formData.email = messageEmail;
			setMessageStatus(
				() => 'Receberá a sua resposta em seu email assim que possível.'
			);
			setErrorStyles(() => ({}));
		}

		if (phone.length < 9) {
			setPhone(() => '');
		}
		formData.phone = phone.slice(0, 19);
		formData.date = createDate();
		return formData;
	};

	// makes a post request to the server
	const sendMessageRequest = async (e) => {
		const server_post_url = `${server_url}/api/v1/messages`;
		try {
			e.preventDefault();
			const message = formDataHandler(e);
			if (!message) return;
			await axios({
				method: 'post',
				url: server_post_url,
				data: message,
			});
			e.target.reset();
			navigate('/data-sent');
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);
	return (
		<ContactContainer>
			<section className='intro'>
				<h1>
					Contacto <BiMessageCheck />{' '}
				</h1>
				<h2>Esteja sempre ligado.</h2>
				<p>
					Por favor use uma das formas de contacto descritas abaixo, clique no{' '}
					<i>link</i> de e-mail ou use o<strong> formulário</strong> de contacto
					mais abaixo se tiver questões de sobre os nossos produtos e serviços.
				</p>
			</section>
			<div className='contacts'>
				<h3>
					<BiEnvelope />
					<span>E-mail</span>
				</h3>
				<span>
					<Link
						target='_blank'
						rel='noreferrer'
						to='mailto:hagira-brands@gmail.com'
					>
						hagira-brands@gmail.com
					</Link>
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
				<form onSubmit={sendMessageRequest}>
					<label htmlFor='assunto'>Assunto</label>
					<input
						type='text'
						id='assunto'
						maxLength={'120'}
						placeholder='Digite o assunto aqui...'
						onChange={(e) => setMessageSubject(e.target.value)}
					/>
					<label htmlFor='message'>Mensagem</label>
					<textarea
						id='message'
						cols='30'
						rows='10'
						maxLength={'2500'}
						placeholder='Escreva a sua mensagem aqui...'
						onChange={(e) => setMessageContent(e.target.value)}
					></textarea>
					<label htmlFor='email'>E-mail</label>
					<input
						type='text'
						id='email'
						placeholder='E-mail'
						maxLength={'30'}
						onChange={(e) => setMessageEmail(e.target.value)}
					/>
					<label htmlFor='phone'>Telefone (opcional)</label>
					<input
						type='number'
						id='phone'
						maxLength='20'
						onChange={(e) => setPhone(() => e.target.value)}
						placeholder='Número de telefone'
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
						Veja a nossa <Link to='/support'>seção de suporte</Link>, onde você
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
