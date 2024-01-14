import React from 'react';
import Global from '../../../Global';

import NutricaoImg from './image/nutrição.png';

import NutricaoAbout from './pages-global/nutricao/nutricaoAbout.png';
import NutricaoBlog from './pages-global/nutricao/nutricaoBlog.png';
import NutricaoFeature from './pages-global/nutricao/nutricaoFeature.png';
import NutricaoFood from './pages-global/nutricao/nutricaofood.png';
import NutricaoContact from './pages-global/nutricao/nutricaoContact.png';
import NutricaoReview from './pages-global/nutricao/nutricaoReview.png';
import { ContactC } from '../../contact/ContactC';

import { HeaderC } from '../../header/HeaderC';
import { ContainerPage, GaleryPage, PagePortfolio, TextPage } from './style';
import { AiOutlineGithub } from 'react-icons/ai';
export const Nutricao = () => {
	const ListImage = [
		{
			id: 0,
			image: NutricaoImg,
		},
		{
			id: 1,
			image: NutricaoAbout,
		},
		{
			id: 2,
			image: NutricaoBlog,
		},
		{
			id: 3,
			image: NutricaoFeature,
		},
		{
			id: 4,
			image: NutricaoFood,
		},
		{
			id: 5,
			image: NutricaoReview,
		},
		{
			id: 6,
			image: NutricaoContact,
		},
	];
	return (
		<>
			<Global />
			<HeaderC />
			<PagePortfolio>
				<img src={NutricaoImg} alt='personal' className='image-initial' />
				<ContainerPage>
					<div className='apresentacao-page'>
						<div className='box-text-container'>
							<h3 className='title-page'>Nutricao </h3>
							<span className='spn-page'>Landing Page</span>
						</div>
						<div className='buttons-page'>
							<button className='btn-page'>
								<a
									className='link-btn-ptf'
									href='https://github.com/kaiqueZpriv1/nutricao'
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
					{ListImage.map((i) => {
						return (
							<img
								src={i.image}
								key={i.id}
								alt='photos'
								className='image-galery'
							/>
						);
					})}
				</GaleryPage>
			</PagePortfolio>
			<ContactC />
		</>
	);
};
