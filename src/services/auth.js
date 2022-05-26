import axios from 'axios';
import { server_url } from './urls';

// sends a auth request to get token and authenticate the user
export const authUser = (event, user_data, navigate, setData) => {
	if (navigate instanceof Function === false)
		throw new Error('The second argument must be a navigation function.');
	if (setData instanceof Function === false)
		throw new Error(
			'The third argument must be an instance of update state function.'
		);

	event.preventDefault();
	axios({
		method: 'post',
		data: user_data,
		url: `${server_url}/api/v1/users/login`,
	})
		.then((response) => {
			localStorage.setItem('accessToken', JSON.stringify(response.data.token));
			navigate('/admin');
		})
		.catch((error) => {
			console.log(error.response.status);
			console.log(error.response.data.message);
			setData(error.response.data.message);
			setTimeout(() => {
				setData('');
			}, 3000);
		});
};

// deletes user session
export const logoutUser = (navigate) => {
	if (navigate instanceof Function === false)
		throw new Error('Argument must be a navigation function.');
	localStorage.removeItem('accessToken');
	navigate('/login');
};
