import { OverviewContainer } from '../../styles/admin/overview';
import { BiStats, BiMessageDetail, BiStore, BiLayer } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
	const [visitors, setVisitors] = useState('...');
	const [messages, setMessages] = useState('...');
	const [produts, setProduts] = useState('...');

	const server_getAmountOfProducts_url =
		'http://localhost:4630/api/v1/products';
	const server_getAmountOfVisitors_url =
		'http://localhost:4630/api/v1/visitors';
	const server_getAmountOfMessages_url =
		'http://localhost:4630/api/v1/messages';

	const fetchData = async () => {
		try {
			const { data: response_messages } = await axios({
				method: 'get',
				url: server_getAmountOfMessages_url,
			});
			const { data: response_visitors } = await axios({
				method: 'get',
				url: server_getAmountOfVisitors_url,
			});
			const { data: response_products } = await axios({
				method: 'get',
				url: server_getAmountOfProducts_url,
			});
			setMessages(() => response_messages.results);
			setVisitors(() => response_visitors.results);
			setProduts(() => response_products.results);
			console.log(response_messages.data);
		} catch (err) {}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<OverviewContainer>
			<section className='upper'>
				<h1>
					Overview <BiLayer />
				</h1>
			</section>
			<section className='infograph'>
				<div>
					<BiStats />
					<h3>Visitas a Loja</h3>
					<p>{visitors}</p>
				</div>
				<div>
					<BiMessageDetail />
					<h3>Mensagens Recebidas</h3>
					<p>{messages}</p>
				</div>
				<div>
					<BiStore />
					<h3>Produtos na Loja</h3>
					<p>{produts}</p>
				</div>
			</section>
		</OverviewContainer>
	);
};

export default Overview;
