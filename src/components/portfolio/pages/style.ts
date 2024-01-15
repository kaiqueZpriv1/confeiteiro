import styled from 'styled-components';

export const PagePortfolio = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	.image-initial {
		width: 100%;
		height: 600px;
	}
	@media (max-width: 480px) {
		.image-initial {
			width: 480px;
			height: 500px;
		}
	}
`;

export const ContainerPage = styled.div`
	position: relative;
	bottom: 200px;
	width: 100%;
	display: flex;
	padding: 20px 100px 0 100px;
	background-color: rgba(1, 1, 14, 1);
	.mobile-image {
		position: relative;
		bottom: 150px;
		width: 200px;
	}
	.apresentacao-page {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.box-text-container {
		display: flex;
		flex-direction: column;
	}
	.title-page {
		font-size: 2.5em;
		font-weight: 700;
		color: #bfcfe7;
	}
	.spn-page {
		font-size: 1.5em;
		font-weight: 500;
		color: #00a7e1;
	}
	.buttons-page {
		display: flex;
		gap: 20px;
	}
	.btn-page {
		height: 50px;
		padding: 10px;
		border-radius: 5px;
		border: 3px solid #00a7e1;
		color: #bfcfe7;
		background-color: transparent;
		gap: 5px;
		margin-top: 80px;
	}
	.link-btn-ptf {
		font-size: 1.3em;
		font-weight: 600;
		text-decoration: none;
		color: #bfcfe7;
		display: flex;
	}
	.btn-page:hover {
		transform: scale(1.1);
		background: #00a7e1;
		transition: 0.5s;
		box-shadow: 0 0 15px #bfcfe7;
	}
	@media (max-width: 480px) {
		& {
			padding: 20px;
		}
		.mobile-image {
			display: none;
		}
		.apresentacao-page {
			align-items: center;
			flex-direction: column;
			text-align: center;
		}
		.box-text-container {
			width: 100%;
		}
		.title-page {
			font-size: 2.9em;
		}
		.spn-page {
			font-size: 2.5em;
		}
		.buttons-page {
			margin-top: 30px;
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}
		.btn-page {
			margin: 0;
			width: 250px;
			height: 65px;
		}
		.link-btn-ptf {
			text-align: center;
			font-size: 2.3em;
			margin-top: 0;
		}
		.icon-page {
			display: none;
		}
	}
`;

export const TextPage = styled.div`
	position: relative;
	bottom: 250px;
	background-color: rgba(1, 1, 14, 1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	.title-text {
		font-size: 3.5em;
		color: #bfcfe7;
		font-weight: 700;
		text-shadow: 25px -20px 5px #00a7e1;
	}
	.paragrafo-page {
		font-size: 1.2em;
		color: #bfcfe7;
		font-weight: 500;
		text-align: center;
		padding: 0 200px;
	}
	@media (max-width: 480px) {
		& {
			bottom: 0;
		}
		.title-text{
			font-size: 4em;
		}
		.paragrafo-page{
			font-size: 1.8em;
			padding: 0 15px ;
		}
	}
`;

export const GaleryPage = styled.div`
	position: relative;
	bottom: 100px;
	background-color: rgba(1, 1, 14, 1);
	display: grid;
	grid-template-columns: 350px 350px 350px;
	gap: 40px;
	justify-content: center;
	align-items: center;
	.image-galery {
		width: 350px;
	}
	@media (max-width: 480px) {
		&{
			grid-template-columns: 380px;
			gap: 15px;
			bottom: -40px
		}
	}
`;
