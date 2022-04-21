import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { Container } from './styles/app';
import { GlobalStyles } from './styles/Globalstyles';

const App = () => {
	const categories = {
		category: ['All','Cozinha', 'Panos', 'Batas', 'Cortinas'],
	};

	return (
		<ThemeProvider theme={primary}>
			<GlobalStyles />
			<Container>
				<aside>
					<section>
						<label htmlFor='search'>Pesquisa</label>
						<input type='search' placeholder='Procurar...' />
					</section>
					<section>
						<div>Categorias</div>
						{categories.category.map((category, index) => {
							return <span key={index}>{category}</span>;
						})}
					</section>
				</aside>
			</Container>

			<Header />
			<Footer />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
