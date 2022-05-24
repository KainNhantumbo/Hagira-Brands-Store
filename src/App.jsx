import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import { primary, dark } from './styles/themes';
import { GlobalStyles } from './styles/Globalstyles';
import { useState, useEffect } from 'react';
import { BiArrowToTop, BiCheckCircle, BiMoon } from 'react-icons/bi';
import { AppContainer } from './styles/app';
import AppRoutes from './routes/Routes';

const App = () => {
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
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<AppContainer>
				{privacyAdvisor ? (
					<section className='advisor'>
						<div>
							<span>
								Ao usar a <strong>Hagira Brands</strong>, você concorda com os a
								nossa{' '}
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
			<AppRoutes />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
