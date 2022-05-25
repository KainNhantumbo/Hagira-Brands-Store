import {
	FaChevronLeft,
	FaClock,
	FaEllipsisV,
	FaEnvelope,
	FaParachuteBox,
	FaReply,
	FaTrash,
	FaTrashAlt,
	FaUser,
	FaUserFriends,
} from 'react-icons/fa';
import React, { useState, useEffect, createContext } from 'react';
import { ClientsContainer } from '../../styles/admin/clients';
import { server_url } from '../../services/urls';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

export const clientsContext = createContext();

const Clients = () => {
	const [clients, setClients] = useState([]);
	const [paymentViewer, setPaymentViewer] = useState({});
	const [modalState, setModalState] = useState(false);
	const [infoModalState, setInfoModalState] = useState(false);
	const [id, setId] = useState('');

	// fetch data from server
	const fetchClients = async () => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const payments_url = `${server_url}/api/v1/payments`;
			const { data: response } = await axios({
				method: 'get',
				url: payments_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			setClients(() => response.payments);
		} catch (err) {
			console.log(err.message);
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

	const emailSlicer = (email) => {
		if (email.length > 20) return email.slice(0, 19) + '...';
		return email;
	};

	const nameSlicer = (name, surname) => {
		let names = `${name} ${surname}`;
		if (names.length > 15) {
			return names.slice(0, 15) + '...';
		}
		return names;
	};

	// deletes a payment
	const deletePaymentRequest = async (e) => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const deletePayments_url = `${server_url}/api/v1/payments/${id}`;
			await axios({
				method: 'delete',
				url: deletePayments_url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			setModalState((prevState) => !prevState);
			fetchClients();
		} catch (err) {
			console.log(err.message);
		}
	};

	// loads the clients object to show its details
	const viewPaymentDetails = (e) => {
		const id = e.target.id;
		const [paymentDetails] = clients.filter((client) => {
			if (client._id === id) return client;
			return {};
		});
		setPaymentViewer(paymentDetails);
		setInfoModalState((prevState) => !prevState);
	};

	const ConfirmModal = () => (
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
	);

	const PaymentDetailsModal = () => (
		<section
			className='modal_info-container'
			onClick={(e) => {
				if (e.target.classList.contains('modal_info-container')) {
					setInfoModalState((prevState) => !prevState);
				}
			}}
		>
			<div className='message-previewer'>
				<a
					href={`mailto:${paymentViewer.email}`}
					className='reply'
					target={'_blank'}
					rel='noreferrer'
				>
					<FaReply />
				</a>
				<div className='headers'>
					<h2>
						<strong>Dados do Cliente</strong>
					</h2>
					<span>
						<strong>Nome: </strong>
						{`${paymentViewer.name} ${paymentViewer.surname}`}
					</span>
					<span>
						<strong>E-mail: </strong>
						{paymentViewer.email}
					</span>
					<span>
						<strong>Telefone: </strong>
						{paymentViewer.phone}
					</span>
					<h2>
						<strong>Endereço de Entrega</strong>
					</h2>
					<span>
						<strong>Cidade: </strong>
						<span>{paymentViewer.city}</span>
					</span>
					<span>
						<strong>Bairro: </strong>
						{paymentViewer.neighbourhood}
					</span>
					<span>
						<strong>Endereço: </strong>
						{paymentViewer.adress}
					</span>
					{paymentViewer.post_number ? (
						<span>
							<strong>Caixa Postal: </strong>
							{paymentViewer.post_number}
						</span>
					) : null}

					<h2>
						<strong>Detalhes do Produto Pago</strong>
					</h2>
					<span>
						<strong>ID do Produto: </strong>
						{paymentViewer.paid_product_id}
					</span>
					<span>
						<strong>Nome do Produto: </strong>
						{paymentViewer.paid_product_name}
					</span>
					<span>
						<strong>Preço do Produto: </strong>
						{paymentViewer.paid_product_price},00 MT
					</span>

					<h2>
						<strong>Detalhes do Pagamento</strong>
					</h2>
					<span>
						<strong>Pago por: </strong>
						{paymentViewer.payment_method}
					</span>
					<span>
						<strong>Valor total: </strong>
						{paymentViewer.payment_value},00 MT
					</span>
					<span>
						<strong>Quantidade: </strong>
						{paymentViewer.quantity}
					</span>
				</div>
				{paymentViewer.comment ? (
					<section className='message'>
						<h2>
							<strong>Comentário do Cliente</strong>
						</h2>
						<div>{paymentViewer.comment}</div>
					</section>
				) : null}
				<section className='details-footer'>
					<span>
						<strong>Data:</strong> {paymentViewer.date?.date}
					</span>
					<span>
						<strong>Hora:</strong> {paymentViewer.date?.time}
					</span>
				</section>
				<section className='actions'>
					<Button
						text={'Voltar'}
						icon={<FaChevronLeft />}
						event={(e) => setInfoModalState((prevState) => !prevState)}
					/>
				</section>
			</div>
		</section>
	);

	return (
		<ClientsContainer>
			{modalState ? <ConfirmModal /> : null}

			{infoModalState ? <PaymentDetailsModal /> : null}

			<section className='upper'>
				<h1>
					Clientes <FaUserFriends />
				</h1>
			</section>
			<section className='main-container'>
				<SearchBar
					seter={setClients}
					fetcher={fetchClients}
					count={clients.length}
					location={'clients'}
				/>

				{clients.length < 1 ? (
					<article className='empty-message'>
						<FaParachuteBox />
						<section>
							<h2>Sem Clientes.</h2>
							<p>Estarão aqui os relatórios de pagamento que for a receber.</p>
						</section>
					</article>
				) : (
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
										<span>{emailSlicer(email)}</span>
									</div>
									<div className='common'>
										<h3>
											<FaClock /> Data do Pedido
										</h3>
										<span className='date'>
											{date?.date} {date?.time}{' '}
										</span>
									</div>
									<div className='common buttons'>
										<span>
											<Button
												id={_id}
												text={'Detalhes'}
												icon={<FaEllipsisV />}
												event={(e) => {
													viewPaymentDetails(e);
												}}
											/>
										</span>
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
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</section>
		</ClientsContainer>
	);
};

export default Clients;
