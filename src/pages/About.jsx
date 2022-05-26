import { AboutContainer } from '../styles/about';
import aboutImage from '../assets/about0.jpg';
import { FaSeedling } from 'react-icons/fa';
import { useEffect } from 'react';
const About = () => {
	useEffect(() => {
		// corrects the window position
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'auto',
		});
	}, []);
	return (
		<AboutContainer>
			<h1>
				Sobre
				<FaSeedling />
			</h1>
			<div>
				<section className='image-container'>
					<figure>
						<img src={aboutImage} alt='Imagem da Autora' />
						<figcaption>Foto da Autora</figcaption>
					</figure>
				</section>
				<section className='about-content'>
					<h3>Minha História</h3>
					<p>
						Certo dia, recebi uma máquina de costura e disse para mim mesma:
						gostaria de fazer diferente do que todos fazem, algo que me
						empolgue.
					</p>
					<p>
						Implementei a ideia que tive de começar a fazer roupas e deu certo.
						Sinto que que sou uma guerreira por gostar de aprender e fazer
						acontecer com a graça de Deus.
					</p>

					<h3>Visão e Missão</h3>
					<p>
						Pretendo com os meus trabalhos alcançar e satisfazer a demanda do
						mercado, fazendo produtos de qualidade, com base em matéria-prima
						durável e de qualidade para todas as áreas envolvidas no contexto
						vestuário (uniformes, fardas, roupas temáticas, roupas de cozinha,
						panos, etc.) e bordados, levando o nome da minha marca,{' '}
						<strong>Hagira Brands</strong> além.
					</p>
				</section>
			</div>
		</AboutContainer>
	);
};

export default About;
