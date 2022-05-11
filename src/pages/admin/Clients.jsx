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
	const [modalState, setModalState] = useState(false);
	const [infoModalState, setInfoModalState] = useState(false);
	const [id, setId] = useState('');

	// detail states
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [comment, setComment] = useState('');
	const [date, setDate] = useState({});
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [quantity, setQuantity] = useState('');
	const [neighbourhood, setNeighbourhood] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const [paymentValue, setPaymentValue] = useState('');
	const [postNumber, setPostNumber] = useState('');
	const [city, setCity] = useState('');
	const [adress, setAdress] = useState();
	const [paid_id, setPaid_id] = useState('');
	const [paid_name, setPaid_name] = useState('');
	const [paid_price, setPaid_price] = useState('');

	// fetch data from server
	const fetchClients = async () => {
		try {
			const payments_url = `${server_url}/api/v1/payments`;
			const { data: response } = await axios({
				method: 'get',
				url: payments_url,
			});

			setClients(() => response.payments);
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
			const deletePayments_url = `${server_url}/api/v1/payments/${id}`;
			console.log(e.target, id);
			await axios({ method: 'delete', url: deletePayments_url });
			setModalState((prevState) => !prevState);
			fetchClients();
		} catch (err) {
			console.log(err);
		}
	};

	// loads the clients object to show its details
	const viewPaymentDetails = (e) => {
		const id = e.target.id;

		const [paymentDetails] = clients.filter((client) => {
			if (client._id === id) return client;
			return null;
		});

		setEmail(() => paymentDetails.email);
		setPhone(() => paymentDetails.phone);
		setAdress(() => paymentDetails.adress);
		setCity(() => paymentDetails.city);
		setComment(() => paymentDetails.comment);
		setDate(() => paymentDetails.date);
		setNeighbourhood(() => paymentDetails.neighbourhood);
		setName(() => paymentDetails.name);
		setSurname(() => paymentDetails.surname);
		setPaymentMethod(() => paymentDetails.payment_method);
		setPaymentValue(() => paymentDetails.payment_value);
		setPostNumber(() => paymentDetails.post_number);
		setQuantity(() => paymentDetails.quantity);
		setInfoModalState((prevState) => !prevState);
		setPaid_id(() => paymentDetails.paid_product_id);
		setPaid_name(() => paymentDetails.paid_product_name);
		setPaid_price(() => paymentDetails.paid_product_price);
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
					href={`mailto:${email}`}
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
						{`${name} ${surname}`}
					</span>
					<span>
						<strong>E-mail: </strong>
						{email}
					</span>
					<span>
						<strong>Telefone: </strong>
						{phone}
					</span>
					<h2>
						<strong>Endereço de Entrega</strong>
					</h2>
					<span>
						<strong>Cidade: </strong>
						<span>{city}</span>
					</span>
					<span>
						<strong>Bairro: </strong>
						{neighbourhood}
					</span>
					<span>
						<strong>Endereço: </strong>
						{adress}
					</span>
					{postNumber ? (
						<span>
							<strong>Caixa Postal: </strong>
							{postNumber}
						</span>
					) : null}

					<h2>
						<strong>Detalhes do Produto Pago</strong>
					</h2>
					<span>
						<strong>ID do Producto: </strong>
						{paid_id}
					</span>
					<span>
						<strong>Nome do Produto: </strong>
						{paid_name}
					</span>
					<span>
						<strong>Preço do Produto: </strong>
						{paid_price},00 MT
					</span>

					<h2>
						<strong>Detalhes do Pagamento</strong>
					</h2>
					<span>
						<strong>Pago por: </strong>
						{paymentMethod}
					</span>
					<span>
						<strong>Valor total: </strong>
						{paymentValue},00 MT
					</span>
					<span>
						<strong>Quantidade: </strong>
						{quantity}
					</span>
				</div>
				{comment ? (
					<section className='message'>
						<h2>
							<strong>Comentário do Cliente</strong>
						</h2>
						<div>{comment}</div>
					</section>
				) : null}
				<section className='details-footer'>
					<span>
						<strong>Data:</strong> {date?.date}
					</span>
					<span>
						<strong>Hora:</strong> {date?.time}
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
