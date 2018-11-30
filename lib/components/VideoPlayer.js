import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import SpeedControl from './SpeedControl';
import TimeDisplay from './TimeDisplay';
import {
	Container,
	VideoContainer,
	Video,
	Controls,
	PlayPauseBtn,
	FullScreenBtn,
	RightControls
} from '../styles/components/video-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faPause,
	faExpand,
	faCompress
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
			speed: 100,
			time: 0,
			duration: 0,
			fullScreen: false
		};
		this.handlePlayStop = this.handlePlayStop.bind(this);
		this.moveCurrentTime = this.moveCurrentTime.bind(this);
		this.handleSlowDown = this.handleSlowDown.bind(this);
		this.handleSpeedUp = this.handleSpeedUp.bind(this);
		this.toggleFullScreen = this.toggleFullScreen.bind(this);
	}

	componentDidMount() {
		const video = this.myVideoRef.current;
		const that = this;
		video.onloadedmetadata = function() {
			that.setState({ duration: video.duration });
		};
		video.onended = function() {
			that.setState({ playing: false });
		};
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
				this.setState({
					progress: video.currentTime / video.duration,
					time: video.currentTime
				});
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

	toggleFullScreen() {
		this.setState(state => ({ fullScreen: !state.fullScreen }));
	}

	render() {
		const { width, source, color } = this.props;
		const { playing, progress, speed, time, duration, fullScreen } = this.state;
		return (
			<Container widthgiven={width} colorgiven={color} fullScreen={fullScreen}>
				<VideoContainer fullScreen={fullScreen}>
					<Video ref={this.myVideoRef} fullScreen={fullScreen} src={source} />
				</VideoContainer>
				<ProgressBar
					colorgiven={color}
					moveCurrentTime={this.moveCurrentTime}
					progress={progress}
				/>
				<Controls>
					<PlayPauseBtn onClick={this.handlePlayStop}>
						{playing ? (
							<FontAwesomeIcon icon={faPause} />
						) : (
							<FontAwesomeIcon icon={faPlay} />
						)}
					</PlayPauseBtn>
					<SpeedControl
						handleSlowDown={this.handleSlowDown}
						handleSpeedUp={this.handleSpeedUp}
						speed={speed}
					/>
					<RightControls>
						<TimeDisplay time={time} duration={duration} />
						<FullScreenBtn onClick={this.toggleFullScreen}>
							<FontAwesomeIcon
								icon={this.state.fullScreen ? faCompress : faExpand}
							/>
						</FullScreenBtn>
					</RightControls>
				</Controls>
			</Container>
		);
	}
}

VideoPlayer.propTypes = {
	width: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired
};

export default VideoPlayer;
