import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = () => {
	const LogoS = styled.div`
		display: flex;
		.name-logo {
			font-size: 1.7em;
			font-weight: 700;
			color: #dcf2f1;
		}
		.dev-logo {
			font-size: 1.7em;
			font-weight: 700;
			color: #00a7e1;
		}
	`;
	return (
		<Link to='/'>
			<LogoS>
				<h3 className='name-logo'>&lt;Kaique</h3>
				<h3 className='dev-logo'>Dev/&gt;</h3>
			</LogoS>
		</Link>
	);
};
