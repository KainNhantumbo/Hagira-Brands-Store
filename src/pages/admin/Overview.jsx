import { OverviewContainer } from '../../styles/admin/overview';
import { BiStats, BiMessageDetail, BiEnvelope, BiShoppingBag, BiStore, BiBug} from 'react-icons/bi';
import React, { useState } from 'react';


const Overview = () => {
  const [visitors, setVisitors] = useState(0);
  const [emails, setEmails] = useState(0);
  const [messages, setMessages] = useState(0);
  const [orders, setOrders] = useState(0);
  const [produts, setProduts] = useState(0);
  const [reports, setReports] = useState(0);


	return <OverviewContainer>
    	<section className='infograph'>
				<div>
					<BiStats />
					<h3>Visitas a Loja</h3>
					<p>
						{visitors}
					</p>
				</div>
				<div>
					<BiMessageDetail />
					<h3>Mensagens Recebidas</h3>
					<p>{messages}</p>
				</div>
				<div>
					<BiEnvelope />
					<h3>E-mails Recebidos</h3>
					<p>{emails}</p>
				</div>
				<div>
					<BiShoppingBag />
					<h3>Encomendas Personalizadas</h3>
					<p>{orders}</p>
				</div>
				<div>
					<BiStore />
					<h3>Produtos na Loja</h3>
					<p>{produts}</p>
				</div>
				<div>
					<BiBug />
					<h3>Reports</h3>
					<p>{reports}</p>
				</div>

			</section>
  </OverviewContainer>;
};

export default Overview;
