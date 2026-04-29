var rotatePin;
var pinImages = new Array(10); 
var curPin = 0;
for (var x = 0; x < 10; x++)
	pinImages[x] = 'pin' + x + '.gif';

function right() {
	if (curPin == 9)
		curPin = 0;
	else
		++curPin;
	document.images[0].src = pinImages[curPin];
}

function left() {
	if (curPin == 0)
		curPin = 9;
	else
		--curPin;
	document.images[0].src = pinImages[curPin];
}

function start(direction) {
	if (rotatePin != null)
		clearInterval(rotatePin);

	if (direction == 'r')
		rotatePin = setInterval(right, 150); 
	else
		rotatePin = setInterval(left, 150);  
}

document.getElementById("right").addEventListener("click", function () {
	start('r');
});

document.getElementById("left").addEventListener("click", function () {
	start('l');
});

document.getElementById("stop").addEventListener("click", function () {
	clearInterval(rotatePin);
});