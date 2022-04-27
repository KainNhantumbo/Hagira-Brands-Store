import { AdminContainer } from '../../styles/admin';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BiCog,
	BiEnvelope,
	BiLayer,
	BiMessageAltDetail,
	BiNote,
} from 'react-icons/bi';
import Overview from './Overview';
import Products from './Products';
import Manage from './Manage';
import Messages from './Messages';
import Comunicate from './Comunicate';


const Admin = () => {
	const [panel, setPanel] = useState(<Overview />);

	return (
		<AdminContainer>
			<aside>
				<div onClick={() => setPanel(() => <Overview />)}>
					<BiLayer />
					<span>Overview</span>
				</div>
				<div onClick={() => setPanel(() => <Products />)}>
					<BiNote />
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
			</aside>
			<article>{panel}</article>
		</AdminContainer>
	);
};

export default Admin;
