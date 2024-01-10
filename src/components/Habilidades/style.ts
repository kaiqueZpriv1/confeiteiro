import styled from 'styled-components';

export const HabilidadesS = styled.section`
	width: 100%;
	padding: 200px 0;
	.container-habilidade {
		display: grid;
		grid-template-columns: 200px 200px 200px;
		gap: 30px;
		align-items: center;
		justify-content: center;
	}
`;

export const BoxingHabilidade = styled.div`
	padding: 30px;
	border-radius: 20px;
	border: 3px solid #00a7;
	box-shadow: 0 0 5px #00a7e1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	.image-hbl {
		width: 100px;
		cursor: pointer;
	}
	.title-hbl {
		font-size: 1.5em;
		text-align: center;
	}
`;

export const LineHab = styled.div`
	.line-svg-left {
		position: relative;
		transform: rotate(-30deg);
		top: 60px;
		z-index: 7;
		width: 140px;
		left: 100px;
	}
	.line-svg1-left {
		position: relative;
		transform: rotate(-30deg);
		top: 40px;
		z-index: 7;
		width: 115px;
		left: -10px;
	}
	.line-svg2-left {
		position: relative;
		transform: rotate(-30deg);
		top: 20px;
		z-index: 7;
		width: 90px;
		left: -95px;
	}
`;

export const InvisibleHab = styled.div`
	width: 120px;
	background-color: rgba(1, 1, 14, 1);
	height: 50px;
	position: relative;
	top: 75px;
	left: 120px;
	z-index: 8;
`;
