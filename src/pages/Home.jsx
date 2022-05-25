import Aside from '../components/Aside';
import { HomeContainer } from '../styles/home';
import {
	BiBookmarks,
	BiBulb,
	BiErrorCircle,
	BiPurchaseTag,
	FaCartArrowDown,
	FaArrowCircleDown,
} from 'react-icons/all';
import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';
import Button from '../components/Button';
import { server_url } from '../services/urls';
import { createDate } from '../modules/module-scripts';

export const searchContext = createContext();

const Home = () => {
	const [loadState, setLoadState] = useState({
		icon: <FaCartArrowDown />,
		info: 'Carregando informações...',
	});
	const [products, setProducts] = useState([]);
	const [skipLength, setSkipLength] = useState(0);
	const [loadButtonText, setLoadButtonText] = useState('Ver mais produtos');

	// fetch products data from server
	const getProductsRequest = async () => {
		try {
			setLoadState(() => ({
				icon: <FaCartArrowDown />,
				info: 'Carregando a lista de produtos...',
			}));
			const server_getAllProductsUrl = `${server_url}/api/v1/products?product_fields=price,image,name,request_type,date&product_limit=10&product_skip=0`;
			const { data } = await axios({
				method: 'get',
				url: server_getAllProductsUrl,
			});
			setProducts(() => data.products);
			setSkipLength(() => data.products.length);
		} catch (err) {
			console.log(err.message);
			if (err.code === 'ERR_NETWORK') {
				setLoadState(() => ({
					icon: <BiErrorCircle />,
					info: 'Erro de conexão. Veja as suas configurações de internet.',
				}));
			}
		}
	};

	// loads more page products
	const loadMoreProducts = async () => {
		const server_loadProductsUrl = `${server_url}/api/v1/products?product_fields=price,image,name,request_type,date&product_limit=10&product_skip=${skipLength}`;
		try {
			setLoadButtonText('Carregando...');
			const { data } = await axios({
				method: 'get',
				url: server_loadProductsUrl,
			});

			if (data.products.length === 0) {
				setLoadButtonText(() => 'Não há mais nada');
				return;
			}

			setProducts((prevProducts) => {
				let newProducts = data.products;
				prevProducts.forEach((item) => {
					newProducts.push(item);
				});
				return newProducts;
			});
			setSkipLength(() => data.products.length);
		} catch (err) {
			console.log(err);
			if (err.code === 'ERR_NETWORK') {
				setLoadButtonText('Erro de Conexão. ');
			}
		}
	};

	// sends a visitor counto to the server
	const countVisitorRequest = async () => {
		try {
			const server_setVisitorCounterUrl = `${server_url}/api/v1/visitors`;
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
			<searchContext.Provider
				value={{ setProducts, setLoadState, getProductsRequest }}
			>
				<Aside />
			</searchContext.Provider>

			<article>
				<h2>Produtos</h2>
				{products.length < 1 ? (
					<article className='empty-message'>
						{loadState.icon}
						<section>
							<h2>{loadState.info}</h2>
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
												<BiBulb /> {items.request_type}
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
				<div className='load-more'>
					{products.length >= 1 ? (
						<Button
							text={loadButtonText}
							icon={<FaArrowCircleDown />}
							event={loadMoreProducts}
						/>
					) : null}
				</div>
			</article>
		</HomeContainer>
	);
};

export default Home;
