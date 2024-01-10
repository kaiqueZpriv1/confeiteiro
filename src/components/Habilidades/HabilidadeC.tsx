import React from 'react';
import { BoxingHabilidade, HabilidadesS, InvisibleHab, LineHab } from './style';

import Html from './image/icon-html.png';
import Css from './image/icon-css.png';
import Js from './image/icon-js.png';
import ReactJS from './image/icon-reactjs.png';
import Git from './image/icon-git.png';
import Github from './image/icon-github.png';
import LineSvg from '../home/svg/Vector.svg';
export const HabilidadeC = () => {
	const listHabilidade = [
		{
			id: 0,
			img: Html,
			title: 'Html',
			color: '#fc490b',
		},
		{
			id: 1,
			img: Css,
			title: 'Css',
			color: '#2196f3',
		},
		{
			id: 2,
			img: Js,
			title: 'JavaScript',
			color: '#ffdf00',
		},
		{
			id: 3,
			img: ReactJS,
			title: 'React Js',
			color: '#39c1d7',
		},
		{
			id: 4,
			img: Git,
			title: 'Git',
			color: '#ed4a40',
		},
		{
			id: 5,
			img: Github,
			title: 'Git-Hub',
			color: '#555e63',
		},
	];
	return (
		<HabilidadesS>
			<InvisibleHab/>
			<LineHab>
				<img src={LineSvg} alt='line' className='line-svg-left' />
				<img src={LineSvg} alt='line' className='line-svg1-left' />
				<img src={LineSvg} alt='line' className='line-svg2-left' />
			</LineHab>
			<div className='container-habilidade'>
				{listHabilidade.map((i) => {
					return (
						<BoxingHabilidade key={i.id}>
							<img src={i.img} alt='tec' className='image-hbl' />
							<h3 className='title-hbl' style={{ color: i.color }}>
								{i.title}
							</h3>
						</BoxingHabilidade>
					);
				})}
			</div>
		</HabilidadesS>
	);
};
