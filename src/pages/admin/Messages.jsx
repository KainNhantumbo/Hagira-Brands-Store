import { MessagesContainer } from '../../styles/admin/messages';
import { BiX, BiTrash, BiEnvelopeOpen, BiMessageAlt } from 'react-icons/bi';
import Button from '../../components/Button';

const incomeMessages = [
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '4984612646',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asd342asndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '4984651651',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdkna768sndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '84984984984',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdknas23412ndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: '',
		message: 'asdjaosjda',
		phone: '89798465146',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdknasnda890890msd',
	},
];

const Messages = () => {
	return (
		<MessagesContainer>
			<section className='upper'>
				<h1>Mensagens Recebidas <BiEnvelopeOpen/> </h1>
			</section>
			<section className='messages-container'>
				{incomeMessages.map(({ _id, subject, email, phone, date }) => {
					return (
						<div key={_id} className='message'>
							<section>
								<div><h3>De:</h3> {!email ? phone : email}</div>
								<div><h3>Assunto: </h3>{subject.slice(0, 20)}...</div>
							</section>

							<span className='date'>
								Data:{' '}{date.date},{'  '} às {date.time}{' '}
							</span>
							<Button text={'Ver mensagem'} />
						</div>
					);
				})}
			</section>
		</MessagesContainer>
	);
};

export default Messages;
