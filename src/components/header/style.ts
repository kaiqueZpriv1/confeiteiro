import styled from 'styled-components';

export const HeaderS = styled.header`
	width: 100%;
	height: 75px;
	padding: 10px 100px 10px 100px;
	background-color: rgba(1, 1, 14, 1);
    box-shadow: 0 0 5px #000;
    z-index: 9;
    position: fixed;
	.container-header {
        padding: 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const HeaderNav = styled.div`
	display: flex;
	gap: 40px;
`;

export const RouterNav = styled.h3`
	color: #bfcfe7;
	cursor: pointer;
	font-size: 1.3em;
	font-weight: 600;
	position: relative;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
		color: #00a7e1;
	}
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #00a7e1;
		visibility: hidden;
		transition: all 0.5s ease-in-out;
	}
	&:hover::before {
		visibility: visible;

		width: 100%;
	}
`;

export const ButtonHeader = styled.button`
	padding: 7px 25px;
	background: transparent;
	border: 2px solid #bfcfe7;
	border-radius: 5px;
	font-size: 1em;
	font-weight: 600;
	color: #bfcfe7;
	&:hover {
		background-color: #00a7e1;
		border: 2px solid #00a7e1;
		transform: scale(1.1);
		transition: 0.5s;
	}
`;
