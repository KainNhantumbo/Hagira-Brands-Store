import { SearchBarContainer } from '../styles/components/searchBar';
import React, { useState } from 'react';
import Button from './Button';
import { FaSearch, FaSort } from 'react-icons/fa';
import { server_url } from '../services/urls';
import axios from 'axios';

const SearchBar = () => {
	const [count, setCount] = useState(0);
	const [sort, setSort] = useState('name');
  const [search, setSearch] = useState('');


	return (
		<SearchBarContainer>
			<section className='container'>
				<div className='search'>
					<input type='search' placeholder='Pesquisar' />
					<Button icon={<FaSearch />} />
				</div>
				<div className='sort'>
					<h3><FaSort/> Ordenar por </h3>
					<select>
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
