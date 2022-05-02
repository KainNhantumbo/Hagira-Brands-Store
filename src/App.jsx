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
import About from './pages/About';
import Support from './pages/Support';
import HireService from './pages/HireService';
import Product from './pages/Product';
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import { primary, dark } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';
import React, { useState, useEffect } from 'react';
import { BiArrowToTop, BiCheckCircle, BiMoon } from 'react-icons/bi';
import { AppContainer } from './styles/app';

export const Context = React.createContext();

const App = () => {
	const [user, setUser] = useState(null);
	const [privacyAdvisor, setprivacyAdvisor] = useState();
	const [theme, setTheme] = useState(primary);

	// controls the state of privacy advisor message
	const advisorController = () => {
		setprivacyAdvisor(() => false);
		localStorage.setItem('advisorState', JSON.stringify('false'));
	};

	// slides the page to the top
	const slidePageUp = () => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: 'smooth',
		});
	};

	// swithes between dark and light themes
	const switchColors = () => {
		if (theme === primary) {
			setTheme(() => dark);
			localStorage.setItem('themeState', JSON.stringify('dark'));
		} else {
			setTheme(() => primary);
			localStorage.setItem('themeState', JSON.stringify('primary'));
		}
	};

	// loads required states at start
	useEffect(() => {
		// advisor management
		const advisorState = JSON.parse(localStorage.getItem('advisorState'));
		if (advisorState === null) {
			localStorage.setItem('advisorState', JSON.stringify('true'));
			setprivacyAdvisor(() => true);
		}

		if (advisorState === 'true') {
			setprivacyAdvisor(() => true);
		} else {
			setprivacyAdvisor(() => false);
		}

		// theme management
		const themeState = JSON.parse(localStorage.getItem('themeState'));
		if (themeState === null) {
			localStorage.setItem('themeState', JSON.stringify('primary'));
			setTheme(() => primary);
		}

		if (themeState === 'primary') {
			setTheme(() => primary);
		} else {
			setTheme(() => dark);
		}
	}, []);

	return (
		<Context.Provider value={setUser}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<AppContainer>
					{privacyAdvisor ? (
						<section className='advisor'>
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
					<section className='fluent-buttons'>
						<div>
							<Button icon={<BiMoon />} event={switchColors} />
							<Button icon={<BiArrowToTop />} event={slidePageUp} />
						</div>
					</section>
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
					<Route path='/about' element={<About />} />
					<Route path='/support' element={<Support />} />
					<Route path='/request-service' element={<HireService />} />
					<Route path='/product/:id' element={<Product />} />
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
