import React from 'react';
import { AboutImage, AboutS, AboutText, ButtonAbout } from './style';
import PessoalImg from './image/pessoal.jpeg';
import { Fade } from 'react-awesome-reveal';
export const AboutC = () => {
	return (
		<AboutS>
			<div className='container-about'>
				<AboutText>
					<h3 className='title-about'>Kaique</h3>
					<p className='paragrafo-about'>
						Tenho 18 anos e sou um desenvolvedor Front-End na cidade de São
						Paulo. Estou no meu último ano do ensino médio e busco me formar em
						Análise e Desenvolvimento de Sistemas. Meu primeiro contato com o
						desenvolvimento web foi em 2022, quando comecei a estudar e realizar
						meus primeiros projetos em HTML, CSS e JavaScript. Atualmente,
						estudo e desenvolvo projetos como freelancer, buscando evoluir e
						ampliar meus conhecimentos em Front-End.
					</p>
					<ButtonAbout>Orçamento</ButtonAbout>
				</AboutText>

				<Fade cascade direction='right' damping={0.2}>
					<AboutImage>
						<img src={PessoalImg} alt='about' className='image-about' />
					</AboutImage>
				</Fade>
			</div>
		</AboutS>
	);
};
