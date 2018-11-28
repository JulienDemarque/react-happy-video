import React from 'react';
import { formatSeconds } from '../utils/format-seconds';
import { Container, SubContainer } from '../styles/components/time-display';

class TimeDisplay extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<SubContainer>
					<p>
						{formatSeconds(this.props.time)} /{' '}
						{formatSeconds(this.props.duration)}
					</p>
				</SubContainer>
			</Container>
		);
	}
}

export default TimeDisplay;
