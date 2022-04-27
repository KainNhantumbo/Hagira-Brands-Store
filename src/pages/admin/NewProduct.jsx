import { NewProductContainer } from '../../styles/admin/newProduct';
import Button from '../../components/Button';
import { BiBookmarkPlus, BiEdit, BiUpload } from 'react-icons/bi';
import React, { useState } from 'react';

const NewProduct = () => {
	const [image, setImage] = useState({});

	const formDataHandler = (e) => {
		e.preventDefault();
	};

	const imageHandler = () => {};

	return (
		<NewProductContainer>
			<section>
				<h1>
					Novo Produto <BiEdit />{' '}
				</h1>
				<form onSubmit={formDataHandler}>
					<div>
						<label htmlFor='nome'>Nome</label>
						<input
							type='text'
							id='nome'
							maxLength={'20'}
							placeholder={'Nome do produto'}
						/>
						<label htmlFor='classe'>Classe do Produto</label>
						<select id='classe'>
							<option value='Baixa'>Baixa</option>
							<option value='Média'>Média</option>
							<option value='Alta'>Alta</option>
							<option value='Premium'>Premium</option>
						</select>
					</div>
					<label htmlFor='description'>Descrição</label>
					<textarea
						id='description'
						placeholder='Escreva uma breve descrição sobre o produto'
						cols='20'
						rows='8'
						maxLength={'700'}
					></textarea>
					<div>
						<label htmlFor='color'>Cor</label>
						<input type='text' placeholder='Cor' maxLength={'20'} />
						<label htmlFor='size'>Tamanho</label>
						<input type='text' placeholder='Tamanho' maxLength={'20'} />
					</div>
					<div>
						<label htmlFor='type'>Tipo de aquisição</label>
						<select id='type'>
							<option value='Encomenda'>Encomenda</option>
							<option value='Estoque'>Estoque</option>
						</select>
						<label htmlFor='fabric'>Qualidade de Tecido</label>
						<select>
							<option value='Polyester'>Polyester</option>
							<option value='Trevira'>Trevira</option>
							<option value='algodão'>Algodão</option>
							<option value='Linho'>Linho</option>
							<option value='Sarja'>Sarja</option>
						</select>
					</div>
					<label>Variantes de Cor</label>
					<div>
						<label htmlFor='colorA'>Cor A</label>
						<input type='color' id='colorA' />
						<label htmlFor='colorB'>Cor B</label>
						<input type='color' id='colorB' />
					</div>
					<label>Medidas (em metros)</label>
					<div>
						<label htmlFor='weight'>Comprimento</label>
						<input type='number' id='weight' maxLength='4' />
						<label htmlFor='height'>Altura</label>
						<input type='number' id='height' maxLength={'4'} />
					</div>

					<label htmlFor='image'>Selecionar imagem</label>
					<Button
						text={'Carregar imagem'}
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
