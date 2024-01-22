import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	padding: 200px 100px 500px 100px;
	.container-home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: absolute;
		left: 0;
	}
	@media (max-width: 1920px) {
		padding: 350px 100px 630px 100px;
	}
`;

export const HomeText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 8;
	.text-primary {
		font-size: 2.5em;
		color: #bfcfe7;
		font-size: 900;
		text-align: center;
	}
	.name-home {
		display: flex;
		gap: 10px;
		font-size: 3.5em;
		font-weight: 900;
		color: #00a7e1;
	}
	.description-home {
		font-size: 2em;
		color: #bfcfe7;
		font-size: 500;
	}
	@media (max-width: 1920px) {
		.text-primary {
			font-size: 3em;
		}
		.name-home {
			font-size: 4em;
		}
		.description-home {
			font-size: 2.8em;
		}
	}
	@media (max-width: 480px) {
		.text-primary {
			font-size: 2em;
		}
		.name-home {
			font-size: 2.3em;
		}
		.description-home {
			font-size: 1.8em;
		}
	}
`;

export const Line1 = styled.div`
	.line-svg-left {
		position: absolute;
		transform: rotate(-30deg);
		top: 60px;
		z-index: 8;
		width: 140px;
	}
	.line-svg1-left {
		position: absolute;
		transform: rotate(-30deg);
		top: 60px;
		z-index: 8;
		width: 115px;
		left: 130px;
	}
	.line-svg2-left {
		position: absolute;
		transform: rotate(-30deg);
		top: 60px;
		z-index: 8;
		width: 90px;
		left: 160px;
	}
	@media (max-width: 480px) {
		& {
			display: none;
		}
	}
`;
export const Line2 = styled.div`
	.line-svg-right {
		position: absolute;
		transform: rotate(150deg);
		bottom: -15px;
		z-index: 8;
		width: 140px;
		right: 100px;
	}
	.line-svg1-right {
		position: absolute;
		transform: rotate(150deg);
		bottom: -15px;
		z-index: 8;
		width: 115px;
		right: 130px;
	}
	.line-svg2-right {
		position: absolute;
		transform: rotate(150deg);
		bottom: -15px;
		z-index: 8;
		width: 90px;
		right: 160px;
	}
	@media (max-width: 1920px) {
		& {
			display: none;
		}
	}
	@media (max-width: 480px) {
		& {
			display: none;
		}
	}
`;

export const Cerebro = styled.div`
	.cerebro-svg-right {
		width: 120px;
		position: absolute;
		top: 100px;
		right: 80px;
	}
	@media (max-width: 1920px) {
		.cerebro-svg-right {
			width: 170px;
			top: 150px;
		}
	}
	@media (max-width: 480px) {
		/* & {
			display: none;
		} */
		.cerebro-svg-right {
			width: 150px;
			top: 700px;
			left: 30px;
		}
	}
`;

export const PrompIa = styled.div`
	.promp-svg {
		width: 150px;
		position: absolute;
		left: 100px;
		bottom: 40px;
	}
	@media (max-width: 1920px) {
		.promp-svg {
			width: 200px;
			bottom: 190px;
		}
	}
	@media (max-width: 480px) {
		/* & {
			display: none;
		} */
		.promp-svg {
			top: 700px;
			left: 250px;
		}
	}
`;

export const Map = styled.div`
	.br-map {
		position: absolute;
		z-index: 7;
		width: 550px;
		inset: 100px 400px;
		transform: rotate(-7deg);
	}
	@media (max-width: 1920px) {
		.br-map {
			inset: 150px 600px;
			width: 700px;
		}
	}
	@media (max-width: 480px) {
		.br-map {
			inset: 0150px 0 0 0;
			width: 400px;
		}
	}
`;

export const Invisible = styled.div`
	width: 100%;
	padding: 30px 100px;
	background-color: rgba(1, 1, 14, 1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	bottom: -83px;
	left: 0;
	/* box-shadow: 0 0 5px #fff; */
	z-index: 8;
	.text-invisible {
		font-size: 1em;
		color: #00a7e1;
		font-weight: 600;
	}
	@media (max-width: 1920px) {
		& {
			bottom: 80px;
		}
		.text-invisible{
			font-size: 1.8em;
		}
	}
	@media (max-width: 480px) {
		& {
			display: none;
		}
	}
`;
