import React from 'react';
import {
	Container,
	Container_Controls,
	SpeedTitle,
	SpeedBtn,
	SpeedPercent
} from '../styles/components/speed-controls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faMinus,
	faPlay,
	faPause
} from '@fortawesome/free-solid-svg-icons';

//___________________________________________________________
// Speed Control Component
class SpeedControl extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<SpeedTitle>SPEED</SpeedTitle>
				<Container_Controls>
					<SpeedBtn onClick={this.props.handleSlowDown}>
						<FontAwesomeIcon icon={faMinus} />
					</SpeedBtn>
					<SpeedPercent>{this.props.speed}%</SpeedPercent>
					<SpeedBtn onClick={this.props.handleSpeedUp}>
						<FontAwesomeIcon icon={faPlus} />
					</SpeedBtn>
				</Container_Controls>
			</Container>
		);
	}
}

export default SpeedControl;
