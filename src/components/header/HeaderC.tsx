import React, { useState } from 'react';
import { ButtonHeader, HeaderNav, HeaderS, RouterNav } from './style';
import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
export const HeaderC = () => {
	const [menuMobile, setMenuMobile] = useState(true);
	const handleMenu = () => {
		setMenuMobile(!menuMobile);
	};
	return (
		<HeaderS>
			<div className='container-header'>
				<AiOutlineMenu
					className='icon-burger'
					size={50}
					color='#fafafa'
					onClick={handleMenu}
				/>
				<Logo />
				<HeaderNav style={{ width: menuMobile ? '0' : '65%' }}>
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
