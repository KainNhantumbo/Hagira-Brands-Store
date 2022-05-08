import { SearchBarContainer } from '../styles/components/searchBar';
import React, { useState, useContext } from 'react';
import Button from './Button';
import { FaSearch, FaSort } from 'react-icons/fa';
import { server_url } from '../services/urls';
import axios from 'axios';
import { clientsContext } from '../pages/admin/Clients';

const SearchBar = ({ count, location }) => {
	const [search, setSearch] = useState('');
	const [setClients, fetchClients] = useContext(clientsContext);

	// search engine function
	const searchTerms = async (sort = 'name') => {
		try {
			const value = search;
			const search_url = `${server_url}/api/v1/payments?search=${value}&sort=${sort}`;
			const { data: response } = await axios({
				method: 'get',
				url: search_url,
			});

			if (location === 'clients') {
				setClients(() => response.payments);
				return;
			}
		} catch (err) {
			console.log(err);
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
								if (location === 'clients') {
									fetchClients();
									return;
								}
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
