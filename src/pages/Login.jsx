import { LoginContainer } from '../styles/login';
import Button from '../components/Button';
import { BiLogIn, BiEnvelope, BiLockAlt, BiChevronLeft } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';

const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState({ email: '', password: '' });

	const navigate = useNavigate();

	const populateData = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// sets the user data form login
	const log = (e) => {
		e.preventDefault();
		authUser(formData,navigate, setErrorMessage)
		console.log(formData);
	};

	return (
		<LoginContainer>
			<section className='welcome-msg'>
				<h1>Bem-vindo(a) de volta!</h1>
				<p>Inicie sessão para continuar.</p>
			</section>
			<form onSubmit={log}>
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
						event={(e) => {
							e.preventDefault();
							// navigate('/');
						}}
						text={'Voltar'}
						icon={<BiChevronLeft />}
					/>
				</section>
			</form>
		</LoginContainer>
	);
};

export default Login;
