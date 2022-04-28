import { MessagesContainer } from '../../styles/admin/messages';
import {
	BiX,
	BiTrash,
	BiEnvelopeOpen,
	BiMessageAlt,
	BiChevronLeft,
} from 'react-icons/bi';
import Button from '../../components/Button';
import React, { useState } from 'react';
import { incomeMessages } from '../../modules/module-scripts';

const Messages = () => {
	const [messageModal, setMessageModal] = useState(true);

	return (
		<MessagesContainer>
			<section className='upper'>
				<h1>
					Mensagens Recebidas <BiEnvelopeOpen />{' '}
				</h1>
			</section>
			{messageModal ? (
				<section className='modal-container'>
					<div className='message-previewer'>
						<div className='headers'>
							<h2>
								<strong>Remetente</strong>
							</h2>
							<span>
								<strong>E-mail: </strong>
								mail@mail.com
							</span>
							<span>
								<strong>Telefone: </strong>
								84 569 4536
							</span>
						</div>

						<section className='message'>
							<h2>
								<strong>Mensagem</strong>
							</h2>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
								voluptatem exercitationem perferendis esse adipisci? Doloribus
								repellat quas delectus voluptas nisi doloremque eaque,
								architecto ad fugit beatae tenetur, voluptatum maxime deserunt
								esse sapiente eius repellendus voluptate amet explicabo non
								dolorem mollitia? Asperiores tenetur possimus sed ab quis et
								dolore tempore vitae, dicta amet maiores vel excepturi
								consequatur perspiciatis iusto blanditiis, eius sunt,
								accusantium exercitationem sint corrupti? Nemo delectus facere
								ea reiciendis necessitatibus dolor quis, beatae quas iste
								asperiores odit. Enim.
							</div>
						</section>
						<section className='actions'>
							<Button
								text={'Voltar'}
								icon={<BiChevronLeft />}
								event={(e) => setMessageModal((prevState) => !prevState)}
							/>
							<Button text={'Eliminar mensagem'} icon={<BiTrash />} />
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
							<Button text={'Ver mensagem'} />
						</div>
					);
				})}
			</section>
		</MessagesContainer>
	);
};

export default Messages;
