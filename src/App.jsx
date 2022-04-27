import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Subscribe from './pages/Subscribe';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import DataSentSucess from './pages/DataSentSucess';
import RestritectedRoute from './components/RestrictedRoute';
import Admin from './pages/admin/Admin';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';
import React, { useState } from 'react';

export const Context = React.createContext();

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<Context.Provider value={setUser}>
			<ThemeProvider theme={primary}>
				<GlobalStyles />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/subscribed-sucessfully' element={<Subscribe />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route
						path='/terms-and-conditions'
						element={<TermsAndConditions />}
					/>
					<Route path='/contact' element={<Contact />} />
					<Route path='/data-sent' element={<DataSentSucess />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/admin'
						element={
							<RestritectedRoute user={user}>
								<Admin />
							</RestritectedRoute>
						}
					></Route>
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</Context.Provider>
	);
};

export default App;
