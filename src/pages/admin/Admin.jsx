import { AdminContainer } from '../../styles/admin';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BiCog,
	BiEnvelope,
	BiGridAlt,
	BiLayer,
	BiMessageAltDetail,
	BiNavigation,
	BiNote,
} from 'react-icons/bi';
import Overview from './Overview';
import NewProduct from './NewProduct';
import Button from '../../components/Button';

const Admin = ({ user }) => {
	const navigate = useNavigate();
	const [panel, setPanel] = useState(<Overview />);

	return (
		<AdminContainer>
			<aside>
				<div onClick={() => setPanel(() => <Overview />)}>
					<BiLayer />
					<span>Overview</span>
				</div>
				<div onClick={() => setPanel(() => <NewProduct />)}>
					<BiNote />
					<span>Produtos</span>
				</div>
				<div>
					<BiEnvelope />
					<span>Comunicar</span>
				</div>
				<div>
					<BiMessageAltDetail />
					<span>Mensagens</span>
				</div>
				<div>
					<BiCog />
					<span>Gerenciar</span>
				</div>
			</aside>
			<article>{panel}</article>
		</AdminContainer>
	);
};

export default Admin;
