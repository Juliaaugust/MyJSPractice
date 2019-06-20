
/*
// Использование функций Function Declaration
// сами функции объявлены ниже

var hisName = "Vasya Pupkin";
var herName = "Masha Pupkina";

sayHi(hisName);		// Вызвали функцию ДО объявления
sayHi(herName);		// Вызвали функцию ДО объявления

sayBye(hisName);	// Вызвали функцию ДО объявления

// Объявление функций Function Declaration
function sayHi(name) {
	alert("Hello, " + name);
}

function sayBye(name) {
	alert("Goodbye, " + name);
}

*/
/*
"use strict"		// используем строгий режим

// узнаем пол пользователя
var gender = prompt("Your gender?", "");

// в зависимости от пола создаем функцию (Function Declaration)

if (gender == "male") {					//если мужской пол
	function sayHi() {
		alert("Здравствуйте, сударь!");
	}
} else if (gender == "female") {		//если женский пол
	function sayHi() {
		alert("Добрый день, сударыня!");
	}
} else {								//иначе (другой пол)
	function sayHi() {
		alert("Приветствуем вас");
	}
}

sayHi(); // вызвали функцию вне блока if при "use strict" – ошибка!
*/
/*
"use strict"		// используем строгий режим

// узнаем пол пользователя
var gender = prompt("Your gender?", "");

// исправляем ошибку: создаем функциональное выражение (Function Expresson)

if (gender == "male") {					//если мужской пол
	var sayHi = function() {
		alert("Здравствуйте, сударь!");
	}
} else if (gender == "female") {		//если женский пол
	var sayHi = function() {
		alert("Добрый день, сударыня!");
	}
} else {								//иначе (другой пол)
	var sayHi = function() {
		alert("Приветствуем вас");
	}
}

sayHi(); // вызвали функцию вне блока if при "use strict" – ошибка!
*/


// Использование функциональных выражений Function Expression
// функции необходимо объвялять ДО вызова, иначе будет ошибка

// Объявление Function Expression
var sayHi = function(name) {
	alert("Hello, " + name);
}

var sayBye = function(name) {
	alert("Goodbye, " + name);
}

var hisName = "Vasya Pupkin";
var herName = "Masha Pupkina";

sayHi(hisName);		// Вызвали функцию ПОСЛЕ объявления
sayHi(herName);		// Вызвали функцию ПОСЛЕ объявления

sayBye(hisName);	// Вызвали функцию ПОСЛЕ объявления


