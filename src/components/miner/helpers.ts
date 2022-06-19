export function secondsToText(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	let minutesText = `${minutes}`;

	while (minutesText.length < 2) {
		minutesText = `0${minutesText}`;
	}

	let secondsText = `${seconds % 60}`;

	while (secondsText.length < 2) {
		secondsText = `0${secondsText}`;
	}

	return minutesText + ':' + secondsText;
}
