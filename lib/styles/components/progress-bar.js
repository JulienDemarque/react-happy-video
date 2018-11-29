import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
	width: 100%;
`;

export const FullBar = styled.div`
	width: 100%;
	background-color: #60516e;
	height: 20px;
	margin: 0;
`;

export const Progress = styled.div.attrs(props => ({
	style: { width: `${props.progress * 100}%` }
}))`
	background-color: #f3a42d;
	height: 20px;
	margin: 0;
`;

Progress.propTypes = {
	progress: PropTypes.number.isRequired
};
