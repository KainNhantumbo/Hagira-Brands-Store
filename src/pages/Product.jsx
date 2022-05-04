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

	//  extensive components
	const Intro = () => (
		<section className='product-intro'>
			<h1>{product.name}</h1>
			<span>
				Artigo adicionado em {product.date?.date}, às {product.date?.time}
			</span>
		</section>
	);

	const ProductImage = () => (
		<section className='product-image'>
			<figure>
				<img src={product.image} alt={product.name} />
				<figcaption>{product.name}</figcaption>
			</figure>
		</section>
	);

	const VariantColors = () => (
		<div className='colors'>
			<h5>Cores disponíveis</h5>
			{product.variant_colors ? (
				<i>
					{product.variant_colors[0] ? (
						<span style={{ background: `${product.variant_colors[0]}` }}></span>
					) : null}
					{product.variant_colors[1] ? (
						<span style={{ background: `${product.variant_colors[1]}` }}></span>
					) : null}
					{product.variant_colors[2] ? (
						<span style={{ background: `${product.variant_colors[2]}` }}></span>
					) : null}
					{product.variant_colors[3] ? (
						<span style={{ background: `${product.variant_colors[3]}` }}></span>
					) : null}
				</i>
			) : null}
		</div>
	);

	return (
		<ProductContainer>
			<Intro />
			<article className='product-container'>
				<ProductImage />
				<section className='product-body'>
					<section className='product-caracteristics'>
						<h2>Caraterísticas do produto</h2>
						<section>
							<div>
								<h5>Classe</h5>
								<span>{product.class}</span>
							</div>
							<div>
								<h5>Categoria</h5>
								<span>{product.category}</span>
							</div>
							<div>
								<h5>Cor principal</h5>
								<span>{product.color}</span>
							</div>
							<div>
								<h5>Tipo de Tecido</h5>
								<span>{product.fabric}</span>
							</div>
							<VariantColors />
							<div>
								<h5>Tamanho</h5>
								<span>{product.size}</span>
							</div>
							{product.width ? (
								<div>
									<h5>Largura</h5>
									<span>{`${product.width} m`}</span>
								</div>
							) : null}
							{product.height ? (
								<div>
									<h5>Comprimento</h5>
									<span>{`${product.height} m`}</span>
								</div>
							) : null}
						</section>
					</section>
					<section className='product-description'>
						<h2>Descrição</h2>
						<section className='description'>{product.description}</section>
					</section>
					<section className='product-details'>
						<h2>Detalhes de Aquisição</h2>
						<section>
							<div>
								<h5>Preço</h5>
								<span>{`${product.price},00 MZN`}</span>
							</div>
							<div>
								<h5>Tipo de aquisição</h5>
								<span>
									{product.request_type === 'Estoque'
										? `Em estoque`
										: `Por encomenda`}
								</span>
							</div>
							<div>
								<h5>Data estimada de entrega</h5>
								{Number(product.estimated_delivery_day) < 2 ? (
									<span>{product.estimated_delivery_day} dia</span>
								) : (
									<span>{product.estimated_delivery_day} dias</span>
								)}
							</div>
						</section>
					</section>
				</section>
			</article>
		</ProductContainer>
	);
};

export default Product;
