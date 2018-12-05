import React from 'react';
import { Container, VolumeBtn, VolumeBar } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faVolumeDown,
	faVolumeMute,
	faVolumeUp
} from '@fortawesome/free-solid-svg-icons';

class VolumeControl extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			viewVolumeBar: false
		};
		this.toggleVolumeBar = this.toggleVolumeBar.bind(this);
	}

	toggleVolumeBar() {
		this.setState(state => ({ viewVolumeBar: !state.viewVolumeBar }));
	}

	render() {
		const { volume } = this.props;
		let Icon;
		if (volume === '0') {
			Icon = <FontAwesomeIcon icon={faVolumeMute} />;
		} else if (volume > 50) {
			Icon = <FontAwesomeIcon icon={faVolumeUp} />;
		} else {
			Icon = <FontAwesomeIcon icon={faVolumeDown} />;
		}

		return (
			<Container>
				{this.state.viewVolumeBar ? (
					<VolumeBar
						value={this.props.volume}
						onChange={this.props.handleVolumeChange}
					/>
				) : (
					''
				)}
				<VolumeBtn onClick={this.toggleVolumeBar}>{Icon}</VolumeBtn>
			</Container>
		);
	}
}

export default VolumeControl;
