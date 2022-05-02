import { ProductContainer } from '../styles/product';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Product = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	console.log(id);

	// server request to get product by its id
	const server_productRequest_url = `http://localhost:4630/api/v1/products/${id}`;
	const productRequest = async () => {
		try {
			const { data: product } = await axios({
				method: 'get',
				url: server_productRequest_url,
			});
			console.log(product);
			setProduct(() => product);
		} catch (err) {
			console.log(err);
		}
	};

	// runs on every render
	useEffect(() => {
		productRequest();
	}, []);

	return <ProductContainer>Produto</ProductContainer>;
};

export default Product;
