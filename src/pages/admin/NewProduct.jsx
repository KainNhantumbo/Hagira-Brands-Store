import { NewProductContainer } from '../../styles/admin/newProduct';
import Button from '../../components/Button';
import { BiBookmarkPlus, BiEdit, BiUpload } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import { createDate } from '../../modules/module-scripts';
import axios from 'axios';
import { server_url } from '../../services/urls';
import Compressor from 'compressorjs';
import { server_url } from '../../services/urls';

const NewProduct = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [errorStyles, setErrorStyles] = useState({});
	const [colorA, setColorA] = useState('');
	const [colorB, setColorB] = useState('');
	const [colorC, setColorC] = useState('');
	const [colorD, setColorD] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		color: '',
		price: '',
		category: 'Outros',
		request_type: 'Encomenda',
		class: 'Média',
		size: '',
		fabric: 'Polyester',
		height: '',
		width: '',
		estimated_delivery_day: '',
	});

	// variable to store compressed Blob data
	var compressed = null;

	// runs on every render
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);

	// picks and reads the selected image
	const imageHandler = async () => {
		try {
			// file options
			const fileOptions = {
				multiple: false,
				types: [
					{
						description: 'Images',
						accept: {
							'image/jpg': ['.gif', '.jpeg', '.jpg'],
						},
					},
				],
				excludeAcceptAllOption: true,
			};

			// new file reader instance
			const reader = new FileReader();
			// shows the window to oick the file
			const [fileHandler] = await window.showOpenFilePicker(fileOptions);
			const file = await fileHandler.getFile();

			// compresses the file
			new Compressor(file, {
				quality: 0.8,
				success(result) {
					const form = new FormData();
					form.append('file', result, result.name);

					// reads the file and sets it on image state
					reader.readAsDataURL(result);
					reader.onloadend = () => {
						compressed = reader.result;
					};
				},
				error(err) {
					console.log(err);
				},
			});
		} catch (e) {
			console.log(e);
		}
	};

	// function that populates formData object
	const populateFormData = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// wrappes all data into a object and sends it to the server
	const formDataHandler = (e) => {
		e.preventDefault();

		if (!compressed) {
			setErrorStyles(() => ({ color: 'red' }));
			setErrorMessage(() => 'Selecione uma imagem do produto.');
			return;
		} else {
			setErrorMessage(() => '');
			setErrorStyles(() => ({}));
			product.image = compressed;
		}

		formData.variant_colors = [colorA, colorB, colorC, colorD];
		formData.date = createDate();
		return formData;
	};

	// sends a post request to the server
	const sendData = async (e) => {
		try {
			const product = formDataHandler(e);
			if (!product?.image) {
				return;
			} else if (product.image.length > 800000) {
				setErrorStyles(() => ({ color: 'red' }));
				setErrorMessage(() => 'Imagem muito grande');
				setTimeout(() => {
					setErrorStyles(() => ({}));
					setErrorMessage(() => '');
				}, 3000);
				return;
			}
			const url = `${server_url}/api/v1/products`;
			const response = await axios({
				method: 'post',
				url: url,
				data: product,
			});

			// if sucess, navigates to sucessfully subscribed page
			if (response.status === 201) return window.location.assign('/data-sent');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<NewProductContainer>
			<section>
				<h1>
					Novo Produto <BiEdit />{' '}
				</h1>
				<form onSubmit={sendData}>
					<div>
						<section>
							<label htmlFor='nome'>Nome (obrigatório)</label>
							<input
								type='text'
								id='nome'
								name='name'
								maxLength={'20'}
								required
								placeholder={'Nome do produto'}
								onChange={populateFormData}
							/>
						</section>
						<section>
							<label>Classe do Produto</label>
							<select name='class' onChange={populateFormData}>
								<option value='Baixa'>Baixa</option>
								<option value='Média'>Média</option>
								<option value='Alta'>Alta</option>
								<option value='Premium'>Premium</option>
							</select>
						</section>
					</div>
					<label>Descrição (obrigatório)</label>
					<textarea
						name='description'
						placeholder='Escreva uma breve descrição sobre o produto'
						cols='20'
						rows='8'
						required
						maxLength={'2500'}
						onChange={populateFormData}
					></textarea>
					<div>
						<section>
							<label>Cor</label>
							<input
								type='text'
								placeholder='Cor'
								maxLength={'30'}
								name='color'
								required
								onChange={populateFormData}
							/>
						</section>
						<section>
							<label htmlFor='size'>Tamanho</label>
							<input
								type='text'
								placeholder='Tamanho'
								name='size'
								maxLength={'30'}
								onChange={populateFormData}
							/>
						</section>
					</div>
					<div>
						<section>
							<label>Preço (obrigatório)</label>
							<input
								type='number'
								name='price'
								required
								maxLength={'10'}
								placeholder={'Preço do produto'}
								onChange={populateFormData}
							/>
						</section>
						<section>
							<label>Categoria do Produto</label>
							<select name='category' onChange={populateFormData}>
								<option value='Capulanas'>Capulanas</option>
								<option value='Batas'>Batas</option>
								<option value='Uniformes'>Uniformes</option>
								<option value='Panos'>Panos</option>
								<option value='Vestuário'>Vestuário</option>
								<option value='Cortinas'>Cortinas</option>
								<option value='Tapetes'>Tapetes</option>
								<option value='Outros'>Outros</option>
							</select>
						</section>
					</div>
					<div>
						<section>
							<label>Tipo de aquisição</label>
							<select name='request_type' onChange={populateFormData}>
								<option value='Encomenda'>Encomenda</option>
								<option value='Estoque'>Estoque</option>
							</select>
						</section>
						{formData.request_type !== 'Estoque' ? (
							<section>
								<label>Estimativa de Entrega</label>
								<input
									type='number'
									name='estimated_delivery_day'
									maxLength={2}
									onChange={populateFormData}
									placeholder={'Estimativa em dias'}
								/>
							</section>
						) : null}
						<section>
							<label>Qualidade de Tecido</label>
							<select name='fabric' onChange={populateFormData}>
								<option value='Polyester'>Polyester</option>
								<option value='Trevira'>Trevira</option>
								<option value='Algodão'>Algodão</option>
								<option value='Linho'>Linho</option>
								<option value='Sarja'>Sarja</option>
								<option value='Não especificado'>Não especificado</option>
							</select>
						</section>
					</div>
					<label>Variantes de Cor do Produto</label>
					<div className='variant-colors'>
						<section>
							<label>Cor A</label>
							<input
								type='color'
								onChange={(e) => setColorA(() => e.target.value)}
							/>
						</section>
						<section>
							<label>Cor B</label>
							<input
								type='color'
								onChange={(e) => setColorB(() => e.target.value)}
							/>
						</section>
						<section>
							<label>Cor C</label>
							<input
								type='color'
								onChange={(e) => setColorC(() => e.target.value)}
							/>
						</section>
						<section>
							<label>Cor D</label>
							<input
								type='color'
								onChange={(e) => setColorD(() => e.target.value)}
							/>
						</section>
					</div>
					<label>Medidas (em metros)</label>
					<div>
						<section>
							<label>Comprimento</label>
							<input
								type='number'
								name='width'
								maxLength='4'
								placeholder='Comprimento da peça'
								onChange={populateFormData}
							/>
						</section>
						<section>
							<label>Altura</label>
							<input
								type='number'
								name='height'
								maxLength={'4'}
								placeholder='Altura da peça'
								onChange={populateFormData}
							/>
						</section>
					</div>
					<label>Carregar fotografia</label>
					<Button
						text={'Carregar fotografia'}
						icon={<BiUpload />}
						event={(e) => {
							e.preventDefault();
							imageHandler();
						}}
					/>
					<hr />
					<span style={errorStyles}>{errorMessage}</span>
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
