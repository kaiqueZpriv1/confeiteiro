import React from 'react';
import { ContactS, RoutersContact } from './style';
import styled from 'styled-components';
const Logo = () => {
	const LogoS = styled.div`
		display: flex;
		.name-logo {
			font-size: 2.5em;
			font-weight: 700;
			color: #dcf2f1;
		}
		.dev-logo {
			font-size: 2.5em;
			font-weight: 700;
			color: #00a7e1;
		}
	`;
	return (
		<LogoS>
			<h3 className='name-logo'>&lt;Kaique</h3>
			<h3 className='dev-logo'>Dev/&gt;</h3>
		</LogoS>
	);
};


export const ContactC = () => {
	return (
		<ContactS>
            <Logo/>
			<div className='container-contact'>
				<RoutersContact>
					<h3 className='title-ctt'>Paginas</h3>
					<p className='router-ctt'>Inicio</p>
					<p className='router-ctt'>Sobre</p>
					<p className='router-ctt'>Habilidades</p>
					<p className='router-ctt'>Portfólio</p>
				</RoutersContact>
				<RoutersContact>
					<h3 className='title-ctt'>Contatos</h3>
					<p className='router-ctt'>WhatsApp</p>
					<p className='router-ctt'>Instagram</p>
					<p className='router-ctt'>E-mail</p>
					<p className='router-ctt'>Git-Hub</p>
				</RoutersContact>
				<RoutersContact>
					<h3 className='title-ctt'>  </h3>
					<p className='router-ctt'>Kaique Ferreira</p>
					<p className='router-ctt'>São Paulo</p>
					<p className='router-ctt'>11 93332-3486</p>
					<p className='router-ctt'>kaiquedev.dev@gmail.com</p>

				</RoutersContact>
			</div>
		</ContactS>
	);
};
