function displayTime() {
	const secDisplay = document.getElementById('timer');
	secDisplay.textContent = new Date().getSeconds().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
}

// Updates the time
window.onload = function () {
	setInterval(displayTime, 1000);
};