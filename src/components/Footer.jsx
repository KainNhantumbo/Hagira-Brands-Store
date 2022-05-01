import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import Button from './Button';
import React, { useState } from 'react';
import { createDate } from '../modules/module-scripts';
import axios from 'axios';

const Footer = () => {
	const [newsletterSubscriptor, setNewsletterSubscriptor] = useState('');
	// makes email validation then sends it to the server
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
		// navigates to a sucess feedback page
	};

	// sends subscription data to server
	const server_url = 'http://localhost:4630/api/v1/newsletter';
	const sendData = async () => {
		try {
			const subscriptor = process_subscription();
			if (!subscriptor) return;
			const response = await axios({
				method: 'post',
				data: subscriptor,
				url: server_url,
			});
			
			// if sucess, navigates to sucessfully subscribed page
			if (response.status === 201)
				return window.location.assign('/subscribed-sucessfully');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<FooterContainer>
			<section>
				<h2>Loja</h2>
				<ul>
					<li>
						<a href='/'>Início</a>
					</li>
					<li>
						<a href='/about'>Sobre nós</a>
					</li>
					<li>
						<a href='/contact'>Contacto</a>
					</li>
					<li>
						<a href='/privacy-policy'>Política de Privacidade</a>
					</li>
					<li>
						<a href='/terms-and-conditions'>Termos e Condições</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Desenvolvedor</h2>
				<ul>
					<li>
						<a href='/login'>Entrar</a>
					</li>
					<li>
						<a href='/support'>Suporte</a>
					</li>
					<li>
						<a href='/request-service'>Contratar serviços</a>
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
						<Button event={sendData} text={'Send'} icon={<BiSend />} />
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
