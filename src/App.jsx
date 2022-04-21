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
	return (
		<ThemeProvider theme={primary}>
			<GlobalStyles />
			<Container>
				<aside>
					
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
