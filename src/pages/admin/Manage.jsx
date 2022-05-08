import { ManageContainer } from '../../styles/admin/manage';
import React, { useState, useEffect } from 'react';
import { FaCogs, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { server_url } from '../../services/urls';
import Button from '../../components/Button';

const Manage = () => {
	// runs on every render
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	return (
		<ManageContainer>
			<section className='upper'>
				<h1>
					Gerenciar <FaCogs />{' '}
				</h1>
			</section>
			<section className='reseters-container'>
				<h2>Reseters</h2>
				<p className='danger'>
					<strong>
						Atenção: área de dados sensíveis, prossiga com cuidado.
					</strong>
				</p>
				<section className='reseters'>
					<div>
						<h3>Elimninar Produtos da Loja</h3>
						<span>
							<Button text={'Eliminar'} icon={<FaTrash />} />
						</span>
					</div>
					<div>
						<h3>Resetar o histórico de visitas à Loja</h3>
						<span>
							<Button text={'Eliminar'} icon={<FaTrash />} />
						</span>
					</div>
					<div>
						<h3>Eliminar todos subscritores de Newsletter</h3>
						<span>
							<Button text={'Eliminar'} icon={<FaTrash />} />
						</span>
					</div>
					<div>
						<h3>Eliminar todas as mensagens</h3>
						<span>
							<Button text={'Eliminar'} icon={<FaTrash />} />
						</span>
					</div>
					<div>
						<h3>Eliminar histórico de mensagens enviadas</h3>
						<span>
							<Button text={'Eliminar'} icon={<FaTrash />} />
						</span>
					</div>
				</section>
			</section>
		</ManageContainer>
	);
};

export default Manage;
