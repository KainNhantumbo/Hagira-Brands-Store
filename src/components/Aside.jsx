import { ToolboxContainer } from '../styles/components/toolbox';
import Button from './Button';
import { BiSearch } from 'react-icons/bi';
import { searchContext } from '../pages/Home';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaSyncAlt, FaWind } from 'react-icons/fa';
import { server_url } from '../services/urls';

const Aside = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const {
		setIsLoading,
		setIsMessage,
		setProducts,
		setLoadState,
		getProductsRequest,
	} = useContext(searchContext);

	// makes a search request to the server
	const search = async () => {
		try {
			// if the search input is empty, cancels the request
			if (searchQuery.length < 1) return;
			setProducts([]);
			setIsLoading(true);
			const server_searchProductsUrl = `${server_url}/api/v1/products?product_fields=price,image,name,request_type,date&product_name=${searchQuery}`;
			const { data: response } = await axios({
				method: 'get',
				url: server_searchProductsUrl,
			});
			setProducts(() => response.products);
			setIsLoading(false);
			if (response.products.length < 1) {
				setIsMessage(true);
				setLoadState(() => ({ icon: <FaWind />, info: 'Sem resultados.' }));
			}
		} catch (err) {
			console.log(err);
		}
	};

	// searches products by classes
	const searchClasses = async (e) => {
		try {
			setIsMessage(false);
			setIsLoading(true);
			setProducts([]);
			const productClass = e.target.value;
			// if is not any class type, cancels the request
			if (!productClass) return getProductsRequest();

			const url = `${server_url}/api/v1/products?product_fields=price,image,name,request_type,date&product_class=${productClass}`;
			const { data: response } = await axios({
				method: 'get',
				url: url,
			});
			setProducts(() => response.products);
			setIsLoading(false);
			if (response.products.length < 1) {
				setIsMessage(true);
				setLoadState(() => ({
					icon: <FaWind />,
					info: 'Sem resultados para a classe selecionada.',
				}));
			}
		} catch (err) {
			console.log(err);
		}
	};

	// searches products by category
	const searchCategories = async (e) => {
		try {
			setIsMessage(false);
			setIsLoading(true);
			setProducts([]);
			const product_category = e.target.value;

			// if is not any class type, cancels the request
			if (!product_category) return getProductsRequest();

			const url = `${server_url}/api/v1/products?product_fields=price,image,name,request_type,date&product_category=${product_category}`;
			const { data: response } = await axios({
				method: 'get',
				url: url,
			});
			setProducts(() => response.products);
			setIsLoading(false);
			if (response.products.length < 1) {
				setIsMessage(true);
				setLoadState(() => ({
					icon: <FaWind />,
					info: 'Sem resultados para a categoria selecionada.',
				}));
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ToolboxContainer>
			<section>
				<div className='title'>Pesquisa</div>
				<div className='search'>
					<input
						type='search'
						placeholder='Digite algo aqui...'
						onChange={(e) => {
							const value = e.target.value;
							setSearchQuery(() => value);
							if (value.length < 1) {
								setIsMessage(false);
								getProductsRequest();
								return;
							}
						}}
					/>
					<Button text={'Buscar'} icon={<BiSearch />} event={search} />
				</div>
			</section>
			<div className='tags'>
				<section>
					<div className='title'>Categorias e Tags</div>
					<select className='options' onChange={(e) => searchCategories(e)}>
						<option value=''>Todas categorias</option>
						<option value='Capulanas'>Capulanas</option>
						<option value='Batas'>Batas</option>
						<option value='Uniformes'>Uniformes</option>
						<option value='Panos'>Panos</option>
						<option value='Vestuário'>Vestuário</option>
						<option value='Cortinas'>Cortinas</option>
						<option value='Tapetes'>Tapetes</option>
						<option value='Outros'>Outros</option>
					</select>
				</section>
				<section>
					<div className='title'>Classes</div>
					<select className='options' onChange={(e) => searchClasses(e)}>
						<option value=''>Todas as classes</option>
						<option value='Baixa'>Baixa</option>
						<option value='Média'>Média</option>
						<option value='Alta'>Alta</option>
						<option value='Premium'>Premium</option>
					</select>
				</section>
			</div>
		</ToolboxContainer>
	);
};

export default Aside;
