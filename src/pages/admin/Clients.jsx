import { FaUserFriends } from 'react-icons/fa';
import { ClientsContainer } from '../../styles/admin/clients';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

	return (
		<ClientsContainer>
			<section className='upper'>
				<h1>
					Clientes <FaUserFriends />{' '}
				</h1>
			</section>
      
		</ClientsContainer>
	);
};

export default Clients;
