import React from 'react';
import PropTypes from 'prop-types';
import { FullBar, Progress } from '../styles/components/progress-bar';

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
		const { width, progress } = this.props;
		return (
			<div>
				<FullBar width={width} onClick={this.handleOnClick}>
					<Progress width={progress * width} />
				</FullBar>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	width: PropTypes.number.isRequired,
	progress: PropTypes.number.isRequired
};
export default ProgressBar;
