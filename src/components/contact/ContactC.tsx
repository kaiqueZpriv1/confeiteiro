import React from 'react';
import { ContactS, RoutersContact } from './style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
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
			<Logo />
			<div className='container-contact'>
				<Fade cascade direction='left' damping={0.2}>
					<RoutersContact>
						<h3 className='title-ctt'>Paginas</h3>
						<Link to='/'>
							<p className='router-ctt'>Inicio</p>
						</Link>
						<Link to='/sobre'>
							<p className='router-ctt'>Sobre</p>
						</Link>
						<Link to='/habilidades'>
							<p className='router-ctt'>Habilidades</p>
						</Link>
						<Link to='/portfolio'>
							<p className='router-ctt'>Portfólio</p>
						</Link>
					</RoutersContact>
				</Fade>
				<Fade cascade direction='up' damping={0.2}>
					<RoutersContact>
						<h3 className='title-ctt'>Contatos</h3>
						<a
							href='https://api.whatsapp.com/send/?phone=933323486&text&type=phone_number&app_absent=0'
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							WhatsApp
						</a>
						<a
							href='https://www.instagram.com/kaique_developer?igshid=YmMyMTA2M2Y%3D'
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							Instagram
						</a>
						<a
							href='mailto:kaiquedev.dev@gmail.com?subject=&amp;body='
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							E-mail
						</a>
						<a
							href='https://github.com/kaiqueZpriv1'
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							Git-Hub
						</a>
					</RoutersContact>
				</Fade>
				<Fade cascade direction='right' damping={0.2}>
					<RoutersContact>
						<h3 className='title-ctt'> </h3>
						<p className='router-ctt'>Kaique Ferreira</p>
						<p className='router-ctt'>São Paulo</p>
						<a
							href='https://api.whatsapp.com/send/?phone=933323486&text&type=phone_number&app_absent=0'
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							11 93332-3486
						</a>
						<a
							href='mailto:kaiquedev.dev@gmail.com?subject=&amp;body='
							target='_blank'
							rel='noreferrer'
							className='router-ctt'>
							kaiquedev.dev@gmail.com
						</a>
					</RoutersContact>
				</Fade>
			</div>
		</ContactS>
	);
};
