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
				<a href='/'>
					<BiCartAlt />
					<span>Hagira Brands</span>
				</a>
			</section>
			<nav className='navbar'>
				<div className='actions'>
					<a href='/discouver'>
						<Button id={'rounded'} text={'Explorar'} icon={<BiLogIn />} />
					</a>
				</div>
			</nav>
		</Container>
	);
};

export default Header;
