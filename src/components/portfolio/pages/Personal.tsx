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
							<h3 className='title-page'>Personal Treiner </h3>
							<span className='spn-page'>Portfólio</span>
						</div>
						<div className='buttons-page'>
							<button className='btn-page'>
								<a
									className='link-btn-ptf'
									href='https://juanbueno.vercel.app/'
									rel='noreferrer'
									target='_blank'>
									<AiOutlineGlobal
										className='icon-page'
										size={25}
										color='#bfcfe7'
									/>
									Visitar
								</a>
							</button>
							<button className='btn-page'>
								<a
									className='link-btn-ptf'
									href='https://github.com/kaiqueZpriv1/personal---juan'
									rel='noreferrer'
									target='_blank'>
									<AiOutlineGithub
										className='icon-page'
										size={25}
										color='#bfcfe7'
									/>
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
