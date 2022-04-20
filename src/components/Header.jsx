import { Container } from '../styles/components/header';
import Button from './Button';
import { BiLogIn, BiBadge } from 'react-icons/bi';

const Header = () => {
	return (
		<Container>
			<section></section>
			<div className='navbarContainer'>
				<nav>
					<ul>
						<li>
							<a href='/'>
								<span>Explorar</span>
							</a>
						</li>
						<li>
							<a href='/sobre'>
								<span>Sobre</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className='actions'>
				<Button text={'Entrar'} icon={<BiLogIn />} />
			</div>
		</Container>
	);
};

export default Header;
