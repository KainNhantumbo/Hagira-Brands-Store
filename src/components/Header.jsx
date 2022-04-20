import { Container } from "../styles/components/header";

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
				<button>Login</button>
			</div>
		</Container>
	);
};

export default Header;
