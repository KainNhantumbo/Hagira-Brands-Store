import { useState, useEffect } from 'react';
import { ComunicateContainer } from '../../styles/admin/comunicate';
import Button from '../../components/Button';
import axios from 'axios';
import { FaBullhorn, BiSend } from 'react-icons/all';
import { server_url } from '../../services/urls';

const Comunicate = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [errorStyles, setErrorStyles] = useState({});
	const [messageContent, setMessageContent] = useState('');
	const [messageSubject, setMessageSubject] = useState('');
	const [sendMethod, setSendMethod] = useState('email');
	const [messageDestination, setMessageDestination] = useState('');

	const formDataHandler = (e) => {
		e.preventDefault();
		const message = {};
		if (!messageSubject) {
			setErrorMessage(() => 'Por favor, escreva o assunto da sua mensagem.');
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			message.subject = messageSubject;
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
		}
		if (!messageContent) {
			setErrorMessage(
				() => 'Por favor, escreva uma mensagem antes de enviar o formulário.'
			);
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			message.message = messageContent;
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
		}
		if (!messageDestination) {
			setErrorStyles(() => ({ color: 'red' }));
			if (sendMethod === 'email') {
				setErrorMessage(
					() => 'Por favor, digite o e-mail antes de enviar a mensagem.'
				);
			} else {
				setErrorMessage(
					() => 'Por favor, digite o número antes de enviar a mensagem.'
				);
			}
			return;
		} else {
			message.to = messageDestination;
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
		}
		return message;
	};

	// sends a post request to server
	const sendMessageRequest = async (e) => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const post_url = `${server_url}/api/v1/emails`;
			const message = formDataHandler(e);
			if (sendMethod === 'email') {
				await axios({
					method: 'post',
					data: message,
					url: post_url,
					headers: {
						authorization: `Bearer ${access_token}`,
					},
				});
				e.target.reset();
				return window.location.assign('/data-sent');
			} else {
				return;
			}
		} catch (err) {
			console.log(err);
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
		<ComunicateContainer>
			<section className='messageForm'>
				<h1>
					Comunicar <FaBullhorn />{' '}
				</h1>
				<form onSubmit={sendMessageRequest}>
					<label htmlFor='assunto'>Assunto</label>
					<input
						type='text'
						id='assunto'
						required
						placeholder='Digite o assunto aqui...'
						onChange={(e) => setMessageSubject(e.target.value)}
					/>
					<label htmlFor='message'>Mensagem</label>
					<textarea
						id='message'
						required
						cols='30'
						rows='10'
						placeholder='Escreva a sua mensagem aqui...'
						onChange={(e) => setMessageContent(e.target.value)}
					></textarea>
					<label htmlFor='method'>Escolha o método de envio:</label>
					<select
						id='method'
						onChange={(e) => setSendMethod(() => e.target.value)}
					>
						<option value='email'>E-mail</option>
						<option value='whatsapp'>Whatsapp</option>
					</select>
					{sendMethod === 'whatsapp' ? (
						<>
							<label htmlFor='whatsapp'>Whatspp</label>
							<input
								type='number'
								id='whatsapp'
								placeholder='Escreva o número de telefone'
								onChange={(e) => setMessageDestination(e.target.value)}
							/>
						</>
					) : (
						<>
							<label htmlFor='email'>E-mail</label>
							<input
								type='text'
								id='email'
								placeholder='Escreva o e-mail'
								onChange={(e) => setMessageDestination(e.target.value)}
							/>
						</>
					)}
					<span style={errorStyles}>{errorMessage}</span>
					<Button type={'submit'} text={'Enviar mensagem'} icon={<BiSend />} />
				</form>
			</section>
		</ComunicateContainer>
	);
};

export default Comunicate;
