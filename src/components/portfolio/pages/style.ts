import styled from 'styled-components';

export const PagePortfolio = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	.image-initial {
		width: 100%;
		height: 600px;
	}
`;

export const ContainerPage = styled.div`
	position: relative;
	bottom: 600px;
	width: 100%;
	display: flex;
	padding: 0 100px 0 100px;
	.mobile-image {
		position: relative;
		bottom: 300px;
		width: 200px;
	}
	.apresentacao-page {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	.btn-page {
		padding: 10px;
		border-radius: 10px;
		border: 2px solid #00a7e1;
		color: #bfcfe7;
		font-size: 1.3em;
		font-weight: 600;
	}
`;

export const TextPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	.title-text {
		font-size: 2.5em;
		color: #bfcfe7;
		font-weight: 700;
		box-shadow: 5px 2px 5px #00a7e1;
	}
	.paragrafo-page {
		font-size: 1.2em;
		color: #bfcfe7;
		font-weight: 500;
		text-align: center;
	}
`;

export const GaleryPage = styled.div`
	display: grid;
	grid-template-columns: 350px 350px 350px;
	gap: 40px;
	justify-content: center;
	align-items: center;
	.image-galery {
		width: 350px;
	}
`;
