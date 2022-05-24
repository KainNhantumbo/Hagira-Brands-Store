import axios from 'axios';
import { server_url } from './urls';

export const authUser = (user_data, navigate, setData) => {
	if (navigate instanceof Function === false)
		throw new Error('The second argument must be a navigation function.');
	if (setData instanceof Function === false)
		throw new Error(
			'The third argument must be an instance of update state function.'
		);

	axios({
		method: 'post',
		data: user_data,
		url: `${server_url}/api/v1/users/login`,
	})
		.then((response) => {
			localStorage.setItem('accessToken', JSON.stringify(response.token));
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
