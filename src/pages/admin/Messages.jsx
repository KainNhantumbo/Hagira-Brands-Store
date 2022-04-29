import { MessagesContainer } from '../../styles/admin/messages';
import {
	BiTrash,
	BiEnvelopeOpen,
	BiChevronLeft,
	BiMessageDetail,
} from 'react-icons/bi';
import Button from '../../components/Button';
import React, { useState } from 'react';
import { incomeMessages } from '../../modules/module-scripts';

const Messages = () => {
	const [messageModal, setMessageModal] = useState(false);
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');
	const [id, setId] = useState('');

	// opens the modal and sets message data on it to be viewed
	const viewMessage = (e) => {
		const id = e.target.id;
		const [message] = incomeMessages.filter((element) => {
			if (element._id === id) return element;
		});
		setEmail(() => message.email);
		setMessage(() => message.message);
		setPhone(() => message.phone);
		setSubject(() => message.subject);
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
				<section className='modal-container'>
					<div className='message-previewer'>
						<BiEnvelopeOpen className='svg'/>
						<div className='headers'>
							<h2>
								<strong>Remetente</strong>
							</h2>
							<span>
								<strong>E-mail: </strong>
								{email}
							</span>
							<span>
								<strong>Telefone: </strong>
								{phone ? phone : 'Não disponível'}
							</span>
							<h2>
								<strong>Assunto</strong>
							</h2>
							<span>{subject}</span>
						</div>
						<section className='message'>
							<h2>
								<strong>Mensagem</strong>
							</h2>
							<div>{message}</div>
						</section>
						<section className='actions'>
							<Button
								text={'Voltar'}
								icon={<BiChevronLeft />}
								event={(e) => setMessageModal((prevState) => !prevState)}
							/>
							<Button id={id} text={'Eliminar mensagem'} icon={<BiTrash />} />
						</section>
					</div>
				</section>
			) : null}

			<section className='messages-container'>
				{incomeMessages.map(({ _id, subject, email, phone, date }) => {
					return (
						<div key={_id} className='message'>
							<section>
								<div>
									<h3>De:</h3> {!email ? phone : email}
								</div>
								<div>
									<h3>Assunto: </h3>
									{subject.slice(0, 20)}...
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
		</MessagesContainer>
	);
};

export default Messages;
