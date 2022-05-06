import { ToolboxContainer } from '../styles/components/toolbox';
import Button from './Button';
import { BiSearch } from 'react-icons/bi';
import { searchContext } from '../pages/Home';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaSyncAlt, FaWind } from 'react-icons/fa';

const Aside = () => {
	const categories = {
		category: ['Todos', 'Uniformes', 'Panos', 'Batas', 'Capulanas'],
		classes: ['Alta', 'Média', 'Baixa', 'Premium'],
	};

	const [searchQuery, setSearchQuery] = useState('');
	const { setProducts, setLoadState, getProductsRequest } =
		useContext(searchContext);
	// 
	const server_searchProductsUrl = `http://localhost:4630/api/v1/products?product_fields=price,image,name,request_type,date&product_name=${searchQuery}`;
	const search = async () => {
		try {
			if (searchQuery.length < 1) return;
			setLoadState(() => ({
				icon: <FaSyncAlt />,
				info: 'Procurando...',
			}));
			const { data: response } = await axios({
				method: 'get',
				url: server_searchProductsUrl,
			});
			setProducts(() => response.products);
			if (response.products.length < 1) {
				setLoadState(() => ({ icon: <FaWind />, info: 'Sem resultados.' }));
			}
			console.log(response);
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
							setSearchQuery(() => e.target.value);
							getProductsRequest();
						}}
					/>
					<Button text={'Buscar'} icon={<BiSearch />} event={search} />
				</div>
			</section>
			<section>
				<div className='title'>Categorias e Tags</div>
				<ul>
					{categories.category.map((category, index) => {
						return (
							<li key={index} className='tags'>
								<span>{category}</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<div className='title'>Classes</div>
				<ul>
					{categories.classes.map((classe, index) => {
						return (
							<li key={index} className='tags'>
								<span>{classe}</span>
							</li>
						);
					})}
				</ul>
			</section>
		</ToolboxContainer>
	);
};

export default Aside;
