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
	@media (max-width: 1920px) {
		&{
			padding: 200px 100px 0 100px;
		}
	}
	@media (max-width: 480px) {
		& {
			padding: 160px 0 0 0;
		}
		.container-about {
			flex-direction: column-reverse;
			gap: 0;
		}
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
	@media (max-width: 1920px) {
		.title-about {
			font-size: 3em;
		}
		.paragrafo-about {
			font-size: 1.8em;
		}
	}
	@media (max-width: 480px) {
		& {
			width: 100%;
			padding: 0 10px;
		}
		.title-about {
			text-align: center;
		}
		.paragrafo-about {
			text-align: center;
			font-size: 1.5em;
		}
	}
`;

export const ButtonAbout = styled.button`
	margin-top: 10px;
	padding: 10px 20px;
	border-radius: 10px;
	border: 2px solid #bfcfe7;
	background-color: transparent;
	width: 200px;
	.btn-abt {
		color: #bfcfe7;
		font-size: 1.2em;
	}
	&:hover {
		border: 2px solid #00a7e1;
		background-color: #00a7e1;
		transform: scale(1.1);
		transition: 0.5s;
	}
	@media (max-width: 1920px) {
		.btn-abt {
			font-size: 2em;
		}
	}
	@media (max-width: 480px) {
		& {
			text-align: center;
			margin: 20px 0 0 80px;
		}
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
	@media (max-width: 480px) {
		& {
			width: 100%;
		}
		.image-about {
			width: 250px;
			height: 100%;
			border-radius: 100%;
		}
	}
`;
