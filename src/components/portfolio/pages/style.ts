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
		font-size: 1.3em;
		font-weight: 600;
		background-color: transparent;
		display: flex;
		gap: 5px;
		margin-top: 80px;
	}
	.btn-page:hover {
		transform: scale(1.1);
		background: #00a7e1;
        transition: 0.5s;
        box-shadow: 0 0 15px #bfcfe7;
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
`;
