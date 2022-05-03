import { ProductsContainer } from '../../styles/admin/products';
import React, { useState, useEffect } from 'react';
import { FaArchive } from 'react-icons/fa';
import { BiCollection } from 'react-icons/bi';

const Products = () => {
	const [products, setProducts] = useState([]);

  // runs on every render
	useEffect(() => {
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
			<section>
				{products.length < 1 ? (
					<article className='empty-message'>
						<FaArchive />
						<section>
							<h2>Sem produtos na loja</h2>
						</section>
					</article>
				) : null}
			</section>
		</ProductsContainer>
	);
};

export default Products;
