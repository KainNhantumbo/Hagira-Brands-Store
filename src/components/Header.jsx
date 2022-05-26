import { Container } from '../styles/components/header';
import Button from './Button';
import { BiCartAlt, BiPlanet } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Header = () => {
	// scrolls the page to the footer
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
				<Link to='/'>
					<BiCartAlt />
					<span>Hagira Brands</span>
				</Link>
			</section>
			<nav className='navbar'>
				<div className='actions'>
					<Button
						event={explore}
						id={'rounded'}
						text={'Explorar'}
						icon={<BiPlanet />}
					/>
				</div>
			</nav>
		</Container>
	);
};

export default Header;
