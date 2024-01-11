import styled from 'styled-components';

export const ContactS = styled.section`
	padding: 100px 0 30px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	.container-contact {
		width: 100%;
		margin: 50px 0 0 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 20px;
	}
`;

export const RoutersContact = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	.title-ctt {
		margin: 0 0 20px 0;
		font-size: 2em;
		color: #00a7e1;
		font-weight: 700;
	}
	.router-ctt {
		font-size: 1.3em;
		color: #bfcfe7;
		font-weight: 600;
		cursor: pointer;
	}
	.router-ctt:hover {
		transform: scale(1.1);
		transition: 0.4s;
		color: #fafafa;
	}
`;
