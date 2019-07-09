const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAcync = false; // чтобы получить метод response у request, нужно вызвать синхронно

main7();

// используем старый XMLHttpRequest
function main1() {
	const request = new XMLHttpRequest();
	request.open(method, url, isAcync); //открыть канал для связи: метод GET и по адресу URL (+ синхронный запрос)
	request.send(); // отправляем запрос

	const data = JSON.parse(request.response); // ответ пришел в виде строки - преобразуем в JSON формат
	console.log(data);
	console.log(data.Valute.USD);

}

// с помощью jQuery
function main2 () {
	const request = $.ajax({
		method, // method: method – особенность ES6
		url 	// url: url
	})
	request.done(data => {
		data = JSON.parse(data);
		console.log(data);
	})
}

// чуть короче, чем main2
function main3 () {
	const params = {method, url};
	
	jQuery
		.ajax(params)
		.done(data => {
			data = JSON.parse(data);
			console.log(data);
		})
}

// работаем с jQuery асинхронно
async function main4 () {
	const params = {method, url};

	const request = await $.ajax(params); // ожидаем, когда эта ф-я выполнится, чтобы идти дальше по коду
	const data = JSON.parse(request);

	console.log(data);
}


// Fetch – новый страндарт, построенный чисто на Promise (а не на потоках)
function main5 () {
	const request = fetch(url); // метод по умолчанию GET – можно не указывать

	const jsonStream = request.then(response => {
		return response.json(); // обработаем данные как json:
								// на "body: ReadableStream" повесим поточный обработчик json()
	})
	jsonStream.then(data => {
		console.log(data);
	})
}


// то же самое, но используем цепочку обработчиков
function main6 () {
	fetch(url)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
}


// тот же fetch, но асинхронно (парадигма линейного кода, а не потока)

async function main7 () {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
}
