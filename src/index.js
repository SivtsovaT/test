const imageEl = document.querySelector('.img');
const source1 = './images/img1.png';
const source2 = './images/img2.png';
const imagesSources = [source1, source2];

let currentImageIndex = 0;


function displayImage() {
	const imageIndex = currentImageIndex % imagesSources.length;

	imageEl.src = imagesSources[imageIndex];

	currentImageIndex++;

	const delay = currentImageIndex % imagesSources.length === 0 ? 2000 : 300;

	setTimeout(() => {

		displayImage();

	}, delay);
}

displayImage();