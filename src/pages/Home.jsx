import Aside from '../components/Aside';
import { HomeContainer } from '../styles/home';
import { BiBookmarks, BiBulb, BiPurchaseTag } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createDate } from '../modules/module-scripts';
import { FaCartArrowDown } from 'react-icons/fa';

const Home = () => {
	const [products, setProducts] = useState([]);

	// fetch products data from server
	const server_getAllProductsUrl = 'http://localhost:4630/api/v1/products';
	const getProductsRequest = async () => {
		try {
			const { data } = await axios({
				method: 'get',
				url: server_getAllProductsUrl,
			});
			setProducts(() => data.products);
		} catch (err) {
			console.log(err);
		}
	};

	// sends a visitor counto to the server
	const server_setVisitorCounterUrl = 'http://localhost:4630/api/v1/visitors';
	const countVisitorRequest = async () => {
		try {
			await axios({
				method: 'post',
				data: { visitor: 1, date: createDate() },
				url: server_setVisitorCounterUrl,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		getProductsRequest();
		countVisitorRequest();

		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	return (
		<HomeContainer>
			<Aside />

			<article>
				<h2>Produtos</h2>
				{products.length < 1 ? (
					<article className='empty-message'>
						<FaCartArrowDown />
						<section>
							<h2>Carregando produtos...</h2>
						</section>
					</article>
				) : null}
				<section className='products'>
					{products.map((items, index) => {
						return (
							<div className='product' key={index}>
								<a href={`/product/${items._id}`}>
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
								</a>
							</div>
						);
					})}
				</section>
			</article>
		</HomeContainer>
	);
};

export default Home;
