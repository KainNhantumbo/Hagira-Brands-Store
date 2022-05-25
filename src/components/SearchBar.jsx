import { SearchBarContainer } from '../styles/components/searchBar';
import React, { useState } from 'react';
import Button from './Button';
import { FaSearch, FaSort } from 'react-icons/fa';
import { server_url } from '../services/urls';
import axios from 'axios';

const SearchBar = ({ count, location, seter, fetcher }) => {
	const [search, setSearch] = useState('');

	// search engine function
	const searchTerms = async (sort = 'name') => {
		try {
			const access_token = JSON.parse(localStorage.getItem('accessToken'));

			if (location === 'clients') {
				let search_url = `${server_url}/api/v1/payments?search=${search}&sort=${sort}`;
				const { data: response } = await axios({
					method: 'get',
					url: search_url,
					headers: {
						authorization: `Bearer ${access_token}`,
					},
				});
				seter(() => response.payments);
				return;
			}

			if (location === 'products') {
				let search_url = `${server_url}/api/v1/products?product_name=${search}&product_sort=${sort}`;
				const { data: response } = await axios({
					method: 'get',
					url: search_url,
					headers: {
						authorization: `Bearer ${access_token}`,
					},
				});
				seter(() => response.products);
				return;
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<SearchBarContainer>
			<section className='container'>
				<div className='search'>
					<input
						type='search'
						placeholder='Pesquisar'
						onChange={(e) => {
							setSearch(() => e.target.value);

							if (e.target.value.length < 1) {
								fetcher();
							}
						}}
					/>
					<Button icon={<FaSearch />} event={searchTerms} />
				</div>
				<div className='sort'>
					<h3>
						<FaSort /> Ordenar por{' '}
					</h3>
					<select onChange={(e) => searchTerms(e.target.value)}>
						<option value='name'>Nome</option>
						<option value='-name'>Nome Decrescente</option>
						<option value='createdAt'>Data</option>
						<option value='-createdAt'>Data Decrescente</option>
					</select>
				</div>
			</section>
			<section className='counter'>
				<strong>{count} itens</strong>
			</section>
		</SearchBarContainer>
	);
};

export default SearchBar;
