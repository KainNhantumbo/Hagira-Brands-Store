import {
	FaClock,
	FaEllipsisV,
	FaEnvelope,
	FaTrash,
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

	// fetch data from server
	const fetchClients = async () => {
		try {
			const server_payments_url = `${server_url}/api/v1/payments`;
			const { data: response } = await axios({
				method: 'get',
				url: server_payments_url,
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

	return (
		<ClientsContainer>
			<section className='upper'>
				<h1>
					Clientes <FaUserFriends />{' '}
				</h1>
			</section>
			<section>
				<ul className='payments'>
					{clients.map(({ _id, name, surname, quantity, email, date }) => {
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
									<span>
										{' '}
										<Button id={_id} text={'Rejeitar'} icon={<FaTrash />} />
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
