import { SupportContainer } from '../styles/support';
import { BiAlarm, BiBulb, BiMessageSquareCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Support = () => {
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);
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
					<Link rel='noreferrer' to='mailto: hagira-brands@gmail.com' target={'_blank'}>
						<strong>contacto por e-mail</strong>
					</Link>{' '}
					connosco através da{' '}
					<Link to='/contact'>
						<strong>página de contacto</strong>
					</Link>
					.
				</p>
			</section>
			<section className='content'>
				<h3>Como navegar pela loja?</h3>
				<p>
					No cabeçalho da página há um botão escrito <strong>"Explorar"</strong>{' '}
					que rola a página para o rodapé, onde se encontram os <em>links</em>{' '}
					para a navegação na loja.
				</p>
				<p>
					No lado direito do ecrã, se encontram dois botões azuis, o primeiro
					(com simbolo de lua), troca tema de cores da loja, de claro para
					escuro e vice-versa. O outro botão abaixo, rola rapidamente a página
					para a área do cabeçalho.
				</p>
			</section>
			<section className='content'>
				<h3>Parcerias</h3>
				<p>
					A <strong>Hagira Brands</strong> está aberta a parcerias de negócios,
					assim como a exposição de produtos de terceiros nesta loja desde que
					sejam do mesmo nicho de empreendimento. Para saber mais sobre como
					adquirir tal licença, entre em{' '}
					<Link rel='noreferrer' to='mailto: hagira-brands@gmail.com' target={'_blank'}>
						<strong>contacto por e-mail</strong>
					</Link>{' '}
					ou use o formulário na{' '}
					<Link to='/contact'>
						<strong>página de contacto</strong>
					</Link>
					.
				</p>
			</section>
			<section className='infograph'>
				<div>
					<BiBulb />
					<h3>Não achou a solução?</h3>
					<p>
						Veja a <Link to='/contact'>secção de contacto</Link>, onde poderá
						enviar uma mensagem na nossa plataforma.
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
