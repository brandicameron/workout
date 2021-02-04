function displayTime() {
	const secDisplay = document.getElementById('timer');
	secDisplay.textContent = new Date().getSeconds().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
}

// Update the time
window.onload = function () {
	setInterval(displayTime, 1000);
};


function closePopUp() {
	let popup = document.querySelector('.popup');
	popup.style.display = 'none';
}

let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', closePopUp);