let img = document.querySelector('.img');
let src1 = './images/img1.png';
let src2 = './images/img2.png';
let srcArr = [src1, src2];



let count = 0;


function displayImage() {

	setInterval(e => {
		let randomNumber = Math.floor(Math.random() * 3);
		count = (count + randomNumber) % srcArr.length;
		let newColour = srcArr[count];
		document.getElementById('img').src = `#${newColour}`;
		document.innerHTML = img;

	}, 1000)

	setTimeout(() => {

		displayImage();

	}, 5000);
}


displayImage();