import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	width: 30px;
	padding-left: 20px;
	padding-right: 10px;
	text-align: left;
`;

export const VolumeBtn = styled.button`
	background-color: transparent;
	border: none;
	font-size: 22px;
	padding: 0;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const VolumeBar = styled.input.attrs({
	type: 'range',
	min: '0',
	max: '100'
})`
	position: absolute;
	transform: rotate(-90deg);
	width: 60px;
	z-index: 20;
	top: -26px;
	left: -3px;
	&:hover {
		cursor: pointer;
	}
`;
