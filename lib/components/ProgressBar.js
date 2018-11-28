import React from 'react';

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
		const fullBarStyle = {
			width: `${this.props.width}px`,
			border: '1px solid black',
			height: '10px'
		};
		const progressBarStyle = {
			width: `${this.props.progress * this.props.width}px`,
			backgroundColor: 'black',
			height: '10px'
		};
		return (
			<div>
				<div style={fullBarStyle} onClick={this.handleOnClick}>
					<div style={progressBarStyle} />
				</div>
			</div>
		);
	}
}

export default ProgressBar;
