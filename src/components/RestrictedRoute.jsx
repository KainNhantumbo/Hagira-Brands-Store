import { useNavigate } from 'react-router-dom';

// used to restrict acess to admin routes
const RestritectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const access_token = JSON.parse(localStorage.getItem('accessToken'));
	if (!access_token || access_token === undefined) {
		navigate('/login');
		return;
	}
	return children;
};

export default RestritectedRoute;
