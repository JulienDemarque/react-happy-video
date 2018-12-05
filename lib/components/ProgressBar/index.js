import React from 'react';
import PropTypes from 'prop-types';
import { FullBar, Progress, Container } from './styles';

//___________________________________________________________
// Progress Bar Component
class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(event) {
		const nodeBar = event.currentTarget;
		const x = event.clientX - nodeBar.getBoundingClientRect().left;
		const width = nodeBar.offsetWidth;
		const progress = x / width;
		this.props.moveCurrentTime(progress);
	}

	render() {
		const { progress, colorgiven } = this.props;
		return (
			<Container>
				<FullBar colorgiven={colorgiven} onClick={this.handleOnClick}>
					<Progress colorgiven={colorgiven} progress={progress} />
				</FullBar>
			</Container>
		);
	}
}

ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired
};
export default ProgressBar;
