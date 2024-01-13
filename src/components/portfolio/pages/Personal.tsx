import React from 'react';
import Global from '../../../Global';

import PersonalImg from './image/personal.jpg';

import PersonalAbout from './pages-global/personal/personalAbout.png';
import PersonalServico from './pages-global/personal/personalservico.png';
import PersonalResultado from './pages-global/personal/personalresultado.png';
import PersonalPortfolio from './pages-global/personal/personalPortfolio.png';
import PersonalContact from './pages-global/personal/personalContact.png';
import { ContactC } from '../../contact/ContactC';

import MobilePersonal from './mobile/personalM.jpg';
import { HeaderC } from '../../header/HeaderC';
import { ContainerPage, GaleryPage, PagePortfolio, TextPage } from './style';
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
export const Personal = () => {
	const ListImage = [
		{
			id: 0,
			image: PersonalImg,
		},
		{
			id: 1,
			image: PersonalAbout,
		},
		{
			id: 2,
			image: PersonalServico,
		},
		{
			id: 3,
			image: PersonalResultado,
		},
		{
			id: 4,
			image: PersonalPortfolio,
		},
		{
			id: 5,
			image: PersonalContact,
		},
	];
	return (
		<>
			<Global />
			<HeaderC />
			<PagePortfolio>
				<img src={PersonalImg} alt='personal' className='image-initial' />
				<ContainerPage>
					<img
						src={MobilePersonal}
						alt='personal Mobile'
						className='mobile-image'
					/>
					<div className='apresentacao-page'>
						<div className='box-text-container'>
							<h3 className='title-page'>Personal Treiner - Juan Bueno</h3>
							<span className='spn-page'>Portfolio</span>
						</div>
						<button className='btn-page'>
							<AiOutlineGlobal size={20} color='#bfcfe7' />
							Visitar
						</button>
						<button className='btn-page'>
							<AiOutlineGithub size={20} color='#bfcfe7' />
							Repositorio
						</button>
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