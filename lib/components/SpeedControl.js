import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Container_Controls,
	SpeedTitle,
	SpeedBtn,
	SpeedPercent
} from '../styles/components/speed-controls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

//___________________________________________________________
// Speed Control Component
class SpeedControl extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { speed, handleSlowDown, handleSpeedUp } = this.props;
		return (
			<Container>
				<SpeedTitle>SPEED</SpeedTitle>
				<Container_Controls>
					<SpeedBtn onClick={handleSlowDown}>
						<FontAwesomeIcon icon={faMinus} />
					</SpeedBtn>
					<SpeedPercent>{speed}%</SpeedPercent>
					<SpeedBtn onClick={handleSpeedUp}>
						<FontAwesomeIcon icon={faPlus} />
					</SpeedBtn>
				</Container_Controls>
			</Container>
		);
	}
}

SpeedControl.propTypes = {
	speed: PropTypes.number.isRequired,
	handleSlowDown: PropTypes.func.isRequired,
	handleSpeedUp: PropTypes.func.isRequired
};
export default SpeedControl;
