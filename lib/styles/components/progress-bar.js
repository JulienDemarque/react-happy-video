import styled from 'styled-components';
import { lighten, tint } from 'polished';
import PropTypes from 'prop-types';

export const Container = styled.div`
	width: 100%;
`;

export const FullBar = styled.div`
	width: 100%;
	background-color: ${props => {
		return lighten(0.2, props.colorgiven);
	}};
	height: 20px;
	margin: 0;
`;

export const Progress = styled.div.attrs(props => ({
	style: { width: `${props.progress * 100}%` }
}))`
	background-color: ${props => {
		return tint(0.7, props.colorgiven);
	}};
	height: 20px;
	margin: 0;
`;

Progress.propTypes = {
	progress: PropTypes.number.isRequired
};
