import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import Button from './Button';
import React, { useState } from 'react';
import { createDate } from '../modules/module-scripts';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const [newsletterSubscriptor, setNewsletterSubscriptor] = useState('');
	const navigate = useNavigate();

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

		// navigates to a sucess feedback page
		navigate('/subscribed-sucessfully');
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
						<Button
							event={process_subscription}
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
