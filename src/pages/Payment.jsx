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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { server_url } from '../services/urls';
import { createDate } from '../modules/module-scripts';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		phone: '',
		email: '',
		neighbourhood: '',
		city: '',
		adress: '',
		post_number: '',
		payment_method: 'M-PESA',
		comment: '',
	});
	const [payment_value, setPayment_value] = useState('');
	const [product_data, setProduct_data] = useState([]);
	const { id: product_id } = useParams();

	const populateFormData = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// sends a post request to server
	const requestPaidProduct = async (e) => {
		try {
			e.preventDefault();
			const { product: paidProduct } = product_data;
			formData.date = createDate();
			formData.payment_value = payment_value;
			formData.paid_product_id = paidProduct._id;
			formData.paid_product_name = paidProduct.name;
			formData.paid_product_price = paidProduct.price;

			const server_payment_url = `${server_url}/api/v1/payments`;
			await axios({
				method: 'post',
				url: server_payment_url,
				data: formData,
			});
			console.log(formData);
			// navigate('/data-sent');
		} catch (err) {
			console.log(err.message);
		}
	};

	// request product info
	const requestProduct = async () => {
		try {
			const server_product_url = `${server_url}/api/v1/products/${product_id}`;
			const { data: response } = await axios({
				method: 'get',
				url: server_product_url,
			});
			setProduct_data(() => response);
			setPayment_value(() => Number(response.product.price));
		} catch (err) {
			console.log(err.message);
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
					<Link to='/terms-and-conditions'>termos e condições</Link> nesta
					página, resultará na invalidação da sua encomenda.
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
								name='name'
								placeholder='Escreva o seu nome'
								maxLength={'30'}
								required
								onChange={(e) => populateFormData(e)}
							/>
						</div>
						<div>
							<label>Apelido</label>
							<input
								type='text'
								name='surname'
								placeholder='Escreva o seu apelido'
								maxLength={'30'}
								required
								onChange={(e) =>populateFormData(e)}
							/>
						</div>
					</section>
					<section>
						<div>
							<label>E-mail</label>
							<input
								type={'email'}
								name='email'
								placeholder='E-mail'
								maxLength={'30'}
								required
								onChange={(e) => populateFormData(e)}
							/>
						</div>
						<div>
							<label>Telefone</label>
							<input
								type='number'
								name='phone'
								maxLength='20'
								placeholder='Número de telefone'
								required
								onChange={(e) => populateFormData(e)}
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
								name='city'
								placeholder='Cidade ou localicade'
								required
								onChange={(e) => populateFormData(e)}
							/>
						</div>
						<div>
							<label>Bairro</label>
							<input
								type='text'
								name='neighbourhood'
								placeholder='Bairro'
								required
								onChange={(e) => populateFormData(e)}
							/>
						</div>
					</section>
					<section>
						<div>
							<label>Avenida e Número da Casa</label>
							<input
								type='text'
								name='adress'
								placeholder='Nome e número'
								required
								onChange={(e) => populateFormData(e)}
							/>
						</div>
						<div>
							<label>Código Postal</label>
							<input
								type='text'
								name='post_number'
								placeholder='Número do código'
								maxLength={'10'}
								onChange={(e) => populateFormData(e)}
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
								name='quantity'
								onChange={(e) => {
									populateFormData(e)
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
									name='payment_method'
									id='mpesa-method'
									value='M-PESA'
									defaultChecked
									onChange={(e) => populateFormData(e)}
								/>
							</label>
						</span>
						<span>
							<label htmlFor='emola-method'>
								E-Mola
								<input
									type='radio'
									name='payment_method'
									id='emola-method'
									value='E-MOLA'
									onChange={(e) => populateFormData(e)}
								/>
							</label>
						</span>
						<span>
							<label htmlFor='conta_movel-method'>
								Conta Móvel
								<input
									type='radio'
									name='payment_method'
									id='conta_movel-method'
									placeholder='Conta-Móvel'
									value={'CONTA-MÓVEL'}
									onChange={(e) => populateFormData(e)}
								/>
							</label>
						</span>
					</section>
					<label htmlFor='comment'>Informações adicionais</label>
					<textarea
						id='comment'
						name='comment'
						cols='30'
						rows='5'
						maxLength={'2500'}
						placeholder='Escreva quaisquer outras informações que precisar aqui...'
						onChange={(e) => populateFormData(e)}
					/>

					<span>
						Ao clicar em <em>Encomendar</em>, você concorda com os nossos{' '}
						<Link to='/terms-and-conditions'>termos de uso</Link> e{' '}
						<Link to='/privacy-policy'>política de privacidade</Link> da nossa
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
						Veja a nossa <Link to='/support'>seção de suporte</Link>, onde você
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
