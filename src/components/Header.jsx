import { Container } from '../styles/components/header';
import Button from './Button';
import { useEffect, useState } from 'react';
import { BiLogIn, BiCartAlt, BiMenu } from 'react-icons/bi';

const Header = () => {
	const [menu, setMenu] = useState();

	// toggles the menu
	const menuToggler = () => {
		if (menu.display === 'none') return setMenu(() => ({ display: 'flex' }));
		return setMenu(() => ({ display: 'none' }));
	};

	useEffect(() => {
		if (window.innerWidth >= 505) {
			setMenu(() => ({ display: 'flex' }));
		} else {
			setMenu(() => ({ display: 'none' }));
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 505) {
				setMenu(() => ({ display: 'flex' }));
			}
		});
	}, []);

	return (
		<Container>
			<section>
				<BiCartAlt />
				<span>Hagira Brands</span>
			</section>
			<nav className='navbar'>
				<ul>
					<div className='common' style={menu}>
						<li className='list-item'>
							<a href='/discouver'>
								<span>Explorar</span>
							</a>
						</li>
						<li className='list-item'>
							<a href='/about'>
								<span>Sobre</span>
							</a>
						</li>
						<li className='list-item'>
							<a href='/contact'>
								<span>Contacto</span>
							</a>
						</li>
					</div>
					<li onClick={menuToggler} className='menu-btn'>
						<BiMenu />
					</li>
				</ul>
			</nav>
			<div className='actions'>
				<a href='/login'>
					<Button text={'Entrar'} icon={<BiLogIn />} />
				</a>
			</div>
		</Container>
	);
};

export default Header;
