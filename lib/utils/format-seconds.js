export function formatSeconds(time) {
	if (time % 60 >= 10) {
		return Math.floor(time / 60) + ':' + Math.floor(time % 60);
	} else {
		return Math.floor(time / 60) + ':0' + Math.floor(time % 60);
	}
}
