import { LoginContainer } from '../styles/login';
import Button from '../components/Button';
import { BiLogIn, BiUser, BiEnvelope, BiLockAlt } from 'react-icons/bi';
import { useState, useContext } from 'react';
import { Context } from '../App';
import {useNavigate} from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const setUser = useContext(Context)
	const navigate = useNavigate()
	// sets the user data form login
	function log (e) {
		e.preventDefault()
		setUser({email, password})
		console.log({email, password})
navigate('/admin')
	}

	

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
					<Button text={'Entrar'} icon={<BiLogIn />} type={'submit'} />
					<Button text={'Criar nova conta'} icon={<BiUser />} />
				</section>
			</form>
		</LoginContainer>
	);
};

export default Login;
