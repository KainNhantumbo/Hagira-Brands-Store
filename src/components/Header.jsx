import { Container } from "../styles/components/header";
import Button from "./Button";

const Header = () => {
	return (
		<Container>
			<section>Logo</section>
			<div className='navbarContainer'>
				<nav>
					<ul>
						<li>
							<span>Explorar</span>
						</li>
					</ul>
				</nav>
			</div>
			<div className='actions'>
				<Button text={'Entrar'}/>
			</div>
		</Container>
	);
};

export default Header;
