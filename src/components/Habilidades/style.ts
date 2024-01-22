import styled from 'styled-components';

export const HabilidadesS = styled.section`
	width: 100%;
	padding: 150px 0 100px 0;
	.container-habilidade {
		display: grid;
		grid-template-columns: 200px 200px 200px;
		gap: 30px;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 1920px) {
		.container-habilidade {
			grid-template-columns: 350px 350px 350px;
		}
	}
	@media (max-width: 480px) {
		.container-habilidade {
			grid-template-columns: 150px 150px;
		}
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
	@media (max-width: 1920px) {
		& {
			padding: 50px;
		}
		.image-hbl {
			width: 200px;
		}
		.title-hbl {
			font-size: 2em;
		}
	}
	@media (max-width: 480px) {
		padding: 25px;
		.image-hbl {
			width: 80px;
		}
		.title-hbl {
			font-size: 1.3em;
		}
	}
`;
