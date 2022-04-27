import { ComunicateContainer } from '../../styles/admin/comunicate';
import { BiMessage, BiSend } from 'react-icons/bi';
import React, { useState } from 'react';
import Button from '../../components/Button';

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

		// checks the message subject, if not present, advices the user about it
		if (!messageSubject) {
			setErrorMessage(() => 'Por favor, escreva o assunto da sua mensagem.');
			setErrorStyles(() => ({ color: 'red' }));
			return;
		} else {
			message.subject = messageSubject;
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
		}

		// checks the message user email, if not present, advices the user about it
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

		// checks the message subject, if not preset, advices the user about it
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
			message.destination = messageDestination;
			message.method = sendMethod;
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
		}
	};

	return (
		<ComunicateContainer>
			<section className='messageForm'>
				<h1>
					Nova mensagem <BiMessage />{' '}
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