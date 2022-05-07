import {
	FaChevronLeft,
	FaClock,
	FaEllipsisV,
	FaEnvelope,
	FaTrash,
	FaTrashAlt,
	FaUser,
	FaUserFriends,
} from 'react-icons/fa';
import { ClientsContainer } from '../../styles/admin/clients';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import { server_url } from '../../services/urls';

const Clients = () => {
	const [clients, setClients] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [infoModalState, setinfoModalState] = useState(true);
	const [id, setId] = useState('');

	// fetch data from server
	const fetchClients = async () => {
		try {
			const payments_url = `${server_url}/api/v1/payments`;
			const { data: response } = await axios({
				method: 'get',
				url: payments_url,
			});

			setClients(() => response.payments);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		fetchClients();
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	const nameSlicer = (name, surname) => {
		let names = `${name} ${surname}`;
		if (names.length > 15) {
			return names.slice(0, 15) + '...';
		}
		return names;
	};

	const deletePaymentRequest = async (e) => {
		try {
			const deletePayments_url = `${server_url}/api/v1/payments/${id}`;
			console.log(e.target, id);
			await axios({ method: 'delete', url: deletePayments_url });
			setModalState((prevState) => !prevState);
			fetchClients();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ClientsContainer>
			{modalState ? (
				<section
					className='modal-container'
					onClick={(e) => {
						if (e.target.classList.contains('modal-container')) {
							setModalState((prevState) => !prevState);
						}
					}}
				>
					<div className='message-previewer'>
						<section className='advice-info'>
							<FaTrashAlt />
							<h3>Pretende eliminar permanentemente este pedido?</h3>
						</section>
						<section className='actions'>
							<Button
								text={'Cancelar'}
								event={(e) => setModalState((prevState) => !prevState)}
							/>
							<Button
								id={id}
								text={'Eliminar'}
								event={(e) => deletePaymentRequest(e)}
							/>
						</section>
					</div>
				</section>
			) : null}
			<section className='upper'>
				<h1>
					Clientes <FaUserFriends />{' '}
				</h1>
			</section>
			<section>
				<ul className='payments'>
					{clients.map(({ _id, name, surname, email, date }) => {
						return (
							<li key={_id}>
								<div className='common'>
									<h3>
										<FaUser /> Nome
									</h3>
									<span>{nameSlicer(name, surname)}</span>
								</div>
								<div className='common'>
									<h3>
										<FaEnvelope /> E-mail
									</h3>
									<span>{email}</span>
								</div>
								<div className='common'>
									<h3>
										<FaClock /> Data do Pedido
									</h3>
									<span className='date'>{date?.date}</span>
								</div>
								<div className='common buttons'>
									<span id={_id}>
										{' '}
										<Button
											id={_id}
											text={'Rejeitar'}
											icon={<FaTrash />}
											event={(e) => {
												setId(() => {
													return e.target.id;
												});
												setModalState((prevState) => !prevState);
											}}
										/>
									</span>
									<span>
										<Button id={_id} text={'Detalhes'} icon={<FaEllipsisV />} />
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</ClientsContainer>
	);
};

export default Clients;
