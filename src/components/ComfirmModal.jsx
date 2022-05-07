import { ModalContainer } from '../styles/components/confirmModal';
import Button from './Button';
import React, { useState } from 'react';


const ConfirmModal = ({accept, modalState}) => {
const [modalState, setModalState] = useState(true);

	return (
		<ModalContainer>
			<section
				className='modal-container'
				onClick={(e) => {
					if (e.target.classList.contains('modal-container')) {
						setModalState((prevState) => !prevState);
					}
				}}
			>
				<div className='message-previewer'>
					
					<section className='actions'>
						<Button
							text={'Voltar'}
							icon={<BiChevronLeft />}
							event={(e) => setMessageModal((prevState) => !prevState)}
						/>
						<Button
							id={id}
							text={'Eliminar mensagem'}
							icon={<BiTrash />}
							event={(e) => deleteMessageRequest(e)}
						/>
					</section>
				</div>
			</section>
		</ModalContainer>
	);
};

export default ConfirmModal;
