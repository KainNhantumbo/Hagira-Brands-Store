import { ProductsContainer } from '../../styles/admin/products';
import React, { useState, useEffect } from 'react';
import {
	FaClock,
	FaDollarSign,
	FaEllipsisV,
	FaProductHunt,
	FaStore,
	FaTrash,
	FaTrashAlt,
} from 'react-icons/fa';
import { BiCollection } from 'react-icons/bi';
import axios from 'axios';
import Button from '../../components/Button';
import { server_url } from '../../services/urls';
import SearchBar from '../../components/SearchBar';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [modalState, setModalState] = useState(false);
	const [id, setId] = useState('');

	const fetchProducts = async () => {
		try {
			const products_url = `${server_url}/api/v1/products`;
			const { data: response } = await axios({
				method: 'get',
				url: products_url,
			});
			setProducts(() => response.products);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProducts();
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	//

	// confirm modal for delete operations
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
					<h3>Pretende eliminar permanentemente este produto?</h3>
				</section>
				<section className='actions'>
					<Button
						text={'Cancelar'}
						event={(e) => setModalState((prevState) => !prevState)}
					/>
					<Button id={id} text={'Eliminar'} event={deleteProduct} />
				</section>
			</div>
		</section>
	);

	const deleteProduct = async (e) => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));
			const id = e.target.id;
			const url = `${server_url}/api/v1/products/${id}`;
			await axios({
				method: 'delete',
				url: url,
				headers: {
					authorization: `Bearer ${access_token}`,
				},
			});
			fetchProducts();
			setModalState((prevState) => !prevState);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<ProductsContainer>
			{modalState ? <ConfirmModal /> : null}

			<section className='upper'>
				<h1>
					Produtos <BiCollection />{' '}
				</h1>
			</section>
			<section className='main-container'>
				<SearchBar
					fetcher={fetchProducts}
					seter={setProducts}
					location={'products'}
					count={products.length}
				/>
				{products.length < 1 ? (
					<article className='empty-message'>
						<FaStore />
						<section>
							<h2>Sem produtos na loja.</h2>
							<p>Estarão listados aqui os produtos da loja.</p>
						</section>
					</article>
				) : (
					<ul className='payments'>
						{products.map(({ _id, name, price, date }) => {
							return (
								<li key={_id}>
									<div className='common'>
										<h3>
											<FaProductHunt />
											Nome
										</h3>
										<span>{name}</span>
									</div>
									<div className='common'>
										<h3>
											<FaDollarSign />
											Preço
										</h3>
										<span>{price},00 MT</span>
									</div>
									<div className='common'>
										<h3>
											<FaClock />
											Publicado
										</h3>
										<span className='date'>
											{date?.date} {date?.time}{' '}
										</span>
									</div>
									<div className='common buttons'>
										<span>
											<Button
												id={_id}
												text={'Detalhes'}
												icon={<FaEllipsisV />}
												event={(e) => {
													// viewPaymentDetails(e);
												}}
											/>
										</span>
										<span id={_id}>
											<Button
												id={_id}
												text={'Eliminar'}
												icon={<FaTrash />}
												event={(e) => {
													setId(() => {
														return e.target.id;
													});
													setModalState((prevState) => !prevState);
												}}
											/>
										</span>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</section>
		</ProductsContainer>
	);
};

export default Products;
