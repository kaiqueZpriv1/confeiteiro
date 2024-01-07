import styled from 'styled-components';

export const HabilidadesS = styled.section`
	width: 100%;
	padding: 200px 0;
	.container-habilidade {
		display: grid;
		grid-template-columns: 200px 200px 200px 200px;
		gap: 30px;
	}
`;

export const BoxingHabilidade = styled.div`
	padding: 20px;
	border-radius: 15px;
	border: 2px solid #00a7e1;
	.image-hbl {
		width: 120px;
	}
	.title-hbl {
		font-size: 1.5em;
		color: #bfcfe7;
		text-align: center;
	}
`;
