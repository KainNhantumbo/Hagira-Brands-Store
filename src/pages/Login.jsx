import { LoginContainer } from '../styles/login';
import Button from '../components/Button';
import { BiLogIn, BiUser } from 'react-icons/bi';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	return (
		<LoginContainer>
			<form>
				<label htmlFor='email'>E-mail</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Digite os seu email'
					onChange={(e) => setEmail(() => e.target.value)}
				/>
				<span>{emailError}</span>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Digite a sua senha'
					onChange={(e) => setPassword(() => e.target.value)}
				/>
				<span>{passwordError}</span>
				<div className='actions'>
					<Button text={'Entrar'} icon={<BiLogIn />} />
					<Button text={'Criar nova conta'} icon={<BiUser />} />
				</div>
			</form>
		</LoginContainer>
	);
};

export default Login;
