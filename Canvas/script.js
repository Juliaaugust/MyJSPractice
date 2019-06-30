(async function () {
	const canvas = document.getElementById('canvas'); // DOM элемент
	const context = canvas.getContext('2d'); // программный элемент
	let originalImage = await loadImage('space.jpg');
	const mouse = getMouse(canvas); // теперь в mouse хранится объект,
									// который будет содержать данные по координатам мыши над эл-том canvas
									// этой ф-ии нет в нативном JS, поэтому она создана в additional.js

	console.log(mouse);

	const grayFilterCheck = document.getElementById('filterGray');
	const redFilterCheck = document.getElementById('filterRed');
	const blueFilterCheck = document.getElementById('filterBlue');
	const greenFilterCheck = document.getElementById('filterGreen');

	const loadImageInput = document.getElementById('loadImage'); // внутри хранится список загруженных файлов

	let image = originalImage;

	const imageParams = {
		offsetX: 0,
		offsetY: 0,
		scale: 1 // масштаб (для прокрутки)
	}

	canvas.width = 750;
	canvas.height = 750;

	// постоянная замкнутая проверка обновления canvas

	// setInterval(update, 0); // плохой способ (создает постоянную очередь, которую компьютер не может обработать)

	update();
	function update() {
		// встроенная в браузер ф-я requestAnimationFrame: вызывает переданную в нее ф-ю
		// только тогда, когда будет обновление изображения самого монитора ("умный" setTimeout)
		requestAnimationFrame(update);

		clearCanvas();

		// изменяем отступы для отображения самого изображения (если левая кнопка мыши была нажата)
		if (mouse.left) {
			imageParams.offsetX += mouse.dx;
			imageParams.offsetY += mouse.dy;
		}
		if (mouse.wheel) {
			imageParams.scale -= mouse.wheel / 1000; // делим на 1000 для плавного увеличения/уменьшения масштаба
		}

		context.drawImage(image, 0, 0, image.width, image.height,
			imageParams.offsetX, imageParams.offsetY,  // отрисовка изображения в соответствии со смещением
			image.width * imageParams.scale, image.height * imageParams.scale); // увеличиваем масштаб изображения
		// console.log(mouse);

		mouse.update();
	}

	function clearCanvas() {
		canvas.width = canvas.width;
	}

	grayFilterCheck.addEventListener('change', () => {
		if (grayFilterCheck.checked) {
			// создаесм виртуальный элемент canvas
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < imageData.data.length; i += 4) {
				//  найдем среднее арифметическое для каждого цвета
				let average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
				imageData.data[i] = average;
				imageData.data[i + 1] = average;
				imageData.data[i + 2] = average;
			}
			context.putImageData(imageData, 0, 0, 0, 0, image.width, image.height);
			image = canvas;
		} else {
			image = originalImage;
		}
	})

	redFilterCheck.addEventListener('change', () => {
		if (redFilterCheck.checked) {
			// создаесм виртуальный элемент canvas
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			//console.log(imageData); // для использования getImageData нужно поднять сервер локально

			// imageData.data – массив всех пикселей изображения
			// хранит R, G, B + прозрачность
			for (let i = 0; i < imageData.data.length; i += 4) {
				imageData.data[i] = 0;
			}
			context.putImageData(imageData, 0, 0, 0, 0, image.width, image.height);
			image = canvas;
		} else {
			image = originalImage;
		}
	})

	blueFilterCheck.addEventListener('change', () => {
		if (blueFilterCheck.checked) {
			// создаесм виртуальный элемент canvas
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			//console.log(imageData); // для использования getImageData нужно поднять сервер локально

			// imageData.data – массив всех пикселей изображения
			// хранит R, G, B + прозрачность
			for (let i = 0; i < imageData.data.length; i += 4) {
				imageData.data[i + 2] = 0;
			}
			context.putImageData(imageData, 0, 0, 0, 0, image.width, image.height);
			image = canvas;
		} else {
			image = originalImage;
		}
	})

	greenFilterCheck.addEventListener('change', () => {
		if (greenFilterCheck.checked) {
			// создаесм виртуальный элемент canvas
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			//console.log(imageData); // для использования getImageData нужно поднять сервер локально

			// imageData.data – массив всех пикселей изображения
			// хранит R, G, B + прозрачность
			for (let i = 0; i < imageData.data.length; i += 4) {
				imageData.data[i + 1] = 0;
			}
			context.putImageData(imageData, 0, 0, 0, 0, image.width, image.height);
			image = canvas;
		} else {
			image = originalImage;
		}
	})

	// загрузка изображения
	loadImageInput.addEventListener('change', event => {
		//console.log(loadImageInput.files); // список загруженных файлов
		const reader = new FileReader();
		const file = loadImageInput.files[0];
		reader.readAsDataURL(file); // прочти файл как данные по URL
		reader.onload = () => {
			const newImage = new Image();
			newImage.onload = () => {
				originalImage = image = newImage;
			}
			//image.src = file.name;
			newImage.src = reader.result;
		}
	})

	// скачивание изображения
	document.getElementById('dowload').addEventListener('click', () => {
		// для скачивания нужна ссылка
		const aElem = document.createElement('a');
		aElem.href = canvas.toDataURL('image/jpeg');
		aElem.setAttribute('download', 'yourImage.jpg'); // ссылка для скачивания, а не для перехода
		aElem.click();
	})

})()
