import React from 'react';
import { ButtonHeader, HeaderNav, HeaderS, RouterNav } from './style';
import { Logo } from '../logo/Logo';

export const HeaderC = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo />
				<HeaderNav>
					<RouterNav>inicio</RouterNav>
					<RouterNav>Sobre</RouterNav>
					<RouterNav>Habilidade</RouterNav>
					<RouterNav>Blog</RouterNav>
					<RouterNav>Portfolio</RouterNav>
				</HeaderNav>
				<ButtonHeader>Contato</ButtonHeader>
			</div>
		</HeaderS>
	);
};
