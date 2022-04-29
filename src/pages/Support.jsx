import { SupportContainer } from '../styles/support';
import React, { useState } from 'react';
import { BiAlarm, BiHelpCircle, BiMessageSquareCheck } from 'react-icons/bi';

const Support = () => {
	return (
		<SupportContainer>
			<section className='intro'>
				<h1>
					Suporte <BiMessageSquareCheck />{' '}
				</h1>
				<h2>Em que podemos ajudar?</h2>
				<p>
					Esta página foi elaborada no modelo F.A.Q. (Perguntas Frequêntes) com
					intuito de responder algumas questões comuns de sobre como oferecemos
					os nossos produtos e serviços.
				</p>
				<p>
					Lembre-se que se a resposta para a questão não estiver listada nesta
					página, você poderá sempre entrar em{' '}
					<a href='mailto: hagira-brands@gmail.com'>
						<strong>contacto por e-mail</strong>
					</a>{' '}
					connosco através da{' '}
					<a href='/contact'>
						<strong>página de contacto</strong>
					</a>
					.
				</p>
			</section>
			<section className='content'>
				<h3>Como navegar pela loja?</h3>
        <p>
          No cabeçalho da página há um botão escrito <strong>"Explorar"</strong> que rola a página para o rodapé, onde se encontram os <em>links</em> para a navegação na loja. 
        </p>
        <p>
          No lado direito do ecrã, se encontram dois botões azuis, o primeiro (com simbolo de lua), troca tema de cores da loja, de claro para escuro e vice-versa. O outro botão abaixo, rola rapidamente a página para a área do cabeçalho.
        </p>
			</section>
      <section className='infograph'>
				<div>
					<BiHelpCircle />
					<h3>Não achou a solução?</h3>
					<p>
						Veja a <a href='/contact'>secção de contacto</a>, onde
						poderá enviar uma mensagem na nossa plataforma.
					</p>
				</div>
				<div>
					<BiAlarm />
					<h3>Horários de serviço</h3>
					<p>Segunda à sábado, das 9 horas da manhã às 17 horas.</p>
				</div>
			</section>
		</SupportContainer>
	);
};

export default Support;
