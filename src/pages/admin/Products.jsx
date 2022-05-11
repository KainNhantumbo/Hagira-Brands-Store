import { ProductsContainer } from '../../styles/admin/products';
import React, { useState, useEffect } from 'react';
import {
	FaClock,
	FaDollarSign,
	FaEllipsisV,
	FaProductHunt,
	FaStore,
	FaTrash,
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
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		fetchProducts();

		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	return (
		<ProductsContainer>
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
