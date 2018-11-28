import styled from 'styled-components';

export const Container = styled.div`
	display: block;
	padding-bottom: 10px;
`;

export const SpeedTitle = styled.p`
	display: block;
	font-size: 10px;
	margin-bottom: 0;
	color: #e7e2ee;
`;

export const SpeedPercent = styled.p`
	display: block;
	font-size: 15px;
	margin: 5px;
	color: #e7e2ee;
`;

export const SpeedBtn = styled.button`
	width: 30px;

	color: #e7e2ee;
	background-color: #3b3346;
	border: none;
	font-size: 15px;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const Container_Controls = styled.div`
	display: flex;
`;
