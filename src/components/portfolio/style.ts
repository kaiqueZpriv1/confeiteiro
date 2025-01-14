import styled from 'styled-components';

export const PortfolioS = styled.section`
	padding: 100px 0 100px 0;
	overflow: hidden;
	.container-portfolio {
		display: grid;
		grid-template-columns: 350px 350px 350px;
		align-items: center;
		justify-content: center;
		gap: 50px;
	}
	@media (max-width: 1920px) {
		& {
			padding: 200px 0 100px 0;
		}
		.container-portfolio {
			grid-template-columns: 450px 450px 450px;
		}
	}
	@media (max-width: 480px) {
		.container-portfolio {
			grid-template-columns: 350px;
		}
	}
`;

export const BoxingPortfolio = styled.div`
	position: relative;
	overflow: hidden;
	.img-portfolio {
		width: 350px;
		border-radius: 15px;
		transition: 0.4s;
	}
	.box-reveal-ptf {
		position: absolute;
		bottom: 30px;
		left: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title-portfolio {
		font-size: 2em;
		color: #000;
		text-shadow: 0 0 5px #f9f9f9;
		font-weight: 700;
	}
	.btn-portfolio {
		padding: 5px;
		border-radius: 5px;
		border: 2px solid #bfcfe7;
		background-color: transparent;
		text-shadow: 0 0 5px #000;
		box-shadow: 0 0 5px #000;
	}

	.btn-portfolio:hover {
		border: 2px solid #00a7e1;
		background-color: #00a7e1;
		transform: scale(1.1);
		transition: 0.4s;
	}
	@media (max-width: 1920px) {
		.img-portfolio {
			width: 450px;
		}
	}
	@media (max-width: 480px) {
		.title-portfolio {
			font-size: 2.5em;
		}
		.btn-portfolio {
			font-size: 1.8em;
		}
	}
`;
