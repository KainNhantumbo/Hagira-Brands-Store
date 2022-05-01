import Aside from '../components/Aside';
import { HomeContainer } from '../styles/home';
import { BiBookmarks, BiBulb, BiPurchaseTag } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [products, setProducts] = useState([]);

	// fetch products data from server
	const server_url = 'http://localhost:4630/api/v1/products';
	const getProductsRequest = async () => {
		try {
			const { data } = await axios({ method: 'get', url: server_url });
			setProducts(() => data.products);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProductsRequest();
	}, []);

	return (
		<HomeContainer>
			<Aside />

			<article>
				<div>
					<h2>Produtos</h2>
					<section className='products'>
						{products.map((items, index) => {
							return (
								<div className='product' key={index}>
									<img src={items.image} alt={items.name} />

									<div className='details-product'>
										<h3>{items.name}</h3>
										<div>
											<span>
												<BiBulb /> {items.sell_type}
											</span>
											<span className='price'>
												<BiPurchaseTag /> MZN {items.price},00
											</span>
											<span>
												<BiBookmarks /> Listado em: {items.date.date}
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</article>
		</HomeContainer>
	);
};

export default Home;
