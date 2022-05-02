import { ProductContainer } from '../styles/product';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Product = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();

	// server request to get product by its id
	const server_productRequest_url = `http://localhost:4630/api/v1/products/${id}`;
	const productRequest = async () => {
		try {
			const { data: product } = await axios({
				method: 'get',
				url: server_productRequest_url,
			});
			const { product: product_data } = product;
			setProduct(() => product_data);
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		productRequest();
	}, []);
	console.log(product);

	return (
		<ProductContainer>
			<section className='product-intro'>
				<h1>{product.name}</h1>
				<span>
					Artigo adicionado em {product.date?.date}, às {product.date?.time}
				</span>
			</section>
			<article className='product-container'>
				<section className='product-image'>
					<figure>
						<img src={product.image} alt={product.name} />
						<figcaption>{product.name}</figcaption>
					</figure>
				</section>
				<section className='product-body'>
					<section className='product-caracteristics'>
						<h2>Caraterísticas do produto</h2>
						<div>
							<h5>Preço</h5>
							<span>{product.price}</span>
						</div>
						<div>
							<h5>Cor principal</h5>
							<span>{product.default_color}</span>
						</div>
						<div>
							<h5>Tipo de aquisição</h5>
							<span>
								{product.sell_type === 'Estoque'
									? `Em estoque`
									: `Por encomenda`}
							</span>
						</div>
						<div className='colors'>
							<h5>Variantes (cor)</h5>
							{product.colors ? (
								<>
									{product.colors[0] ? (
										<span style={{ background: `${product.colors[0]}` }}>
											Cor A
										</span>
									) : null}
									{product.colors[1] ? (
										<span style={{ background: `${product.colors[1]}` }}>
											Cor B
										</span>
									) : null}
									{product.colors[2] ? (
										<span style={{ background: `${product.colors[2]}` }}>
											Cor C
										</span>
									) : null}
									{product.colors[3] ? (
										<span style={{ background: `${product.colors[3]}` }}>
											Cor D
										</span>
									) : null}
								</>
							) : null}
						</div>
					</section>
					<section className='product-description'>
						<h2>Descrição</h2>
						<section className='description'>{product.description}</section>
					</section>
					<section className='product-details'>
						<h2>Detalhes do Produto</h2>
						<div>
							<h5>Classe</h5>
							<span>{product.class}</span>
						</div>
						<div>
							<h5>Categoria</h5>
							<span>{product.category}</span>
						</div>
						<div>
							<h5></h5>
						</div>
					</section>
				</section>
			</article>
		</ProductContainer>
	);
};

export default Product;
