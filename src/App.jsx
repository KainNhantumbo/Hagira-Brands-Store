import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { primary } from './styles/themes';
import { Container } from './styles/app';

const App = () => {
	return (
		<ThemeProvider theme={primary}>
			<Container>
				<Header />
			</Container>
		</ThemeProvider>
	);
};

export default App;
