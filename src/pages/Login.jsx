import { LoginContainer } from '../styles/login';
import Button from '../components/Button';
import { BiLogIn, BiUser, BiEnvelope, BiLockAlt } from 'react-icons/bi';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	return (
		<LoginContainer>
			<section className='welcome-msg'>
				<h1>Bem-vindo(a) de volta!</h1>
				<p>
					Inicie sessão para começar.
				</p>
			</section>
			<form>
				<label htmlFor='email'>
					<BiEnvelope />
					<span>E-mail</span>
				</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Digite os seu email'
					onChange={(e) => setEmail(() => e.target.value)}
				/>
				<span className='error'>{emailError}</span>

				<label htmlFor='password'>
					<BiLockAlt />
					<span>Password</span>
				</label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Digite a sua senha'
					onChange={(e) => setPassword(() => e.target.value)}
				/>
				<span className='error'>{passwordError}</span>

				<section className='buttons'>
					<Button text={'Entrar'} icon={<BiLogIn />} />
					<Button text={'Criar nova conta'} icon={<BiUser />} />
				</section>
			</form>
		</LoginContainer>
	);
};

export default Login;
