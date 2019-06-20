// var foo1 = () => "Hi";


// var foo2 = x => x;


// var foo3 = (x, y, z) => x * y * z;




// foo(3, 5); // ошибка! Функции не существует

// var foo = (x, y) => {
// 	return x * y;
// }

// foo(3, 5); // 15 (вызвали функцию)




// создаем конструктор Car
function Car () {

	// Внутри Car, `this` указывает на себя
	this.speed = 0;

	setInterval(function speedIncrease() {
    // Здесь, внури speedIncrease, `this` указывает на глобальный объект

    this.speed++;
  }, 1000);

}

var myCar = new Car();




// создаем конструктор Car
function Car () {

	// Внутри Car, `this` указывает на себя
	this.speed = 0;

	setInterval( ()  => {
    // Здесь, внури speedIncrease, `this` указывает на объект Car

    this.speed++;
  }, 1000);

}

var myCar = new Car();




console.log(myCar.speedIncrease)
