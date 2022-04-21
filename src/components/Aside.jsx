import { AsideContainer } from '../styles/components/aside';
import Button from './Button';
import { BiSearch } from 'react-icons/bi';
const Aside = () => {
	const categories = {
		category: ['Todos', 'Cozinha', 'Panos', 'Batas', 'Cortinas'],
		classes: ['Alta', 'Média', 'Baixa'],
	};

	return (
		<AsideContainer>
			<section>
				<div className='title'>Pesquisa</div>
				<div className='search'>
					<input type='search' placeholder='Digite algo aqui...' />
					<Button text={'Buscar'} icon={<BiSearch />} />
				</div>
			</section>
			<section>
				<div className='title'>Categorias e Tags</div>
				<ul>
					{categories.category.map((category, index) => {
						return (
							<li key={index} className='tags'>
								<span>{category}</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<div className='title'>Classes</div>
				<ul>
					{categories.classes.map((classe, index) => {
						return (
							<li key={index} className='tags'>
								<span>{classe}</span>
							</li>
						);
					})}
				</ul>
			</section>
		</AsideContainer>
	);
};

export default Aside;
