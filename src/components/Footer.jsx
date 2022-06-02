import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import Button from './Button';
import React, { useState } from 'react';
import { createDate } from '../modules/module-scripts';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { server_url } from '../services/urls';

const Footer = () => {
	const navigate = useNavigate();
	const [newsletterSubscriptor, setNewsletterSubscriptor] = useState('');

	const process_subscription = () => {
		if (!newsletterSubscriptor) return;
		if (
			newsletterSubscriptor.includes('@') === false ||
			newsletterSubscriptor.includes('.') === false
		)
			return;

		const newsletter_subscriptor = {
			date: createDate(),
			email: newsletterSubscriptor,
		};
		return newsletter_subscriptor;
	};

	// sends subscription data to server
	const sendData = async () => {
		try {
			const server_link = `${server_url}/api/v1/newsletter`;
			const subscriptor = process_subscription();
			if (!subscriptor) return;
			await axios({
				method: 'post',
				data: subscriptor,
				url: server_link,
			});
			navigate('/subscribed-sucessfully');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<FooterContainer>
			<section>
				<h2>Loja</h2>
				<ul>
					<li>
						<Link to='/'>Início</Link>
					</li>
					<li>
						<Link to='/about'>Sobre nós</Link>
					</li>
					<li>
						<Link to='/contact'>Contacto</Link>
					</li>
					<li>
						<Link to='/privacy-policy'>Política de Privacidade</Link>
					</li>
					<li>
						<Link to='/terms-and-conditions'>Termos e Condições</Link>
					</li>
				</ul>
			</section>
			<section>
				<h2>Desenvolvedor</h2>
				<ul>
					<li>
						<Link to='/login'>Entrar</Link>
					</li>
					<li>
						<Link to='/support'>Suporte</Link>
					</li>
					<li>
						<Link to='/request-service'>Contratar serviços</Link>
					</li>
				</ul>
			</section>
			<section className='newsletter'>
				<h2>Newsletter</h2>
				<p>
					Subscreva-se à nossa newsletter <br></br>
					enviando o seu e-mail, para <br></br>
					saber quando um novo produto <br></br>
					tiver sido lançado em seu e-mail.
				</p>
				<section>
					<label htmlFor='email'>Email</label>
					<div>
						<input
							type='email'
							name='email'
							placeholder='Digite o e-mail aqui...'
							onChange={(e) => setNewsletterSubscriptor(() => e.target.value)}
						/>
						<Button
							event={sendData}
							text={'Send'}
							icon={<BiSend />}
						/>
					</div>
				</section>
			</section>
			<div className='copyright'>
				<span>&copy; Copyright 2022 Hagira Brands, Moçambique.</span>
			</div>
		</FooterContainer>
	);
};

export default Footer;
