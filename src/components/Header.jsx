import { Container } from '../styles/components/header';
import Button from './Button';
import { BiLogIn, BiCartAlt, BiMenu } from 'react-icons/bi';

const Header = () => {
	return (
		<Container>
			<section>
				<BiCartAlt />
				<span>Hagira Brands</span>
			</section>
			<nav className='navbar'>
				<ul>
					<li>
						<a href='/discouver'>
							<span>Explorar</span>
						</a>
					</li>
					<li>
						<a href='/about'>
							<span>Sobre</span>
						</a>
					</li>
					<li>
						<a href='/contact'>
							<span>Contacto</span>
						</a>
					</li>
				</ul>
			</nav>
			<div className='actions'>
				<Button text={'Menu'} icon={<BiMenu />} className='menu-btn' />
				<Button text={'Entrar'} icon={<BiLogIn />} className='login-btn' />
			</div>
		</Container>
	);
};

export default Header;
