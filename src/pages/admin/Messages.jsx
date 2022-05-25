import { MessagesContainer } from '../../styles/admin/messages';
import {
	BiTrash,
	BiChevronLeft,
	BiMessageDetail,
	BiMessageAltX,
} from 'react-icons/bi';
import { FaReply } from 'react-icons/fa';
import Button from '../../components/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server_url } from '../../services/urls';

const Messages = () => {
	const [incomeMessages, setIncomeMessages] = useState([]);
	const [messageModal, setMessageModal] = useState(false);
	const [messageObj, setMessageObj] = useState({});
	const [id, setId] = useState('');

	// loads the messages from the server
	const getMessagesRequest = async () => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const server_get_url = `${server_url}/api/v1/messages`;
			const { data } = await axios({
				method: 'get',
				url: server_get_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			setIncomeMessages(() => data.messages);
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		getMessagesRequest();

		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	//  deletes a message by its id and updates the panel
	const deleteMessageRequest = async (e) => {
		try {
			const id = e.target.id;
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const server_post_url = `${server_url}/api/v1/messages/${id}`;
			await axios({
				method: 'delete',
				url: server_post_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			setMessageModal((prevState) => !prevState);
			getMessagesRequest();
		} catch (err) {
			console.log(err);
		}
	};

	// opens the modal and sets message data on it to be viewed
	const viewMessage = (e) => {
		const id = e.target.id;
		const [message] = incomeMessages.filter((element) => {
			if (element._id === id) return element;
			return {};
		});
		setMessageObj(message);
		setId(() => message._id);
		setMessageModal(() => true);
	};

	return (
		<MessagesContainer>
			<section className='upper'>
				<h1>
					Mensagens Recebidas <BiMessageDetail />{' '}
				</h1>
			</section>
			{messageModal ? (
				<section
					className='modal-container'
					onClick={(e) => {
						if (e.target.classList.contains('modal-container')) {
							setMessageModal((prevState) => !prevState);
						}
					}}
				>
					<div className='message-previewer'>
						<a
							href={`mailto:${messageObj.email}`}
							className='reply'
							target={'_blank'}
							rel='noreferrer'
						>
							<FaReply />
						</a>
						<div className='headers'>
							<h2>
								<strong>Remetente</strong>
							</h2>
							<span>
								<strong>E-mail: </strong>
								{messageObj.email}
							</span>
							<span>
								<strong>Telefone: </strong>
								{messageObj.phone ? messageObj.phone : 'Não disponível'}
							</span>
							<h2>
								<strong>Assunto</strong>
							</h2>
							<span>{messageObj.subject}</span>
						</div>
						<section className='message'>
							<h2>
								<strong>Mensagem</strong>
							</h2>
							<div>{messageObj.message}</div>
						</section>
						<section className='actions'>
							<Button
								text={'Voltar'}
								icon={<BiChevronLeft />}
								event={(e) => setMessageModal((prevState) => !prevState)}
							/>
							<Button
								id={id}
								text={'Eliminar mensagem'}
								icon={<BiTrash />}
								event={(e) => deleteMessageRequest(e)}
							/>
						</section>
					</div>
				</section>
			) : null}

			{incomeMessages.length === 0 ? (
				<article className='empty-message'>
					<BiMessageAltX />
					<section>
						<h2>Sem Mensagens</h2>
						<p>Estarão aqui as mensagens que for a receber.</p>
					</section>
				</article>
			) : (
				<section className='messages-container'>
					{incomeMessages.map(({ _id, subject, email, phone, date }) => {
						if (email.length > 15) {
							email = `${email.slice(0, 15)}...`;
						}

						if (subject.length > 15) {
							subject = `${subject.slice(0, 15)}...`;
						}

						return (
							<div key={_id} className='message'>
								<section>
									<div>
										<h3>De:</h3> {!email ? phone : email}
									</div>
									<div>
										<h3>Assunto: </h3>
										{subject}
									</div>
								</section>
								<span className='date'>
									Data: {date.date},{'  '} às {date.time}{' '}
								</span>
								<Button id={_id} text={'Ver mensagem'} event={viewMessage} />
							</div>
						);
					})}
				</section>
			)}
		</MessagesContainer>
	);
};

export default Messages;
