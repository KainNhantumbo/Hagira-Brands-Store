import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import Button from './Button';

const Footer = () => {
	return (
		<FooterContainer>
			<section>
				<div>Loja</div>
				<ul>
					<li>
						<a href='/home'>Início</a>
					</li>
					<li>
						<a href='/discouver'>Explorar</a>
					</li>
					<li>
						<a href='/about'>Sobre nós</a>
					</li>
					<li>
						<a href='/contact'>Contacto</a>
					</li>
          <li>
            <a href="/terms-and-conditions">
              Termos e condições
            </a>
          </li>
				</ul>
			</section>
			<section>
				<div>Administração</div>
				<ul>
					<li>
						<a href='/login'>Entrar</a>
					</li>
					<li>
						<a href='/support'>Suporte</a>
					</li>
					<li>
						<a href='/parcerias'>Parcerias</a>
					</li>
					<li>
						<a href='/personal-suggest'>Encomendas personalizadas</a>
					</li>
				</ul>
			</section>
			<section>
				<div>Desenvolvedor</div>
				<ul>
					<li>
						<a href='/report'>Reportar Bug/falha</a>
					</li>
					<li>
						<a href='/'>Pedir serviços</a>
					</li>
				</ul>
			</section>
			<section>
				<div>Newsletter</div>
				<p>
					Subscreva a nossa newsletter enviando o seu e-mail, para saber quando
					um novo produto tiver sido lançado em seu e-mail.
				</p>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' placeholder='email' />
        <Button text={'Send'} icon={<BiSend/>} />
			</section>
      <div className='copyright'>
        <span>
          &copy; Copyright 2022 Hagira Brands, Moçambique.
        </span>
      </div>
		</FooterContainer>
	);
};

export default Footer;
