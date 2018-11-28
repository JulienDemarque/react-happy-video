import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faMinus,
	faPlay,
	faPause
} from '@fortawesome/free-solid-svg-icons';

//______________________________________________
// Some styling
const speedContainer = {
	width: '100px',
	textAlign: 'center'
};

const speedContainer_controls = {
	backgroundColor: 'orange'
};

//___________________________________________________________
// Speed Control Component
class SpeedControl extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={speedContainer}>
				<p>speed</p>
				<div style={speedContainer_controls}>
					<button onClick={this.handleSlowDown}>
						<FontAwesomeIcon icon={faMinus} />
					</button>
					<p>{this.props.speed}%</p>
					<button onClick={this.handleSpeedUp}>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
			</div>
		);
	}
}

export default SpeedControl;
