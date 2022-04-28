import { NewProductContainer } from '../../styles/admin/newProduct';
import Button from '../../components/Button';
import { BiBookmarkPlus, BiEdit, BiUpload } from 'react-icons/bi';
import React, { useState } from 'react';

const NewProduct = () => {
	const [productName, setProductName] = useState('');
	const [productClass, setProductClass] = useState('Média');
	const [productDescription, setProductDescription] = useState('');
	const [colorA, setColorA] = useState('');
	const [colorB, setColorB] = useState('');
	const [colorC, setColorC] = useState('');
	const [colorD, setColorD] = useState('');
	const [defaultColor, setDefaultColor] = useState('');
	const [size, setSize] = useState('');
	const [price, setPrice] = useState('');
	const [productCategory, setproductCategory] = useState('Outros');
	const [sellingType, setSellingType] = useState('Encomenda');
	const [fabric, setFabric] = useState('Polyester');
	const [productHeight, setProductHeight] = useState('');
	const [productWidth, setProductWidth] = useState('');
	const [image, setImage] = useState({});

	const formDataHandler = (e) => {
		e.preventDefault();
	};

	const imageHandler = async () => {
		const [fileHandler] = await window.requestFileSystem();
	};

	return (
		<NewProductContainer>
			<section>
				<h1>
					Novo Produto <BiEdit />{' '}
				</h1>
				<form onSubmit={formDataHandler}>
					<div>
						<section>
							<label htmlFor='nome'>Nome (obrigatório)</label>
							<input
								type='text'
								id='nome'
								maxLength={'20'}
								placeholder={'Nome do produto'}
								onChange={(e) => setProductName(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='classe'>Classe do Produto</label>
							<select
								id='classe'
								onChange={(e) => setProductClass(() => e.target.value)}
							>
								<option value='Baixa'>Baixa</option>
								<option value='Média'>Média</option>
								<option value='Alta'>Alta</option>
								<option value='Premium'>Premium</option>
							</select>
						</section>
					</div>
					<label htmlFor='description'>Descrição (obrigatório)</label>
					<textarea
						id='description'
						placeholder='Escreva uma breve descrição sobre o produto'
						cols='20'
						rows='8'
						maxLength={'700'}
						onChange={(e) => setProductDescription(() => e.target.value)}
					></textarea>
					<div>
						<section>
							<label htmlFor='color'>Cor</label>
							<input
								type='text'
								placeholder='Cor'
								maxLength={'20'}
								onChange={(e) => setDefaultColor(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='size'>Tamanho</label>
							<input
								type='text'
								placeholder='Tamanho'
								maxLength={'20'}
								onChange={(e) => setSize(() => e.target.value)}
							/>
						</section>
					</div>
					<div>
						<section>
							<label htmlFor='price'>Preço (obrigatório)</label>
							<input
								type='number'
								id='price'
								maxLength={'10'}
								placeholder={'Preço do produto'}
								onChange={(e) => setPrice(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='category'>Categoria (obrigatório)</label>
							<select
								id='category'
								onChange={(e) => setproductCategory(() => e.target.value)}
							>
								<option value='Capulanas'>Capulanas</option>
								<option value='Batas'>Batas</option>
								<option value='Uniformes'>Uniformes</option>
								<option value='Vestuário'>Vestuário</option>
								<option value='Cortinas'>Cortinas</option>
								<option value='Tapetes'>Tapetes</option>
								<option value='Outros'>Outros</option>
							</select>
						</section>
					</div>
					<div>
						<section>
							<label htmlFor='type'>Tipo de aquisição</label>
							<select
								id='type'
								onChange={(e) => setSellingType(() => e.target.value)}
							>
								<option value='Encomenda'>Encomenda</option>
								<option value='Estoque'>Estoque</option>
							</select>
						</section>
						<section>
							<label htmlFor='fabric'>Qualidade de Tecido</label>
							<select
								id='fabric'
								onChange={(e) => setFabric(() => e.target.value)}
							>
								<option value='Polyester'>Polyester</option>
								<option value='Trevira'>Trevira</option>
								<option value='algodão'>Algodão</option>
								<option value='Linho'>Linho</option>
								<option value='Sarja'>Sarja</option>
								<option value='Outro'>Outro</option>
							</select>
						</section>
					</div>
					<label>Variantes de Cor do Produto</label>
					<div>
						<section>
							<label htmlFor='colorA'>Cor A</label>
							<input
								type='color'
								id='colorA'
								onChange={(e) => setColorA(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='colorB'>Cor B</label>
							<input
								type='color'
								id='colorB'
								onChange={(e) => setColorB(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='colorC'>Cor C</label>
							<input
								type='color'
								id='color'
								onChange={(e) => setColorC(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='colorD'>Cor D</label>
							<input
								type='color'
								id='colorD'
								onChange={(e) => setColorD(() => e.target.value)}
							/>
						</section>
					</div>
					<label>Medidas (em metros)</label>
					<div>
						<section>
							<label htmlFor='width'>Comprimento</label>
							<input
								type='number'
								id='width'
								maxLength='4'
								placeholder='Comprimento da peça'
								onChange={(e) => setProductWidth(() => e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor='height'>Altura</label>
							<input
								type='number'
								id='height'
								maxLength={'4'}
								placeholder='Altura da peça'
								onChange={(e) => setProductHeight(() => e.target.value)}
							/>
						</section>
					</div>
					<label htmlFor='image'>Selecionar imagem</label>
					<Button
						text={'Carregar Imagem'}
						icon={<BiUpload />}
						event={(e) => {
							e.preventDefault();
							imageHandler();
						}}
					/>
					<hr />
					<Button
						text={'Publicar Produto'}
						icon={<BiBookmarkPlus />}
						type={'submit'}
					/>
				</form>
			</section>
		</NewProductContainer>
	);
};

export default NewProduct;
