var files = ['1.jpg', '2.jpg', '4.jpg', '6.jpg', '7.jpg', '8.jpg'];

var kasli = document.querySelectorAll('.photo');

function setKasli() {
	kasli.forEach(pic => {
		let randNr = randomize();
		pic.style.background = "url('" + files[randNr] + "')";
		pic.style.backgroundSize = 'cover';
		pic.style.backgroundRepeat = 'no-repeat';
		pic.style.backgroundPosition = '30%';
	});
};

function randomize() {
	let max = this.files.length-1;
	return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

window.onload = () => {
	setKasli();
};