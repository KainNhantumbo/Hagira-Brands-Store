import { ManageContainer } from '../../styles/admin/manage';
import React, { useState, useEffect } from 'react';
import {
	FaCogs,
	FaExclamationTriangle,
	FaInfoCircle,
	FaTrash,
} from 'react-icons/fa';
import axios from 'axios';
import { server_url } from '../../services/urls';
import Button from '../../components/Button';

const Manage = () => {
	const [modalState, setModalState] = useState(false);
	const [url, setUrl] = useState('');

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
	const eraseData = async (e) => {
		try {
			const delete_url = e.target.id;
			const response = await axios({ method: 'delete', url: delete_url });
			setModalState((prevState) => !prevState);
			if (response.status !== 200) {
				alert('Houve um erro ao tentar elinar os dados. Tente novamente.');
			}
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
					<FaExclamationTriangle />
					<h3>Pretende eliminar os dados permanentemente?</h3>
				</section>
				<section className='actions'>
					<Button
						text={'Cancelar'}
						event={(e) => setModalState((prevState) => !prevState)}
					/>
					<Button id={url} text={'Eliminar'} event={eraseData} />
				</section>
			</div>
		</section>
	);

	return (
		<ManageContainer>
			{modalState ? <ConfirmModal /> : null}
			<section className='upper'>
				<h1>
					Gerenciar <FaCogs />
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
						<h3>
							<FaInfoCircle /> Eliminar todos os produtos da loja
						</h3>
						<span>
							<Button
								id={`${server_url}/api/v1/products`}
								text={'Eliminar'}
								icon={<FaTrash />}
								event={(e) => {
									setUrl(e.target.id);
									setModalState((prevState) => !prevState);
								}}
							/>
						</span>
					</div>
					<div>
						<h3>
							<FaInfoCircle />
							Resetar o histórico de visitas à loja
						</h3>
						<span>
							<Button
								id={`${server_url}/api/v1/visitors`}
								text={'Eliminar'}
								icon={<FaTrash />}
								event={(e) => {
									setUrl(e.target.id);
									setModalState((prevState) => !prevState);
								}}
							/>
						</span>
					</div>
					<div>
						<h3>
							<FaInfoCircle />
							Eliminar todos subscritores de newsletter
						</h3>
						<span>
							<Button
								id={`${server_url}/api/v1/newsletter`}
								text={'Eliminar'}
								icon={<FaTrash />}
								event={(e) => {
									setUrl(e.target.id);
									setModalState((prevState) => !prevState);
								}}
							/>
						</span>
					</div>
					<div>
						<h3>
							<FaInfoCircle />
							Eliminar todas as mensagens
						</h3>
						<span>
							<Button
								id={`${server_url}/api/v1/messages`}
								text={'Eliminar'}
								icon={<FaTrash />}
								event={(e) => {
									setUrl(e.target.id);
									setModalState((prevState) => !prevState);
								}}
							/>
						</span>
					</div>
				</section>
			</section>
		</ManageContainer>
	);
};

export default Manage;
