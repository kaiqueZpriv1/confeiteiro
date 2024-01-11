import styled from 'styled-components';

export const AboutS = styled.section`
	width: 100%;
	padding: 100px 100px 0 100px;
	overflow: hidden;
	.container-about {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: center;
	}
`;

export const AboutText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 50%;
	.title-about {
		font-size: 2.5em;
		color: #00a7e1;
		font-weight: 900;
	}
	.paragrafo-about {
		font-size: 1.3em;
		color: #bfcfe7;
	}
`;

export const ButtonAbout = styled.button`
	margin-top: 10px;
	padding: 10px 20px;
	border-radius: 10px;
	border: 2px solid #bfcfe7;
	background-color: transparent;
	color: #bfcfe7;
	font-size: 1.2em;
	width: 200px;
	&:hover {
		border: 2px solid #00a7e1;
		background-color: #00a7e1;
		transform: scale(1.1);
		transition: 0.5s;
	}
`;

export const AboutImage = styled.div`
	width: 50%;
	.image-about {
		border: 2px solid #00a7e1;
		width: 450px;
		height: 450px;
		border-radius: 10px;
	}
`;
