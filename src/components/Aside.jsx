import { ToolboxContainer } from '../styles/components/toolbox';
import Button from './Button';
import { BiSearch } from 'react-icons/bi';
import { searchContext } from '../pages/Home';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaSyncAlt, FaWind } from 'react-icons/fa';

const Aside = () => {
	const [productClass, setProductClass] = useState('');
	const [productCategories, setProductCategories] = useState('');
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

	const searchClasses = async (e) => {};

	const searchTags = async (e) => {};

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
				<select
					className='options'
					onChange={(e) => {
						setProductCategories(() => e.target.value);
						getProductsRequest();
					}}
				>
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
				<select
					className='options'
					onChange={(e) => {
						setProductClass(() => e.target.value);
						getProductsRequest();
					}}
				>
					<option value=''>Todas as classes</option>
					<option value='Baixa'>Baixa</option>
					<option value='Média'>Média</option>
					<option value='Alta'>Alta</option>
					<option value='Premium'>Premium</option>
				</select>
			</section>
		</ToolboxContainer>
	);
};

export default Aside;
