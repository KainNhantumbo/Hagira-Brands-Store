import Aside from '../components/Aside';
import { HomeContainer } from '../styles/home';
import { BiBookmarks, BiBulb, BiPurchaseTag } from 'react-icons/bi';
import img0 from '../images/img0.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img13 from '../images/img13.jpg';

const Home = () => {
	const products = [
		{
			images: [img0, img13],
			type: 'Por encomenda',
			price: 923.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},

		{
			images: [img3, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img8, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img10, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img6, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img11, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img3, img1],
			type: 'Em estoque',
			price: 453.9,
			short_description: 'Pano de mesa',
			date: '12-08-2022',
		},
		{
			images: [img5, img1],
			type: 'Por encomenda',
			price: 977.9,
			short_description: 'Pano de mesa com bordado ',
			date: '12-08-2022',
		},
		{
			images: [img7, img1],
			type: 'Por encomenda',
			price: 1905,
			short_description: 'Pano de mesaejcvmmvfdd',
			date: '12-08-2022',
		},
	];

	return (
		<HomeContainer>
			<Aside />

			<article>
				<div>
					<h2>Produtos</h2>
					<section className='products'>
						{products.map((items, index) => {
							return (
								<div className='product' key={index}>
									<img src={items.images[0]} alt={items.short_description} />

									<div className='details-product'>
										<h3>{items.short_description}</h3>
										<div>
											<span>
												<BiBulb /> {items.type}
											</span>
											<span className='price'>
												<BiPurchaseTag /> MZN {items.price},00
											</span>
											<span>
												<BiBookmarks /> Listado em: {items.date}
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</article>
		</HomeContainer>
	);
};

export default Home;
