import { Container } from '../styles/components/header';
import Button from './Button';
import { BiLogIn, BiCartAlt } from 'react-icons/bi';

const Header = () => {
	const explore = () => {
		window.scrollTo({
			left: 0,
			top: 1000000,
			behavior: 'smooth',
		});
	};

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
					<Button
						event={explore}
						id={'rounded'}
						text={'Explorar'}
						icon={<BiLogIn />}
					/>
				</div>
			</nav>
		</Container>
	);
};

export default Header;
