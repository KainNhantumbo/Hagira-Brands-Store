import { Route, Routes } from 'react-router-dom';
import RestritectedRoute from '../components/RestrictedRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Subscribe from '../pages/Subscribe';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import Contact from '../pages/Contact';
import DataSentSucess from '../pages/DataSentSucess';
import Admin from '../pages/admin/Admin';
import About from '../pages/About';
import Support from '../pages/Support';
import HireService from '../pages/HireService';
import Product from '../pages/Product';
import Payment from '../pages/Payment';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/subscribed-sucessfully' element={<Subscribe />} />
			<Route path='/privacy-policy' element={<PrivacyPolicy />} />
			<Route path='/terms-and-conditions' element={<TermsAndConditions />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/data-sent' element={<DataSentSucess />} />
			<Route path='/login' element={<Login />} />
			<Route path='/about' element={<About />} />
			<Route path='/support' element={<Support />} />
			<Route path='/product/:id/payment/:id' element={<Payment />} />
			<Route path='/request-service' element={<HireService />} />
			<Route path='/product/:id' element={<Product />} />
			<Route
				path='/admin'
				element={
					<RestritectedRoute>
						<Admin />
					</RestritectedRoute>
				}
			></Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default AppRoutes;
