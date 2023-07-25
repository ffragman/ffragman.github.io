var controls = [
	'play-large',
	'rewind', // 10 sec back.
	'play', // Play/pause playback.
	'fast-forward', // 10 sec forward.
	'progress', // The progress bar.
	'current-time', // The current time of playback
	'duration', // The full duration of the media
	'mute',
	'settings', // Settings menu.
	'airplay', // Airplay (For safari only)
	'fullscreen' // Toggle fullscreen.
	// 'download', // Download button for media
	// 'restart',
	// 'pip', // Picture-in-picture
];
const player = new Plyr('.player', {
	controls
});