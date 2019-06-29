// возврат изображений (задаем последовательность асинхронным операциям)
function loadImage (src) {
	return new Promise((resolve, reject) => {
		try {
			const image = new Image;
			image.onload = () => resolve(image);
			image.src = src;
		} catch (err) {
			return reject(err);
		}
	})
}

function getMouse(elem) {
	const mouse = {
		x: 0, y: 0,
		dx: 0, dy: 0, // насколько изменилась координата по сравнению с предыдущей итерацией
		left: false, // зажата левая нопка мыши
		wheel: 0 	// колесико мыши
	}

	mouse.update = () => {
		mouse.dx = 0;
		mouse.dy = 0;
		mouse.wheel = 0;
	}

	elem.addEventListener('mousemove', event => {
		const rect = elem.getBoundingClientRect();
		//console.log(rect);
		//console.log(event);

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		mouse.dx = x - mouse.x;
		mouse.dy = y - mouse.y;

		mouse.x = x;
		mouse.y = y;
	})

	elem.addEventListener('mousedown', event => {
		// у левой кнопки мыши код 0
		if (event.button === 0) {
			mouse.left = true;
		}
	})

	elem.addEventListener('mouseup', event => {
		if (event.button === 0) {
			mouse.left = false;
		}
	})

	// прокручивания колесика мыши над эл-том (уменьшение/увеличение изображения)
	elem.addEventListener('mousewheel', event => {
		mouse.wheel = event.deltaY;
	})

	return mouse;
}