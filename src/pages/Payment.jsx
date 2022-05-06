import { PaymentContainer } from '../styles/Payment';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import {
	FaMapMarkerAlt,
	FaMoneyCheckAlt,
	FaTruckLoading,
	FaUser,
} from 'react-icons/fa';
import { BiAlarm, BiHelpCircle, BiLock, BiTrash } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
	const [phone, setPhone] = useState('');
	const [comment, setComment] = useState('');
	const [email, setEmail] = useState('');
	const [errorStyles, setErrorStyles] = useState();
	const [messageStatus, setMessageStatus] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [payment_value, setPayment_value] = useState('');
	const [quantity, setQuantity] = useState('');
	const [city, setCity] = useState('');
	const [neighbourhood, setNeighbourhood] = useState();
	const [postNumber, setPostNumber] = useState('');
	const [adress, setAdress] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const { id: product_id } = useParams();
	const [product_data, setProduct_data] = useState([]);

	function log(term) {
		return console.log(term);
	}
	const validateFormInputs = () => {};

	const requestPaidProduct = async (e) => {
		try {
			e.preventDefault();
		} catch (err) {
			console.log(err);
		}
	};

	// request product info
	const server_product_url = `http://localhost:4630/api/v1/products/${product_id}`;
	const requestProduct = async () => {
		try {
			const { data: response } = await axios({
				method: 'get',
				url: server_product_url,
			});
			setProduct_data(() => response);
			setPayment_value(() => Number(response.product.price));
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render to get data from server
	useEffect(() => {
		requestProduct();

		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	return (
		<PaymentContainer>
			<section className='intro'>
				<h1>Formulário de Pagamento </h1>
				<h2>
					Preencha o formulário correctamente para validar a sua encomenda.
				</h2>
				<p>
					Por favor, tenha em mente que a inserção de valores inválidos,
					incorrectos ou que ferem os nossos{' '}
					<a href='/terms-and-conditions'>termos e condições</a> nesta página,
					resultará na invalidação da sua encomenda.
				</p>
			</section>
			<article className='messageForm'>
				<form onSubmit={requestPaidProduct}>
					<h3>
						<FaUser /> Informações Pessoais
					</h3>
					<section>
						<div>
							<label>Nome</label>
							<input
								type='text'
								placeholder='Escreva o seu nome'
								maxLength={'30'}
								onChange={(e) => setName(() => e.target.value)}
							/>
						</div>
						<div>
							<label>Apelido</label>
							<input
								type='text'
								placeholder='Escreva o seu apelido'
								maxLength={'30'}
								onChange={(e) => setSurname(() => e.target.value)}
							/>
						</div>
					</section>
					<section>
						<div>
							<label>E-mail</label>
							<input
								type={'email'}
								placeholder='E-mail'
								maxLength={'30'}
								onChange={(e) => setEmail(() => e.target.value)}
							/>
						</div>
						<div>
							<label>Telefone</label>
							<input
								type='number'
								maxLength='20'
								placeholder='Número de telefone'
								onChange={(e) => setPhone(() => e.target.value)}
							/>
						</div>
					</section>
					<h3>
						<FaMapMarkerAlt /> Endereço de entrega
					</h3>
					<section>
						<div>
							<label>Cidade</label>
							<input
								type='text'
								placeholder='Cidade ou localicade'
								onChange={(e) => setCity(() => e.target.value)}
							/>
						</div>
						<div>
							<label>Bairro</label>
							<input
								type='text'
								placeholder='Bairro'
								onChange={(e) => setNeighbourhood(() => e.target.value)}
							/>
						</div>
					</section>
					<section>
						<div>
							<label>Avenida e Número da Casa</label>
							<input
								type='text'
								placeholder='Nome e número'
								onChange={(e) => setAdress(() => e.target.value)}
							/>
						</div>
						<div>
							<label>Código Postal</label>
							<input
								type='text'
								placeholder='Número do código'
								onChange={(e) => setPostNumber(() => e.target.value)}
							/>
						</div>
					</section>
					<h3>
						<FaTruckLoading /> Quantidade
					</h3>
					<section>
						<div>
							<label>Quantidade de Peças</label>
							<input
								type='number'
								defaultValue={'1'}
								min={'1'}
								max={'10'}
								onChange={(e) => {
									setQuantity(() => e.target.value);
									setPayment_value(() => {
										const value = Number(e.target.value);
										const price = Number(product_data.product.price);
										if (!value || value === undefined) return 0;
										return value * price;
									});
								}}
							/>
						</div>
						<div>
							<label> Valor Total a Pagar</label>
							<input type='text' disabled defaultValue={payment_value} />
						</div>
					</section>
					<h3>
						<FaMoneyCheckAlt /> Meio de Pagamento
					</h3>
					<section className='payment'>
						<span>
							<label htmlFor='mpesa-method'>
								M-Pesa
								<input
									type='radio'
									name='payment-method'
									id='mpesa-method'
									value='M-PESA'
									defaultChecked
									onChange={(e) => setPaymentMethod(() => e.target.value)}
								/>
							</label>
						</span>
						<span>
							<label htmlFor='emola-method'>
								E-Mola
								<input
									type='radio'
									name='payment-method'
									id='emola-method'
									value='E-MOLA'
									onChange={(e) => setPaymentMethod(() => e.target.value)}
								/>
							</label>
						</span>
						<span>
							<label htmlFor='conta_movel-method'>
								Conta Móvel
								<input
									type='radio'
									name='payment-method'
									id='conta_movel-method'
									placeholder='Conta-Móvel'
									value={'CONTA-MÓVEL'}
									onChange={(e) => setPaymentMethod(() => e.target.value)}
								/>
							</label>
						</span>
					</section>
					<label htmlFor='comment'>Informações adicionais</label>
					<textarea
						id='comment'
						cols='30'
						rows='5'
						maxLength={'2500'}
						placeholder='Escreva quaisquer outras informações que precisar aqui...'
						onChange={(e) => setComment(e.target.value)}
					></textarea>
					<span style={errorStyles}>{messageStatus}</span>
					<span>
						Ao clicar em <em>Encomendar</em>, você concorda com os nossos{' '}
						<a href='/terms-and-conditions'>termos de uso</a> e{' '}
						<a href='/privacy-policy'>política de privacidade</a> da nossa
						plataforma.
					</span>
					<div className='actions'>
						<Button type={'submit'} text={'Encomendar'} icon={<BiLock />} />
						<Button
							type={'reset'}
							text={'Limpar dados'}
							icon={<BiTrash />}
							event={(e) => {
								window.scroll({
									left: 0,
									top: 0,
									behavior: 'smooth',
								});
							}}
						/>
					</div>
				</form>
			</article>
			<section className='infograph'>
				<div>
					<BiHelpCircle />
					<h3>Tem alguma questão?</h3>
					<p>
						Veja a nossa <a href='/support'>seção de suporte</a>, onde você
						poderá encontrar respostas de perguntas comuns sobre como usar a
						nossa plataforma.
					</p>
				</div>
				<div>
					<BiAlarm />
					<h3>Horários de serviço</h3>
					<p>Segunda à sábado, das 9 horas da manhã às 17 horas.</p>
				</div>
			</section>
		</PaymentContainer>
	);
};

export default Payment;
