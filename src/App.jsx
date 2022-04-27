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
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';
import React, { useState, useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { AppContainer } from './styles/app';

export const Context = React.createContext();

const App = () => {
	const [user, setUser] = useState(null);
	const [privacyAdvisor, setprivacyAdvisor] = useState();

	// controls the state of privacy advisor message
	const advisorController = () => {
		setprivacyAdvisor(false);
		localStorage.setItem('advisorState', JSON.stringify('false'));
	};
	
	useEffect(() => {
		const advisorState = JSON.parse(localStorage.getItem('advisorState'));
		if (!advisorState) {
			localStorage.setItem('advisorState', JSON.stringify('true'));
			setprivacyAdvisor(() => true);
		}

		if (advisorState === 'true') {
			setprivacyAdvisor(() => true);
		} else {
			setprivacyAdvisor(() => false);
		}
	}, []);

	return (
		<Context.Provider value={setUser}>
			<ThemeProvider theme={primary}>
				<GlobalStyles />
				<Header />
				<AppContainer>
					{privacyAdvisor ? (
						<section>
							<div>
								<span>
									Ao usar a <strong>Hagira Brands</strong>, você concorda com os
									a nossa{' '}
									<a href='/privacy-policy'>
										<strong>política de privacidade</strong>
									</a>
									.
								</span>
								<Button
									text={'Aceitar'}
									icon={<BiCheckCircle />}
									event={advisorController}
								/>
							</div>
						</section>
					) : null}
				</AppContainer>
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
