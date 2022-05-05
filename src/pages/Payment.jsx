import { PaymentContainer } from '../styles/Payment';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import {} from 'react-icons/fa';
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

	const validateForm = () => {};

	const requestPaidProduct = async (e) => {
		try {
			e.preventDefault();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<PaymentContainer>
			<section className='intro'>
				<h1>Formulário de Pagamento </h1>
				<h2>
					Preencha o formulário correctamente para validar a sua encomenda.
				</h2>
				<p>
					Por favor use uma das formas de contacto descritas abaixo, clique no{' '}
					<i>link</i> de e-mail ou use o<strong> formulário</strong> de contacto
					mais abaixo se tiver questões de sobre os nossos produtos e serviços.
				</p>
			</section>
			<article className='messageForm'>
				<form onSubmit={requestPaidProduct}>
					<h3>Informações Pessoais</h3>
					<div>
						<label>Nome</label>
						<input
							type='text'
							placeholder='Escreva o seu nome'
							maxLength={'30'}
						/>
						<label>Apelido</label>
						<input
							type='text'
							placeholder='Escreva o seu apelido'
							maxLength={'30'}
						/>
					</div>
					<div>
						<label>O seu email</label>
						<input
							type='text'
							placeholder='E-mail'
							maxLength={'30'}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Telefone</label>
						<input
							type='number'
							maxLength='20'
							onChange={(e) => setPhone(() => e.target.value)}
							placeholder='Número de telefone'
						/>
					</div>
					<h3>Endereço de entrega</h3>
					<div>
						<label>Cidade</label>
						<input type='text' placeholder='Cidade ou localicade' />
						<label>Bairro</label>
						<input type='text' placeholder='Bairro' />
					</div>
					<div>
						<label>Avenida e Número da Casa</label>
						<input type='text' placeholder='Nome e número' />
						<label>Código Postal</label>
						<input type='text' placeholder='Número do código' />
					</div>
					<h3>Quantidade</h3>
					<div>
						<label>Quantidade de Peças</label>
						<input type='number' defaultValue={'1'} min={'1'} max={'10'} onChange={e=> {
              
            }}/>
						<label> Valor a pagar</label>
						<input type='text' disabled value={payment_value} />
					</div>
					<h3>Meio de Pagamento</h3>
					<div>
						<label htmlFor='mpesa-method'>M-Pesa</label>
						<input
							type='radio'
							name='payment-method'
							id='mpesa-method'
							value='M-PESA'
						/>
						<label htmlFor='emola-method'>E-Mola</label>
						<input
							type='radio'
							name='payment-method'
							id='emola-method'
							value='E-MOLA'
						/>
						<label htmlFor='conta_movel-method'>Conta Móvel</label>
						<input
							type='radio'
							name='payment-method'
							id='conta_movel-method'
							placeholder='Conta-Móvel'
							value={'CONTA-MÓVEL'}
						/>
					</div>
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
					<div>
						<Button type={'submit'} text={'Encomendar'} icon={<BiLock />} />
						<Button
							type={'reset'}
							text={'Limpar dados'}
							icon={<BiTrash />}
							event={(e) => {
								e.preventDefault();
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
