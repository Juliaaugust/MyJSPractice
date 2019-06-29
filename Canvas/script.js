(async function () {
	const canvas = document.getElementById('canvas'); // DOM элемент
	const context = canvas.getContext('2d'); // программный элемент
	const image = await loadImage('space.jpg');
	const mouse = getMouse(canvas); // теперь в mouse хранится объект, 
									// который будет содержать данные по координатам мыши над эл-том canvas
									// этой ф-ии нет в нативном JS, поэтому она создана в additional.js

	console.log(mouse);

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
			imageParams.scale += mouse.wheel / 1000; // делим на 1000 для плавного увеличения/уменьшения масштаба
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
	
})()