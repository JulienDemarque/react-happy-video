import React from 'react';
import { formatSeconds } from '../../utils/format-seconds';
import { SubContainer } from './styles';
import PropTypes from 'prop-types';

class TimeDisplay extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		const { time, duration } = this.props;
		return (
			<SubContainer>
				<p>
					{formatSeconds(time)} / {formatSeconds(duration)}
				</p>
			</SubContainer>
		);
	}
}

TimeDisplay.propTypes = {
	time: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired
};

export default TimeDisplay;
