import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FullBar = styled.div`
	width: ${props => `${props.width}px`};
	background-color: #60516e;
	height: 20px;
	margin: 0;
`;
FullBar.propTypes = {
	width: PropTypes.number.isRequired
};

export const Progress = styled.div`
	width: ${props => `${props.width}px`};
	background-color: #f3a42d;
	height: 20px;
	margin: 0;
`;
Progress.propTypes = {
	width: PropTypes.number.isRequired
};
