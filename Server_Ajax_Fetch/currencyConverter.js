const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';

let currencies = null; //валюты

const selectElem = $('#select_val');

main();

async function main () {
	const response = await fetch(url);
	const data = await response.json();

	currencies = data.Valute;

	console.log(currencies);

	for (const i in currencies) {
		const optionElem = document.createElement('option');
		optionElem.innerText = currencies[i].Name;
		optionElem.id = currencies[i].ID;
		selectElem.append(optionElem);
	}
}

