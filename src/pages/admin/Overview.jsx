import { OverviewContainer } from '../../styles/admin/overview';
import {
	BiStats,
	BiMessageDetail,
	BiStore,
} from 'react-icons/bi';
import React, { useState } from 'react';

const Overview = () => {
	const [visitors, setVisitors] = useState(0);
	const [messages, setMessages] = useState(0);
	const [produts, setProduts] = useState(0);

	return (
		<OverviewContainer>
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
