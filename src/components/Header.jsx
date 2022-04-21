import { Container } from '../styles/components/header';
import Button from './Button';
import { BiLogIn, BiCartAlt } from 'react-icons/bi';

const Header = () => {
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
