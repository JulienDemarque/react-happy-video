import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
	width: ${props => `${props.width}px`};
	color: #e7e2ee;
	background-color: #3b3346;
`;
Container.propTypes = {
	width: PropTypes.number.isRequired
};

export const Video = styled.video`
	width: ${props => `${props.width}px`};
	display: block;
	margin: 0;
`;
Container.propTypes = {
	width: PropTypes.number.isRequired
};

export const Controls = styled.div`
	display: flex;
`;

export const PlayPauseBtn = styled.button`
	width: 75px;
	color: #e7e2ee;
	background-color: #3b3346;
	border: none;
	font-size: 20px;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const FullScreenBtn = styled.button`
	width: 75px;
	color: #e7e2ee;
	background-color: #3b3346;
	border: none;
	font-size: 20px;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const RightControls = styled.div`
	flex-grow: 10;
	display: flex;
	justify-content: flex-end;
`;
