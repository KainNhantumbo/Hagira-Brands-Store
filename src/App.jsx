import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';

const App = () => {
	

	return (
		<ThemeProvider theme={primary}>
			<GlobalStyles />				
			<Header />
			{/* <Footer /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
