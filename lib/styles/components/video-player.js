import styled from 'styled-components';
import { getLuminance } from 'polished';
import PropTypes from 'prop-types';

export const Container = styled.div`
	width: ${props => (props.fullScreen ? '100vw' : `${props.widthgiven}`)};
	position: ${props => (props.fullScreen ? 'fixed' : 'static')};
	${props => (props.fullScreen ? 'z-index:  10' : '')};
	${props => (props.fullScreen ? 'top:  0' : '')};
	${props => (props.fullScreen ? 'left:  0' : '')};
	${props => (props.fullScreen ? 'height:  100vh' : '')};
	${props => (props.fullScreen ? 'display:  flex' : '')};
	${props => (props.fullScreen ? 'justify-content:  end' : '')};
	${props => (props.fullScreen ? 'flex-direction:  column' : '')};
	${props => (props.fullScreen ? 'align-items:  center' : '')};
	background-color: ${props => props.colorgiven};

	color: ${props => {
		if (getLuminance(props.colorgiven) < 0.5) {
			return '#e7e2ee';
		}
		return '3B3346';
	}};

	& button {
		color: ${props => {
			if (getLuminance(props.colorgiven) < 0.5) {
				return '#e7e2ee';
			}
			return '#3B3346';
		}};
	}
`;

Container.propTypes = {
	widthgiven: PropTypes.string.isRequired,
	colorgiven: PropTypes.string.isRequired
};

export const VideoContainer = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	${props => (props.fullScreen ? 'flex-grow: 1' : '')};
`;

/*This weird absolute positioning here is because object-fit: contain makes the
div to grow to much and to push the controls under the window */

export const Video = styled.video`
	${props => (props.fullScreen ? 'max-width: 100%' : 'width: 100%')};
	${props => (props.fullScreen ? 'max-height: 100%' : '')};
	${props => (props.fullScreen ? 'position: absolute;' : '')};
	${props => (props.fullScreen ? 'top: 50%;' : '')};
	${props => (props.fullScreen ? 'left: 50%;' : '')};
	${props => (props.fullScreen ? 'transform: translate(-50%, -50%);' : '')};
	display: block;
	margin: 0;
`;

Container.propTypes = {
	fullScreen: PropTypes.bool.isRequired
};

export const Controls = styled.div`
	display: flex;
	min-height: 60px;
	width: 100%;
	${props => (props.fullScreen ? 'flex: 1 0 auto' : '')};
`;

export const PlayPauseBtn = styled.button`
	width: 75px;
	background-color: transparent;
	border: none;
	font-size: 20px;
	outline: none;
	&:hover {
		cursor: pointer;
	}
`;

export const FullScreenBtn = styled.button`
	width: 75px;
	background-color: transparent;
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
