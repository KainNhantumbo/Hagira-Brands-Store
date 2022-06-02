import { ProductContainer } from '../styles/product';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
	FaAward,
	FaBrush,
	FaCircleNotch,
	FaDollarSign,
	FaFillDrip,
	FaImages,
	FaLeaf,
	FaList,
	FaMapMarkerAlt,
	FaPaperPlane,
	FaRulerCombined,
	FaRulerHorizontal,
	FaRulerVertical,
	FaScroll,
	FaShoppingBag,
	FaTags,
	FaTruck,
	FaTruckLoading,
	VscLoading,
	BiErrorCircle,
	VscError,
} from 'react-icons/all';
import { server_url } from '../services/urls';
import { Link } from 'react-router-dom';

const Product = () => {
	const [stateMessage, setStateMessage] = useState({
		icon: <VscLoading />,
		info: 'Carregando os detalhes...',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [product, setProduct] = useState([]);
	const { id: product_id } = useParams();

	// server request to get product by its id
	const productRequest = async () => {
		const server_productRequest_url = `${server_url}/api/v1/products/${product_id}`;
		try {
			setIsLoading(true)
			const { data: product } = await axios({
				method: 'get',
				url: server_productRequest_url,
			});
			const { product: product_data } = product;
			setProduct(() => product_data);
			setIsLoading(false)
		} catch (err) {
			console.log(err.message);
			setIsLoading(false)
			setIsError(true)
			if (err.code === 'ERR_NETWORK') {
				setStateMessage(() => ({
					icon: <BiErrorCircle />,
					info: 'Erro de conexão. Veja as suas configurações de internet.',
				}));
			} else {
				setStateMessage(() => ({
					icon: <VscError />,
					info: 'Parece que algo está errado. Tente recarregar a página.',
				}));
			}
		}
	};

	useEffect(() => {
		productRequest();
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	//  ===========extensive components======== //
	const Intro = () => (
		<section className='product-intro'>
			<h1>{product.name}</h1>
			<span>
				<em>
					Artigo adicionado em {product.date?.date}, às {product.date?.time}
				</em>
			</span>
		</section>
	);

	const ProductImage = () => (
		<section className='product-image'>
			<h2>
				<FaImages /> Imagem do produto
			</h2>
			<figure>
				<img src={product.image} alt={product.name} />
				<figcaption>{product.name}</figcaption>
			</figure>
		</section>
	);
console.log(product?.variant_colors);
	const VariantColors = () => (
		<div className='colors'>
			<h5>
				<FaBrush /> Cores disponíveis
			</h5>
			{product.variant_colors[0] !== '' ? (
				<i>
					{product.variant_colors[0] ? (
						<span style={{ background: `${product.variant_colors[0]}` }}>
							<FaCircleNotch />
						</span>
					) : null}
					{product.variant_colors[1] ? (
						<span style={{ background: `${product.variant_colors[1]}` }}>
							<FaCircleNotch />
						</span>
					) : null}
					{product.variant_colors[2] ? (
						<span style={{ background: `${product.variant_colors[2]}` }}>
							<FaCircleNotch />
						</span>
					) : null}
					{product.variant_colors[3] ? (
						<span style={{ background: `${product.variant_colors[3]}` }}>
							<FaCircleNotch />
						</span>
					) : null}
				</i>
			) : null}
		</div>
	);

	return (
		<ProductContainer>
			{isLoading ? (
				<section className='loading'>
					{stateMessage.icon}
					<section>
						<h2>{stateMessage.info}</h2>
					</section>
				</section>
			) : null}
			{isError ? (
				<section className='empty-message'>
					{stateMessage.icon}
					<section>
						<h2>{stateMessage.info}</h2>
					</section>
				</section>
			) : null}
			{product._id ? (
				<>
					<Intro />
					<article className='product-container'>
						<ProductImage />
						<section className='product-body'>
							<section className='product-caracteristics'>
								<h2>
									<FaList /> Caraterísticas do Produto
								</h2>
								<section>
									<div>
										<h5>
											<FaAward /> Classe
										</h5>
										<span>{product.class}</span>
									</div>
									<div>
										<h5>
											<FaTags /> Categoria
										</h5>
										<span>{product.category}</span>
									</div>
									<div>
										<h5>
											<FaFillDrip /> Cor principal
										</h5>
										<span>{product.color}</span>
									</div>
									<div>
										<h5>
											<FaScroll /> Tipo de Tecido
										</h5>
										<span>{product.fabric}</span>
									</div>
									<VariantColors />
									<div>
										<h5>
											<FaRulerCombined /> Tamanho
										</h5>
										<span>{product.size}</span>
									</div>
									{product.width ? (
										<div>
											<h5>
												<FaRulerHorizontal /> Largura
											</h5>
											<span>{`${product.width} m`}</span>
										</div>
									) : null}
									{product.height ? (
										<div>
											<h5>
												<FaRulerVertical /> Comprimento
											</h5>
											<span>{`${product.height} m`}</span>
										</div>
									) : null}
								</section>
							</section>
							<section className='product-description'>
								<h2>
									<FaLeaf /> Descrição
								</h2>
								<section className='description'>{product.description}</section>
							</section>
							<section className='product-details'>
								<h2>
									<FaPaperPlane /> Detalhes de Aquisição
								</h2>
								<section>
									<div>
										<h5>
											<FaDollarSign /> Preço
										</h5>
										<span>{`${product.price},00 MZN`}</span>
									</div>
									<div>
										<h5>
											<FaTruckLoading />
											Tipo de aquisição
										</h5>
										<span>
											{product.request_type === 'Estoque'
												? `Em estoque`
												: `Por encomenda`}
										</span>
									</div>
									<div>
										<h5>
											<FaTruck />
											Data estimada de entrega*
										</h5>
										{!Number(product.estimated_delivery_day) ? (
											<span>Não especificado</span>
										) : null}
										{Number(product.estimated_delivery_day) === 1 ? (
											<span>{product.estimated_delivery_day} dia</span>
										) : null}
										{Number(product.estimated_delivery_day) > 1 ? (
											<span>{product.estimated_delivery_day} dias</span>
										) : null}
									</div>
									<div>
										<h5>
											<FaMapMarkerAlt /> Localização
										</h5>
										<span>Maputo - Matola</span>
									</div>
									<span className='advice'>
										* a data estimada de entrega pode variar de acordo com a
										quantidade de produtos que for encomendar.
									</span>
								</section>
							</section>
							<section className='product-actions'>
								<Link to={`payment/${product_id}`}>
									<Button
										text={'Encomendar produto'}
										icon={<FaShoppingBag />}
									/>
								</Link>
							</section>
						</section>
					</article>
				</>
			) : null}
		</ProductContainer>
	);
};

export default Product;
