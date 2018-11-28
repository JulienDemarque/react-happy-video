import React from 'react';
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
		return (
			<div>
				<FullBar width={this.props.width} onClick={this.handleOnClick}>
					<Progress width={this.props.progress * this.props.width} />
				</FullBar>
			</div>
		);
	}
}

export default ProgressBar;
