import React from 'react';
import Global from '../../../Global';

import MarketingImg from './image/marketing.png';

import MarketingAbout from './pages-global/marketing/marketingAbout.png';
import MarketingTeam from './pages-global/marketing/marketingTeam.png';
import MarketingWork from './pages-global/marketing/marketingWork.png';
import MarketingContact from './pages-global/marketing/marketingContact.png';
import { ContactC } from '../../contact/ContactC';

import { HeaderC } from '../../header/HeaderC';
import { ContainerPage, GaleryPage, PagePortfolio, TextPage } from './style';
import { AiOutlineGithub } from 'react-icons/ai';
export const Marketing = () => {
	const ListImage = [
		{
			id: 0,
			image: MarketingImg,
		},
		{
			id: 1,
			image: MarketingAbout,
		},
		{
			id: 2,
			image: MarketingTeam,
		},
		{
			id: 3,
			image: MarketingWork,
		},
		{
			id: 4,
			image: MarketingContact,
		},
	];
	return (
		<>
			<Global />
			<HeaderC />
			<PagePortfolio>
				<img src={MarketingImg} alt='personal' className='image-initial' />
				<ContainerPage>
					<div className='apresentacao-page'>
						<div className='box-text-container'>
							<h3 className='title-page'>Marketing </h3>
							<span className='spn-page'>Landing Page</span>
						</div>
						<div className='buttons-page'>
							<button className='btn-page'>
								<AiOutlineGithub size={25} color='#bfcfe7' />
								Repositorio
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
