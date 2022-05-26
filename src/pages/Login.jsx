import { LoginContainer } from '../styles/login';
import { BiLogIn, BiEnvelope, BiLockAlt, BiChevronLeft } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';
import Button from '../components/Button';

const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState({ email: '', password: '' });
	const navigate = useNavigate();
	// populates data on formData Object
	const populateData = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);
	return (
		<LoginContainer>
			<section className='welcome-msg'>
				<h1>Bem-vindo(a) de volta!</h1>
				<p>Inicie sessão para continuar.</p>
			</section>
			<form onSubmit={(e) => authUser(e, formData, navigate, setErrorMessage)}>
				<label htmlFor='email'>
					<BiEnvelope />
					<span>E-mail</span>
				</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Digite os seu email'
					onChange={populateData}
				/>
				<label htmlFor='password'>
					<BiLockAlt />
					<span>Password</span>
				</label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Digite a sua senha'
					onChange={populateData}
				/>
				<span className='error'>{errorMessage}</span>

				<section className='buttons'>
					<Button text={'Entrar'} icon={<BiLogIn />} type={'submit'} />
					<Button
						event={e=> navigate('/')}
						text={'Voltar'}
						icon={<BiChevronLeft />}
					/>
				</section>
			</form>
		</LoginContainer>
	);
};

export default Login;
