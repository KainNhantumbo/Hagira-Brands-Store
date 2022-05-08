import { ManageContainer } from '../../styles/admin/manage';
import React, { useState, useEffect } from 'react';
import { FaCogs, FaTrash, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { server_url } from '../../services/urls';
import Button from '../../components/Button';

const Manage = () => {
	const [modalState, setModalState] = useState(false);
	const [actionFunction, setActionFunction] = useState();

	// runs on every render
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	// deletes all messages
	const deleteAllMessages = async () => {
		try {
			const delete_url = `${server_url}/api/v1/messages`;
			const response = await axios({ method: 'delete', url: delete_url });
			console.log('dast');
		} catch (err) {
			console.log(err);
		}
	};

	// deletes all visitors history
	const deleteVisitors = async () => {
		try {
			const delete_url = `${server_url}/api/v1/visitors`;
			const response = await axios({ method: 'delete', url: delete_url });
			console.log('dast');
		} catch (err) {
			console.log(err);
		}
	};

	// deletes all newsletter subscriptors
	const deleteSubscriptors = async () => {
		try {
			const delete_url = `${server_url}/api/v1/newsletter`;
			const response = await axios({ method: 'delete', url: delete_url });
			console.log('dast');
		} catch (err) {
			console.log(err);
		}
	};

	// deletes all products
	const deleteProducts = async () => {
		try {
			const delete_url = `${server_url}/api/v1/products`;
			const response = await axios({ method: 'delete', url: delete_url });
			console.log('dast');
		} catch (err) {
			console.log(err);
		}
	};


	const ConfirmModal = () => (
		<section
			className='modal-container'
			onClick={(e) => {
				if (e.target.classList.contains('modal-container')) {
					setModalState((prevState) => !prevState);
				}
			}}
		>
			<div className='message-previewer'>
				<section className='advice-info'>
					<FaTrashAlt />
					<h3>Pretende eliminar permanentemente este pedido?</h3>
				</section>
				<section className='actions'>
					<Button
						text={'Cancelar'}
						event={(e) => setModalState((prevState) => !prevState)}
					/>
					<Button text={'Eliminar'} event={(e) => [actionFunction()]} />
				</section>
			</div>
		</section>
	);

	return (
		<ManageContainer>
			{modalState ? <ConfirmModal /> : null}
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
				</section>
			</section>
		</ManageContainer>
	);
};

export default Manage;
