import { Navigate } from 'react-router-dom';

// used to restrict acess to admin routes
const RestritectedRoute = ({ children, user }) => {
	// if (!user?.email || !user?.password) {  
	// 	return <Navigate to={'/login'} />;
	// }
	return children;
};

export default RestritectedRoute;
