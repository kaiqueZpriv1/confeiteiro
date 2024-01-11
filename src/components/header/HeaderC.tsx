import React from 'react';
import { ButtonHeader, HeaderNav, HeaderS, RouterNav } from './style';
import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';

export const HeaderC = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo />
				<HeaderNav>
					<Link to='/'>
						<RouterNav>inicio</RouterNav>
					</Link>
					<Link to='/sobre'>
						<RouterNav>Sobre</RouterNav>
					</Link>
					<Link to='/habilidades'>
						<RouterNav>Habilidade</RouterNav>
					</Link>
					<Link to='/portfolio'>
						<RouterNav>Portfolio</RouterNav>
					</Link>
				</HeaderNav>
				<Link to='/contact'>
					<ButtonHeader>Contato</ButtonHeader>
				</Link>
			</div>
		</HeaderS>
	);
};
