import React from 'react';
import PropTypes from 'prop-types';
import {
	FullBar,
	Progress,
	Container
} from '../styles/components/progress-bar';

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
		const { progress } = this.props;
		return (
			<Container>
				<FullBar onClick={this.handleOnClick}>
					<Progress progress={progress} />
				</FullBar>
			</Container>
		);
	}
}

ProgressBar.propTypes = {
	widthgiven: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired
};
export default ProgressBar;
