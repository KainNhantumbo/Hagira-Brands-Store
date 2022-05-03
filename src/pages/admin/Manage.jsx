import { ManageContainer } from '../../styles/admin/manage';
import React, { useState, useEffect } from 'react';
import { FaCogs } from 'react-icons/fa';

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
		</ManageContainer>
	);
};

export default Manage;
