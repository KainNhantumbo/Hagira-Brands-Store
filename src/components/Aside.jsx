import { AsideContainer } from '../styles/components/aside';
import Button from './Button';
import { BiSearch } from 'react-icons/bi';
const Aside = () => {
	const categories = {
		category: ['All', 'Cozinha', 'Panos', 'Batas', 'Cortinas'],
	};

	return (
		<AsideContainer>
			<section>
      <div>Pesquisa</div>
				<div>
					<input type='search' placeholder='Digite algo aqui...' />
					<Button text={'Buscar'} icon={<BiSearch />} />
				</div>
			</section>
			<section>
				<div>Categorias</div>
				<ul>
					{categories.category.map((category, index) => {
						return <li key={index}>{category}</li>;
					})}
				</ul>
			</section>
		</AsideContainer>
	);
};

export default Aside;
