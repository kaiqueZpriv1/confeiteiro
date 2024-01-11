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
		/* background: linear-gradient(90deg, rgba(1, 1, 14, 1), #bfcfe7);
		letter-spacing: 5px;
		-webkit-text-fill-color: transparent;
		background-repeat: no-repeat;
		background-size: 80%;
		animation: shine 5s linear infinite;
		position: relative; */
	}
	/* @keyframes shine {
		0% {
			background-position-x: -100%;
		}
		100% {
			background-position-x: 500%;
		}
	} */
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
`;

export const Cerebro = styled.div`
	.cerebro-svg-right {
		width: 120px;
		position: absolute;
		top: 100px;
		right: 80px;
	}
`;

export const PrompIa = styled.div`
	.promp-svg {
		width: 150px;
		position: absolute;
		left: 100px;
		bottom: 40px;
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
`;
