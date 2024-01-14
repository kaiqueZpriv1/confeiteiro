import React from 'react';
import Global from '../../../Global';
import ExploreImg from './image/explorer.png';
import { ContactC } from '../../contact/ContactC';
import { HeaderC } from '../../header/HeaderC';
import { ContainerPage, GaleryPage, PagePortfolio, TextPage } from './style';
import { AiOutlineGithub } from 'react-icons/ai';
export const Explore = () => {
	return (
		<>
			<Global />
			<HeaderC />
			<PagePortfolio>
				<img src={ExploreImg} alt='personal' className='image-initial' />
				<ContainerPage>
					<div className='apresentacao-page'>
						<div className='box-text-container'>
							<h3 className='title-page'>Explore Lab</h3>
							<span className='spn-page'>Landing Page</span>
						</div>
						<div className='buttons-page'>
							<button className='btn-page'>
								<a
									className='link-btn-ptf'
									href='https://github.com/kaiqueZpriv1/Explore-lab'
									rel='noreferrer'
									target='_blank'>
									<AiOutlineGithub size={25} color='#bfcfe7' />
									Repositorio
								</a>
							</button>
						</div>
					</div>
				</ContainerPage>
				<TextPage>
					<h3 className='title-text'>Sobre</h3>
					<p className='paragrafo-page'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						aliquam consectetur imperdiet. Nulla at blandit quam. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Vestibulum non nulla nec dui dignissim sagittis nec at
						ante. Nam ullamcorper mi justo, ut molestie felis molestie in.
						Pellentesque eget nibh a velit feugiat ullamcorper vitae eu purus.
					</p>
				</TextPage>
				<GaleryPage>
					<img src={ExploreImg} alt='photos' className='image-galery' />
				</GaleryPage>
			</PagePortfolio>
			<ContactC />
		</>
	);
};
