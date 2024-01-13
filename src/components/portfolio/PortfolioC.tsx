import React, { useState } from 'react';
import { BoxingPortfolio, PortfolioS } from './style';
import ExplorerImg from './pages/image/explorer.png';
import Personal from './pages/image/personal.jpg';
import Calculadora from './pages/image/calculadora.png';
import Nutricao from './pages/image/nutrição.png';
import Psicologa from './pages/image/psicologa.png';
import Marketing from './pages/image/marketing.png';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
export const PortfolioC = () => {
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Allow null as a possible value

	const handleMouseEnter = (index: number) => {
		// Specify the type of index
		setFocusedIndex(index);
	};

	const handleMouseLeave = () => {
		setFocusedIndex(null); // Assign null directly
	};
	const ListPortfolios = [
		{
			image: Personal,
			text: 'Personal trainer',
		},
		{
			image: Psicologa,
			text: 'Psicologa',
		},
		{
			image: ExplorerImg,
			text: 'Explore',
		},
		{
			image: Calculadora,
			text: 'Calculadora',
		},
		{
			image: Nutricao,
			text: 'Nutrição',
		},
		{
			image: Marketing,
			text: 'Marketing',
		},
	];
	return (
		<PortfolioS>
			<div className='container-portfolio'>
				<Fade cascade direction='right' damping={0.2}>
					{ListPortfolios.map((portfolio, index) => (
						<BoxingPortfolio
							key={index}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave()}>
							<img
								style={{
									filter:
										focusedIndex === index ? 'grayscale(1) blur(1px)' : 'none',
								}}
								src={portfolio.image}
								alt='portfolio'
								className='img-portfolio'
							/>
							<div
								className='box-reveal-ptf'
								style={{ display: focusedIndex === index ? 'block' : 'none' }}>
								<h3 className='title-portfolio'>{portfolio.text}</h3>
								<Link to='/personal'>
									<button className='btn-portfolio'>Acessar</button>
								</Link>
							</div>
						</BoxingPortfolio>
					))}
				</Fade>
			</div>
		</PortfolioS>
	);
};
