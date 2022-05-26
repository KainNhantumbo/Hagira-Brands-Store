import {
	BiCodeAlt,
	BiConversation,
	BiEnvelope,
	BiPlanet,
} from 'react-icons/bi';
import { HireContainer } from '../styles/hire-service';
import {
	DiGithubBadge,
	DiMongodb,
	DiNodejsSmall,
	DiReact,
	DiSass,
	FaJsSquare,
} from 'react-icons/all';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HireService = () => {
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	return (
		<HireContainer>
			<section className='intro'>
				<h1>
					Contratar Serviços
					<BiCodeAlt />
				</h1>
				<h3>Precisa de um Desenvolvedor Web?</h3>
				<p>
					Gostaria de ter o seu próprio site, loja virtual ou aplicação web?
				</p>
				<p>
					Esta loja é um exemplo de trabalho feito inteiramente por mim. Este
					site foi desenvolvido com as melhores tecnologias para o
					desenvolvimento de aplicações Web, de forma a garantir estabilidade,
					rapidez e segurança para o cliente e usuários.
				</p>
				<p>
					Se gostou e pretente contratar-me para um serviço, por favor entre em
					contacto através do e-mail abaixo ou use o{' '}
					<Link to='/contact'>
						<strong>formulário</strong>
					</Link>{' '}
					da página de contacto.
				</p>
			</section>

			<section className='contacts'>
				<h3>
					<BiConversation /> <span>Contacto</span>
				</h3>
				<h3>
					<BiEnvelope />
					<span>E-mail</span>
				</h3>
				<span>
					<Link target='_blank' rel='noreferrer' to='mailto:nhantumbok.com'>
						nhantumbok@gmail.com
					</Link>
				</span>
				<h3>
					<DiGithubBadge />
					<span>Repositórios do Github</span>
				</h3>
				<span>
					<Link
						target='_blank'
						rel='noreferrer'
						to='https://www.github.com/KainNhantumbo'
					>
						github.com/KainNhantumbo
					</Link>
				</span>
				<h3>
					<BiPlanet />
					<span>Portifólio</span>
				</h3>
				<span>
					<Link
						target='_blank'
						rel='noreferrer'
						to='https://portifolio-dev-kainnhantumbo.vercel.app'
					>
						potifolio-dev-kainnhantumbo.vercel.app
					</Link>
				</span>
			</section>
			<section>
				<h3>Tecnologias utilizadas</h3>
			</section>
			<section className='techs'>
				<div>
					<DiReact style={{ color: '#26BAF1' }} />
					<span>React.JS</span>
				</div>
				<div>
					<DiSass style={{ color: '#D865A8' }} />
					<span>Sass</span>
				</div>
				<div>
					<FaJsSquare style={{ color: '#FFE400' }} />
					<span>Javascript</span>
				</div>
				<div>
					<DiNodejsSmall style={{ color: 'green' }} />
					<span>Node.JS</span>
				</div>
				<div>
					<DiMongodb style={{ color: 'green' }} />
					<span>MongoDB</span>
				</div>
			</section>
		</HireContainer>
	);
};

export default HireService;
