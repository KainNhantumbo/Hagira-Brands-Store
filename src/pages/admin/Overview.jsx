import { OverviewContainer } from '../../styles/admin/overview';
import { BiStats, BiMessageDetail, BiStore, BiLayer } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClock } from 'react-icons/fa';
import { server_url } from '../../services/urls';

const Overview = () => {
	const [visitors, setVisitors] = useState('...');
	const [messages, setMessages] = useState('...');
	const [produts, setProduts] = useState('...');
	const [time, setTime] = useState(() => {
		let time = clock();
		return time;
	});

	const fetchData = async () => {
		const server_getAmountOfProducts_url = `${server_url}/api/v1/products?product_fields=name`;
		const server_getAmountOfVisitors_url = `${server_url}/api/v1/visitors`;
		const server_getAmountOfMessages_url = `${server_url}/api/v1/messages`;
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const { data: response_messages } = await axios({
				method: 'get',
				url: server_getAmountOfMessages_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			const { data: response_visitors } = await axios({
				method: 'get',
				url: server_getAmountOfVisitors_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			const { data: response_products } = await axios({
				method: 'get',
				url: server_getAmountOfProducts_url,
			});
			setMessages(() => response_messages.results);
			setVisitors(() => response_visitors.results);
			setProduts(() => response_products.results);
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		fetchData();

		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	// sets a clock
	function clock() {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();

		if (minutes >= 0 && minutes < 10) {
			minutes = `0${minutes}`;
		}

		if (hours >= 0 && hours < 10) {
			hours = `0${hours}`;
		}
		return `${hours}:${minutes}`;
	}
	setInterval(() => {
		let actual_time = clock();
		setTime(() => actual_time);
	}, 1000);

	return (
		<OverviewContainer>
			<section className='upper'>
				<h1>
					Overview <BiLayer />
				</h1>
			</section>
			<section className='infograph'>
				<div>
					<FaClock />
					<h3>Relógio</h3>
					<p>{time}</p>
				</div>
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
