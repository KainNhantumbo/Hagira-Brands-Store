import { AdminContainer } from '../../styles/admin';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BiCog,
	BiCollection,
	BiEnvelope,
	BiLayer,
	BiLogOut,
	BiMessageAltDetail,
	BiNote,
} from 'react-icons/bi';
import Overview from './Overview';
import Products from './Products';
import Manage from './Manage';
import Messages from './Messages';
import Comunicate from './Comunicate';
import NewProduct from './NewProduct';


const Admin = () => {
	const [panel, setPanel] = useState(<Overview />);
  const navigate = useNavigate()

	return (
		<AdminContainer>
			<aside>
				<div onClick={() => setPanel(() => <Overview />)}>
					<BiLayer />
					<span>Overview</span>
				</div>
				<div onClick={() => setPanel(() => <NewProduct />)}>
					<BiNote />
					<span>Novo Produto</span>
				</div>
				<div onClick={() => setPanel(() => <Products />)}>
					<BiCollection />
					<span>Produtos</span>
				</div>
				<div onClick={() => setPanel(() => <Comunicate />)}>
					<BiEnvelope />
					<span>Comunicar</span>
				</div>
				<div onClick={() => setPanel(() => <Messages />)}>
					<BiMessageAltDetail />
					<span>Mensagens</span>
				</div>
				<div onClick={() => setPanel(() => <Manage />)}>
					<BiCog />
					<span>Gerenciar</span>
				</div>
				<div onClick={() => navigate('/')}>
					<BiLogOut />
					<span>Sair</span>
				</div>
			</aside>
			<article>{panel}</article>
		</AdminContainer>
	);
};

export default Admin;
