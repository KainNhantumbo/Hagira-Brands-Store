import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Subscribe from './pages/Subscribe';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';

const App = () => {
	return (
		<ThemeProvider theme={primary}>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/subscribed-sucessfully' element={<Subscribe />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms-and-conditions' element={<TermsAndConditions />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
