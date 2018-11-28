import React from 'react';
import ProgressBar from './ProgressBar';
import SpeedControl from './SpeedControl';
import {
	Container,
	Video,
	Controls,
	PlayPauseBtn
} from '../styles/components/video-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faMinus,
	faPlay,
	faPause
} from '@fortawesome/free-solid-svg-icons';

//_______________________________________________
// Player Component
class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.myVideoRef = React.createRef();
		this.state = {
			playing: false,
			progress: 0,
			speed: 100
		};
		this.handlePlayStop = this.handlePlayStop.bind(this);
		this.moveCurrentTime = this.moveCurrentTime.bind(this);
		this.handleSlowDown = this.handleSlowDown.bind(this);
		this.handleSpeedUp = this.handleSpeedUp.bind(this);
	}

	moveCurrentTime(progress) {
		const video = this.myVideoRef.current;
		this.setState({ progress: progress });
		let currentTime = progress * video.duration;
		video.currentTime = currentTime;
	}

	handlePlayStop() {
		const video = this.myVideoRef.current;
		if (video.paused) {
			video.play();
			this.setState({ playing: true });
			setInterval(() => {
				this.setState({ progress: video.currentTime / video.duration });
			}, 100);
		} else {
			video.pause();
			this.setState({ playing: false });
		}
	}

	handleSlowDown() {
		const video = this.myVideoRef.current;
		if (this.state.speed > 30) {
			this.setState(
				state => ({ speed: state.speed - 10 }),
				() => {
					video.playbackRate = this.state.speed / 100;
				}
			);
		}
	}

	handleSpeedUp() {
		const video = this.myVideoRef.current;
		if (this.state.speed < 210) {
			this.setState(
				state => ({ speed: state.speed + 10 }),
				() => {
					video.playbackRate = this.state.speed / 100;
				}
			);
		}
	}

	render() {
		return (
			<Container width={this.props.width}>
				<Video
					ref={this.myVideoRef}
					width={this.props.width}
					src={this.props.source}
				/>
				<ProgressBar
					moveCurrentTime={this.moveCurrentTime}
					width={this.props.width}
					progress={this.state.progress}
				/>
				<Controls>
					<PlayPauseBtn onClick={this.handlePlayStop}>
						{this.state.playing ? (
							<FontAwesomeIcon icon={faPause} />
						) : (
							<FontAwesomeIcon icon={faPlay} />
						)}
					</PlayPauseBtn>
					<SpeedControl
						handleSlowDown={this.handleSlowDown}
						handleSpeedUp={this.handleSpeedUp}
						speed={this.state.speed}
					/>
				</Controls>
			</Container>
		);
	}
}

export default VideoPlayer;
